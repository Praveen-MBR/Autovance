import React from "react";
import { useNavigate } from "react-router-dom";
import "./ExamHome.css";

const ExamHome = () => {
  const navigate = useNavigate();

  return (
    <div className="exam-home-container">
      {/* Header Section */}
      <header className="exam-home-header">
        <h1>Welcome to Exam Portal</h1>
        <p>Your gateway to seamless exam management</p>
      </header>

      {/* Main Content */}
      <main className="exam-home-content">
        {/* Start Exam Section */}
        <div className="exam-card">
          <span className="icon">📝</span>
          <h2>Start a New Exam</h2>
          <p>Begin a new exam session with a single click.</p>
          <button className="primary-btn" onClick={() => navigate("/application")}>
            Start Exam
          </button>
        </div>

        {/* Candidate List Section */}
        <div className="exam-card">
          <span className="icon">📋</span>
          <h2>Candidate List</h2>
          <p>View the list of registered candidates.</p>
          <button className="secondary-btn" onClick={() => navigate("/candidatelist")}>
            View Candidates
          </button>
        </div>
      </main>
    </div>
  );
};

export default ExamHome;
