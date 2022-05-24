import React from "react";

const Textarea = ({
  label,
  isRequired,
  margin,
  name,
  placeholder,
  errorText,
  ...other
}) => {
  return (
    <div className={margin}>
      <p className="font-normal text-lg text-[#404040] mb-2">
        {label} {isRequired ? <span className="text-red-700">*</span> : ""}
      </p>
      <textarea
        name={name}
        id={name}
        placeholder={placeholder}
        rows={6}
        {...other}
        className="bg-[#FEFEFE] rounded-xl text-base placeholder:text-[#909090] placeholder:text-light w-full border border-[#BFBEBE] py-3.5 px-6 resize-none"
      ></textarea>
      {errorText ? (
        <span className="text-xs text-red-600">{errorText}</span>
      ) : null}
    </div>
  );
};

export default Textarea;
