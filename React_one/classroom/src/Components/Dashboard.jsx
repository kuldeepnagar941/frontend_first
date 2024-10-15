import axios from "axios";
import "./Dashboard.css"; 
import  { useEffect, useState } from "react";
const Dashboard = () => {

  const [totalStudents, setTotalStudents] = useState(0);
  const [totalTeachers, setTotalTeachers] = useState(0);
  const [totalbatch, setTotalbatch] = useState(0);
  //const [totalTrainerSalary, setTotalTrainerSalary] = useState(0);
  //const [totalStudentFees, setTotalStudentFees] = useState(0);
  //const [totalIncome, setTotalIncome] = useState(0);


  useEffect(() => {
    fetchTotalStudents()
    fetchTotalTeachers()
    fetchTotalbatch()
  }, []);

  

  const fetchTotalStudents = async () => {
    const token = localStorage.getItem('token');

    try {
      const response = await axios.get("http://localhost:3000/student/",{headers:{'Authorization': `Bearer ${token}`}});
      //console.log(response)
      setTotalStudents(response.data.length);
    } catch (error) {
      console.error("Error fetching total students:", error);
    }
  };


  const fetchTotalTeachers = async () => {
    const token = localStorage.getItem('token');

    try {
      const response = await axios.get("http://localhost:3000/teacher/",{headers:{'Authorization': `Bearer ${token}`}});
      //console.log(response)
      setTotalTeachers(response.data.length);
    } catch (error) {
      console.error("Error fetching total teachers:", error);
    }
  };

  const fetchTotalbatch = async () => {
    const token = localStorage.getItem('token');

    try {
      const response = await axios.get("http://localhost:3000/class/",{headers:{'Authorization': `Bearer ${token}`}});
      //console.log(response)
      setTotalbatch(response.data.length);
    } catch (error) {
      console.error("Error fetching total teachers:", error);
    }
  };




  return (
    <div className="dashboard">
      <h1> Admins Panel</h1>
      <div className="dashboard-stats">

        <div className="stat-item">
          <h3>Total Students</h3>
          <p>{totalStudents}</p>
        </div>


        <div className="stat-item">
          <h3>Total Trainers</h3>
          <p>{totalTeachers}</p>
        </div>

        <div className="stat-item">
          <h3>Total Batch/Clases</h3>
          <p>{totalbatch}</p>
        </div>


        <div className="stat-item">
          <h3>Total Trainer Salary</h3>
          <p>{}</p>
        </div>


        <div className="stat-item">
          <h3>Total Student Fees</h3>
          <p>{}</p>
        </div>


        <div className="stat-item">
          <h3>Total Income</h3>
          <p>{}</p>
        </div>


      </div>
    </div>
  );
};

export default Dashboard;
