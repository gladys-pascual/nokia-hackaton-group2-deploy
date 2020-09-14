import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Phone from "./components/Phone";
import "./Fonts/NokiaPureTWeb_Bd.ttf";
import "./Fonts/NokiaPureTWeb_Lt.ttf";
import "./Fonts/NokiaPureTWeb_Rg.ttf";
import "./Fonts/NokiaPureHeadline_Lt.ttf";
import "./Fonts/NokiaPureHeadline_Rg.ttf";
import "./Fonts/NokiaPureHeadline_Bd.ttf";
import "./App.css";
import dataApi from "./components/api";

const App = () => {
  const [phoneDetails, setPhoneDetails] = useState(null);

  useEffect(() => {
    setPhoneDetails(dataApi);
  }, []);

  return (
    <>
      <Switch>
        {phoneDetails && (
          <Route
            exact
            path="/"
            render={() => <Home phoneDetails={phoneDetails} />}
          />
        )}
        {phoneDetails && (
          <Route
            path="/phone/:id"
            render={() => <Phone phoneDetails={phoneDetails} />}
          />
        )}
      </Switch>
    </>
  );
};

export default App;
