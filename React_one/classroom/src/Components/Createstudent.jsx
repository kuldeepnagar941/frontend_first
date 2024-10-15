import  { useState ,useEffect} from 'react';
import './Createstudent.css';
import axios from 'axios'; 
import { useNavigate } from "react-router-dom";

const CreateStudent = () => {
    // Separate useState hooks for each field
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [qualification, setQualification] = useState('');
    const [fee, setFee] = useState('');
    const [gender, setGender] = useState('');
    const [rollNo, setRollNo] = useState('');
   // const [batchName, setBatchName] = useState('');
    const [joinDate, setJoinDate] = useState('');
    const [classes,setClasses] = useState([])
    const [selectedbatch,setSelectedbatch] = useState('')

    const navigate = useNavigate()

    const handleSubmit = async(e) => {
        e.preventDefault();
        console.log(name,email,phone,address,qualification,fee,gender,rollNo,selectedbatch,joinDate,)
        const data = {
            name:name,
            email:email,
            phone:phone,
            address:address,
            qualification:qualification,
            fee:fee,
            gender:gender,
            rollNo:rollNo,
            batchName:selectedbatch,
            joinDate:joinDate,
        };
        console.log(data);
        const token = localStorage.getItem('token');
        const response = await axios.post("http://localhost:3000/student/", data,{headers:{'Authorization': `Bearer ${token}`}});
        console.log("Response: ", response);
        if(response.status === 201){
          alert("data Saved Succesfully")
          navigate("/studentlist")
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
            <h2>Create Student</h2>
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
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Phone:</label>
                    <input
                        type="tel"
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
                    <label>Fee:</label>
                    <input
                        type="text"
                        value={fee}
                        onChange={(e) => setFee(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Gender:</label>
                    <select value={gender} onChange={(e) => setGender(e.target.value)} required>
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Roll No:</label>
                    <input
                        type="text"
                        value={rollNo}
                        onChange={(e) => setRollNo(e.target.value)}
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
                    <label>Join Date:</label>
                    <input
                        type="date"
                        value={joinDate}
                        onChange={(e) => setJoinDate(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="submit-btn">Create Student</button>
            </form>
        </div>
    );
};

export default CreateStudent;
