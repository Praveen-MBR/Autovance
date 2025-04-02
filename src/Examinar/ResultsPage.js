import React from "react";
import "./ResultsPage.css";
import { useLocation, useNavigate } from "react-router-dom";

const ResultsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { vehicleAccuracy, lSignAccuracy, result } = location.state || {};

  const handleSendResult = () => {
    alert("Result Sent Successfully!");
    navigate("/home");
  };

  return (
    <div className="results-container">
      <h1>Driving Test Results</h1>
      
      {/* Personal Details Section */}
      <div className="section">
        <h2>Personal Details</h2>
        <p>Holders of a learner's license are not allowed to learn to drive any vehicles other than a motorcycle or a four-wheel tractor unless accompanied by an experienced driver who holds a valid driving license.</p>
        <p>"L" plates must be carried on the front and rear of all vehicles when learner drivers are in control.</p>
      </div>
      
      {/* Learner’s Permit Details */}
      <div className="section">
        <h2>Details of Learner’s Permit</h2>
        <p>Non-commercial practical tests should be booked 7 days before the Learner’s permit expiry date.</p>
      </div>
      
      {/* Issuing Details */}
      <div className="section">
        <h2>Issuing Details</h2>
        <p><strong>Vehicle Accuracy:</strong> {vehicleAccuracy}%</p>
        <p><strong>“L” Sign Accuracy:</strong> {lSignAccuracy}%</p>
      </div>
      
      {/* Pass/Fail Result */}
      <div className={`result-box ${result === "PASS" ? "pass" : "fail"}`}>
        <h2>{result}</h2>
      </div>
      
      {/* Back and Send Buttons */}
      <div className="button-group">
        <button onClick={() => window.history.back()}>Back</button>
        <button onClick={handleSendResult}>Send</button>
      </div>
    </div>
  );
};

export default ResultsPage;
