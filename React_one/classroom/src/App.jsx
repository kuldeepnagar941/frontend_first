import { BrowserRouter,  Routes, Route } from "react-router-dom";
// import LoginPage from "./Components/Login"
import Signup from "./Components/Signup"
import Sidebar from "./Components/Sidebar";
import Dashboard from "./Components/Dashboard";
import Createclass from "./Components/Createclass";
import Classlist from "./Components/Classlist";
import CreateStudent from "./Components/Createstudent";
import Studentlist from "./Components/Studentlist";
import CreateTeacher from "./Components/Createteacher";
import TeacherList from "./Components/Teacherlist";
// import login1 from './Components/login1';
import LoginPage from "./Components/Login";


function App() {
  return (
    <div>
    
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/sidebar" element={<Sidebar/>}/>
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/createclass" element={<Createclass/>}/>
      <Route path="/classlist" element={<Classlist/>}/>
      <Route path="/createstudent" element={<CreateStudent/>}/>
      <Route path="/studentlist" element={<Studentlist/>}/>
      <Route path="/createteacher" element={<CreateTeacher/>}/>
      <Route path="/teacherlist" element={<TeacherList/>}/>
      </Routes>
    </BrowserRouter>

    </div>
  )
}

export default App