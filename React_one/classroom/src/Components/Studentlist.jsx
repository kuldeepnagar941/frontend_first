import "./StudentList.css"; // Custom CSS for styling

const StudentList = () => {
  
  const students = [
    { id: 1, name: "John Doe", email: "john@example.com", phone: "123-456-7890", batch: "Batch A" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", phone: "234-567-8901", batch: "Batch B" },
    { id: 3, name: "Alice Johnson", email: "alice@example.com", phone: "345-678-9012", batch: "Batch A" },
    { id: 4, name: "Bob Brown", email: "bob@example.com", phone: "456-789-0123", batch: "Batch C" },
  ];

  return (
    <div className="student-list-container">
      <h1>Student List</h1>
      <table className="student-list-table">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone No.</th>
            <th>Batch Name</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student ) => (                   //(student,index)
            <tr key={student.id}>
              <td>{}</td>
              <td>{}</td>
              <td>{}</td>
              <td>{}</td>
              <td>{}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentList;
