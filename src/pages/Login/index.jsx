import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import image from "../../assets/images/pic_signin.svg";
import google from "../../assets/images/logo_google.svg";
import or from "../../assets/images/or.svg";
import Input from "../../components/Input";
import Button from "../../components/Button";
import useSnackbar from "../../hooks/useSnackbar";
import { loginUser } from "../../api/model/user";
import { useUserContext } from "../../context/UserContext";

const formData = {
  email: {
    value: "",
    required: true,
  },
  password: {
    value: "",
    required: true,
  },
};

const Login = () => {
  const [data, setData] = useState(formData);
  const [errors, setErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const snackbar = useSnackbar();

  const { login } = useUserContext();

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
    console.log(data);
    if (validateData()) {
      try {
        setIsSubmit(true);
        const res = await loginUser(data.email.value, data.password.value);
        login(res.data.data.token);
        snackbar.success(res.data.message);
      } catch (error) {
        snackbar.error(error.response?.data.message);
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
        <div className="max-w-lg m-auto px-5 w-full">
          <div className="">
            <h1 className="text-[#404040] font-semibold text-3xl">Sign In</h1>
            <p className="text-[#404040] font-normal text-lg mt-5">
              Welcome back! Please login to continue
            </p>
            <form className="mt-6 mb-2" onSubmit={handleSubmit}>
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
                label="Password"
                name="password"
                type="password"
                placeholder="Enter your password"
                isRequired={true}
                onChange={handleChange}
                errorText={errors.password}
              />
              <div className="text-right mb-10">
                <Link to="#" className="font-normal text-sm text-[#7098E0]">
                  Forgot Password?
                </Link>
              </div>
              <Button label="Sign In" className="w-full" isSubmit={isSubmit} />
            </form>
            <img src={or} className="w-full mb-2" alt="" />
            <Button
              label="Sign In With Google"
              className="w-full"
              type="light"
              icon={google}
            />
            <div className="text-center mt-4 font-normal text-lg text-[#404040]">
              Dont Have Account?{" "}
              <Link to="/register" className="text-[#7098E0]">
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
