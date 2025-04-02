import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LiveDetection.css";

const LiveDetection = () => {
  const [isRecording, setIsRecording] = useState(false);
  const navigate = useNavigate();

  const startRecording = () => {
    setIsRecording(true);
    console.log("Recording started...");
  };

  const stopRecording = () => {
    setIsRecording(false);
    console.log("Recording stopped.");

    // Navigate to Preview Session
    navigate("/detectionpage");
  };

  return (
    <div className="live-detection-container">
      <header className="live-detection-header">
        <h1>Live Exam Monitoring</h1>
      </header>
      <main className="live-detection-content">
        <div className="live-video">
          <p>Live camera feed will appear here...</p>
        </div>
        <div className="detection-info">
          <h2>Detection Status</h2>
          <p>No suspicious activity detected</p>
        </div>
        <div className="buttons-container">
          <button onClick={startRecording} disabled={isRecording}>
            Start Recording
          </button>
          <button onClick={stopRecording} disabled={!isRecording}>
            Stop Recording
          </button>
        </div>
      </main>
    </div>
  );
};

export default LiveDetection;
