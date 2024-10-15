import  { useState,useEffect } from 'react';
import './Createteacher.css'; 
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const CreateTeacher = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [qualification, setQualification] = useState('');
    const [salary, setSalary] = useState('');
    //const [batchname, setBatchName] = useState('');
    const [experience, setExperience] = useState('');
    const [role, setRole] = useState('');
    const [timing, setTiming] = useState('');
    const [technology, setTechnology] = useState('');
    const [joinDate, setJoinDate] = useState('');
    const [employeeId, setEmployeeId] = useState('');
    const [classes,setClasses] = useState([])
    const [selectedbatch,setSelectedbatch] = useState('')

    const navigate = useNavigate()

    const handleSubmit =async (e) => {
        e.preventDefault();
        // console.log(name,email,phone,address,qualification,salary,batchName,experience,role,timing,technology,joinDate,employeeId)
        const data = {
            name:name,
            email:email,
            phone:phone,
            address:address,
            qualification:qualification,
            salary:salary,
            batchName:selectedbatch,
            experience:experience,
            role:role,
            timing:timing,
            technology:technology,
            joinDare:joinDate,
            employeeId:employeeId
        };
        console.log(data);
        const token = localStorage.getItem('token');
        const response = await axios.post("http://localhost:3000/teacher/", data ,{headers:{'Authorization': `Bearer ${token}`}});     //localhost:3000/teacher/
        console.log("Response: ", response);
        if(response.status === 201){
          alert("data Saved Succesfully")
          navigate("/teacherlist")
        }
        
    };
    useEffect(() => {
        fetch();
      }, []);

    const fetch = async() =>{
        const token = localStorage.getItem('token');
        const response = await axios.get("http://localhost:3000/class/",{headers:{'Authorization': `Bearer ${token}`}})
        console.log(response)
        setClasses(response.data)
    }
    const handleBatchselect = (e)=>{
        setSelectedbatch(e.target.value)
    }
    


    return (
        <div className="form-container">
            <h2>Create Teacher</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Name:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Email:</label>
                    <input
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Phone:</label>
                    <input
                        type="text"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Address:</label>
                    <input
                        type="text"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Qualification:</label>
                    <input
                        type="text"
                        value={qualification}
                        onChange={(e) => setQualification(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Salary:</label>
                    <input
                        type="text"
                        value={salary}
                        onChange={(e) => setSalary(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Batch Name:</label>
                   <select onChange={handleBatchselect} value={selectedbatch}>
                    <option value="" >select batch</option>
                    {
                        classes.map((item)=>(
                            <option key={item.id} value={item._id}> {item.batchName}</option>
                        ))
                    }
                   </select>
                </div>
                <div className="form-group">
                    <label>Experience:</label>
                    <input
                        type="text"
                        value={experience}
                        onChange={(e) => setExperience(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Role:</label>
                    <input
                        type="text"
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Timing:</label>
                    <input
                        type="text"
                        value={timing}
                        onChange={(e) => setTiming(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Technology:</label>
                    <input
                        type="text"
                        value={technology}
                        onChange={(e) => setTechnology(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Join Date:</label>
                    <input
                        type="date"
                        value={joinDate}
                        onChange={(e) => setJoinDate(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Employee ID:</label>
                    <input
                        type="text"
                        value={employeeId}
                        onChange={(e) => setEmployeeId(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="submit-btn">Create Teacher</button>
            </form>
        </div>
    );
};

export default CreateTeacher;
