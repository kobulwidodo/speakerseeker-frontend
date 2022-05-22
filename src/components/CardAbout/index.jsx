import classNames from "classnames";
import React from "react";

const CardAbout = ({ children, className }) => {
  return (
    <div
      className={classNames(
        "py-10 px-9 border border-[#E5E5E5] bg-[#FEFEFE] rounded-3xl",
        className
      )}
    >
      {children}
    </div>
  );
};

const HeaderTitle = ({ label }) => {
  return (
    <div className="bg-[#E9F2FF] rounded-full text-center py-6 px-3 font-light text-black text-xl mb-8">
      {label}
    </div>
  );
};

const Title = ({ label, classname }) => {
  return (
    <h1 className={classNames(classname, "font-medium text-2xl")}>{label}</h1>
  );
};

CardAbout.HeaderTitle = HeaderTitle;
CardAbout.Title = Title;
export default CardAbout;
