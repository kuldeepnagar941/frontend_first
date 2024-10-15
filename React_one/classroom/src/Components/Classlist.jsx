import "./Classlist.css"; 
import axios from "axios";
import { useState,useEffect } from "react";

const Classlist = () => {
  
    const [data,setData] = useState([])
    const [view, setView] = useState([])
    const [modelView, setModelView] = useState(false)
  
    
    useEffect(()=>{
     fetch()
    },[])

    const fetch = async ()=>{
      const token = localStorage.getItem('token')
        try {
          const response = await axios.get("http://localhost:3000/class/",{headers:{'Authorization': `Bearer ${token}`}})
          console.log(response,token)
          setData(response.data)
           
        } catch (error) {
            console.log("err in fetching", error)
            
        }
    }

    const singleData = async(id) =>{
      const token = localStorage.getItem('token');
      console.log(">>>>>>>>>id>>>>>>",id);
      const response = await axios.get(`http://localhost:3000/class/${id}` ,{headers:{'Authorization': `Bearer ${token}`}})
          console.log('>>>>single>>>',response.data);
          setView(response.data)
          setModelView(true)
        }
      
        const modelCLose = () => {
          setModelView(false)
        }

    const deleteData = async(id)  =>{
      const token = localStorage.getItem('token');
      console.log(">>>>>>>>>id>>>>>>",id);
      const response = await axios.delete(`http://localhost:3000/class/${id}` ,{headers:{'Authorization': `Bearer ${token}`}})
      console.log(response)
      if(response.status === 201){
        alert("Delete Succesful")
      }
      
    }

  return (
    <>
    <div className="class-card-list">
      {data.map((item,index) => (
        <div key={index} className="class-card">
          <h2>Batch: {item.batchName}</h2>
          <p>Subject: {item.subject}</p>
          <button onClick={()=>singleData(item._id)}>View Details</button>
          <button onClick={()=>deleteData(item._id)}>Delete</button>
        </div>
      ))}
      
    </div>

      <div>
      {modelView && view && (
        <div style={modalStyles.overlay}>
        <div style={modalStyles.modal}>
              <h2> Batchname:-{view.batchName}</h2>
              <h2> Subject:-{view.subject}</h2>
              <h2> Numberofseat :-{view.numberofseat}</h2>
              <h2> Time :-{view.time}</h2>
              <h2>Duration:-{view.duration}</h2>
              <h2>Fee :-{view.fee}</h2>
              
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


export default Classlist;
