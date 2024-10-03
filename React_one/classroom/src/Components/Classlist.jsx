import "./Classlist.css"; 

const Classlist = () => {
  
  const classes = [
    { id: 1, className: "Mathematics", batchName: "Batch A" },
    { id: 2, className: "Physics", batchName: "Batch B" },
    { id: 3, className: "Chemistry", batchName: "Batch C" },
    { id: 4, className: "Biology", batchName: "Batch D" },
  ];

  return (
    <div className="class-card-list">
      {classes.map((classItem) => (
        <div key={classItem.id} className="class-card">
          <h2>{classItem.className}</h2>
          <p>Batch: {classItem.batchName}</p>
        </div>
      ))}
    </div>
  );
};

export default Classlist;
