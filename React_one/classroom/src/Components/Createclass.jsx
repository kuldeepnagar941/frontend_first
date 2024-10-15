import { useState } from 'react';
import './Createclass.css';
import axios from 'axios';  
import { useNavigate } from "react-router-dom";

const Createclass = () => {

    const[batchName,setBatchName] = useState('')
    const[time,setTime] = useState('')
    const[duration,setDuration] = useState('')
    const[subject,setSubject] = useState('')
    const[fee,setFee] = useState('')
    const[weekoff,setWeekOff] = useState('')
    const[numberofseat,setNumberOfSeat] = useState('')

    const naviagete = useNavigate()

    const handleSubmit = async(e) => {
        e.preventDefault()
        //console.log(batchName,time,duration,subject,fee,weekoff,numberofseat)
        const data ={
            batchName:batchName,
            time:time,
            duration:duration,
            subject:subject,
            fee:fee,
            weekoff:weekoff,
            numberofseat:numberofseat
        }
        const token = localStorage.getItem('token');
        console.log(data)
        const response = await axios.post("http://localhost:3000/class/", data,{headers:{'Authorization': `Bearer ${token}`}});      
        console.log("Response: ", response);
        if(response.status === 201){
          alert("data Saved Succesfully")
          naviagete("/classlist")
          
        }
        
    //     else if(response.status === 400){
    //       alert("All fields are required")
    //     }else if(response.status === 500){
    //       alert("internal server error")
    //     }


     }


  return (
    <div className="batch-form-container">
      <h2>Create New Class</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label >Batch Name: </label>
          <input type="text"   value={batchName}  onChange={(e) => setBatchName(e.target.value)} /> 
        </div>

        <div className="form-group">
          <label >Time: </label>
          <input type="text"  value={time}  onChange={(e) => setTime(e.target.value)}  />
        </div>

        <div className="form-group">
          <label>Duration: </label>
          <input type="text"  value={duration}  onChange={(e) => setDuration(e.target.value)} />
        </div>

        <div className="form-group">
          <label >Subject: </label>
          <input type="text"  value={subject}  onChange={(e) => setSubject(e.target.value)} />
        </div>

        <div className="form-group">
          <label >Fee: </label>
          <input type="text"  value={fee}  onChange={(e) => setFee(e.target.value)} />
        </div>

        <div className="form-group">
          <label >Week Off: </label>
          <input type="text"  value={weekoff}  onChange={(e) => setWeekOff(e.target.value)} />
        </div>

        <div className="form-group">
          <label >Number of Seats: </label>
          <input type="text"  value={numberofseat}  onChange={(e) => setNumberOfSeat(e.target.value)} />
        </div>

        <button type='submit'>Create Class Room</button>
      </form>
    </div>
  );
};

export default Createclass;
