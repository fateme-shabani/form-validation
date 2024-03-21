import React from "react";

const FormFeilderror = ({ msg }) => {
  return (
    <div>
      <h6 style={{ color: "red", margin:'4px'}}>*{msg}</h6>
    </div>
  );
};

export default FormFeilderror;
