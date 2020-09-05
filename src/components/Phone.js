import React from "react";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";
import PhonePictures from "./PhonePictures";
import PhoneInfo from "./PhoneInfo";

const Phone = ({ phoneDetails }) => {
  const { id } = useParams();
  const clickedPhoneDetails = phoneDetails.find(
    (phone) => phone.id.toString() === id
  );

  return (
    <>
      <Navbar />
      <section className="phone-details">
        <div className="phone-pictures">
          <PhonePictures clickedPhonePictures={clickedPhoneDetails.pictures} />
        </div>
        <div className="phone-info">
          <PhoneInfo clickedPhoneDetails={clickedPhoneDetails} />
        </div>
      </section>
    </>
  );
};

export default Phone;
