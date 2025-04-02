import React from "react";
import "./CandidateList.css";

const candidates = [
  { id: "C001", name: "John Doe", nic: "987654321V", date: "2025-04-10" },
  { id: "C002", name: "Jane Smith", nic: "123456789V", date: "2025-04-12" },
  { id: "C003", name: "Michael Johnson", nic: "456789123V", date: "2025-04-15" },
];

const CandidateList = () => {
  return (
    <div className="candidate-list-container">
      <h1>Candidate List</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>NIC</th>
            <th>Approved Date</th>
          </tr>
        </thead>
        <tbody>
          {candidates.map((candidate) => (
            <tr key={candidate.id}>
              <td>{candidate.id}</td>
              <td>{candidate.name}</td>
              <td>{candidate.nic}</td>
              <td>{candidate.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={() => window.history.back()}>Back</button>
    </div>
  );
};

export default CandidateList;
