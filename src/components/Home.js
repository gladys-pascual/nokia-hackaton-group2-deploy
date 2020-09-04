import React from "react";
import Banner from "./Banner";
import WhichPhone from "./WhichPhone";
import PhoneList from "./PhoneList";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <WhichPhone />
      <PhoneList />
    </>
  );
};

export default Home;
