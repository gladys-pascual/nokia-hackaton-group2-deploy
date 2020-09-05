/** @jsx jsx */
import React, { useEffect, useState } from "react";
import { jsx, css, keyframes } from "@emotion/core";
import { Link } from "react-router-dom";

const Phonecard = (props) => {
  console.log(props);
  const bounce = keyframes`
    from, to{
      transform: translate(-10vw, -10vw);
    }
  
    25% {
      transform: translate(10vw, -10vw);
    }
  
   50% {
      transform: translate(10vw,10vw);
    }
  
    75% {
      transform: translate(-10vw, 10vw);
    }
  `;
  console.log(props);
  return (
    <div className="phonecard">
      <div className="phonecard-square">
        <div>
          <h2>{props[0].model}</h2>
          <p>≈ 15h talk time </p>
          <div className="phonecard-img-container">
            <Link to={`/phone/${props[0].id}`}>
              <img src={props[0].pictures[0]} />
            </Link>
          </div>
        </div>
        <div>
          <h2>{props[1].model}</h2>
          <div className="phonecard-img-container">
            <Link to={`/phone/${props[1].id}`}>
              <img src={props[1].pictures[0]} />
            </Link>
          </div>
        </div>
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
