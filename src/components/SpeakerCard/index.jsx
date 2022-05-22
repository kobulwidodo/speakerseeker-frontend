import React from "react";
import iconStar from "../../assets/images/icon_star.svg";
import iconLocation from "../../assets/images/icon_location.svg";
import iconEvent from "../../assets/images/icon_events.svg";
import iconSkill from "../../assets/images/icon_skill.svg";
import iconLanguage from "../../assets/images/icon_language.svg";
import iconPrice from "../../assets/images/icon_price.svg";
import Button from "../Button";
import classNames from "classnames";
import slug from "slug";
import { getImage } from "../../api/model/speaker";

export const SpeakerCard = ({
  image,
  name,
  job,
  desc,
  rating,
  place,
  eventCount,
  skill,
  language,
  price,
  id,
  outline,
}) => {
  const slugName = slug(name);
  const link = `/speakers/${id}/${slugName}`;
  return (
    <div className="bg-[#FEFEFE] relative overflow-visible px-9 border border-[#E5E5E5] rounded-2xl pb-9 mt-20 sm:mt-18 lg:mt-0">
      <img
        src={getImage(image)}
        className={classNames(
          "absolute inset-x-1/2 -translate-x-1/2 -top-16 rounded-full outline outline-[#E9F2FF] outline-8",
          outline
        )}
        alt=""
      />
      <h1 className="font-medium text-2xl text-black text-center mt-36 sm:mt-34 lg:mt-28 mb-3">
        {name}
      </h1>
      <p className="text-[#A5A5A5] font-normal text-sm text-center mb-7">
        {job}
      </p>
      <p className="text-[#565656] font-light text-sm text-center">{desc}</p>
      <div className="border border-[#E5E5E5] rounded-xl py-3 px-4 my-10">
        <ul className="flex flex-row justify-center">
          <li className="flex flex-row">
            <img src={iconStar} alt="" className="w-5 h-5" />
            <p className="ml-2 text-[#B1B2BD] font-semibold text-sm">
              {rating}
            </p>
          </li>
          <div className="border border-1 border-[#E5E5E5] mx-3"></div>
          <li className="flex flex-row">
            <img src={iconLocation} alt="" className="w-5 h-5" />
            <p className="ml-2 text-[#B1B2BD] font-semibold text-sm">{place}</p>
          </li>
          <div className="border border-1 border-[#E5E5E5] mx-3"></div>
          <li className="flex flex-row">
            <img src={iconEvent} alt="" className="w-5 h-5" />
            <p className="ml-2 text-[#B1B2BD] font-semibold text-sm">
              {eventCount} Events
            </p>
          </li>
        </ul>
      </div>
      <div className="flex flex-row">
        <div className="flex-shrink-0">
          <img src={iconSkill} className="" alt="" />
        </div>
        <p className="text-[#151515] font-light text-sm ml-3">{skill}</p>
      </div>
      <div className="flex flex-row mt-3">
        <div className="flex-shrink-0">
          <img src={iconLanguage} className="" alt="" />
        </div>
        <p className="text-[#151515] font-light text-sm ml-3">{language}</p>
      </div>
      <div className="flex flex-row mt-3">
        <div className="flex-shrink-0">
          <img src={iconPrice} className="" alt="" />
        </div>
        <p className="text-[#151515] font-light text-sm ml-3">
          Start from Rp {price}
        </p>
      </div>
      <div className="text-center mt-10">
        <Button
          label="View Profile"
          isLink={true}
          to={link}
          className="w-auto"
        />
      </div>
    </div>
  );
};

export default SpeakerCard;
