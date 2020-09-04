import React from "react";
import Banner from "./Banner";
import WhichPhone from "./WhichPhone";
import PhoneList from "./PhoneList";
import Navbar from "./Navbar";

const Home = (phoneDetails) => {
  return (
    <>
      <Navbar />
      <Banner />
      <WhichPhone />
      <PhoneList phoneDetails={phoneDetails} />
    </>
  );
};

export default Home;
