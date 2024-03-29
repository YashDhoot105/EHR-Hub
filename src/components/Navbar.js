// import React from "react";
// import { getAuth, signOut } from "firebase/auth";

// const Navbar = (props) => {
//   function handleLogOut() {
//     const auth = getAuth();
//     signOut(auth)
//       .then(() => {
//         // Sign-out successful.
//       })
//       .catch((error) => {
//         // An error happened.
//         console.log(error);
//       });
//   }

//   return (
//     <nav className="navbar navbar-expand-lg bg-dark">
//       <div className="container-fluid">
//         <a className="navbar-brand text-white " href="/">
//           <span className="badge badge bg-secondary p-2">EHRMS</span>
//         </a>
//         <button
//           className="navbar-toggler bg-white"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarSupportedContent"
//           aria-controls="navbarSupportedContent"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//             <li className="nav-item">
//               <a className="nav-link active text-white" aria-current="page" href="/">
//                 Home
//               </a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link active text-white" aria-current="page" href="/newsBoard">
//                 News board
//               </a>
//             </li>
// <li className="nav-item dropdown">
//   <a
//     className="nav-link dropdown-toggle text-white"
//     href="/"
//     role="button"
//     data-bs-toggle="dropdown"
//     aria-expanded="false"
//   >
//     Features
//   </a>
//   <ul className="dropdown-menu">
//     <li>
//       <ul className="list-group">
//         <li className="list-group-item">Patient Records Management</li>
//         <li className="list-group-item">Appointment Scheduling</li>
//         <li className="list-group-item">Billing and Invoicing</li>
//         <li className="list-group-item">Prescription Management</li>
//       </ul>
//     </li>
//   </ul>
// </li>
//             <li className="nav-item">
//               <a className="nav-link active text-white" aria-current="page" href="/record">
//                 Record
//               </a>
//             </li>
//           </ul>
//           {props.name ? (
//             <div className="d-flex align-items-center">
//               <h5 className="text-white">Welcome {props.name}</h5>
//               <button type="button" className="btn btn-secondary ms-2" onClick={handleLogOut}>
//                 Log out
//               </button>
//             </div>
//           ) : (
//             <ul className="navbar-nav ms-auto">
//               <li className="nav-item dropdown">
//                 <a
//                   className="nav-link dropdown-toggle text-white"
//                   href="/"
//                   role="button"
//                   data-bs-toggle="dropdown"
//                   aria-expanded="false"
//                 >
//                   Register
//                 </a>
//                 <ul className="dropdown-menu">
//                   <li>
//                     <a className="dropdown-item text-black" href="/login">
//                       Login
//                     </a>
//                   </li>
//                   <li>
//                     <hr className="dropdown-divider" />
//                   </li>
//                   <li>
//                     <a className="dropdown-item text-black" href="/registrationForm">
//                       Register
//                     </a>
//                   </li>
//                 </ul>
//               </li>
//             </ul>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// import React, { useEffect } from 'react';
import React from "react";
import { getAuth, signOut } from "firebase/auth";
import "../styles/navbar.css";

const Navbar = (props) => {
  function handleLogOut() {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  }

  return (
    <nav className="navbar navbar-expand-lg bg-white navbar-container">
      <div className="container-fluid">
        <a className="navbar-brand text-white " href="/">
          <span
            className="badge badge bg-secondary p-2"
            style={{ marginLeft: "3rem" }}
          >
            EHRMS
          </span>
        </a>
        <button
          className="navbar-toggler bg-white"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link text-black px-4 py-3" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-black px-4 py-3" href="/newsBoard">
                News board
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-black px-4 py-3" href="/record" target='blank'>
                Record
              </a>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-black px-4 py-3"
                href="/"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Features
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a
                    className="dropdown-item text-black"
                    href="#patient_record_management"
                  >
                    <lord-icon
                      src="https://cdn.lordicon.com/xljvqlng.json"
                      trigger="hover"
                      style={{
                        width: "20px",
                        height: "20px",
                        paddingRight: "50px",
                        paddingTop: "2px",
                      }} // Adjust padding as needed
                    ></lord-icon>
                    Patient Records Management
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item text-black"
                    href="#appointment_scheduling"
                  >
                    <lord-icon
                      src="https://cdn.lordicon.com/ogkflacg.json"
                      trigger="hover"
                      style={{
                        width: "20px",
                        height: "20px",
                        paddingRight: "50px",
                        paddingTop: "2px",
                      }} // Adjust padding as needed
                    ></lord-icon>
                    Appointment Scheduling
                  </a>
                </li>
                <li>
                  <a className="dropdown-item text-black" href="/vaccination" target='blank'>
                    <script src="https://cdn.lordicon.com/lordicon.js"></script>
                    <lord-icon
                      src="https://cdn.lordicon.com/znjhzlev.json"
                      trigger="hover"
                      stroke="bold"
                      colors="primary:#121331,secondary:#000000"
                      style={{
                        width: "25px",
                        height: "25px",
                        paddingRight: "50px",
                        paddingTop: "2px",
                      }} // Adjust padding as needed
                    ></lord-icon>
                    Active Vaccinations
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item text-black"
                    href="#prescription_management"
                  >
                    <lord-icon
                      src="https://cdn.lordicon.com/depeqmsz.json"
                      trigger="hover"
                      style={{
                        width: "20px",
                        height: "20px",
                        paddingRight: "50px",
                        paddingTop: "2px",
                      }} // Adjust padding as needed
                    ></lord-icon>
                    Prescription Management
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          {props.name ? (
            <div className="d-flex align-items-center">
              <h5 className="text-white">Welcome {props.name}</h5>
              <button
                type="button"
                className="btn btn-secondary ms-2"
                onClick={handleLogOut}
              >
                Log out
              </button>
            </div>
          ) : (
            <ul className="d-flex p-0" style={{ marginRight: "6rem" }}>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-black px-4 py-2"
                  href="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <script src="https://cdn.lordicon.com/lordicon.js"></script>
                  <lord-icon
                    src="https://cdn.lordicon.com/hrjifpbq.json"
                    trigger="in"
                    delay="1500"
                    state="in-account"
                    style={{
                      width: "30px",
                      height: "30px",
                      paddingTop: "10px",
                      paddingRight: "50px",
                    }}
                  ></lord-icon>
                  Register
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item text-black" href="/login">
                      Login
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item text-black"
                      href="/registrationForm"
                    >
                      Register
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
