import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ExaminarLogin from "./Examinar/ExaminarLogin";
import ExamHome from "./Examinar/ExamHome";
import LiveDetection from "./Examinar/LiveDetection";
import Application from "./Examinar/Application";
import Preview from "./Examinar/Preview";
import DetectionPage from "./Examinar/DetectionPage";
import ResultsPage from "./Examinar/ResultsPage";
import CandidateList from "./Examinar/CandidateList";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ExaminarLogin />} />
        <Route path="/home" element={<ExamHome />} />
        <Route path="/live-detection" element={<LiveDetection />} />
        <Route path="/application" element={<Application/>} />
        <Route path="/preview" element={<Preview/>} />
        <Route path="/detectionpage" element={<DetectionPage/>}/>
        <Route path="/resultspage" element={<ResultsPage/>}/>
        <Route path="/candidatelist" element={<CandidateList/>}/>
      </Routes>
    </Router>
  );
};

export default App;
