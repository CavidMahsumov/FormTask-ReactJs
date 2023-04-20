import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  const [name, setName] = useState("");
  const [salary, setSalary] = useState("");
  const [department, setDepartment] = useState("");
  const [users, setUsers] = useState([]);
  const [showForm, setShowForm] = useState(false);
  
  
  const handleSubmit = (event) => {
    event.preventDefault();

    const newUser = {
      name: name,
      salary: salary,
      department:department

    };

    setUsers([...users, newUser]);

    setName("");
    setSalary("");
    setDepartment("");
  };

;
const handleButtonClick = () => {
  setShowForm(true);
};


  return (
    <div>
      <button onClick={handleButtonClick}>Show Form</button>
      {showForm && (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <input
          type="text"
          placeholder="Salary"
          value={salary}
          onChange={(event) => setSalary(event.target.value)}
        />
        <input
          type="text"
          placeholder="department"
          value={department}
          onChange={(event) => setDepartment(event.target.value)}
        />
        <button type="submit">Add user</button>
      </form>
      )}

  

      {users.map((user, index) => (
           <div className='col-md-8 mx-auto mb-4'>
           <div className='card'>
               <div className='card-header d-flex justify-content-between'>
                   <h3 className='d-inline' >{user.name}</h3>
               </div>
               {
                    <ul className='list-group list-group-flush'>
                       <li className='list-group-item'>Salary: {user.salary}</li>
                       <li className='list-group-item'>Department: {user.department}</li>
                   </ul>
                   
               }
           </div>
       </div>
       ))}
    </div>
    
  );
}

export default App;