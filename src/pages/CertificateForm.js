import React from "react";
import classes from "./CertificateForm.module.css";
import FormComponent from "../components/FormComponent";
import { Form } from "react-router-dom";
const CertificateForm = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <div className={classes.formContainer}>
          <Form method="POST">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="name"
              required
            />
            <input
              type="text"
              id="address"
              name="address"
              placeholder="address"
              required
            />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="email"
              required
            />
            <br />
            <label>Enter date of birth</label>
            <br />
            <input type="date" id="dob" name="dob" required />
            <br />
            <p>Enrolled Course: </p>
            <textarea placeholder="Message to the tutor" rows={5} />
          </Form>
        </div>
      </div>
    </div>
  );
};

export default CertificateForm;
