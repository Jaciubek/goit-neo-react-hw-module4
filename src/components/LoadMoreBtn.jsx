import React from "react";
import styles from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ onClick }) => {
  return (
    <div>
      <button className={styles.loadMoreButton} onClick={onClick}>
        Load more
      </button>
    </div>
  );
};

export default LoadMoreBtn;
