import React, { useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import "./DetectionPage.css";

const DetectionPage = () => {
  const location = useLocation();
  const recordedVideo = location.state?.recordedVideo || null; // Get recorded video

  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isDetecting, setIsDetecting] = useState(false);
  const [vehicleAccuracy, setVehicleAccuracy] = useState(null);
  const [lSignAccuracy, setLSignAccuracy] = useState(null);
  const [result, setResult] = useState("");

  // Play/Pause Video
  const handlePlayPause = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  // Start Detection Process
  const handleStartDetection = () => {
    setIsDetecting(true);

    // Simulating AI Detection with Fake Accuracy
    setTimeout(() => {
      const vehicleAcc = Math.floor(Math.random() * 21) + 80; // 80-100%
      const lSignAcc = Math.floor(Math.random() * 21) + 70; // 70-100%
      setVehicleAccuracy(vehicleAcc);
      setLSignAccuracy(lSignAcc);

      // Determine Pass or Fail
      setResult(vehicleAcc >= 90 && lSignAcc >= 85 ? "PASS" : "FAIL");

      setIsDetecting(false);
    }, 3000); // Simulate 3 sec detection time
  };

  // Send Result Function
  const handleSendResult = () => {
    alert(`Result Sent!\nStatus: ${result}\nVehicle Accuracy: ${vehicleAccuracy}%\nL-Sign Accuracy: ${lSignAccuracy}%`);
  };

  return (
    <div className="detection-container">
      <h1>Detection Session</h1>

      {/* Video Player */}
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

      {/* Play/Pause Buttons */}
      <div className="video-controls">
        <button onClick={handlePlayPause}>
          {isPlaying ? "Pause" : "Play"}
        </button>
      </div>

      {/* Start Detection Button */}
      {!vehicleAccuracy && (
        <button onClick={handleStartDetection} className="start-detection-btn">
          {isDetecting ? "Detecting..." : "Start Detection"}
        </button>
      )}

      {/* Show Detection Results */}
      {vehicleAccuracy && (
        <div className="results-box">
          <p><strong>Vehicle Accuracy:</strong> {vehicleAccuracy}%</p>
          <p><strong>“L” Sign Accuracy:</strong> {lSignAccuracy}%</p>
          <div className={`result ${result === "PASS" ? "pass" : "fail"}`}>
            <h2>{result}</h2>
          </div>

          {/* Send Result Button (Bottom Right) */}
          <button onClick={handleSendResult} className="send-result-btn">
            Send Result
          </button>
        </div>
      )}
    </div>
  );
};

export default DetectionPage;
