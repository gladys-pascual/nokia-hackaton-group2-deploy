/** @jsx jsx */
import React, { useEffect, useState } from "react";
import "./Phonelist.css";
import { jsx, css, keyframes } from "@emotion/core";
import { Link } from "react-router-dom";

const Phonecard = (props) => {
  console.log("phonecard props", props[0].id);
  const bounce = keyframes`
    from, to{
      transform: translate(-20px, -20px);
      // transform: scale(1); 
    }
  
    25% {
      transform: translate(20px, -20px);
    }
  
   50% {
      transform: translate(20px,20px);
      // transform: scale(1.1)
    }
  
    75% {
      transform: translate(-30px, 30px);
    }
  `;

  return (
    <div className="phonecard">
      <div className="phonecard-square1">
        <Link to={`/phone/${props[0].id}`}>
          <img src={props[0].pictures[0]} />{" "}
        </Link>
        <Link to={`/phone/${props[1].id}`}>
          <img src={props[1].pictures[0]} />
        </Link>
      </div>

      <div
        css={css`
          animation: ${bounce} 50s linear infinite;
        `}
        className="phonecard-square-bottom"
      ></div>
    </div>
  );
};

export default Phonecard;
