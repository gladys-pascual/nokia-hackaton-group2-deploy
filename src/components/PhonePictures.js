import React from "react";
import ImageGallery from "react-image-gallery";

const PhonePictures = ({ clickedPhonePictures }) => {
  const pictures = clickedPhonePictures.map((picture) => {
    return { original: picture, thumbnail: picture };
  });

  return <ImageGallery items={pictures} />;
};

export default PhonePictures;
