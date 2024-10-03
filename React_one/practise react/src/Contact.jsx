import { useState } from "react"


function Contact() {


  


  const dropdown = () =>{
    const [selectedOption, setSelectedOption] = useState('');
  }
 
  
    
  return (
   <>
  <div>
    <label >Choose an option:</label>
    <select  value="{}" onchange="{}">
      <option value>Select...</option>
      <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
      <option value="option3">Option 3</option>
    </select>
  </div>
  </>




  )



}

export default Contact