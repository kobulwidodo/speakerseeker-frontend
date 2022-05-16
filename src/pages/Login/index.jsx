import React from "react";
import { Link } from "react-router-dom";
import image from "../../assets/images/pic_signin.svg";
import google from "../../assets/images/logo_google.svg";
import or from "../../assets/images/or.svg";
import Input from "../../component/Input";
import Button from "../../component/Button";

const Login = () => {
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
            <form className="mt-6 mb-2">
              <Input
                label="Email"
                name="email"
                type="email"
                placeholder="Enter your email"
                isRequired={true}
              />
              <Input
                label="Password"
                name="password"
                type="password"
                placeholder="Enter your password"
                isRequired={true}
              />
              <div className="text-right mb-10">
                <Link to="#" className="font-normal text-sm text-[#7098E0]">
                  Forgot Password?
                </Link>
              </div>
              <Button label="Sign In" className="w-full" />
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
