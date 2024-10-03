import  { useState } from 'react';
import './Createteacher.css'; 

const CreateTeacher = () => {
    // State variables for each field
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [qualification, setQualification] = useState('');
    const [salary, setSalary] = useState('');
    const [batchName, setBatchName] = useState('');
    const [experience, setExperience] = useState('');
    const [role, setRole] = useState('');
    const [timing, setTiming] = useState('');
    const [technology, setTechnology] = useState('');
    const [joinDate, setJoinDate] = useState('');
    const [employeeId, setEmployeeId] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(name,email,phone,address,qualification,salary,batchName,experience,role,timing,technology,joinDate,employeeId)
        const data = {
            name:name,
            email:email,
            phone:phone,
            address:address,
            qualification:qualification,
            salary:salary,
            batchName:batchName,
            experience:experience,
            role:role,
            timing:timing,
            technology:technology,
            joinDare:joinDate,
            employeeId:employeeId
        };
        console.log(data);
        
    };

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
                    <label>Salary:</label>
                    <input
                        type="number"
                        value={salary}
                        onChange={(e) => setSalary(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Batch Name:</label>
                    <input
                        type="text"
                        value={batchName}
                        onChange={(e) => setBatchName(e.target.value)}
                        required
                    />
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
