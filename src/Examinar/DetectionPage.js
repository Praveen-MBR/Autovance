import React, { useState, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./DetectionPage.css";

const DetectionPage = () => {
  const location = useLocation();
  const navigate = useNavigate(); // Fix: Use useNavigate instead of Navigate
  const recordedVideo = location.state?.recordedVideo || null;

  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isDetecting, setIsDetecting] = useState(false);
  const [vehicleAccuracy, setVehicleAccuracy] = useState(null);
  const [lSignAccuracy, setLSignAccuracy] = useState(null);
  const [result, setResult] = useState("");

  const handlePlayPause = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleStartDetection = () => {
    setIsDetecting(true);

    setTimeout(() => {
      const vehicleAcc = Math.floor(Math.random() * 21) + 80; // 80-100%
      const lSignAcc = Math.floor(Math.random() * 21) + 70; // 70-100%
      setVehicleAccuracy(vehicleAcc);
      setLSignAccuracy(lSignAcc);

      setResult(vehicleAcc >= 90 && lSignAcc >= 85 ? "PASS" : "FAIL");
      setIsDetecting(false);
    }, 3000);
  };

  const handleSendResult = () => {
    navigate("/resultspage"); // Fix: Use navigate function correctly
  };

  return (
    <div className="detection-container">
      <h1>Detection Session</h1>

      <div className="video-box">
        {recordedVideo ? (
          <video ref={videoRef} width="600">
            <source src={recordedVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <p>No video available. Please record again.</p>
        )}
      </div>

      <div className="video-controls">
        <button onClick={handlePlayPause}>
          {isPlaying ? "Pause" : "Play"}
        </button>
      </div>

      {!vehicleAccuracy && (
        <button onClick={handleStartDetection} className="start-detection-btn">
          {isDetecting ? "Detecting..." : "Start Detection"}
        </button>
      )}

      {vehicleAccuracy && (
        <div className="results-box">
          <p><strong>Vehicle Accuracy:</strong> {vehicleAccuracy}%</p>
          <p><strong>“L” Sign Accuracy:</strong> {lSignAccuracy}%</p>
          <div className={`result ${result === "PASS" ? "pass" : "fail"}`}>
            <h2>{result}</h2>
          </div>

          <button onClick={handleSendResult} className="send-result-btn">
            Send Result
          </button>
        </div>
      )}
    </div>
  );
};

export default DetectionPage;
