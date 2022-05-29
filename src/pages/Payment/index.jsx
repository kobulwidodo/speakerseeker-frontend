import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import payment from "../../assets/images/payment.svg";
import gojek from "../../assets/images/gojek.svg";
import bni from "../../assets/images/bni.svg";
import Footer from "../../components/Footer";
import Button from "../../components/Button";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { getSpeakerById } from "../../api/model/speaker";
import { makeTransaction } from "../../api/model/transaction";
import useSnackbar from "../../hooks/useSnackbar";
import Breadcrumb from "../../components/Breadcrumb";
import NumberFormat from "react-number-format";

const Payment = () => {
  const { id } = useParams();
  const location = useLocation();
  const formData = {
    ...location.state,
    payment_type: {
      value: "",
      required: true,
    },
  };
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
        console.log(data);
        const res = await makeTransaction(
          id,
          data.organization_name?.value,
          data.phone?.value,
          data.email?.value,
          data.type?.value,
          data.topic?.value,
          data.goals?.value,
          data.event_name?.value,
          data.event_date?.value,
          data.location?.value,
          data.budget?.value,
          data.payment_type?.value,
          data.address?.value
        );
        snackbar.success("Sukses membuat pesanan");
        navigate(`/payment-information/${res.data.data.id}`, { state: data });
      } catch (error) {
        snackbar.error(error.response?.data.message ?? error);
        console.log(error);
      } finally {
        setIsSubmit(false);
      }
    }
  };

  const fetchSpeaker = async () => {
    try {
      const res = await getSpeakerById(id);
      setSpeaker(res.data.data);
    } catch (error) {}
  };

  useEffect(() => {
    fetchSpeaker();
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
        <Breadcrumb.Divider />
        <Breadcrumb.Item label="PAYMENT" />
      </Breadcrumb>
      <div className="max-w-7xl mx-auto py-10 mt-10 px-14 border border-dashed rounded-br-none rounded-bl-none rounded-3xl border-[#7098E0] bg-[#FEFEFE]">
        <div className="flex flex-row">
          <div className="w-2/3">
            <h1 className="font-medium text-2xl">Transaction Informations</h1>
            <table className="table-auto w-2/3 mt-6">
              <tbody>
                <tr className="">
                  <td className="text-xl pb-3">Speakers Name</td>
                  <td className="text-xl pb-3">:</td>
                  <td className="text-xl pb-3 pl-10 pb-3">{speaker?.name}</td>
                </tr>
                <tr>
                  <td className="text-xl pb-3">Event Date</td>
                  <td className="text-xl pb-3">:</td>
                  <td className="text-xl pb-3 pl-10">
                    {data?.event_date.value}
                  </td>
                </tr>
                <tr>
                  <td className="text-xl pb-3">Event Name</td>
                  <td className="text-xl pb-3">:</td>
                  <td className="text-xl pb-3 pl-10">
                    {data?.event_name.value}
                  </td>
                </tr>
                <tr>
                  <td className="text-xl pb-3">Location</td>
                  <td className="text-xl pb-3">:</td>
                  <td className="text-xl pb-3 pl-10">{data?.location.value}</td>
                </tr>
                <tr>
                  <td className="text-xl pb-3">Fee</td>
                  <td className="text-xl pb-3">:</td>
                  <td className="text-xl pb-3 pl-10">
                    Rp.{" "}
                    {
                      <NumberFormat
                        value={data?.budget.value - 1000}
                        thousandSeparator={true}
                        displayType={"text"}
                      />
                    }
                  </td>
                </tr>
                <tr>
                  <td className="text-xl pb-3">Admin Fee</td>
                  <td className="text-xl pb-3">:</td>
                  <td className="text-xl pb-3 pl-10">Rp. 1000</td>
                </tr>
              </tbody>
            </table>
          </div>
          <img src={payment} className="w-1/3" alt="" />
        </div>
      </div>
      <div className="max-w-7xl mx-auto py-10 mb-10 px-14 border border-t-0 border-dashed rounded-tr-none rounded-tl-none rounded-3xl border-[#7098E0] bg-[#FEFEFE]">
        <div className="flex">
          <p className="text-xl mr-28">Total Fee</p>
          <p className="text-xl">:</p>
          <p className="text-xl ml-10 text-[#3F927B]">
            Rp.{" "}
            {
              <NumberFormat
                value={data?.budget.value}
                displayType={"text"}
                thousandSeparator={true}
              />
            }
          </p>
        </div>
      </div>
      <form
        onSubmit={handleSubmit}
        className="max-w-7xl mx-auto py-10 mt-10 px-14 border border-dashed rounded-3xl border-[#7098E0] bg-[#FEFEFE]"
      >
        <h1 className="font-medium text-2xl">Transaction Informations</h1>
        <p className="font-light text-[#898989] mt-3 text-lg">
          Choose the best payment method according to you
        </p>
        <div className="mt-6">
          <div className="">
            <p className="text-[#898989] text-lg">Bank Transfer</p>
            <div className="flex flex-row justify-between items-center w-2/3 px-4 py-3 bg-[#E9F2FF] rounded-3xl mt-2">
              <div className="flex flex-row items-center">
                <img src={bni} className="w-11 h-11" alt="" />
                <p className="ml-3 text-[#333333] text-xl">Bank bni</p>
              </div>
              <input
                onChange={handleChange}
                type="radio"
                name="payment_type"
                className="w-6 h-6 flex"
                value="va-bni"
                disabled={true}
              />
            </div>
          </div>
          <div className="mt-5">
            <p className="text-[#898989] text-lg">E Wallet</p>
            <div className="flex flex-row justify-between items-center w-2/3 px-4 py-3 bg-[#E9F2FF] rounded-3xl mt-2">
              <div className="flex flex-row items-center">
                <img src={gojek} className="w-11 h-11" alt="" />
                <p className="ml-3 text-[#333333] text-xl">Gopay</p>
              </div>
              <input
                onChange={handleChange}
                type="radio"
                name="payment_type"
                className="w-6 h-6 flex"
                value="gopay"
              />
            </div>
          </div>
          {errors.payment_type ? (
            <span className="text-xs text-red-600">{errors.payment_type}</span>
          ) : null}
        </div>
        <div className="flex flex-row justify-center gap-x-5 mt-10">
          <div className="">
            <Button label="Pay Now" isSubmit={isSubmit} />
          </div>
          <div className="">
            <Button
              label="Cancel Booking"
              onClick={() => navigate("/speakers")}
              type="light"
            />
          </div>
        </div>
      </form>
      <Footer />
    </>
  );
};

export default Payment;
