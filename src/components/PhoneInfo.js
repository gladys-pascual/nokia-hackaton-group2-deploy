import React from "react";

const PhoneInfo = ({ clickedPhoneDetails }) => {
  console.log(clickedPhoneDetails);
  return (
    <>
      <h1 className="model-name"> {clickedPhoneDetails.model} </h1>
    </>
  );
};

export default PhoneInfo;
