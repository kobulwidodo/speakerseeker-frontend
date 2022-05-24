import React from "react";

const RadioGroup = ({ children, label, isRequired, onChange, errorText }) => {
  return (
    <>
      <p className="font-normal text-lg text-[#404040] mb-2">
        {label} {isRequired ? <span className="text-red-700">*</span> : ""}
      </p>
      <div className="flex flex-row gap-x-5">{children}</div>
      {errorText ? (
        <span className="text-xs text-red-600">{errorText}</span>
      ) : null}
    </>
  );
};

const Check = ({ name, label, ...other }) => {
  return (
    <div className="flex flex-row gap-x-2 items-center">
      <input
        type="radio"
        name={name}
        className="w-6 h-6"
        {...other}
        value={label}
      />
      <label className="font-normal text-lg text-[#404040]">{label}</label>
    </div>
  );
};

RadioGroup.Check = Check;
export default RadioGroup;
