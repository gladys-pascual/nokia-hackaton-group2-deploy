import React, { useEffect, useState } from "react";
import Phonecard from "./Phonecard";
import data from './additionalPhoneInfos.js'; 

const PhoneList = ({ travelerState, phoneDetails }) => {
  const [arrayTwoPhones, setArrayTwoPhones] = useState([]);
  
  
  //get the Phones which got traveler = true
   const filteredTraveler = data.additionalPhoneInfos.filter((phone) => (phone.traveler))
  //get the Info from the API for the filteredTraveler models
   const displayPhones = phoneDetails.filter((phone)=> (filteredTraveler.find((handy) => (handy.model === phone.model))))
  //create array of Two out of it
  const ArrayOfTwoTravelerPhones = () => {
    let content = [];
    for (let i = 0; i < displayPhones.length; i += 2) {
      const item = [displayPhones[i], displayPhones[i + 1]];
      content.push(item);
    }
    setArrayTwoPhones(content);
  };




  useEffect(() => {
    if (travelerState) {
      ArrayOfTwoPhones()
    } else {
    ArrayOfTwoPhones();
    }
  }, []);

  // create Array of Two, to display 2 Phones in each Square
  const ArrayOfTwoPhones = () => {
    let content = [];
    for (let i = 0; i < phoneDetails.length; i += 2) {
      const item = [phoneDetails[i], phoneDetails[i + 1]];
      content.push(item);
    }
    setArrayTwoPhones(content);
  };

  return (
    <div className="phonelist">
      {arrayTwoPhones.map((phones) => (
        <Phonecard {...phones} />
      ))}
    </div>
  );
};

export default PhoneList;
