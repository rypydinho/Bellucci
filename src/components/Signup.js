import React, { useState } from "react";
import "./Signup.css";
import { auth, db } from "../firebase.config";
import { createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import validator from "validator";

// Validation schema
const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .matches(/^[a-zA-Z\s]+$/, "First Name can only contain letters.")
    .max(50, "First Name cannot exceed 50 characters.")
    .required("First Name is required."),
  lastName: Yup.string()
    .matches(/^[a-zA-Z\s]+$/, "Last Name can only contain letters.")
    .max(50, "Last Name cannot exceed 50 characters.")
    .required("Last Name is required."),
  email: Yup.string()
    .email("Invalid email format.")
    .required("Email is required."),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters.")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter.")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter.")
    .matches(/\d/, "Password must contain at least one number.")
    .matches(/[@$!%*?&#]/, "Password must contain at least one special character.")
    .required("Password is required."),
});

const Signup = ({ onSignup }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [firebaseError, setFirebaseError] = useState("");

  const navigate = useNavigate();

  const validateInputs = async () => {
    try {
      await validationSchema.validate(
        { firstName, lastName, email, password },
        { abortEarly: false }
      );
      setErrors(""); // Clear error state
      return true;
    } catch (validationErrors) {
      const errorMessages = {};
      validationErrors.inner.forEach((error) => {
        errorMessages[error.path] = error.message;
      });
      setErrors(errorMessages);
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Call the onSignup function passed as a prop
    // onSignup({ firstName, lastName, email, password });

    const isValid = await validateInputs(); // Validate form inputs
    if (!isValid) return;


    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Escape HTML inputs to prevent XSS attacks
      const escapedFirstName = firstName.replace(/[<>&"'`]/g, "");
      const escapedLastName = lastName.replace(/[<>&"'`]/g, "");

      // Store user in firestore db
      await setDoc(doc(db, "users", user.uid), {
        escapedFirstName,
        escapedLastName,
        email
      });

      await signOut(auth);

      // Clear fields and errors
      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
      setErrors({});
      setFirebaseError("");

      navigate("/login");
    } catch (error) {
      setFirebaseError(error.message);
    }

  };

  return (
    <div className="signup-container">
      <form onSubmit={handleSubmit} className="signup-form">
        <h2>Sign Up</h2>
        <div className="form-group">
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
              setErrors((prev) => ({ ...prev, firstName: "" })); // Clear error for this field
            }}
            required
          />
          {errors.firstName && <p className="error-message">{errors.firstName}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value);
              setErrors((prev) => ({ ...prev, lastName: "" })); // Clear error for this field
            }}
            required
          />
          {errors.lastName && <p className="error-message">{errors.lastName}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setErrors((prev) => ({ ...prev, email: "" })); // Clear error for this field
            }}
            required
          />
          {errors.email && <p className="error-message">{errors.email}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setErrors((prev) => ({ ...prev, password: "" })); // Clear error for this field
            }}
            required
          />
          {errors.password && <p className="error-message">{errors.password}</p>}
        </div>
        {firebaseError && <p className="firebase-error">{firebaseError}</p>}
        <button type="submit" className="signup-button">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
