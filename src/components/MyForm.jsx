import { ErrorMessage, Field, Form, Formik, useFormik } from "formik";
import React, { useEffect } from "react";
import FormFeildError from "./FormFeilderror";
import * as Yup from "yup";

const MyForm = () => {
  const formFieled = {
    firstName: '',
    lastName: '',
    password: '',
    email: '',
  };

  const submitHandler = (values) => {
    console.log(values);
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required("please enter firstname!!!"),
    lastName: Yup.string().required("please enter lastname!!!"),
    password: Yup.string().required("please enter password"),
    email: Yup.string()
      .required("please enter email")
      .email("Your email is not valid"),
    
  });

  return (
    <div className="form-box">
      <div className="test2">
        <Formik
          initialValues={formFieled}
          onSubmit={submitHandler}
          validationSchema={validationSchema}
        >
          <Form>
            <label>FirstName :</label>
            <Field type="text" placeholder="firstName" name="firstName" />
            <ErrorMessage name="firstName" component={FormFeildError}/>
            <label>LastName :</label>
            <Field type="text" placeholder="lastName" name="lastName" />
            <ErrorMessage name="lastName" component={FormFeildError}/>
            <label>passWord :</label>
            <Field type="text" placeholder="password" name="password" />
            <ErrorMessage name="password" component={FormFeildError}/>
            <label>email :</label>
            <Field type="text" placeholder="email" name="email" />
            <ErrorMessage name="email" component={FormFeildError}/>
            <button type="submit">sing up</button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default MyForm;
