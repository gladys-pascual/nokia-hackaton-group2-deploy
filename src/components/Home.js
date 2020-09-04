import React from "react";
import Banner from "./Banner";
import WhichPhone from "./WhichPhone";
import PhoneList from "./PhoneList";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Home = (phoneDetails) => {
  return (
    <>
      <Navbar />
      <Banner />
      <WhichPhone />
      <PhoneList phoneDetails={phoneDetails} />
      <Footer /> 
    </>
  );
};

export default Home;
