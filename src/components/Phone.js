import React from "react";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";
import PhonePictures from "./PhonePictures";

const Phone = ({ phoneDetails }) => {
  const { id } = useParams();
  const clickedPhoneDetails = phoneDetails.find(
    (phone) => phone.id.toString() === id
  );

  return (
    <>
      <Navbar />
      <section>
        <PhonePictures
          clickedPhonePictures={clickedPhoneDetails.pictures}
          clickedPhoneName={clickedPhoneDetails.model}
        />
        <p>info</p>
      </section>
    </>
  );
};

export default Phone;
