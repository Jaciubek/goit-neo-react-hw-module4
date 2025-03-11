import React from "react";

const ErrorMessage = ({ message }) => {
  return <p>{message || "Error. Please try again"}</p>;
};

export default ErrorMessage;
