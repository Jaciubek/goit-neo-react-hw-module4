import React from "react";
import styles from "./ImageGallery.module.css";
import ImageCard from "./ImageCard";

const ImageGallery = ({ images, onImageClick }) => {
  if (!images || images.length === 0) {
    return null;
  }

  return (
    <ul className={styles.gallery}>
      {images.map((image) => (
        <li key={image.id}>
          <ImageCard image={image} onImageClick={onImageClick} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
