import React, { useEffect, useState } from "react";
import Breadcrumb from "../../components/Breadcrumb";
import Navbar from "../../components/Navbar";
import borderProfile from "../../assets/images/border-profile.svg";
import iconStar from "../../assets/images/icon_star.svg";
import Button from "../../components/Button";
import CardAbout from "../../components/CardAbout";
import tiktok from "../../assets/images/icon_tiktok.svg";
import linkedin from "../../assets/images/icon_linkedin.svg";
import ig from "../../assets/images/icon_ig_about.svg";
import Footer from "../../components/Footer";
import slug from "slug";
import { useParams } from "react-router-dom";
import { getImage, getSpeakerById } from "../../api/model/speaker";
import NumberFormat from "react-number-format";

const SpeakersDetail = () => {
  const { id } = useParams();
  const [speaker, setSpeaker] = useState({});
  const [loading, setLoading] = useState(true);

  const fetchDetail = async () => {
    try {
      const res = await getSpeakerById(id);
      setSpeaker(res.data.data);
      console.log(res.data.data);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDetail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const slugName = slug(speaker.name ?? "");
  const link = `/speakers/${id}/${slugName}/book`;
  return (
    <>
      <Navbar />
      <Breadcrumb>
        <Breadcrumb.Item label="SPEAKERS" link="/speakers" />
        <Breadcrumb.Divider />
        <Breadcrumb.Item label="SPEAKERS PROFILE" />
      </Breadcrumb>
      <div className="max-w-7xl mx-auto py-10 px-4">
        <div className="flex flex-col md:flex-row md:pl-6">
          <div className="relative mx-auto md:mx-0">
            <img
              src={getImage(speaker.img_profile_path)}
              className="absolute inset-y-10 md:inset-y-6 -left-6 md:w-3/4"
              alt=""
            />
            <img src={borderProfile} className="md:w-3/4" alt="" />
          </div>
          <div className="mt-10 md:mt-0">
            {loading ? (
              <div className="flex animate-pulse items-center flex-1 h-7 bg-slate-300 rounded"></div>
            ) : (
              <div className="flex flex-row">
                <h1 className="font-medium text-black text-3xl">
                  {speaker.name}
                </h1>
                <div className="flex flex-row items-center ml-4">
                  <img src={iconStar} alt="" className="w-5 h-5" />
                  <p className="ml-1 text-[#B1B2BD] font-semibold text-lg">
                    4.9
                  </p>
                </div>
              </div>
            )}
            {loading ? (
              <div className="flex animate-pulse items-center flex-1 h-5 bg-slate-300 rounded mt-3"></div>
            ) : (
              <h2 className="text-black/40 mt-3 text-xl">
                {speaker.header_title}
              </h2>
            )}
            {loading ? (
              <div className="">
                <div className="flex animate-pulse items-center flex-1 h-5 bg-slate-300 rounded mt-6"></div>
                <div className="flex animate-pulse items-center flex-1 h-5 bg-slate-300 rounded mt-1"></div>
              </div>
            ) : (
              <p className="text-[#565656] text-lg mt-6 max-w-lg">
                {speaker.header}
              </p>
            )}
            <div className="flex flex-col md:flex-row gap-x-32 mt-4">
              <div className="">
                <h5 className="mb-3 text-lg">Virtual Fee Range :</h5>
                {loading ? (
                  <div className="flex animate-pulse items-center flex-1 h-5 bg-slate-300 rounded mt-1"></div>
                ) : (
                  <p className="text-black/70">
                    Rp{" "}
                    {
                      <NumberFormat
                        value={speaker.virtual_fee_start}
                        thousandSeparator={true}
                        displayType={"text"}
                      />
                    }{" "}
                    - Rp{" "}
                    {
                      <NumberFormat
                        value={speaker.virtual_fee_stop}
                        thousandSeparator={true}
                        displayType={"text"}
                      />
                    }
                  </p>
                )}
              </div>
              <div className="mt-5 md:mt-0">
                <h5 className="mb-3 text-lg">On-Site Fee Range : </h5>
                {loading ? (
                  <div className="flex animate-pulse items-center flex-1 h-5 bg-slate-300 rounded mt-1"></div>
                ) : (
                  <p className="text-black/70">
                    Rp{" "}
                    {
                      <NumberFormat
                        value={speaker.site_fee_start}
                        thousandSeparator={true}
                        displayType={"text"}
                      />
                    }{" "}
                    - Rp{" "}
                    {
                      <NumberFormat
                        value={speaker.site_fee_stop}
                        thousandSeparator={true}
                        displayType={"text"}
                      />
                    }
                  </p>
                )}
              </div>
            </div>
            <div className="flex flex-row gap-x-5 mt-7">
              <Button label="Book Now" isLink={true} to={link} />
              <Button label="Live Chat" type="light" />
            </div>
          </div>
        </div>
        <div className="bg-[#E9F2FF] rounded-full mt-16 py-7">
          <h3 className="text-center text-xl">About The Speakers</h3>
        </div>
        <div className="flex flex-col md:flex-row gap-x-9 mt-12">
          <div className="flex md:w-2/5 mt-7 md:mt-0 flex-col gap-y-7 order-last md:order-first">
            <CardAbout>
              <CardAbout.Title label="Current Position" />
              {speaker.speaker_careers?.map((item, key) => (
                <div className="mt-4" key={key}>
                  <p className="text-lg">{item.title}</p>
                  <p className="text-lg text-black/40">
                    {item.month_start} {item.year_start} - Present
                  </p>
                </div>
              ))}
            </CardAbout>
            <CardAbout>
              <CardAbout.Title label="Top Skills" />
              <div className="flex flex-col gap-y-1 mt-4">
                {speaker.speaker_skills?.map((item, key) => (
                  <p key={key} className="text-lg">
                    {item.title}
                  </p>
                ))}
              </div>
            </CardAbout>
            <CardAbout>
              <CardAbout.Title label="Social Media" />
              <div className="flex flex-col gap-y-4 mt-4">
                <div className="flex flex-row items-center gap-x-3">
                  <img src={tiktok} alt="" />
                  <p className="text-lg">{speaker.tiktok}</p>
                </div>
                <div className="flex flex-row items-center gap-x-3">
                  <img src={ig} alt="" />
                  <p className="text-lg">{speaker.instagram}</p>
                </div>
                <div className="flex flex-row items-center gap-x-3">
                  <img src={linkedin} alt="" />
                  <p className="text-lg">{speaker.linkedin}</p>
                </div>
              </div>
            </CardAbout>
          </div>
          <CardAbout className="md:w-3/5">
            <CardAbout.Title label={`About ${speaker.name}`} />
            <p className="text-black/40 text-justify text-lg mt-4 whitespace-pre-wrap">
              {speaker.about}
            </p>
            <CardAbout.Title
              label="Presentations Experience"
              classname="mt-8"
            />
            {speaker.speaker_experiences?.map((item, key) => (
              <div className="mt-4" key={key}>
                <p className="text-lg">{item.title}</p>
                <p className="text-lg text-black/40 text-justify">
                  {item.description}
                </p>
              </div>
            ))}
          </CardAbout>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SpeakersDetail;
