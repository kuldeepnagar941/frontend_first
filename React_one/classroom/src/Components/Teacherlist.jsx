import "./TeacherList.css"; // Custom CSS for styling

const TeacherList = () => {
  // Static list of teachers (replace with actual data as needed)
  const teachers = [
    { id: 1, name: "John Doe", email: "john.doe@example.com", phone: "123-456-7890", employeeId: "EMP001" },
    { id: 2, name: "Jane Smith", email: "jane.smith@example.com", phone: "234-567-8901", employeeId: "EMP002" },
    { id: 3, name: "Robert Brown", email: "robert.brown@example.com", phone: "345-678-9012", employeeId: "EMP003" },
    { id: 4, name: "Emily White", email: "emily.white@example.com", phone: "456-789-0123", employeeId: "EMP004" },
  ];

  return (
    <div className="teacher-list-container">
      <h1>Teacher List</h1>
      <table className="teacher-list-table">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone No.</th>
            <th>Employee ID</th>
          </tr>
        </thead>
        <tbody>
          {teachers.map((teacher) => (         //(teacher,index)
            <tr key={teacher.id}>     
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

export default TeacherList;
