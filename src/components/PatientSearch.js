import React, { useState, useEffect } from 'react';
import '../styles/patient_search.css';
import '@fortawesome/fontawesome-free/css/all.css';


const PatientSearch = ({ onPatientSelect }) => {
  const [activeTab, setActiveTab] = useState('search');
  const [searchTerm, setSearchTerm] = useState('');
  const [patients, setPatients] = useState(JSON.parse(localStorage.getItem('patients')) || []);
  const [originalPatients, setOriginalPatients] = useState(JSON.parse(localStorage.getItem('patients')) || []);
  const [newPatientData, setNewPatientData] = useState({
    name: '',
    age: '',
    gender: '',
    bloodGroup: '',
    height: '',
    weight: '',
    doctorName: '',
    medicalReport: null
  });

  useEffect(() => {
    // Update local storage when patients state changes
    localStorage.setItem('patients', JSON.stringify(patients));
  }, [patients]);

  const searchPatients = () => {
    if (searchTerm.trim() === '') {
      setPatients(originalPatients);
    } else {
      const filteredPatients = originalPatients.filter(patient =>
        patient.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setPatients(filteredPatients);
    }
  };

  const generateRandomId = () => {
    // Generate a random 6-digit ID
    return Math.floor(100000 + Math.random() * 900000);
  };

  const handleCreatePatient = () => {
    // Add new patient data to local storage with a random ID
    const newPatientId = generateRandomId();
    const newPatient = { ...newPatientData, id: newPatientId.toString() };
    setPatients([...patients, newPatient]);
    setOriginalPatients([...originalPatients, newPatient]);
    setNewPatientData({
      name: '',
      age: '',
      gender: '',
      bloodGroup: '',
      height: '',
      weight: '',
      doctorName: '',
      medicalReport: null
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPatientData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    setNewPatientData((prevData) => ({
      ...prevData,
      medicalReport: file
    }));
  };

  return (
    <div className="container mt-4">
      <ul className="nav nav-tabs mb-3">
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === 'search' ? 'active' : ''}`}
            onClick={() => setActiveTab('search')}
          >
            Search Patients
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === 'add' ? 'active' : ''}`}
            onClick={() => setActiveTab('add')}
          >
            Add Patient Record
          </button>
        </li>
      </ul>
      {activeTab === 'search' && (
        <div>
          <div className="row">
            <div className="col-md-8">
              <input type="text" className="form-control" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="Search patients" />
            </div>
            <div className="col-md-4">
              <button className="btn btn-primary w-100" onClick={searchPatients}>Search</button>
            </div>
          </div>
          <div className="container mt-4" style={{ overflowX: 'auto' }}>
            <table className="table">
              <thead>
                <tr>
                <th>ID</th>
                  <th>Customer Name <i className="fa-solid fa-filter filter-icon"></i></th>
                  <th>Age <i className="fa-solid fa-filter filter-icon"></i></th>
                  <th>Gender <i className="fa-solid fa-filter filter-icon"></i></th>
                  <th>Blood Group <i className="fa-solid fa-filter filter-icon"></i></th>
                  <th>Height <i className="fa-solid fa-filter filter-icon"></i></th>
                  <th>Weight <i className="fa-solid fa-filter filter-icon"></i></th>
                  <th>Doctor Name <i className="fa-solid fa-filter filter-icon"></i></th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {patients.map((patient) => (
                  <tr key={patient.id}>
                    <td>{patient.id}</td>
                    <td>{patient.name}</td>
                    <td>{patient.age}</td>
                    <td>{patient.gender}</td>
                    <td>{patient.bloodGroup}</td>
                    <td>{patient.height}</td>
                    <td>{patient.weight}</td>
                    <td>{patient.doctorName}</td>
                    <td>
                      <button className="btn btn-primary" onClick={() => onPatientSelect(patient)}>
                        View Details
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
      {activeTab === 'add' && (
        <div>
          <div className="mb-3">
            <input type="text" className="form-control" name="name" value={newPatientData.name} onChange={handleInputChange} placeholder="Name" />
          </div>
          <div className="row">
            <div className="col-md-6 mb-3">
              <input type="number" className="form-control" name="age" value={newPatientData.age} onChange={handleInputChange} placeholder="Age" />
            </div>
            <div className="col-md-6 mb-3">
              <select className="form-select" name="gender" value={newPatientData.gender} onChange={handleInputChange}>
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 mb-3">
              <input type="text" className="form-control" name="bloodGroup" value={newPatientData.bloodGroup} onChange={handleInputChange} placeholder="Blood Group" />
            </div>
            <div className="col-md-6 mb-3">
              <input type="text" className="form-control" name="height" value={newPatientData.height} onChange={handleInputChange} placeholder="Height" />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 mb-3">
              <input type="text" className="form-control" name="weight" value={newPatientData.weight} onChange={handleInputChange} placeholder="Weight" />
            </div>
            <div className="col-md-6 mb-3">
              <input type="text" className="form-control" name="doctorName" value={newPatientData.doctorName} onChange={handleInputChange} placeholder="Doctor Name" />
            </div>
          </div>
          <div className="mb-3">
            <input type="file" className="form-control" name="medicalReport" onChange={handleFileInputChange} />
          </div>
          <button className="btn btn-success" onClick={handleCreatePatient}>Create Patient</button>
        </div>
      )}
    </div>
  );
};

export default PatientSearch;







//....................................................table form with view button .............



// import React, { useState, useEffect } from 'react';
// import '../styles/patient_search.css';

// const PatientSearch = ({ onPatientSelect }) => {
//   const [activeTab, setActiveTab] = useState('search');
//   const [searchTerm, setSearchTerm] = useState('');
//   const [patients, setPatients] = useState(JSON.parse(localStorage.getItem('patients')) || []);
//   const [originalPatients, setOriginalPatients] = useState(JSON.parse(localStorage.getItem('patients')) || []);
//   const [newPatientData, setNewPatientData] = useState({
//     name: '',
//     age: '',
//     gender: '',
//     bloodGroup: '',
//     height: '',
//     weight: '',
//     doctorName: '',
//     medicalReport: null
//   });
//   const [selectedPatientId, setSelectedPatientId] = useState(null);
//   const [expandedPatientId, setExpandedPatientId] = useState(null);

//   useEffect(() => {
//     // Update local storage when patients state changes
//     localStorage.setItem('patients', JSON.stringify(patients));
//   }, [patients]);

//   const searchPatients = () => {
//     if (searchTerm.trim() === '') {
//       setPatients(originalPatients);
//     } else {
//       const filteredPatients = originalPatients.filter(patient =>
//         patient.name.toLowerCase().includes(searchTerm.toLowerCase())
//       );
//       setPatients(filteredPatients);
//     }
//   };

//   const handleSelectPatient = (patientId) => {
//     // Handle patient selection
//     setSelectedPatientId(patientId);
//     setExpandedPatientId((prevId) => (prevId === patientId ? null : patientId));
//     const selectedPatient = patients.find((patient) => patient.id === patientId);
//     if (selectedPatient) {
//       onPatientSelect(selectedPatient);
//     }
//   };

//   const generateRandomId = () => {
//     // Generate a random 6-digit ID
//     return Math.floor(100000 + Math.random() * 900000);
//   };

//   const handleCreatePatient = () => {
//     // Add new patient data to local storage with a random ID
//     const newPatientId = generateRandomId();
//     const newPatient = { ...newPatientData, id: newPatientId.toString() };
//     setPatients([...patients, newPatient]);
//     setOriginalPatients([...originalPatients, newPatient]);
//     setNewPatientData({
//       name: '',
//       age: '',
//       gender: '',
//       bloodGroup: '',
//       height: '',
//       weight: '',
//       doctorName: '',
//       medicalReport: null
//     });
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewPatientData((prevData) => ({
//       ...prevData,
//       [name]: value
//     }));
//   };

//   const handleFileInputChange = (e) => {
//     const file = e.target.files[0];
//     setNewPatientData((prevData) => ({
//       ...prevData,
//       medicalReport: file
//     }));
//   };

//   return (
//     <div className="container mt-4">
//       <ul className="nav nav-tabs mb-3">
//         <li className="nav-item">
//           <button
//             className={`nav-link ${activeTab === 'search' ? 'active' : ''}`}
//             onClick={() => setActiveTab('search')}
//           >
//             Search Patients
//           </button>
//         </li>
//         <li className="nav-item">
//           <button
//             className={`nav-link ${activeTab === 'add' ? 'active' : ''}`}
//             onClick={() => setActiveTab('add')}
//           >
//             Add Patient Record
//           </button>
//         </li>
//       </ul>
//       {activeTab === 'search' && (
//         <div>
//           <div className="row">
//             <div className="col-md-8">
//               <input type="text" className="form-control" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="Search patients" />
//             </div>
//             <div className="col-md-4">
//               <button className="btn btn-primary w-100" onClick={searchPatients}>Search</button>
//             </div>
//           </div>
//           <div className="container mt-4" style={{ overflowX: 'auto' }}>
//             <table className="table">
//               <thead>
//                 <tr>
//                   <th>ID</th>
//                   <th>Customer Name</th>
//                   <th>Age</th>
//                   <th>Gender</th>
//                   {expandedPatientId && (
//                     <>
//                       <th>Blood Group</th>
//                       <th>Height</th>
//                       <th>Weight</th>
//                       <th>Doctor Name</th>
//                     </>
//                   )}
//                   <th>Action</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {patients.map((patient) => (
//                   <React.Fragment key={patient.id}>
//                     <tr>
//                       <td>{patient.id}</td>
//                       <td>{patient.name}</td>
//                       <td>{patient.age}</td>
//                       <td>{patient.gender}</td>
//                       {expandedPatientId === patient.id && (
//                         <>
//                           <td>{patient.bloodGroup}</td>
//                           <td>{patient.height}</td>
//                           <td>{patient.weight}</td>
//                           <td>{patient.doctorName}</td>
//                         </>
//                       )}
//                       <td>
//                         <button className="btn btn-primary" onClick={() => handleSelectPatient(patient.id)}>
//                           {expandedPatientId === patient.id ? 'View Less' : 'View Details'}
//                         </button>
//                       </td>
//                     </tr>
//                   </React.Fragment>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       )}
//       {activeTab === 'add' && (
//         <div>
//           <div className="mb-3">
//             <input type="text" className="form-control" name="name" value={newPatientData.name} onChange={handleInputChange} placeholder="Name" />
//           </div>
//           <div className="row">
//             <div className="col-md-6 mb-3">
//               <input type="number" className="form-control" name="age" value={newPatientData.age} onChange={handleInputChange} placeholder="Age" />
//             </div>
//             <div className="col-md-6 mb-3">
//               <select className="form-select" name="gender" value={newPatientData.gender} onChange={handleInputChange}>
//                 <option value="">Select Gender</option>
//                 <option value="male">Male</option>
//                 <option value="female">Female</option>
//                 <option value="other">Other</option>
//               </select>
//             </div>
//           </div>
//           <div className="row">
//             <div className="col-md-6 mb-3">
//               <input type="text" className="form-control" name="bloodGroup" value={newPatientData.bloodGroup} onChange={handleInputChange} placeholder="Blood Group" />
//             </div>
//             <div className="col-md-6 mb-3">
//               <input type="text" className="form-control" name="height" value={newPatientData.height} onChange={handleInputChange} placeholder="Height" />
//             </div>
//           </div>
//           <div className="row">
//             <div className="col-md-6 mb-3">
//               <input type="text" className="form-control" name="weight" value={newPatientData.weight} onChange={handleInputChange} placeholder="Weight" />
//             </div>
//             <div className="col-md-6 mb-3">
//               <input type="text" className="form-control" name="doctorName" value={newPatientData.doctorName} onChange={handleInputChange} placeholder="Doctor Name" />
//             </div>
//           </div>
//           <div className="mb-3">
//             <input type="file" className="form-control" name="medicalReport" onChange={handleFileInputChange} />
//           </div>
//           <button className="btn btn-success" onClick={handleCreatePatient}>Create Patient</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default PatientSearch;










// import React, { useState, useEffect } from 'react';
// import '../styles/patient_search.css';

// const PatientSearch = ({ onPatientSelect }) => {
//   const [activeTab, setActiveTab] = useState('search');
//   const [searchTerm, setSearchTerm] = useState('');
//   const [patients, setPatients] = useState(JSON.parse(localStorage.getItem('patients')) || []);
//   const [originalPatients, setOriginalPatients] = useState(JSON.parse(localStorage.getItem('patients')) || []);
//   const [newPatientData, setNewPatientData] = useState({
//     name: '',
//     age: '',
//     gender: '',
//     bloodGroup: '',
//     height: '',
//     weight: '',
//     doctorName: '',
//     medicalReport: null
//   });
//   const [selectedPatientId, setSelectedPatientId] = useState(null);
//   const [expandedPatientId, setExpandedPatientId] = useState(null);

//   useEffect(() => {
//     // Update local storage when patients state changes
//     localStorage.setItem('patients', JSON.stringify(patients));
//   }, [patients]);

//   const searchPatients = () => {
//     if (searchTerm.trim() === '') {
//       setPatients(originalPatients);
//     } else {
//       const filteredPatients = originalPatients.filter(patient =>
//         patient.name.toLowerCase().includes(searchTerm.toLowerCase())
//       );
//       setPatients(filteredPatients);
//     }
//   };

//   const handleSelectPatient = (patientId) => {
//     // Handle patient selection
//     setSelectedPatientId(patientId);
//     setExpandedPatientId((prevId) => (prevId === patientId ? null : patientId));
//     const selectedPatient = patients.find((patient) => patient.id === patientId);
//     if (selectedPatient) {
//       onPatientSelect(selectedPatient);
//     }
//   };

//   const generateRandomId = () => {
//     // Generate a random 6-digit ID
//     return Math.floor(100000 + Math.random() * 900000);
//   };

//   const handleCreatePatient = () => {
//     // Add new patient data to local storage with a random ID
//     const newPatientId = generateRandomId();
//     const newPatient = { ...newPatientData, id: newPatientId.toString() };
//     setPatients([...patients, newPatient]);
//     setOriginalPatients([...originalPatients, newPatient]);
//     setNewPatientData({
//       name: '',
//       age: '',
//       gender: '',
//       bloodGroup: '',
//       height: '',
//       weight: '',
//       doctorName: '',
//       medicalReport: null
//     });
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewPatientData((prevData) => ({
//       ...prevData,
//       [name]: value
//     }));
//   };

//   const handleFileInputChange = (e) => {
//     const file = e.target.files[0];
//     setNewPatientData((prevData) => ({
//       ...prevData,
//       medicalReport: file
//     }));
//   };

//   return (
//     <div className="container mt-4">
//       <ul className="nav nav-tabs mb-3">
//         <li className="nav-item">
//           <button
//             className={`nav-link ${activeTab === 'search' ? 'active' : ''}`}
//             onClick={() => setActiveTab('search')}
//           >
//             Search Patients
//           </button>
//         </li>
//         <li className="nav-item">
//           <button
//             className={`nav-link ${activeTab === 'add' ? 'active' : ''}`}
//             onClick={() => setActiveTab('add')}
//           >
//             Add Patient Record
//           </button>
//         </li>
//       </ul>
//       {activeTab === 'search' && (
//         <div>
//           <div className="row">
//             <div className="col-md-8">
//               <input type="text" className="form-control" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="Search patients" />
//             </div>
//             <div className="col-md-4">
//               <button className="btn btn-primary w-100" onClick={searchPatients}>Search</button>
//             </div>
//           </div>
//           <div className="row mt-3">
//             {patients.map((patient) => (
//               <div key={patient.id} className="col-md-4 mb-3">
//                 <div className={`card patient_data_card ${expandedPatientId === patient.id ? 'view_less' : ''}`}>
//                   <div className="card-body">
//                     <h3 className="patient_card-title">{patient.name}</h3>
//                     <p className="card-text"><b>ID:</b> {patient.id}</p>
//                     <p className="card-text"><b>Age:</b> {patient.age}</p>
//                     <p className="card-text"><b>Gender:</b> {patient.gender}</p>
//                     {expandedPatientId === patient.id && (
//                       <>
//                         <p className="card-text"><b>Blood Group:</b> {patient.bloodGroup}</p>
//                         <p className="card-text"><b>Height:</b> {patient.height}</p>
//                         <p className="card-text"><b>Weight:</b> {patient.weight}</p>
//                         <p className="card-text"><b>Doctor Name:</b> {patient.doctorName}</p>
//                         {/* Add more fields here */}
//                       </>
//                     )}
//                     <button className="btn btn-primary view_details" onClick={() => handleSelectPatient(patient.id)}>
//                       {expandedPatientId === patient.id ? 'View Less' : 'View Details'}
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}
//       {activeTab === 'add' && (
//         <div>
//           <div className="mb-3">
//             <input type="text" className="form-control" name="name" value={newPatientData.name} onChange={handleInputChange} placeholder="Name" />
//           </div>
//           <div className="row">
//             <div className="col-md-6 mb-3">
//               <input type="number" className="form-control" name="age" value={newPatientData.age} onChange={handleInputChange} placeholder="Age" />
//             </div>
//             <div className="col-md-6 mb-3">
//               <select className="form-select" name="gender" value={newPatientData.gender} onChange={handleInputChange}>
//                 <option value="">Select Gender</option>
//                 <option value="male">Male</option>
//                 <option value="female">Female</option>
//                 <option value="other">Other</option>
//               </select>
//             </div>
//           </div>
//           <div className="row">
//             <div className="col-md-6 mb-3">
//               <input type="text" className="form-control" name="bloodGroup" value={newPatientData.bloodGroup} onChange={handleInputChange} placeholder="Blood Group" />
//             </div>
//             <div className="col-md-6 mb-3">
//               <input type="text" className="form-control" name="height" value={newPatientData.height} onChange={handleInputChange} placeholder="Height" />
//             </div>
//           </div>
//           <div className="row">
//             <div className="col-md-6 mb-3">
//               <input type="text" className="form-control" name="weight" value={newPatientData.weight} onChange={handleInputChange} placeholder="Weight" />
//             </div>
//             <div className="col-md-6 mb-3">
//               <input type="text" className="form-control" name="doctorName" value={newPatientData.doctorName} onChange={handleInputChange} placeholder="Doctor Name" />
//             </div>
//           </div>
//           <div className="mb-3">
//             <input type="file" className="form-control" name="medicalReport" onChange={handleFileInputChange} />
//           </div>
//           <button className="btn btn-success" onClick={handleCreatePatient}>Create Patient</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default PatientSearch;