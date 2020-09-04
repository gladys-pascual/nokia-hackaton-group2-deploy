import React, { useState, useEffect } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Phone from "./components/Phone";

const App = () => {
  const [phoneDetails, setPhoneDetails] = useState([]);

  useEffect(() => {
    fetch(
      "https://cors-anywhere.herokuapp.com/https://nokia-hackathon.herokuapp.com/phones"
    )
      .then((response) => response.json())
      .then((res) => setPhoneDetails(res))
      .catch((err) => console.log("Error fetching and parsing data", err));
  }, []);

  return (
    <>
      <Switch>
        <Route
          exact
          path="/"
          render={() => <Home phoneDetails={phoneDetails} />}
        />
        <Route
          path="/phone/:model"
          render={() => <Phone phoneDetails={phoneDetails} />}
        />
      </Switch>
    </>
  );
};

export default App;
