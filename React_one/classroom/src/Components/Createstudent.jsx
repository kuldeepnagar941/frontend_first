import  { useState } from 'react';
import './Createstudent.css'; 

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
    const [batchName, setBatchName] = useState('');
    const [joinDate, setJoinDate] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name,email,phone,address,qualification,fee,gender,rollNo,batchName,joinDate,)
        const data = {
            name:name,
            email:email,
            phone:phone,
            address:address,
            qualification:qualification,
            fee:fee,
            gender:gender,
            rollNo:rollNo,
            batchName:batchName,
            joinDate:joinDate,
        };
        console.log(data);
        // Additional logic for submitting the data
    };

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
                    <input
                        type="text"
                        value={batchName}
                        onChange={(e) => setBatchName(e.target.value)}
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
                <button type="submit" className="submit-btn">Create Student</button>
            </form>
        </div>
    );
};

export default CreateStudent;
