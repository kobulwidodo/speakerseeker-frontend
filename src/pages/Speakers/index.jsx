import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import SpeakerCard from "../../components/SpeakerCard";
import searchIcon from "../../assets/images/search.svg";
import Footer from "../../components/Footer";
import Breadcrumb from "../../components/Breadcrumb";
import { getAllSpeaker } from "../../api/model/speaker";
import { useLocation } from "react-router-dom";

const Speakers = () => {
  const [speakers, setSpeakers] = useState([]);
  const location = useLocation();
  const [query, setQuery] = useState(
    location.state instanceof String ? location.state : ""
  );

  const fetchData = async () => {
    try {
      const res = await getAllSpeaker(query);
      setSpeakers(res.data.data);
    } catch (error) {}
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

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
            onSubmit={handleSubmit}
            className="flex flex-row gap-x-5 px-4 border-2 rounded-full text-base py-3 border-[#E5E5E5] mt-5 sm:mt-0"
          >
            <img src={searchIcon} className="w-4" alt="" />
            <input
              type="text"
              className="appearance-none bg-[#FEFEFE] w-full flex-auto focus:outline-none"
              placeholder="Search for speakers"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </form>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mx-auto gap-x-5 md:gap-y-24 lg:mt-28 mt-10">
          {speakers.map((item, key) => {
            let arrSkill = [];
            item.speaker_skills?.map((item) => {
              return arrSkill.push(item.title);
            });
            const skill = arrSkill.join(", ");
            return (
              <SpeakerCard
                id={item.ID}
                outline="outline-white"
                image={item.img_path}
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
