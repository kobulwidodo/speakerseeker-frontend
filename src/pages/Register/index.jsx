import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import image from "../../assets/images/pic_signin.svg";
import google from "../../assets/images/logo_google.svg";
import or from "../../assets/images/or.svg";
import Input from "../../components/Input";
import Button from "../../components/Button";
import useSnackbar from "../../hooks/useSnackbar";
import { registerUser } from "../../api/model/user";

const formData = {
  email: {
    value: "",
    required: true,
  },
  organization_name: {
    value: "",
    required: true,
  },
  password: {
    value: "",
    required: true,
  },
  confirm_password: {
    value: "",
    required: true,
  },
};

const Register = () => {
  const [data, setData] = useState(formData);
  const [errors, setErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const snackbar = useSnackbar();
  const navigate = useNavigate();

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
        if (data.password.value !== data.confirm_password.value) {
          // eslint-disable-next-line
          throw "confirm password tidak sesuai";
        }
        const res = await registerUser(
          data.organization_name.value,
          data.email.value,
          data.password.value
        );
        snackbar.success(res.data.message);
        navigate("/login");
      } catch (error) {
        snackbar.error(error.response?.data.message ?? error);
      } finally {
        setIsSubmit(false);
      }
    }
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 sm:mt-0 mt-14">
        <div className="bg-[#E9F2FF] min-h-screen p-30 hidden sm:block">
          <img
            src={image}
            className="w-full h-screen scale-75"
            alt=""
            srcSet=""
          />
        </div>
        <div className="max-w-lg m-auto px-5 py-5 w-full">
          <div className="">
            <h1 className="text-[#404040] font-semibold text-3xl">Sign Up</h1>
            <p className="text-[#404040] font-normal text-lg mt-5">
              Create account here..
            </p>
            <form className="mt-6 mb-4" onSubmit={handleSubmit}>
              <Input
                label="Email"
                name="email"
                type="email"
                placeholder="Enter your email"
                isRequired={true}
                onChange={handleChange}
                errorText={errors.email}
              />
              <Input
                label="Organizations Name"
                name="organization_name"
                type="text"
                placeholder="Enter your organizations name"
                isRequired={true}
                onChange={handleChange}
                errorText={errors.organization_name}
              />
              <Input
                label="Password"
                name="password"
                type="password"
                placeholder="Enter your password"
                isRequired={true}
                onChange={handleChange}
                errorText={errors.password}
              />
              <Input
                label="Confirm Password"
                name="confirm_password"
                type="password"
                placeholder="Re-Enter your password"
                isRequired={true}
                onChange={handleChange}
                errorText={errors.confirm_password}
              />
              <div className="text-right mb-10">
                <Link to="#" className="font-normal text-sm text-[#7098E0]">
                  Forgot Password?
                </Link>
              </div>
              <Button label="Sign Up" className="w-full" isSubmit={isSubmit} />
            </form>
            <img src={or} className="w-full mb-4" alt="" />
            <Button
              label="Sign Up With Google"
              type="light"
              icon={google}
              className="w-full"
            />
            <div className="text-center mt-4 font-normal text-lg text-[#404040]">
              Already Have account?{" "}
              <Link to="/login" className="text-[#7098E0]">
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
