import { useState } from "react";
import "./Signup.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student"); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    const Data = { name, email, phone, password, role };
    console.log("Data: ", Data);

      const response = await axios.post("http://localhost:3000/user/signup", Data);
      console.log("Response: ", response);
      if(response.status === 201){
        alert("data Saved Succesfully")
        navigate("/")
      }else if(response.status === 400){
        alert("All fields are required")
      }else if(response.status === 500){
        alert("internal server error")
      }
   
  };

  const handleLogin = () => {
    navigate("/");
  };

  return (
    <div className="signup-container">
      <h2>Signup Form</h2>
      <form onSubmit={handleSubmit} className="signup-form">
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
          <label htmlFor="phone">Phone Number:</label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Role:</label>
          <div className="role-options">
            <label>
              <input
                type="radio"
                name="role"
                value="student"
                checked={role === "student"}
                onChange={() => setRole("student")}
              />
             Student
            </label>
            <label>
              <input
                type="radio"
                name="role"
                value="teacher"
                checked={role === "teacher"}
                onChange={() => setRole("teacher")}
              />
              Teacher
            </label>
            <label>
              <input
                type="radio"
                name="role"
                value="admin"
                checked={role === "admin"}
                onChange={() => setRole("admin")}
              />
              Admin
            </label>
          </div>
        </div>

        <div className="form-group">
          <button type="submit" className="signup-btn">Sign Up</button>
        </div>

        <div className="form-group">
          <button type="button" onClick={handleLogin} className="login-btn">Login</button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
