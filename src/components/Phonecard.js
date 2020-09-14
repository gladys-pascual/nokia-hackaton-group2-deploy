/** @jsx jsx */
import { jsx, css, keyframes } from "@emotion/core";
import { Link } from "react-router-dom";
import data from "./additionalPhoneInfos.js";

const Phonecard = (props) => {
  const PhoneDetails0 = data.additionalPhoneInfos.find(
    (phone) => phone.model === props[0].model
  );
  const PhoneDetails1 =
    props[1] &&
    data.additionalPhoneInfos.find((phone) => phone.model === props[1].model);

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

  return (
    <div className="phonecard">
      <div className="phonecard-square">
        <div className="phonecard-container">
          <h2>{props[0].model}</h2>
          <p className="phonecard-info">
            {PhoneDetails0 && PhoneDetails0.info}{" "}
          </p>
          <div className="phonecard-icon-container">
            {PhoneDetails0 &&
              PhoneDetails0.icon.map((icon) => (
                <img
                  className="phonecard-icon"
                  src={process.env.PUBLIC_URL + `/Logo/${icon}`}
                  alt="Icon"
                />
              ))}
          </div>
          <div className="phonecard-img-container">
            <Link to={`/phone/${props[0].id}`}>
              <img
                className={props[0].name}
                src={props[0].pictures[0]}
                alt={props[0].name}
              />
            </Link>
          </div>
        </div>
        <div className="phonecard-container">
          <h2>{props[1].model}</h2>
          <p className="phonecard-info">
            {PhoneDetails1 && PhoneDetails1.info}{" "}
          </p>
          <div className="phonecard-icon-container">
            {PhoneDetails1 &&
              PhoneDetails1.icon.map((icon) => (
                <img
                  className="phonecard-icon"
                  src={process.env.PUBLIC_URL + `/Logo/${icon}`}
                  alt="Icon"
                />
              ))}
          </div>
          <div className="phonecard-img-container">
            <Link to={`/phone/${props[1].id}`}>
              <img src={props[1].pictures[0]} alt="nokia feature phone" />
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
