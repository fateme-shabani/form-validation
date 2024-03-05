import { useFormik } from "formik";
import React from "react";

const MyForm = () => {
  const formik = useFormik({
    initialValues: { firstname: "", lastname: "", pasword: "", email: "" },
  });
  return (
    <div className="form-box">
      <div className="test2">
        <form action="#">
          <label>FirstName :</label>
          <input
            type="text"
            placeholder="firstName"
            name="firstName"
            value={formik.values.firstname}
            onChange={formik.handleChange}
          />
          <label>LastName :</label>
          <input
            type="text"
            placeholder="lastName"
            name="lastName"
            value={formik.values.lastname}
            onChange={formik.handleChange}
          />
          <label>passWord :</label>
          <input type="number" placeholder="password" name="password" />
          <label>email :</label>
          <input type="email" placeholder="email" name="email" />
        </form>
      </div>
    </div>
  );
};

export default MyForm;
