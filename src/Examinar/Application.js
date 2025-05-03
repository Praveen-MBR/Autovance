import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Application.css";

const Application = ({ onClose }) => {
  const [candidateName, setCandidateName] = useState("");
  const [candidateID, setCandidateID] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate("/preview", { state: { candidateName, candidateID } });
    if (onClose)onClose(); 
  };

  return (
    <div className="application-overlay">
      <div className="application-popup">
        <h2>Candidate Application</h2>
        <form onSubmit={handleSubmit}>
          <label>Candidate Name</label>
          <input
            type="text"
            placeholder="Enter candidate name"
            value={candidateName}
            onChange={(e) => setCandidateName(e.target.value)}
            required
          />

          <label>Candidate ID</label>
          <input
            type="text"
            placeholder="Enter candidate ID"
            value={candidateID}
            onChange={(e) => setCandidateID(e.target.value)}
            required
          />

          <div className="popup-buttons">
            <button type="submit">Submit</button>
            <button type="button" onClick={onClose} className="close-btn">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Application;
