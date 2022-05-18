import React from "react";
import { Link } from "react-router-dom";
import fb from "../../assets/images/icon_facebook.svg";
import ig from "../../assets/images/icon_ig.svg";
import twt from "../../assets/images/icon_twitter.svg";
import yt from "../../assets/images/icon_youtube.svg";

const Footer = () => {
  return (
    <div className="bg-[#E9F2FF] mt-20">
      <div className="max-w-7xl mx-auto py-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3">
          <h1 className="m-auto font-semibold font-playfair_display text-3xl">
            SpeakerSeeker
          </h1>
          <div className="md:mx-auto mt-10 md:mt-0">
            <h1 className="mb-7 text-[#263238] font-bold text-lg">Follow Us</h1>
            <div className="flex flex-row mb-4">
              <img src={fb} alt="" />
              <Link
                to="#"
                className="ml-3 text-[#263238] font-light text-lg hover:text-black"
              >
                Facebook
              </Link>
            </div>
            <div className="flex flex-row mb-4">
              <img src={ig} alt="" />
              <Link
                to="#"
                className="ml-3 text-[#263238] font-light text-lg hover:text-black"
              >
                Instagram
              </Link>
            </div>
            <div className="flex flex-row mb-4">
              <img src={twt} alt="" />
              <Link
                to="#"
                className="ml-3 text-[#263238] font-light text-lg hover:text-black"
              >
                Twitter
              </Link>
            </div>
            <div className="flex flex-row">
              <img src={yt} alt="" />
              <Link
                to="#"
                className="ml-3 text-[#263238] font-light text-lg hover:text-black"
              >
                Youtube
              </Link>
            </div>
          </div>
          <div className="md:mx-auto mt-10 md:mt-0">
            <h1 className="mb-7 text-[#263238] font-bold text-lg">Contacts</h1>
            <div className=" mb-4">
              <p className="text-[#263238] font-light text-lg hover:text-black">
                +021 2208 1996
              </p>
            </div>
            <div className=" mb-4">
              <p className="text-[#263238] font-light text-lg hover:text-black">
                SCBD, Jakarta
              </p>
            </div>
            <div className=" mb-4">
              <p className="text-[#263238] font-light text-lg hover:text-black">
                No.2 (SpeakerSeeker)
              </p>
            </div>
            <div className="">
              <p className="text-[#263238] font-light text-lg hover:text-black">
                Support@speakerseeker.id
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t py-6 border-[#1E2833]/40">
        <p className="text-center text-[#1E2833]/50 font-normal text-md py-3">
          Copyright © 2020. SpeakerSeeker. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
