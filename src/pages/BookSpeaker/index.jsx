import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getSpeakerById } from "../../api/model/speaker";
import Breadcrumb from "../../components/Breadcrumb";
import Button from "../../components/Button";
import CardAbout from "../../components/CardAbout";
import Footer from "../../components/Footer";
import Input from "../../components/Input";
import InputFile from "../../components/InputFile";
import Navbar from "../../components/Navbar";
import RadioGroup from "../../components/RadioGroup";
import Select from "../../components/Select";
import Textarea from "../../components/Textarea";
import useSnackbar from "../../hooks/useSnackbar";

const formData = {
  organization_name: {
    value: "",
    required: true,
  },
  phone: {
    value: "",
    required: true,
  },
  email: {
    value: "",
    required: true,
  },
  type: {
    value: "",
    required: true,
  },
  topic: {
    value: "",
    required: true,
  },
  goals: {
    value: "",
    required: true,
  },
  event_name: {
    value: "",
    required: true,
  },
  event_date: {
    value: "",
    required: true,
  },
  location: {
    value: "",
    required: true,
  },
  address: {
    value: "",
    required: false,
  },
  budget: {
    value: 0,
    required: true,
  },
  file_path: {
    value: "",
    required: false,
  },
};

const BookSpeaker = () => {
  const { id } = useParams();
  const [data, setData] = useState(formData);
  const [speaker, setSpeaker] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const snackbar = useSnackbar();

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: {
        ...data[e.target.name],
        value: e.target.value,
      },
    });
  };

  const fetchUser = async () => {
    try {
      const res = await getSpeakerById(id);
      setSpeaker(res.data.data);
    } catch (error) {}
  };

  const validateData = () => {
    let errorsData = {};
    Object.keys(data).forEach((key) => {
      const dataCheck = data[key];
      if (key === "budget") {
        dataCheck.value = +dataCheck.value + +1000;
      }
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
        snackbar.success("Silahkan pilih pembayaran");
        navigate("payment", { state: data });
      } catch (error) {
        snackbar.error(error.response?.data.message ?? error);
      } finally {
        setIsSubmit(false);
      }
    }
  };

  useEffect(() => {
    fetchUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <>
      <Navbar />
      <Breadcrumb>
        <Breadcrumb.Item label="SPEAKERS" link="/speakers" />
        <Breadcrumb.Divider />
        <Breadcrumb.Item label="SPEAKERS PROFILE" />
        <Breadcrumb.Divider />
        <Breadcrumb.Item label="BOOKING" />
      </Breadcrumb>
      <form
        onSubmit={handleSubmit}
        className="max-w-7xl mx-auto py-10 my-10 px-14 border rounded-3xl border-[#DEDEDE] bg-[#FEFEFE]"
      >
        <h1 className="font-medium text-3xl text-black">
          Form to order {speaker.name}
        </h1>
        <div className="flex flex-col md:flex-row gap-x-9 gap-y-7 mt-12">
          <div className="flex flex-col flex-1 gap-y-7">
            <CardAbout>
              <CardAbout.HeaderTitle label="Your Organization" />
              <div className="opacity-90">
                <Input
                  label="Organizations Name"
                  name="organization_name"
                  type="text"
                  placeholder="Enter your Organizations Name"
                  isRequired={true}
                  margin="mb-7"
                  onChange={handleChange}
                  errorText={errors.organization_name}
                />
              </div>
              <div className="opacity-90">
                <Input
                  label="Phone Number"
                  name="phone"
                  type="phone"
                  placeholder="Enter your Phone Number"
                  isRequired={true}
                  margin="mb-7"
                  onChange={handleChange}
                  errorText={errors.phone}
                />
              </div>
              <div className="opacity-90">
                <Input
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="Enter your Email"
                  isRequired={true}
                  margin="mb-0"
                  onChange={handleChange}
                  errorText={errors.email}
                />
              </div>
            </CardAbout>
            <CardAbout>
              <CardAbout.HeaderTitle label="The Purpose Of Your Event" />
              <div className="">
                <Select
                  placeholder="Select a type of presentation"
                  name="type"
                  onChange={handleChange}
                  label="Type Of Presentations"
                  isRequired={true}
                  margin="mb-7"
                  option={[
                    { name: "Webinar" },
                    { name: "Trainer / seminar leader" },
                    { name: "Workshop" },
                    { name: "Strategic planning facilitator" },
                  ]}
                  errorText={errors.type}
                />
              </div>
              <div className="">
                <Input
                  label="Topic"
                  name="topic"
                  type="text"
                  placeholder="Write a topic"
                  isRequired={true}
                  onChange={handleChange}
                  margin="mb-7"
                  errorText={errors.topic}
                />
              </div>
              <div className="">
                <Textarea
                  placeholder="What should the speakers presentaion accomplish for your audience?"
                  name="goals"
                  onChange={handleChange}
                  label="Goals"
                  isRequired={true}
                  margin="mb-0"
                  errorText={errors.goals}
                />
              </div>
            </CardAbout>
          </div>
          <div className="flex flex-col flex-1 gap-y-7">
            <CardAbout>
              <CardAbout.HeaderTitle label="Your Detail Event" />
              <div className="opacity-90">
                <Input
                  label="Event Name"
                  name="event_name"
                  type="text"
                  onChange={handleChange}
                  placeholder="Enter a name for your event"
                  isRequired={true}
                  margin="mb-7"
                  errorText={errors.event_name}
                />
                <Input
                  label="Event Date"
                  name="event_date"
                  type="datetime-local"
                  onChange={handleChange}
                  isRequired={true}
                  margin="mb-7"
                  errorText={errors.event_date}
                />
                <div className="mb-7">
                  <RadioGroup
                    label="Location"
                    isRequired={true}
                    errorText={errors.location}
                  >
                    <RadioGroup.Check
                      name="location"
                      onChange={handleChange}
                      label="On-Site Presentation"
                    />
                    <RadioGroup.Check
                      name="location"
                      onChange={handleChange}
                      label="Virtual Presentation"
                    />
                  </RadioGroup>
                </div>
                <Input
                  label="Address"
                  name="address"
                  onChange={handleChange}
                  type="text"
                  placeholder="Enter your address event"
                  isRequired={false}
                  margin="mb-7"
                  errorText={errors.address}
                />
                <Input
                  label="Budget"
                  name="budget"
                  type="number"
                  onChange={handleChange}
                  placeholder="Select your budget"
                  isRequired={true}
                  margin="mb-7"
                  errorText={errors.budget}
                />
              </div>
            </CardAbout>
            <CardAbout className="h-full">
              <CardAbout.HeaderTitle label="Additional File" />
              <InputFile
                label="Additional File"
                isRequired={false}
                name="file"
                margin="mb-0"
              />
            </CardAbout>
          </div>
        </div>
        <div className="text-center mt-10">
          <Button label="Submit Booking" isSubmit={isSubmit} />
        </div>
      </form>
      <Footer />
    </>
  );
};

export default BookSpeaker;
