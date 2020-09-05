import React from "react";
import ImageGallery from "react-image-gallery";

const PhonePictures = ({ clickedPhonePictures, clickedPhoneName }) => {
  const images = [
    {
      original: `clickedPhonePictures`,
      thumbnail: `clickedPhonePictures`,
    },
  ];
  return <ImageGallery items={images} />;
};

export default PhonePictures;
