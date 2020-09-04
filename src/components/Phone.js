import React from "react";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";
import PhonePictures from "./PhonePictures";

const Phone = ({ phoneDetails }) => {
  const { id } = useParams();

  const clickedPhoneDetails = phoneDetails.find(
    (phone) => phone.id.toString() === id
  );

  console.log(phoneDetails);
  console.log(clickedPhoneDetails);

  return (
    <>
      <Navbar />
      <section>
        <PhonePictures clickedPhoneDetails={clickedPhoneDetails} />
        <p>info</p>
      </section>
    </>
  );
};

export default Phone;
