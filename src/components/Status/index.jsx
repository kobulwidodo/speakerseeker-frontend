import classNames from "classnames";
import React from "react";

const Status = ({ status }) => {
  const classname = classNames("rounded-full text-center p-2", {
    "bg-[#EBF9F1] text-[#1F9254]": status === "success",
    "bg-[#FEF2E5] text-[#CD6200]": status === "pending",
  });
  const statusDisplay = (status) => {
    if (status === "success") {
      return "SUCCESS PAYMENT";
    } else if (status === "pending") {
      return "WAITING FOR PAYMENT";
    }
  };
  return <div className={classname}>{statusDisplay(status)}</div>;
};

export default Status;
