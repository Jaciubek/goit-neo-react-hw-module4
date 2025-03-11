import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

const Loader = () => {
  return (
    <div style={{ textAlign: "center", margin: "20px 0" }}>
      <ClipLoader color="#00BFFF" size={50} />
    </div>
  );
};

export default Loader;
