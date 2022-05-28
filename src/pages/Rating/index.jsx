import React, { useEffect, useState } from "react";
import ReactStars from "react-rating-stars-component";
import { useNavigate, useParams } from "react-router-dom";
import { addRating } from "../../api/model/rating";
import { getImage, getSpeakerById } from "../../api/model/speaker";
import borderProfile from "../../assets/images/border-profile.svg";
import Breadcrumb from "../../components/Breadcrumb";
import Button from "../../components/Button";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import StarPicker from "../../components/StarPicker";
import Textarea from "../../components/Textarea";
import useSnackbar from "../../hooks/useSnackbar";

const formData = {
  text: {
    value: "",
    required: true,
  },
  rating: {
    value: 0,
    required: true,
  },
};
const Rating = () => {
  const { id } = useParams();
  const [speaker, setSpeaker] = useState({});
  const [data, setData] = useState(formData);
  const [errors, setErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const navigate = useNavigate();
  const snackbar = useSnackbar();

  const fetchSpeaker = async () => {
    try {
      const res = await getSpeakerById(id);
      setSpeaker(res.data.data);
    } catch (error) {}
  };

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: {
        ...data[e.target.name],
        value: e.target.value,
      },
    });
  };

  const ratingChange = (e) => {
    setData({
      ...data,
      rating: {
        ...data.rating,
        value: e,
      },
    });
  };

  const validateData = () => {
    let errorsData = {};
    Object.keys(data).forEach((key) => {
      const dataCheck = data[key];
      if (dataCheck.required) {
        if (!dataCheck.value) {
          errorsData = {
            ...errorsData,
            [key]: `${key + " tidak boleh kosong"}`,
          };
        }
      }
    });
    setErrors(errorsData);
    return Object.keys(errorsData).length < 1;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateData()) {
      try {
        setIsSubmit(true);
        await addRating(data.text.value, data.rating.value, id);
        snackbar.success("Berhasil memberikan rating");
        navigate("/");
      } catch (error) {
        snackbar.error(error.response?.data.message ?? error);
      } finally {
        setIsSubmit(false);
      }
    }
  };

  useEffect(() => {
    fetchSpeaker();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <>
      <Navbar />
      <Breadcrumb>
        <Breadcrumb.Item label="NOTIFICATION" link="#" />
        <Breadcrumb.Divider />
        <Breadcrumb.Item label="REVIEWS" link="#" />
      </Breadcrumb>
      <div className="max-w-7xl mx-auto py-10 px-4">
        <h1 className="font-medium text-2xl">Rate Your Speaker</h1>
        <p className="text-lg text-[#565656]/60 mt-3">
          Thank you for using speakerseeker to find speakers for your event.
          Please rate and review your selected speaker. Your review will be sent
          directly to the speaker and not seen publicly.
        </p>
        <div className="flex flex-col md:flex-row md:pl-6 pl-2 mt-10 gap-x-5">
          <div className="relative mx-auto md:mx-0">
            <img
              src={getImage(speaker.img_profile_path)}
              className="absolute inset-y-10 md:inset-y-6 -left-6 md:w-2/3"
              alt=""
            />
            <img src={borderProfile} className="md:w-2/3" alt="" />
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex-grow md:-ml-10 mt-10 md:mt-0"
          >
            <div className="flex gap-x-6 items-center mb-5">
              <h1 className="text-xl">Your Rating</h1>
              <ReactStars
                count={5}
                size={20}
                classNames="mar-lef-4"
                onChange={ratingChange}
              />
            </div>
            {errors.rating ? (
              <span className="text-xs text-red-600">{errors.rating}</span>
            ) : null}
            <Textarea
              name="text"
              onChange={handleChange}
              maxLength={500}
              classname="bg-[#F2F7FF] border-0 w-full"
              placeholder="Share your review here. Your review will be anonymous ..."
              errorText={errors.text}
            />
            <Button
              label="Submit Review"
              className="mt-3"
              isSubmit={isSubmit}
            />
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Rating;
