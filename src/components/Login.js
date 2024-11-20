import "./Login.css";
import { auth } from "../firebase.config";
import { signInWithEmailAndPassword } from "firebase/auth";

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

// Validation schema using Yup
const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email format.")
    .required("Email is required."),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters.")
    .required("Password is required."),
});


const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [firebaseError, setFirebaseError] = useState("");


  const navigate = useNavigate();

  const validateInputs = async () => {
    try {
      await validationSchema.validate({ email, password }, { abortEarly: false });
      setErrors({});
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
    // Call the onLogin function passed as a prop
    // onLogin({ email, password });

    // Validate form inputs
    const isValid = await validateInputs();
    if (!isValid) return;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      
      // Clear fields and errors
      setEmail("");
      setPassword("");
      setErrors({});
      setFirebaseError("");

      // nav to home page
      navigate("/");

    } catch (error) {
      setFirebaseError(error.message);
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setErrors((prev) => ({ ...prev, email: "" }));
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
              setErrors((prev) => ({ ...prev, password: "" }));
            }}
            required
          />
          {errors.password && <p className="error-message">{errors.password}</p>}
        </div>
        {firebaseError && <p className="firebase-error">{firebaseError}</p>}
        <button type="submit" className="login-button">
          Login
        </button>
        <p className="signup-link">
          Don't have an account?{" "}
          <a className="signup-button" href="/signup">
            Sign up
          </a>
        </p>
      </form>
    </div>
  );
};

export default Login;
