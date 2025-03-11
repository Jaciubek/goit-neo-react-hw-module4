import React from "react";
import styles from "./ImageCard.module.css";

const ImageCard = ({ image, onImageClick }) => {
  const handleClick = () => {
    onImageClick(image);
  };

  return (
    <div className={styles.imageCard} onClick={handleClick}>
      <img src={image.urls.small} alt={image.alt_description || "image"} />
    </div>
  );
};

export default ImageCard;
