import React from "react";

const InputFile = ({
  label,
  isRequired,
  name,
  margin,
  errorText,
  ...other
}) => {
  return (
    <div className={margin}>
      <p className="font-normal text-lg text-[#404040] mb-2">
        {label} {isRequired ? <span className="text-red-700">*</span> : ""}
      </p>
      <input
        type="file"
        name={name}
        className="block mb-5 w-full mt-3 text-xs text-[#6F70DA] file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border file:border-[#6F70DA] file:text-sm file:font-semibold file:bg-[#F9F9F9] file:text-[#6F70DA] hover:file:bg-violet-100"
        {...other}
      />
      {errorText ? (
        <span className="text-xs text-red-600">{errorText}</span>
      ) : null}
    </div>
  );
};

export default InputFile;
