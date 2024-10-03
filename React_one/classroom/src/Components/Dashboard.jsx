//import React, { useState,  } from "react";
import "./Dashboard.css"; // Custom CSS for styling

const Dashboard = () => {
  
//   const [totalStudents, setTotalStudents] = useState();
//   const [totalTrainers, setTotalTrainers] = useState();
//   const [totalTrainerSalary, setTotalTrainerSalary] = useState();
//   const [totalStudentFees, setTotalStudentFees] = useState(); 
//   const [totalIncome, setTotalIncome] = useState(); 
//   const [profitLoss, setProfitLoss] = useState(); 

  
  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <div className="dashboard-stats">
        <div className="stat-item">
          <h3>Total Students</h3>
          <p>{100}</p>
        </div>
        <div className="stat-item">
          <h3>Total Trainers</h3>
          <p>{1000}</p>
        </div>
        <div className="stat-item">
          <h3>Total Trainer Salary</h3>
          <p>{1000}</p>
        </div>
        <div className="stat-item">
          <h3>Total Student Fees</h3>
          <p>{1000}</p>
        </div>
        <div className="stat-item">
          <h3>Total Income</h3>
          <p>{1000}</p>
        </div>


        {/* <div className={`stat-item ${profitLoss >= 0 ? "profit" : "loss"}`}>
          <h3>{profitLoss >= 0 ? "Profit" : "Loss"}</h3>
          <p>${Math.abs(profitLoss).toLocaleString()}</p>
        </div> */}

      </div>
    </div>
  );
};

export default Dashboard;
