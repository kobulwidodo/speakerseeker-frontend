import classNames from "classnames";
import React from "react";

const Input = ({
  label,
  type,
  name,
  placeholder,
  className,
  isRequired,
  margin = "mb-4",
}) => {
  return (
    <div className={margin}>
      <p className="font-normal text-lg text-[#404040] mb-2">
        {label} {isRequired ? <span className="text-red-700">*</span> : ""}
      </p>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className={classNames(
          className,
          "bg-[#FEFEFE] rounded-full text-base placeholder:text-[#909090] placeholder:text-light w-full border border-[#BFBEBE] py-3.5 px-6"
        )}
      />
    </div>
  );
};

export default Input;
