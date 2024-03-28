import React from "react";

const FormFeildError = ({ children }) => {
  return (
    <div>
      <h6 style={{ color: "red", margin: "4px" }}>*{children}</h6>
    </div>
  );
};

export default FormFeildError;
