// import { signInWithEmailAndPassword } from 'firebase/auth';
// import React, { useState } from 'react';
// import { auth, db } from './firebase';
// import { useNavigate } from 'react-router-dom';
// import "../styles/login.css";

// const Login = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//   });
//   const [errMsg, setErrMsg] = useState('');

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prevState => ({
//       ...prevState,
//       [name]: value
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!formData.email || !formData.password) {
//       setErrMsg('Fill all fields');
//       return;
//     }
//     setErrMsg('');

//     signInWithEmailAndPassword(auth, formData.email, formData.password)
//       .then((res) => {
//         const user = res.user;
//         const userRef = db.collection('users').doc(user.uid);
//         userRef.get().then((doc) => {
//           const role = doc.data().role;
//           if (role === 'doctor') {
//             navigate('/DoctorHomePage');
//           } else if (role === 'patient') {
//             navigate('/PatientHomePage');
//           }
//         });
//       })
//       .catch((err) => {
//         setErrMsg(err.message);
//       })

//     setFormData({
//       email: '',
//       password: '',
//     });
//   };

//   const handleClear = () => {
//     setFormData({
//       email: '',
//       password: '',
//     });
//     setErrMsg('');
//   };
//   return (
//     <div className="container my-5">
//       <div className="row justify-content-center">
//         <div className="col-md-5">
//           <div className="registration-container p-4 border rounded shadow">
//             <h2 className="text-center mb-4 login_heading">Login</h2>
//             <form onSubmit={handleSubmit}>
//               <div className="mb-1">
//                 <label htmlFor="email" className="form-label">Email Address</label>
//                 <input
//                   type="email"
//                   className="form-control"
//                   id="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//               <div className="mb-1">
//                 <label htmlFor="password" className="form-label">Password</label>
//                 <input
//                   type="password"
//                   className="form-control"
//                   id="password"
//                   name="password"
//                   value={formData.password}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
              
//               <div className="mb-1 d-flex justify-content-around mt-3">
//                 <button type="submit" className="Login_button p-2">Login</button>
//                 <button type="button" className="Clear_button p-2" onClick={handleClear}>Clear</button>
//               </div>
//               <div className="text-center">
//                 <b className='text-center text-danger'>{errMsg}</b>
//               <p>Don't have an account? <a href="/registrationForm" className='Register_link'>Register</a></p>
//             </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;




//.............................................

import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from './firebase';
import { useNavigate } from 'react-router-dom';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import "../styles/login.css";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [errMsg, setErrMsg] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      setErrMsg('Fill all fields');
      return;
    }
    setErrMsg('');

    signInWithEmailAndPassword(auth, formData.email, formData.password)
      .then((res) => {
        const user = res.user;
        const db = getFirestore(); // Initialize Firestore instance
        const userRef = doc(db, 'users', user.uid); // Get user document reference
        getDoc(userRef).then((doc) => {
          if (doc.exists()) {
            const role = doc.data().role;
            console.log(role);
            if (role === 'doctor') {
              navigate('/DoctorHomePage');
            } else if (role === 'patient') {
              navigate('/PatientHomePage');
            }
          } else {
            setErrMsg('User role not found');
          }
        });
      })
      .catch((err) => {
        setErrMsg(err.message);
      })

    setFormData({
      email: '',
      password: '',
    });
  };

  const handleClear = () => {
    setFormData({
      email: '',
      password: '',
    });
    setErrMsg('');
  };
  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-5">
          <div className="registration-container p-4">
            <h2 className="text-center mb-4 login_heading">Login</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-1">
                <label htmlFor="email" className="form-label">Email Address</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-1">
                <label htmlFor="password" className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="mb-1 d-flex justify-content-around mt-3">
                <button type="submit" className="Login_button p-2">Login</button>
                <button type="button" className="Clear_button p-2" onClick={handleClear}>Clear</button>
              </div>
              <div className="text-center">
                <b className='text-center text-danger'>{errMsg}</b>
              <p>Don't have an account? <a href="/registrationForm" className='Register_link'>Register</a></p>
            </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
