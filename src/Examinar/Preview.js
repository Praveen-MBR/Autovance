import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Preview.css";

const Preview = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { candidateName, candidateID } = location.state || {}; // Candidate details

  const handleDone = () => {
    navigate("/live-detection"); // Navigate to Live Detection page
  };

  return (
    <div className="preview-container">
      <header className="preview-header">
        <h1>Preview Candidate Details</h1>
      </header>
      <main className="preview-content">
        {/* Candidate Information */}
        <div className="preview-box">
          <h2>Candidate Information</h2>
          <p><strong>Name:</strong> {candidateName || "Not Provided"}</p>
          <p><strong>ID:</strong> {candidateID || "Not Provided"}</p>
        </div>

        {/* Medical Report */}
        <div className="preview-box">
          <h2>Medical Report</h2>
          <div className="image-section">
            <div>
              <h3>Front View</h3>
              <img src="/images/medical-front.jpg" alt="Medical Report Front" />
            </div>
            <div>
              <h3>Back View</h3>
              <img src="/images/medical-back.jpg" alt="Medical Report Back" />
            </div>
          </div>
        </div>

        {/* L-Permit */}
        <div className="preview-box">
          <h2>L-Permit</h2>
          <div className="image-section">
            <div>
              <h3>Front View</h3>
              <img src="/images/lpermit-front.jpg" alt="L-Permit Front" />
            </div>
          </div>
        </div>

        {/* Done Button */}
        <div className="preview-buttons">
          <button onClick={handleDone} className="done-btn">Done</button>
        </div>
      </main>
    </div>
  );
};

export default Preview;
