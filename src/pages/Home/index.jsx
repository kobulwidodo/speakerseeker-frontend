import React from "react";
import headerImg from "../../assets/images/header.svg";
import whyImg from "../../assets/images/pic_whyspeakerseeker.png";
import iconSpeaker from "../../assets/images/icon_speaker.svg";
import lineImg from "../../assets/images/pic_line.svg";
import pictSpeaker from "../../assets/images/pic_find_speaker.svg";
import pictChat from "../../assets/images/pic_chat.svg";
import picBook from "../../assets/images/pic_booked.svg";
import picTransaction from "../../assets/images/pic_transaction.svg";
import vina from "../../assets/images/vina.png";
import searchIcon from "../../assets/images/search.svg";
import Navbar from "../../component/Navbar";
import Button from "../../component/Button";
import SpeakerCard from "../../component/SpeakerCard";
import Footer from "../../component/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto py-10 px-4">
        <div className="bg-[#E9F2FF] rounded-3xl flex flex-row gap-x-6 px-5 md:px-10 py-20">
          <div className="flex-1">
            <p className="text-[#34364A] font-bold text-4xl leading-snug">
              Find The Best Speakers For Your Best Event
            </p>
            <p className="text-[#34364A] text-light text-xl mt-7 mb-10 leading-10">
              We connect you with the best speakers in the field for your event
              in an easy and convenient way.
            </p>
            <div className="flex flex-row bg-[#FEFEFE] rounded-full text-base p-2 max-w-md w-full">
              <form action="" className="flex flex-row flex-auto gap-x-5 pl-4">
                <img src={searchIcon} className="w-4" alt="" />
                <input
                  type="text"
                  className="appearance-none bg-transparent w-full flex-auto focus:outline-none"
                  placeholder="Search for speakers"
                />
              </form>
              <Button
                label="Search"
                className="font-medium text-sm ml-5 w-fit"
              />
            </div>
          </div>
          <div className="flex-1 hidden md:flex">
            <img src={headerImg} className="w-2/3 mx-auto" alt="" />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-x-16 mt-28">
          <div className="flex-1">
            <img src={whyImg} className="w-full" alt="" />
          </div>
          <div className="flex-1 sm:mt-0 mt-14">
            <img src={lineImg} className="mx-auto sm:mx-0" alt="" />
            <h3 className="text-[#34364A] font-semibold text-3xl mt-5 sm:text-left text-center">
              Why SpeakerSeeker?
            </h3>
            <div className="mt-10">
              <div className="flex flex-row gap-5 mb-7">
                <img src={iconSpeaker} className="" alt="" />
                <p className="text-[#5D5D64] font-normal text-xl">
                  Provide detailed information about the speaker you are looking
                  for
                </p>
              </div>
              <div className="flex flex-row gap-5 mb-7">
                <img src={iconSpeaker} className="" alt="" />
                <p className="text-[#5D5D64] font-normal text-xl">
                  Provide orders and transactions directly through the website
                </p>
              </div>
              <div className="flex flex-row gap-5 mb-7">
                <img src={iconSpeaker} className="" alt="" />
                <p className="text-[#5D5D64] font-normal text-xl">
                  Provide direct communication via chat with the speaker
                </p>
              </div>
              <div className="flex flex-row gap-5 mb-7">
                <img src={iconSpeaker} className="" alt="" />
                <p className="text-[#5D5D64] font-normal text-xl">
                  Provide a review of the speaker you are looking for
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#E9F2FF] mt-20">
        <div className="max-w-7xl mx-auto py-16 px-4">
          <div className="flex flex-row justify-between">
            <p className="text-[#7098E0] font-semibold text-3xl">
              Best of
              <br /> <span className="text-[#34364A]">Speakers</span>
            </p>
            <div className="flex-shrink-0">
              <Button label="More Speakers" className="w-auto" />
            </div>
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-24 gap-5 mx-auto">
            <SpeakerCard
              image={vina}
              name="Vina Muliana"
              job="Content Creator & Staff Mind ID"
              desc="Communication specialist with a demonstrated history of working in the online media industry. Strong media and communication professional"
              rating="4.9"
              place="jakarta"
              eventCount={26}
              skill="Public Speaking, Public Relations, Marketing & Management, Editing"
              language="English, Indonesia"
              price="1.500.000"
            />
            <SpeakerCard
              image={vina}
              name="Vina Muliana"
              job="Content Creator & Staff Mind ID"
              desc="Communication specialist with a demonstrated history of working in the online media industry. Strong media and communication professional"
              rating="4.9"
              place="jakarta"
              eventCount={26}
              skill="Public Speaking, Public Relations, Marketing & Management, Editing"
              language="English, Indonesia"
              price="1.500.000"
            />
            <SpeakerCard
              image={vina}
              name="Vina Muliana"
              job="Content Creator & Staff Mind ID"
              desc="Communication specialist with a demonstrated history of working in the online media industry. Strong media and communication professional"
              rating="4.9"
              place="jakarta"
              eventCount={26}
              skill="Public Speaking, Public Relations, Marketing & Management, Editing"
              language="English, Indonesia"
              price="1.500.000"
            />
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto py-10 px-4">
        <h1 className="text-center text-[#7098E0] font-semibold text-3xl mt-10">
          How It Works
        </h1>
        <p className="text-center text-[#898989] font-light text-xl mt-3">
          We provide the best service in an easy and convenient way
        </p>
        <div className="grid grid-cols-2 relative md:grid-cols-4 gap-x-14 gap-y-10 md:gap-y-0 mt-24">
          <div className="mx-auto text-center">
            <img src={pictSpeaker} className="mx-auto" alt="" />
            <h4 className="text-[#7098E0] font-semibold text-xl mt-5">
              Find Your Speaker
            </h4>
            <p className="text-[#898989] font-light text-lg mt-1">
              Firstly, search for the speaker
            </p>
          </div>
          <div className="mx-auto text-center">
            <img src={pictChat} className="mx-auto" alt="" />
            <h4 className="text-[#7098E0] font-semibold text-xl mt-5">
              Chat with The Speaker
            </h4>
            <p className="text-[#898989] font-light text-lg mt-1">
              Chat with your speaker to talk about the event and price
            </p>
          </div>
          <div className="mx-auto text-center">
            <img src={picBook} className="mx-auto" alt="" />
            <h4 className="text-[#7098E0] font-semibold text-xl mt-5">
              Booked Your Speaker
            </h4>
            <p className="text-[#898989] font-light text-lg mt-1">
              Then, book your speaker and fill the form
            </p>
          </div>
          <div className="mx-auto text-center">
            <img src={picTransaction} className="mx-auto" alt="" />
            <h4 className="text-[#7098E0] font-semibold text-xl mt-5">
              Make Transactions
            </h4>
            <p className="text-[#898989] font-light text-lg mt-1">
              Last, make payment according to the agreed price
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
