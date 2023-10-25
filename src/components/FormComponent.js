// import React from "react";
// import classes from ".";
// import { Form } from "react-router-dom";
// const SubmitForm = () => {
//   return (
//     <div className={classes.formContainer}>
//       <Form method="POST">
//         <input type="text" id="name" name="name" placeholder="name" required />
//         <input
//           type="text"
//           id="address"
//           name="address"
//           placeholder="address"
//           required
//         />
//         <input
//           type="email"
//           id="email"
//           name="email"
//           placeholder="email"
//           required
//         />
//       </Form>
//     </div>
//   );
// };

// export default SubmitForm;
// import React, { useEffect, useReducer } from "react";
// import classes from "./FormComponent.module.css";
// import { Form, useNavigation } from "react-router-dom";
// const initStates = {
//   name: "",
//   address: "",
//   email: "",
// };
// const reducer = (state, action) => {
//   switch (action.type) {
//     case "name":
//       return { ...state, name: action.value };
//     case "address":
//       return { ...state, address: action.value };
//     case "email":
//       return { ...state, email: action.value };
//     case "reset":
//       return { name: "", address: "", email: "" };
//     default:
//       return state;
//   }
// };
// const FormComponent = () => {
//   const [state, dispatch] = useReducer(reducer, initStates);
//   function submitHandler() {
//     dispatch({ type: "reset" });
//   }
//   const navigation = useNavigation();
//   const isSubmitting = navigation.state === "submitting";
//   useEffect(() => {
//     console.log(isSubmitting);
//   }, [isSubmitting]);
//   return (
//     <div className={classes.formContainer}>
//       <Form method="POST" onSubmit={submitHandler}>
//         <input
//           id="name"
//           name="name"
//           type="text"
//           placeholder="Name"
//           required
//           value={state.name}
//           onChange={(e) => {
//             dispatch({ type: "name", value: e.target.value });
//           }}
//           style={{ marginTop: "2vw" }}
//         />
//         <input
//           id="email"
//           name="email"
//           type="email"
//           placeholder="Email"
//           required
//           value={state.email}
//           onChange={(e) => {
//             dispatch({ type: "email", value: e.target.value });
//           }}
//         />
//         <input
//           id="address"
//           name="address"
//           type="text"
//           placeholder="Adress"
//           required
//           value={state.address}
//           onChange={(e) => {
//             dispatch({ type: "adress", value: e.target.value });
//           }}
//         />
//         <br />
//         <label for="birthday">Date of birth</label> <br />
//         <input type="date" id="birthday" name="birthday"></input>
//         <button>{isSubmitting ? "Submitting..." : "Submit"}</button>
//       </Form>
//     </div>
//   );
// };

// export default FormComponent;

// export async function action({ request }) {
//   const formData = await request.formData();
//   const data = {
//     name: formData.get("name"),
//     phoneNumber: formData.get("phone"),
//     email: formData.get("email"),
//   };
//   console.log(data);
//   const response = await fetch(
//     "https://shubhsita-18680-default-rtdb.asia-southeast1.firebasedatabase.app/Contacts.json",
//     {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(data),
//     }
//   );
//   if (!response.ok) {
//     alert("Could not submit form due to error! ");
//     return response;
//   }
//   return response;
// }
