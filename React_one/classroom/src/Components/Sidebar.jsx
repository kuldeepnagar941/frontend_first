import { Link } from "react-router-dom"; 
import "./Sidebar.css"; 

const Sidebar = () => {
  //const userName = localStorage.getItem('login_user_name')
  return (
    <>
      <div className="maincontainer">
        <div className="     ">                                    
          <div className="sidebar">
            <ul className="sidebar-links">

            {/* <li>
                <span style={{color: "green"}}> Hi {userName}</span>
              </li> */}

              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>

            
              <li className="hover-dropdown">
                <span>Class</span>
                <ul className="dropdown">
                  <li><Link to="/createclass">Create Class</Link></li>
                  <li><Link to="/classlist">Class List</Link></li>
                </ul>
              </li>

              <li className="hover-dropdown">
                <span>Teacher</span>
                <ul className="dropdown">
                  <li><Link to="/createteacher">Create Teacher</Link></li>
                  <li><Link to="/teacherlist">Teacher List</Link></li>
                </ul>
              </li>

              <li className="hover-dropdown">
                <span>Student</span>
                <ul className="dropdown">
                  <li><Link to="/createstudent">Create Student</Link></li>
                  <li><Link to="/studentlist">Student List</Link></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>

        <div className="sidebarsidespace">
          <h1>Welcome to Classroom </h1>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
