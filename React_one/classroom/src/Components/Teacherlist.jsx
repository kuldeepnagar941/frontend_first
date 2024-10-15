import "./TeacherList.css";
import axios from "axios";
import { useEffect, useState } from "react";

const TeacherList = () => {
  const [data, setData] = useState([]);
  const [view, setView] = useState([])
  const [modelView, setModelView] = useState(false)

  useEffect(() => {
    fetchData();
  }, []);
  const token = localStorage.getItem('token');

  const fetchData = async () => {
    const token = localStorage.getItem('token');
    try {
      const response = await axios.get("http://localhost:3000/teacher/" ,{headers:{'Authorization': `Bearer ${token}`}});
      setData(response.data);
      console.log(">>>>response>>>>>>", response);
      console.log(">>>>>data>>>>>", response.data);
    } catch (error) {
      console.log("Error in fetching", error);
    }
  };

  const singleData = async(id) =>{
    console.log(">>>>>>>>>id>>>>>>",id);
    const response = await axios.get(`http://localhost:3000/teacher/${id}`,{headers:{'Authorization': `Bearer ${token}`}} )
        console.log('>>>>single>>>',response.data);
        setView(response.data)
        setModelView(true)
      }
    
      const modelCLose = () => {
        setModelView(false)
      }

      const deleteData = async(id)  =>{
        console.log(">>>>>>>>>id>>>>>>",id);
        const response = await axios.delete(`http://localhost:3000/teacher//${id}`,{headers:{'Authorization': `Bearer ${token}`}})
        console.log(response)
        if(response.status === 201){
          alert("Delete complete")
        }
      }

  return (
    <>
    <div className="teacher-list-container">
      <h1>Teacher List</h1>
      <table className="teacher-list-table">
        <thead>
          <tr>
            {/* <th>S.No</th> */}
            <th>Name</th>
            <th> Name batch</th> 
            <th>Email</th>
            <th>Phone No.</th>
            <th>Employee ID</th>
            <th> Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              
            
            <td>{item.name}</td>
              <td>{item.batchname}</td> 
              <td>{item.email}</td>
              <td>{item.phone}</td>
              <td>{item.employeId}</td>
              <td>
              <button onClick={()=>singleData(item._id)}>View Details</button>
              <button onClick={()=>deleteData(item._id)}>Delete</button>
              </td>
              
            </tr>
          ))}
        </tbody>
        
      </table>
    </div>
    

<div>
{modelView && view && (
  <div style={modalStyles.overlay}>
  <div style={modalStyles.modal}>
        <h2> Name:-{view.name}</h2>
        <h2> Qualification:-{view.qualification}</h2>
        <h2>  Exprience:-{view.exprience}</h2>
        <h2> Address :-{view.address}</h2>
        <h2>  Salary:-{view.salary}</h2>
        <h2>JointDate:-{view.joindate}</h2>
        
        <button onClick={modelCLose}>Close</button>
  </div>
  </div>
)}

</div>


          



    </>
  );
};


const modalStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
  },
  modal: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '5px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    width: '400px',
  },
};



export default TeacherList;
