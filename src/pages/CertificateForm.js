import React, { useReducer } from "react";
import classes from "./CertificateForm.module.css";
import { Form, redirect, useNavigation, useParams } from "react-router-dom";
const initStates = {
  name: "",
  address: "",
  email: "",
  dob: "",
  message: "",
};
const reducer = (state, action) => {
  switch (action.type) {
    case "name":
      return { ...state, name: action.value };
    case "address":
      return { ...state, address: action.value };
    case "email":
      return { ...state, email: action.value };
    case "dob":
      return { ...state, dob: action.value };
    case "message":
      return { ...state, message: action.value };
    case "reset":
      return { name: "", address: "", email: "", dob: "", message: "" };
  }
};
const CertificateForm = () => {
  const [state, dispatch] = useReducer(reducer, initStates);
  const { formRegister } = useParams();
  console.log(formRegister);
  function formSubmitHandler() {
    dispatch({ type: "reset" });
  }
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <div className={classes.formContainer}>
          <Form method="POST" onSubmit={formSubmitHandler}>
            <input
              type="text"
              id="name"
              name="name"
              value={state.name}
              onChange={(e) =>
                dispatch({ type: "name", value: e.target.value })
              }
              placeholder="name"
              required
            />
            <input
              type="text"
              id="address"
              name="address"
              value={state.address}
              onChange={(e) =>
                dispatch({ type: "address", value: e.target.value })
              }
              placeholder="address"
              required
            />
            <input
              type="email"
              id="email"
              name="email"
              value={state.email}
              onChange={(e) =>
                dispatch({ type: "email", value: e.target.value })
              }
              placeholder="email"
              required
            />
            <br />
            <label>Enter date of birth</label>
            <br />
            <input
              type="date"
              id="dob"
              name="dob"
              value={state.dob}
              onChange={(e) => dispatch({ type: "dob", value: e.target.value })}
              required
            />
            <br />
            {/* <p>Enrolled Course: </p> */}
            <input
              type="text"
              id="courseName"
              name="courseName"
              value={`Enrolled Course: ${formRegister}`}
              readOnly
            ></input>
            <br />
            <label>Message to the tutor</label>
            <textarea
              placeholder="Something you want to say..."
              rows={5}
              value={state.message}
              onChange={(e) =>
                dispatch({ type: "message", value: e.target.value })
              }
              name="message"
              id="message"
            />
            <button>{isSubmitting ? "Submitting..." : "Submit"}</button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default CertificateForm;
export async function action({ request }) {
  const fData = await request.formData();
  const sentence = fData.get("courseName");
  const parts = sentence.split(":");
  const wordsAfterColon = parts[1].trim();
  const data = {
    name: fData.get("name"),
    address: fData.get("address"),
    email: fData.get("email"),
    dob: fData.get("dob"),
    courseName: wordsAfterColon,
    message: fData.get("message"),
  };
  console.log(data);

  const response = await fetch(
    `https://course-mania-401010-default-rtdb.asia-southeast1.firebasedatabase.app/${wordsAfterColon}.json`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );
  if (!response.ok) {
    alert("Could not submit form due to error! ");
    return response;
  }
  alert("Your form has been submitted.");
  return redirect("/");
}
