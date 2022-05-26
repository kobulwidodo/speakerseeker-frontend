import classNames from "classnames";
import React from "react";

const Message = ({ text, createdAt, sender }) => {
  return (
    <div
      className={classNames("my-3", {
        "mr-auto": sender === "SPEAKER",
        "ml-auto": sender === "USER",
      })}
    >
      <h1
        className={classNames("rounded-full font-md px-5 py-3", {
          "text-[#383737] rounded-bl-none bg-[#E4E4E4]": sender === "SPEAKER",
          "text-[#5D78CD] rounded-br-none bg-[#E9F2FF]": sender === "USER",
        })}
      >
        {text}
      </h1>
      <p className="mt-2 text-right text-[#666668] font-light text-sm">
        {createdAt}
      </p>
    </div>
  );
};

export default Message;
