import React, { useState } from "react";
import Banner from "./Banner";
import WhichPhone from "./WhichPhone";
import PhoneList from "./PhoneList";
import Navbar from "./Navbar";

const Home = (phoneDetails) => {
  const [travelerState, setTravelerState] = useState(false);

  const handleClick = () => {
    setTravelerState(!travelerState);
  };

  return (
    <>
      <Navbar />
      <Banner />
      <WhichPhone travelerState={travelerState} handleClick={handleClick} />
      <PhoneList
        travelerState={travelerState}
        phoneDetails={phoneDetails.phoneDetails}
      />
    </>
  );
};

export default Home;
