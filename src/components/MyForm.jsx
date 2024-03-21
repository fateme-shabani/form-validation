import { useFormik } from "formik";
import React, { useEffect } from "react";
import FormFeilderror from "./FormFeilderror";
import * as Yup from "yup";

const MyForm = () => {
  const formFeiled = {
    firstName: undefined,
    lastName: undefined,
    password: undefined,
    email: undefined,
  };

  const submitHandler = (values) => {
    console.log(values);
  };

  // const validation = (values) => {
  //   console.log(values);
  //   let errors = {};
  //   if (!values.firstName) errors.firstName = "please enter name";

  //   if (!values.lastName) errors.lastName = "please enter lastName";

  //   if (!values.password) errors.password = "please enter password";

  //   if (!values.email) errors.email = "please enter email";

  //   return errors;
  // };

  const validationSchema = Yup.object({
    firstName: Yup.string().required("please enter firstname!!!"),
    lastName: Yup.string().required("please enter lastname!!!"),
    password: Yup.string().required("please enter password"),
    email: Yup.string()
      .required("please enter email")
      .email("Your email is not valid"),
  });

  const formik = useFormik({
    initialValues: formFeiled,
    onSubmit: submitHandler,
    // validate: validation,
    validationSchema,
  });
  // console.log(formik.touched);

  return (
    <div className="form-box">
      <div className="test2">
        <form action="#" onSubmit={formik.handleSubmit}>
          <label>FirstName :</label>
          <input
            type="text"
            placeholder="firstName"
            name="firstName"
            value={formik.values.firstName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.firstName && formik.touched.firstName ? (
            <FormFeilderror msg={formik.errors.firstName} />
          ) : null}
          <label>LastName :</label>
          <input
            type="text"
            placeholder="lastName"
            name="lastName"
            value={formik.values.lastName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.lastName && formik.touched.lastName ? (
            <FormFeilderror msg={formik.errors.lastName} />
          ) : null}
          <label>passWord :</label>
          <input
            type="text"
            placeholder="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.password && formik.touched.password ? (
            <FormFeilderror msg={formik.errors.password} />
          ) : null}
          <label>email :</label>
          <input
            type="text"
            placeholder="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.email && formik.touched.email ? (
            <FormFeilderror msg={formik.errors.email} />
          ) : null}
          <button type="submit">sing up</button>
        </form>
      </div>
    </div>
  );
};

export default MyForm;
