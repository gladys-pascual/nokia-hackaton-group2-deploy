import React, { useEffect, useState } from 'react';
import './Phonelist.css';
import Phonecard from './Phonecard'


const PhoneList = ({ phoneDetails }) => {
  const [arrayTwoPhones, setArrayTwoPhones] = useState([])

  useEffect(() => {
    ArrayOfTwoPhones();
  }, [])

  // create Array of Two, to display 2 Phones in each Square
  const ArrayOfTwoPhones = () => {
    let content = [];
    for (let i = 0; i < phoneDetails.length; i+= 2) {
      const item = [phoneDetails[i], phoneDetails[i + 1]]
      content.push(item);
    }
    setArrayTwoPhones(content);
  };

  return (
    <div className="phonelist">
    {arrayTwoPhones.map(phones => <Phonecard {...phones}/>)}
    </div>
  );
}

export default PhoneList;
