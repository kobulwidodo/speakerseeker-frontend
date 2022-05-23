import classNames from "classnames";
import React from "react";
import { Link } from "react-router-dom";

const Button = ({ label, type, icon, className, isLink, to, isSubmit }) => {
  const classname = classNames(
    "bg-[#7098E0] text-white text-lg font-normal py-2 px-7 rounded-full",
    {
      "bg-[#FFFFFF] border border-[#7098E0] text-[#7098E0] text-center":
        type === "light",
    },
    className
  );
  return (
    <>
      {isLink ? (
        <Link to={to} className={classname}>
          {label}
        </Link>
      ) : (
        <button
          type="submit"
          name="submit"
          className={classNames(
            "bg-[#7098E0] text-white text-lg font-normal py-2 px-7 rounded-full",
            {
              "bg-[#FFFFFF] border border-[#7098E0] text-[#7098E0] text-center":
                type === "light",
            },
            className
          )}
        >
          <div className={classNames("justify-center", { flex: icon })}>
            {icon ? (
              <img src={icon} className="mr-3" width="25" alt="" />
            ) : null}
            {isSubmit ? "Loading..." : label}
          </div>
        </button>
      )}
    </>
  );
};

export default Button;
