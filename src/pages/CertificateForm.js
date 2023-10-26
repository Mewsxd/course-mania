import React from "react";
import classes from "./CertificateForm.module.css";
import FormComponent from "../components/FormComponent";
import { Form, redirect } from "react-router-dom";
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
            {/* <p>Enrolled Course: </p> */}
            <input
              type="text"
              id="courseName"
              name="courseName"
              value={`Enrolled Course: Biochemistry`}
              readOnly
            ></input>
            <br />
            <label>Message to the tutor</label>
            <textarea
              placeholder="Something you want to say..."
              rows={5}
              name="message"
              id="message"
            />
            <button>Submit</button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default CertificateForm;
export async function action({ request }) {
  const fData = await request.formData();
  const data = {
    name: fData.get("name"),
    address: fData.get("address"),
    email: fData.get("email"),
    dob: fData.get("dob"),
    courseName: fData.get("courseName"),
    message: fData.get("message"),
  };
  console.log(data);
  return redirect("/");
}
