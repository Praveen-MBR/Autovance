import React from "react";
import { useNavigate } from "react-router-dom";
import "./ExaminarLogin.css";

const ExaminarLogin = () => {
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    navigate("/home");
  };

  return (
    <div className="examinar-login-container">
      <div className="examinar-login-box">
        <h2>Examinar Login</h2>
        <form onSubmit={handleLogin}>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" placeholder="Enter your username" />
          
          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Enter your password" />
          
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default ExaminarLogin;
