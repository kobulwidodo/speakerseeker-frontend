import React from "react";
import vina from "../../assets/images/vina.png";
import searchIcon from "../../assets/images/send.svg";
import dotGreen from "../../assets/images/dot_green.svg";

const Chat = () => {
  return (
    <>
      <div className="border px-10 py-5 sticky top-0 bg-white">
        <div className="flex flex-row gap-x-5 items-center">
          <img src={vina} width={60} height={60} alt="" />
          <div className="">
            <h1 className="font-medium text-xl">Vina Muliana</h1>
            <div className="flex gap-x-1 items-center">
              <p className="text-[#b3b0b0] text-sm">Active Now</p>
              <img src={dotGreen} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col mb-28 px-10 py-5">
        <div className="ml-auto my-3">
          <h1 className="text-[#5D78CD] rounded-full font-md rounded-br-none bg-[#E9F2FF] px-4 py-3 ">
            Hello, is this Vina?
          </h1>
          <p className="mt-2 text-right text-[#666668] font-light text-sm">
            11:31 AM
          </p>
        </div>
        <div className="mr-auto my-3">
          <h1 className="text-[#383737] rounded-full font-md rounded-bl-none bg-[#E4E4E4] px-4 py-3 ">
            Hello, is this Vina?
          </h1>
          <p className="mt-2 text-right text-[#666668] font-light text-sm">
            11:31 AM
          </p>
        </div>
        <div className="ml-auto my-3">
          <h1 className="text-[#5D78CD] rounded-full font-md rounded-br-none bg-[#E9F2FF] px-4 py-3 ">
            Hello, is this Vina?
          </h1>
          <p className="mt-2 text-right text-[#666668] font-light text-sm">
            11:31 AM
          </p>
        </div>
        <div className="mr-auto my-3">
          <h1 className="text-[#383737] rounded-full font-md rounded-bl-none bg-[#E4E4E4] px-4 py-3 ">
            Hello, is this Vina?
          </h1>
          <p className="mt-2 text-right text-[#666668] font-light text-sm">
            11:31 AM
          </p>
        </div>
        <div className="ml-auto my-3">
          <h1 className="text-[#5D78CD] rounded-full font-md rounded-br-none bg-[#E9F2FF] px-4 py-3 ">
            Hello, is this Vina?
          </h1>
          <p className="mt-2 text-right text-[#666668] font-light text-sm">
            11:31 AM
          </p>
        </div>
        <div className="mr-auto my-3">
          <h1 className="text-[#383737] rounded-full font-md rounded-bl-none bg-[#E4E4E4] px-4 py-3 ">
            Hello, is this Vina?
          </h1>
          <p className="mt-2 text-right text-[#666668] font-light text-sm">
            11:31 AM
          </p>
        </div>
        <div className="ml-auto my-3">
          <h1 className="text-[#5D78CD] rounded-full font-md rounded-br-none bg-[#E9F2FF] px-4 py-3 ">
            Hello, is this Vina?
          </h1>
          <p className="mt-2 text-right text-[#666668] font-light text-sm">
            11:31 AM
          </p>
        </div>
        <div className="mr-auto my-3">
          <h1 className="text-[#383737] rounded-full font-md rounded-bl-none bg-[#E4E4E4] px-4 py-3 ">
            Hello, is this Vina?
          </h1>
          <p className="mt-2 text-right text-[#666668] font-light text-sm">
            11:31 AM
          </p>
        </div>
        <div className="ml-auto my-3">
          <h1 className="text-[#5D78CD] rounded-full font-md rounded-br-none bg-[#E9F2FF] px-4 py-3 ">
            Hello, is this Vina?
          </h1>
          <p className="mt-2 text-right text-[#666668] font-light text-sm">
            11:31 AM
          </p>
        </div>
        <div className="mr-auto my-3">
          <h1 className="text-[#383737] rounded-full font-md rounded-bl-none bg-[#E4E4E4] px-4 py-3 ">
            Hello, is this Vina?
          </h1>
          <p className="mt-2 text-right text-[#666668] font-light text-sm">
            11:31 AM
          </p>
        </div>
      </div>
      <div className="relative">
        <div className="px-10 py-5 fixed w-full bottom-0 bg-white">
          <form
            action=""
            className="flex flex-row flex-auto gap-x-5 items-center"
          >
            <input
              type="text"
              className="appearance-none bg-transparent py-4 px-7 w-full flex-auto focus:outline-none rounded-full bg-[#F6F6F6]"
              placeholder="Send Message"
            />
            <button className="bg-[#7098E0] p-4 rounded-full">
              <img src={searchIcon} width={20} height={20} alt="" />
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Chat;
