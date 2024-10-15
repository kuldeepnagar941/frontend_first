import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
//import Sidebar from './Sidebar';

const LoginPage = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {email, password};
    console.log(`Login:`, data);

    const response = await axios.post('http://localhost:3000/user/login', data);
    console.log("Response", response);
    console.log(response.data.token)
    localStorage.setItem('token', response.data.token);

    //localStorage.setItem('loginname', response.data.existingUser.name);
    //console.log("login_user_name")
     
      
    
    if(response.status === 200){
     navigate("/sidebar")
      alert("login succesfully")
    }



    //  if(response.data.User.role==="student"){
    //   navigate("/studentlist")
    //  }
    //  if(response.data.User.role==="teacher"){
    //     navigate("/teacherlist")
    //  }
    //  if(response.data.User.role === "admin"){
    //   navigate("/dashboard")
    //  }


  }
  

  const handleSignUp = () => {
    console.log('Redirect to sign up page');
    navigate("/signup")

  };

  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <h2>Login</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.inputGroup}>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={styles.input}
            />
          </div>
          <div style={styles.inputGroup}>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={styles.input}
            />
          </div>
          <button type="Submit" style={styles.loginButton}>
            Login
          </button>
        </form>
        <div style={styles.signupContainer}>
          <p> Not have an account?</p>
          <button onClick={handleSignUp} style={styles.signupButton} >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};


const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f4f4f4',
  },
  formContainer: {
    backgroundColor: '#fff',
    padding: '2rem',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  inputGroup: {
    marginBottom: '1rem',
  },
  input: {
    width: '100%',
    padding: '0.5rem',
    fontSize: '1rem',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  loginButton: {
    padding: '0.75rem',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginBottom: '1rem',
  },
  signupContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  signupButton: {
    padding: '0.75rem',
    backgroundColor: '#28a745',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default LoginPage;
