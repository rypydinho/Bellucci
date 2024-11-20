import "./Login.css";
import { auth } from "../firebase.config";
import { signInWithEmailAndPassword } from "firebase/auth";

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Call the onLogin function passed as a prop
    // onLogin({ email, password });

    try {
      await signInWithEmailAndPassword(auth, email, password);
      
      // Clear fields 
      setEmail("");
      setPassword("");

      // nav to home page
      navigate("/");

    } catch (error) {
      setError(error.message);
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
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
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
