import React, { useEffect, useState } from "react";
import Navbar from "../../component/Navbar";
import SpeakerCard from "../../component/SpeakerCard";
import vina from "../../assets/images/vina.png";
import searchIcon from "../../assets/images/search.svg";
import Footer from "../../component/Footer";
import Breadcrumb from "../../component/Breadcrumb";
import { getAllSpeaker } from "../../api/model/speaker";

const Speakers = () => {
  const [speakers, setSpeakers] = useState([]);

  const fetchData = async () => {
    try {
      const res = await getAllSpeaker();
      setSpeakers(res.data.data);
    } catch (error) {}
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <Breadcrumb>
        <Breadcrumb.Item label="SPEAKERS" />
      </Breadcrumb>
      <div className="max-w-7xl mx-auto py-10 px-4">
        <div className="flex flex-col sm:flex-row sm:justify-between">
          <h1 className="font-medium text-2xl text-center">Find a speaker</h1>
          <form
            action=""
            className="flex flex-row gap-x-5 px-4 border-2 rounded-full text-base py-3 border-[#E5E5E5] mt-5 sm:mt-0"
          >
            <img src={searchIcon} className="w-4" alt="" />
            <input
              type="text"
              className="appearance-none bg-[#FEFEFE] w-full flex-auto focus:outline-none"
              placeholder="Search for speakers"
            />
          </form>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mx-auto gap-x-5 md:gap-y-24 lg:mt-28 mt-10">
          {speakers.map((item, key) => {
            let arrSkill = [];
            item.speaker_skills?.map((item) => {
              arrSkill.push(item.title);
            });
            const skill = arrSkill.join(", ");
            return (
              <SpeakerCard
                id={item.ID}
                outline="outline-white"
                image={vina}
                key={key}
                name={item.name}
                job={item.header_title}
                desc={item.header}
                rating="4.9"
                place={item.location}
                eventCount={26}
                skill={skill}
                language="English, Indonesia"
                price={item.virtual_fee_start}
              />
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Speakers;
