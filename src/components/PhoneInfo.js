import React from "react";

const PhoneInfo = ({ clickedPhoneDetails }) => {
  console.log(clickedPhoneDetails);
  return (
    <>
      <h1 className="model-name"> {clickedPhoneDetails.model} </h1>
      <div className="phone-info-wrapper">
        {clickedPhoneDetails.salesPackage && (
          <div className="detail-wrapper">
            <p className="detail-heading"> What's in the box:</p>
            <p className="detail-info">{clickedPhoneDetails.salesPackage}</p>
          </div>
        )}
      </div>

      <div className="phone-info-wrapper">
        {clickedPhoneDetails.colors && (
          <div className="detail-wrapper">
            <p className="detail-heading">Available in colors:</p>
            <p className="detail-info">{clickedPhoneDetails.colors}</p>
          </div>
        )}
      </div>

      <div className="phone-info-wrapper">
        {clickedPhoneDetails.talkAndStandby && (
          <div className="detail-wrapper">
            <p className="detail-heading">Talk & Standby times:</p>
            <p className="detail-info">{clickedPhoneDetails.talkAndStandby}</p>
          </div>
        )}
      </div>

      <div className="phone-info-wrapper">
        {clickedPhoneDetails.dimensions && (
          <div className="detail-wrapper">
            <p className="detail-heading">Dimensions:</p>
            <p className="detail-info">{clickedPhoneDetails.dimensions}</p>
          </div>
        )}
      </div>

      <div className="phone-info-wrapper">
        {clickedPhoneDetails.storage && (
          <div className="detail-wrapper">
            <p className="detail-heading">Storage:</p>
            <p className="detail-info">{clickedPhoneDetails.storage}</p>
          </div>
        )}
      </div>

      <div className="phone-info-wrapper">
        {clickedPhoneDetails.display && (
          <div className="detail-wrapper">
            <p className="detail-heading">Display:</p>
            <p className="detail-info">{clickedPhoneDetails.display}</p>
          </div>
        )}
      </div>

      <div className="phone-info-wrapper">
        {clickedPhoneDetails.camera && (
          <div className="detail-wrapper">
            <p className="detail-heading">Camera:</p>
            <p className="detail-info">{clickedPhoneDetails.camera}</p>
          </div>
        )}
      </div>

      <div className="phone-info-wrapper">
        {clickedPhoneDetails.battery && (
          <div className="detail-wrapper">
            <p className="detail-heading">Battery information:</p>
            <p className="detail-info">{clickedPhoneDetails.battery}</p>
          </div>
        )}
      </div>

      <div className="phone-info-wrapper">
        {clickedPhoneDetails.connectivitySensors && (
          <div className="detail-wrapper">
            <p className="detail-heading">Connectivity sensors:</p>
            <p className="detail-info">
              {clickedPhoneDetails.connectivitySensors}
            </p>
          </div>
        )}
      </div>

      <div className="phone-info-wrapper">
        {clickedPhoneDetails.audio && (
          <div className="detail-wrapper">
            <p className="detail-heading">Audio:</p>
            <p className="detail-info">{clickedPhoneDetails.audio}</p>
          </div>
        )}
      </div>

      <div className="phone-info-wrapper">
        {clickedPhoneDetails.simCardType && (
          <div className="detail-wrapper">
            <p className="detail-heading">Sim card type:</p>
            <p className="detail-info">{clickedPhoneDetails.simCardType}</p>
          </div>
        )}
      </div>

      <div className="phone-info-wrapper">
        {clickedPhoneDetails.torch && (
          <div className="detail-wrapper">
            <p className="detail-heading">Torch:</p>
            <p className="detail-info">{clickedPhoneDetails.torch}</p>
          </div>
        )}
      </div>

      <div className="phone-info-wrapper">
        {clickedPhoneDetails.networks && (
          <div className="detail-wrapper">
            <p className="detail-heading">Networks:</p>
            <p className="detail-info">{clickedPhoneDetails.networks}</p>
          </div>
        )}
      </div>

      <div className="phone-info-wrapper">
        {clickedPhoneDetails.os && (
          <div className="detail-wrapper">
            <p className="detail-heading">OS:</p>
            <p className="detail-info">{clickedPhoneDetails.os}</p>
          </div>
        )}
      </div>

      <div className="phone-info-wrapper">
        {clickedPhoneDetails.variant && (
          <div className="detail-wrapper">
            <p className="detail-heading">Variant:</p>
            <p className="detail-info">{clickedPhoneDetails.variant}</p>
          </div>
        )}
      </div>

      <div className="phone-info-wrapper">
        {clickedPhoneDetails.cpu && (
          <div className="detail-wrapper">
            <p className="detail-heading">CPU:</p>
            <p className="detail-info">{clickedPhoneDetails.cpu}</p>
          </div>
        )}
      </div>

      <div className="phone-info-wrapper">
        {clickedPhoneDetails.formFactor && (
          <div className="detail-wrapper">
            <p className="detail-heading">Form factor:</p>
            <p className="detail-info">{clickedPhoneDetails.formFactor}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default PhoneInfo;
