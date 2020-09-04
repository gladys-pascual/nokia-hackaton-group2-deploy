import React from "react";

const PhoneList = (props) => {
  console.log(props);
  return (
    <div className="phone-list-wrapper">
      <h1>Phone List</h1>
      <div className="phone-list-test">
        <div className="phone-list">
          <h1 className="phone-list-title">Phone 1</h1>
          <img src="https://i.imgur.com/6zSrhJS.jpg" alt="test" />
        </div>
        <div className="phone-list">
          <h1 className="phone-list-title">Phone 2</h1>
          <img src="https://i.imgur.com/6zSrhJS.jpg" alt="test" />
        </div>
        <div className="phone-list">
          <h1 className="phone-list-title">Phone 3</h1>
          <img src="https://i.imgur.com/6zSrhJS.jpg" alt="test" />
        </div>
        <div className="phone-list">
          <h1 className="phone-list-title">Phone 4</h1>
          <img src="https://i.imgur.com/6zSrhJS.jpg" alt="test" />
        </div>
      </div>
    </div>
  );
};

export default PhoneList;
