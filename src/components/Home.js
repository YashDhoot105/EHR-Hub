import React, { useEffect, useState } from "react";
// import { gsap } from 'gsap';
import ScrollReveal from "scrollreveal";
import homeImg from "../media/home-img3.jpg";
import "../styles/home_features.css";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import {
  FaFacebookF,
  FaTwitter,
  FaGoogle,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa"; // Importing the necessary icons
import { IoLocationSharp, IoMail, IoCall, IoPrint } from "react-icons/io5";
import "../styles/footer.css"; // Import your custom CSS for hover effects
// import Link from "next/link";
// import { Input } from "@/components/ui/input"
// import { Button } from "@/components/ui/button"
import { motion } from "framer-motion";
// import PrescriptionManagement from './PrescriptionManagementPage';
import { Link } from 'react-router-dom';


const Home = () => {
  const [showPrescriptionManagement, setShowPrescriptionManagement] = useState(false);

  useEffect(() => {
    ScrollReveal({
      reset: true,
      distance: "60px",
      durationIn: 2500,
      delay: 400,
    });

    ScrollReveal().reveal(".home-img", { delay: 700, origin: "right" });
    ScrollReveal().reveal(".lead", { delay: 800, origin: "left" });
    ScrollReveal().reveal(".main_heading", { delay: 600, origin: "left" });
    ScrollReveal().reveal(".features_section", { delay: 600, origin: "top" });
    ScrollReveal().reveal(".features_section_cards_right", {
      delay: 600,
      origin: "left",
    });
    ScrollReveal().reveal(".features_section_cards_left", {
      delay: 600,
      origin: "right",
    });
    ScrollReveal().reveal(".get_connected_heading", {
      delay: 700,
      origin: "left",
    });
    ScrollReveal().reveal(".social_links_icons", {
      delay: 700,
      origin: "right",
    });
    ScrollReveal().reveal(".EHRMS_platform_heading", {
      delay: 700,
      origin: "left",
    });
    ScrollReveal().reveal(".discover_our_new_features_heading", {
      delay: 700,
      origin: "top",
    });
    ScrollReveal().reveal(".discover_our_new_features_content", {
      delay: 700,
      origin: "bottom",
    });
    ScrollReveal().reveal(".Contact_us_heading", {
      delay: 700,
      origin: "right",
    });
  }, []);


  const handlePrescriptionManagementClick = () => {
    setShowPrescriptionManagement(!showPrescriptionManagement);
  };

  const Background = () => {
    return (
      <motion.div
        className="absolute inset-0 z--1 overflow-hidden"
        variants={{
          hover: {
            scale: 1.2,
            zIndex: -1, // Set a higher zIndex when hovered
          },
        }}
        transition={{
          duration: 1,
          ease: "backInOut",
        }}
      >
        <motion.svg
          width="105%"
          height="100%"
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <motion.circle
            variants={{
              hover: {
                scaleY: 0.5,
                y: -15,
              },
            }}
            transition={{
              duration: 1,
              ease: "backInOut",
              delay: 0.2,
            }}
            cx="100"
            cy="70"
            r="60"
            fill="#ededed"
          />
          <motion.ellipse
            variants={{
              hover: {
                scaleY: 2.25,
                y: -15,
              },
            }}
            transition={{
              duration: 1,
              ease: "backInOut",
              delay: 0.2,
            }}
            cx="100"
            cy="165"
            rx="60"
            ry="25"
            fill="#ededed"
          />
        </motion.svg>
      </motion.div>
    );
  };

  return (
    <div className="container ml-0">
      <div className="row align-items-center">
        <header className="jumbotron mt-2 col-md-6 d-flex align-items-center">
          <div className="container text-center glassmorphism">
            <h1 className="display-4 fw-bolder main_heading">
              Electronic Health Record Management System
            </h1>
            <p className="lead mt-5 sub_heading">
              Welcome to our EHRMS platform. Manage health records efficiently
              and securely.
            </p>
          </div>
        </header>

        <div className="home-img col-md-6 py-5 img-container">
          <img src={homeImg} alt="heart-img" className="img-fluid rounded-5" />
        </div>
      </div>

      <div className="row align-items-center justify-content-center features_section">
        <div className="col-md-12 text-center mt-6 mb-2">
          <h1>Features</h1>
        </div>
      </div>

      <div className="row align-items-center justify-content-center features_section_cards">
        <div className="col-md-6 features_section_cards_right">
          <motion.div
            whileHover="hover"
            transition={{ duration: 1, ease: "backInOut" }}
            variants={{
              hover: {
                scale: 1.05,
              },
            }}
            className="card card-margin square-card shadow text-center mb-4 overflow-hidden"
          >
            <Background />
            <div className="card-body ">
              <script src="https://cdn.lordicon.com/lordicon.js"></script>
              <lord-icon
                src="https://cdn.lordicon.com/xljvqlng.json"
                trigger="hover"
                style={{ width: "50px", height: "50px" }}
              ></lord-icon>
              <h5 className="card-title" id="patient_record_management">
                Patient Records Management
              </h5>
              <p className="card-text">Efficiently manage patient records.</p>
            </div>
          </motion.div>
        </div>

        <div className="col-md-6 features_section_cards_left">
        <motion.div
            whileHover="hover"
            transition={{ duration: 1, ease: "backInOut" }}
            variants={{
              hover: {
                scale: 1.05,
              },
            }}
            className="card card-margin square-card shadow text-center mb-4 overflow-hidden"
          >
            <Background />
            <div className="card-body">
              <script src="https://cdn.lordicon.com/lordicon.js"></script>
              <lord-icon
                src="https://cdn.lordicon.com/ogkflacg.json"
                trigger="hover"
                style={{ width: "50px", height: "50px" }}
              ></lord-icon>
              <h5 className="card-title" id="appointment_scheduling">
                Appointment Scheduling
              </h5>
              <p className="card-text">Schedule appointments seamlessly.</p>
            </div>
            </motion.div>
        </div>

        <div className="col-md-6 features_section_cards_right">
        <motion.div
            whileHover="hover"
            transition={{ duration: 1, ease: "backInOut" }}
            variants={{
              hover: {
                scale: 1.05,
              },
            }}
            className="card card-margin square-card shadow text-center mb-4 overflow-hidden"
          >
            <Background />
            <div className="card-body">
              <script src="https://cdn.lordicon.com/lordicon.js"></script>
              <lord-icon
                src="https://cdn.lordicon.com/znjhzlev.json"
                trigger="hover"
                stroke="bold"
                colors="primary:#121331,secondary:#000000"
                style={{ width: "50px", height: "50px" }}
              ></lord-icon>
              <h5 className="card-title" id="active_vaccinations">
                Active Vaccinations
              </h5>
              <p className="card-text">
                Stay updated on the ongoing vaccination camps.
              </p>
            </div>
            </motion.div>
        </div>

        <div className="col-md-6 features_section_cards_left">
        <Link to="/prescription" style={{ textDecoration: 'none' }}>

        <motion.div
            whileHover="hover"
            transition={{ duration: 1, ease: "backInOut" }}
            variants={{
              hover: {
                scale: 1.05,
              },
            }}
            className="card card-margin square-card shadow text-center mb-4 overflow-hidden"
            // onClick={handlePrescriptionManagementClick} 

          >
            <Background />
            <div className="card-body">
              <script src="https://cdn.lordicon.com/lordicon.js"></script>
              <lord-icon
                src="https://cdn.lordicon.com/depeqmsz.json"
                trigger="hover"
                style={{ width: "50px", height: "50px" }}
              ></lord-icon>
              <h5 className="card-title" id="prescription_management">
                Prescription Management
              </h5>
              <p className="card-text">Efficiently manage prescriptions.</p>
            </div>
            </motion.div>
            </Link>
          </div>
      </div>

      {/* {showPrescriptionManagement && <PrescriptionManagement />} */}


      {/* <section className="py-5 bg-gray-100 dark:bg-gray-800">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Discover Our New Features</h2>
            <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 py-2">
              Explore the latest innovations in healthcare technology.
            </p>
          </div>
          <div className="mx-auto w-full max-w-sm space-y-2">
            <form className="flex space-x-2">
              <Input className="max-w-lg flex-1" placeholder="Enter your email" type="email" />
              <Button type="submit">Subscribe</Button>
            </form>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Subscribe to our newsletter for updates and promotions.
              <Link className="underline underline-offset-2" href="#">
                Privacy Policy
              </Link>
            </p>
          </div>
        </div>
      </section> */}

      <MDBFooter
        bgColor="light"
        className="text-center text-lg-start text-muted custom-footer"
      >
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom mt-5">
          <div className="me-5 d-none d-lg-block get_connected_heading">
            <span>Get connected with us on social networks:</span>
          </div>

          <div className="social_links_icons">
            <a href="#!" className="me-4 text-reset ">
              <FaFacebookF color="secondary" className="icon-hover" />
            </a>
            <a href="#!" className="me-4 text-reset">
              <FaTwitter color="secondary" className="icon-hover" />
            </a>
            <a href="#!" className="me-4 text-reset">
              <FaGoogle color="secondary" className="icon-hover" />
            </a>
            <a href="#!" className="me-4 text-reset">
              <FaInstagram color="secondary" className="icon-hover" />
            </a>
            <a href="#!" className="me-4 text-reset">
              <FaLinkedin color="secondary" className="icon-hover" />
            </a>
            <a href="#!" className="me-4 text-reset">
              <FaGithub color="secondary" className="icon-hover" />
            </a>
          </div>
        </section>

        <section className="">
          <MDBContainer className="text-center text-md-start mt-5">
            <MDBRow className="mt-3">
              <MDBCol
                md="3"
                lg="4"
                xl="3"
                className="mx-auto mb-md-0 mb-4 EHRMS_platform_heading"
              >
                <h4 className="text-3xl font-bold tracking-tighter md:text-4xl/tight mb-4">
                  EHRMS platform
                </h4>

                <p>
                  Welcome to our EHRMS platform. Manage health records
                  efficiently and securely and get feature like Patient Records
                  Management, Appointment Scheduling, Active Vaccinations,
                  Prescription Management ,etc
                </p>
              </MDBCol>

              <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
                <section className="bg-gray-100 dark:bg-gray-800">
                  <div
                    className="container grid items-center justify-center gap-4 px-4 text-center md:px-6"
                    style={{ maxWidth: "800px" }}
                  >
                    {/* Adjusted maxWidth here */}
                    <div className="space-y-3">
                      <h4 className="text-3xl font-bold tracking-tighter md:text-4xl/tight discover_our_new_features_heading">
                        Discover Our New Features
                      </h4>
                      <p className="mx-auto max-w-[800px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 py-2 mb-0 discover_our_new_features_content">
                        Explore the latest innovations in healthcare technology.
                      </p>
                    </div>
                    <div className="mx-auto w-full max-w-sm space-y-2">
                      <p className="text-xs text-gray-500 dark:text-gray-400 discover_our_new_features_content">
                        Subscribe to our newsletter for updates and promotions.
                      </p>
                    </div>
                  </div>
                </section>
              </MDBCol>

              <MDBCol
                md="4"
                lg="3"
                xl="3"
                className="mx-auto mb-md-0 mb-4 Contact_us_heading"
              >
                <h4 className="text-3xl font-bold tracking-tighter md:text-4xl/tight mb-4">
                  Contact Us
                  <script src="https://cdn.lordicon.com/lordicon.js"></script>
                  <lord-icon
                    src="https://cdn.lordicon.com/srsgifqc.json"
                    trigger="morph"
                    state="morph-phone-ring-finish"
                    style={{
                      width: "30px",
                      height: "30px",
                      paddingLeft: "10px",
                      paddingTop: "5px",
                    }}
                  ></lord-icon>
                </h4>
                <p className="mb-3">
                  <IoLocationSharp
                    color="secondary"
                    size={25}
                    className="me-2 icon-hover"
                  />
                  Nagpur, NY 10012, India
                </p>
                <p className="mb-3">
                  <IoMail
                    color="secondary"
                    size={25}
                    className="me-3 icon-hover"
                  />
                  info@example.com
                </p>
                <p className="mb-3">
                  <IoCall
                    color="secondary"
                    size={25}
                    className="me-3 icon-hover"
                  />{" "}
                  + 01 234 567 88
                </p>
                <p className="mb-3">
                  <IoPrint
                    color="secondary"
                    size={25}
                    className="me-3 icon-hover"
                  />{" "}
                  + 01 234 567 89
                </p>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>
        <div
          className="text-center p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          © {new Date().getFullYear()} Copyright:
          <span className="text-reset fw-bold">EHRMS.com</span>
        </div>
      </MDBFooter>
    </div>
  );
};

export default Home;

// import React, { useEffect } from 'react';
// import ScrollReveal from 'scrollreveal';
// import homeImg from '../media/home-img3.jpg';
// import '../styles/home_features.css';
// import { motion } from "framer-motion";
// import {
//   MDBFooter,
//   MDBContainer,
//   MDBRow,
//   MDBCol,
//   MDBIcon,
// } from "mdb-react-ui-kit";
// import {
//   FaFacebookF,
//   FaTwitter,
//   FaGoogle,
//   FaInstagram,
//   FaLinkedin,
//   FaGithub,
// } from "react-icons/fa";
// import { IoLocationSharp, IoMail, IoCall, IoPrint } from "react-icons/io5";
// import "../styles/footer.css";

// const Home = () => {
//   useEffect(() => {
//     ScrollReveal({
//       reset: true,
//       distance: '60px',
//       durationIn: 2500,
//       delay: 400,
//     });

//     ScrollReveal().reveal('.home-img', { delay: 700, origin: 'right' });
//     ScrollReveal().reveal('.lead', { delay: 800, origin: 'left' });
//     ScrollReveal().reveal('.main_heading', { delay: 600, origin: 'left' });
//     ScrollReveal().reveal('.features_section', { delay: 600, origin: 'top' });
//     ScrollReveal().reveal('.features_section_cards_right', { delay: 600, origin: 'left' });
//     ScrollReveal().reveal('.features_section_cards_left', { delay: 600, origin: 'right' });
//     ScrollReveal().reveal('.get_connected_heading', { delay: 700, origin: 'left' });
//     ScrollReveal().reveal('.social_links_icons', { delay: 700, origin: 'right' });
//     ScrollReveal().reveal('.EHRMS_platform_heading', { delay: 700, origin: 'left' });
//     ScrollReveal().reveal('.discover_our_new_features_heading', { delay: 700, origin: 'top' });
//     ScrollReveal().reveal('.discover_our_new_features_content', { delay: 700, origin: 'bottom' });
//     ScrollReveal().reveal('.Contact_us_heading', { delay: 700, origin: 'right' });
//   }, []);

//   return (
//     <div className="container ml-0">
//       <div className="row align-items-center">
//         <header className="jumbotron mt-2 col-md-6 d-flex align-items-center">
//           <div className="container text-center glassmorphism">
//             <h1 className="display-4 fw-bolder main_heading">
//               Electronic Health Record Management System
//             </h1>
//             <p className="lead mt-5 sub_heading">
//               Welcome to our EHRMS platform. Manage health records efficiently and securely.
//             </p>
//           </div>
//         </header>

//         <div className="home-img col-md-6 py-5 img-container">
//           <img src={homeImg} alt="heart-img" className="img-fluid rounded-5" />
//         </div>
//       </div>

//       <div className="row align-items-center justify-content-center features_section">
//         <div className="col-md-12 text-center mt-6 mb-2">
//           <h1>Features</h1>
//         </div>
//       </div>

//       <div className="row align-items-center justify-content-center features_section_cards">
//         <div className="col-md-6 features_section_cards_right">
//           <motion.div
//             whileHover={{ scale: 1.05 }}
//             transition={{ duration: 1, ease: "backInOut" }}
//             className="card card-margin square-card shadow text-center mb-4"
//           >
//             <div className="card-body">
//               <script src="https://cdn.lordicon.com/lordicon.js"></script>
//               <lord-icon
//                 src="https://cdn.lordicon.com/xljvqlng.json"
//                 trigger="hover"
//                 style={{ width: "50px", height: "50px" }}
//               ></lord-icon>
//               <h5 className="card-title">Patient Records Management</h5>
//               <p className="card-text">Efficiently manage patient records.</p>
//             </div>
//           </motion.div>
//         </div>

//         <div className="col-md-6 features_section_cards_left">
//           <motion.div
//             whileHover={{ scale: 1.05 }}
//             transition={{ duration: 1, ease: "backInOut" }}
//             className="card card-margin square-card shadow text-center mb-4"
//           >
//             <div className="card-body">
//               <script src="https://cdn.lordicon.com/lordicon.js"></script>
//               <lord-icon
//                 src="https://cdn.lordicon.com/ogkflacg.json"
//                 trigger="hover"
//                 style={{ width: "50px", height: "50px" }}
//               ></lord-icon>
//               <h5 className="card-title">Appointment Scheduling</h5>
//               <p className="card-text">Schedule appointments seamlessly.</p>
//             </div>
//           </motion.div>
//         </div>

//         <div className="col-md-6 features_section_cards_right">
//   <motion.div
//     whileHover={{ scale: 1.05 }}
//     transition={{ duration: 1, ease: "backInOut" }}
//     className="card card-margin square-card shadow text-center mb-4"
//   >
//     <div className="card-body">
//       <script src="https://cdn.lordicon.com/lordicon.js"></script>
//       <lord-icon
//         src="https://cdn.lordicon.com/znjhzlev.json"
//         trigger="hover"
//         stroke="bold"
//         colors="primary:#121331,secondary:#000000"
//         style={{ width: "50px", height: "50px" }}
//       ></lord-icon>
//       <h5 className="card-title">Active Vaccinations</h5>
//       <p className="card-text">Stay updated on the ongoing vaccination camps.</p>
//     </div>
//   </motion.div>
// </div>

// <div className="col-md-6 features_section_cards_left">
//   <motion.div
//     whileHover={{ scale: 1.05 }}
//     transition={{ duration: 1, ease: "backInOut" }}
//     className="card card-margin square-card shadow text-center mb-4"
//   >
//     <div className="card-body">
//       <script src="https://cdn.lordicon.com/lordicon.js"></script>
//       <lord-icon
//         src="https://cdn.lordicon.com/depeqmsz.json"
//         trigger="hover"
//         style={{ width: "50px", height: "50px" }}
//       ></lord-icon>
//       <h5 className="card-title">Prescription Management</h5>
//       <p className="card-text">Efficiently manage prescriptions.</p>
//     </div>
//   </motion.div>
// </div>

//       </div>

//       <MDBFooter bgColor="light" className="text-center text-lg-start text-muted custom-footer">
//       <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom mt-5">
//         <div className="me-5 d-none d-lg-block get_connected_heading">
//           <span>Get connected with us on social networks:</span>
//         </div>

//         <div className='social_links_icons'>
//           <a href="#!" className="me-4 text-reset ">
//             <FaFacebookF color="secondary" className="icon-hover" />
//           </a>
//           <a href="#!" className="me-4 text-reset">
//             <FaTwitter color="secondary" className="icon-hover" />
//           </a>
//           <a href="#!" className="me-4 text-reset">
//             <FaGoogle color="secondary" className="icon-hover" />
//           </a>
//           <a href="#!" className="me-4 text-reset">
//             <FaInstagram color="secondary" className="icon-hover" />
//           </a>
//           <a href="#!" className="me-4 text-reset">
//             <FaLinkedin color="secondary" className="icon-hover" />
//           </a>
//           <a href="#!" className="me-4 text-reset">
//             <FaGithub color="secondary" className="icon-hover" />
//           </a>
//         </div>
//       </section>

//       <section className="">
//         <MDBContainer className="text-center text-md-start mt-5">
//           <MDBRow className="mt-3">
//             <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-md-0 mb-4 EHRMS_platform_heading">
//               <h4 className="text-3xl font-bold tracking-tighter md:text-4xl/tight mb-4">
//                 EHRMS platform
//               </h4>

//               <p>
//                 Welcome to our EHRMS platform. Manage health records efficiently
//                 and securely and get feature like Patient Records Management,
//                 Appointment Scheduling, Active Vaccinations, Prescription
//                 Management ,etc
//               </p>
//             </MDBCol>

//             <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
//               <section className="bg-gray-100 dark:bg-gray-800">
//                 <div
//                   className="container grid items-center justify-center gap-4 px-4 text-center md:px-6"
//                   style={{ maxWidth: "800px" }}
//                 >
//                   {/* Adjusted maxWidth here */}
//                   <div className="space-y-3">
//                     <h4 className="text-3xl font-bold tracking-tighter md:text-4xl/tight discover_our_new_features_heading">
//                       Discover Our New Features
//                     </h4>
//                     <p className="mx-auto max-w-[800px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 py-2 mb-0 discover_our_new_features_content">
//                       Explore the latest innovations in healthcare technology.
//                     </p>
//                   </div>
//                   <div className="mx-auto w-full max-w-sm space-y-2">
//                     <p className="text-xs text-gray-500 dark:text-gray-400 discover_our_new_features_content">
//                       Subscribe to our newsletter for updates and promotions.
//                     </p>
//                   </div>
//                 </div>
//               </section>
//             </MDBCol>

//             <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4 Contact_us_heading">
//               <h4 className="text-3xl font-bold tracking-tighter md:text-4xl/tight mb-4">
//                 Contact Us
//               <script src="https://cdn.lordicon.com/lordicon.js"></script>
// <lord-icon
//     src="https://cdn.lordicon.com/srsgifqc.json"
//     trigger="morph"
//     state="morph-phone-ring-finish"
//     style={{ width: "30px", height: "30px", paddingLeft: "10px" , paddingTop: "5px"  }} >
// </lord-icon>
//               </h4>
//               <p className="mb-3">
//                 <IoLocationSharp
//                   color="secondary"
//                   size={25}
//                   className="me-2 icon-hover"
//                 />
//                 Nagpur, NY 10012, India
//               </p>
//               <p className="mb-3">
//                 <IoMail
//                   color="secondary"
//                   size={25}
//                   className="me-3 icon-hover"
//                 />
//                 info@example.com
//               </p>
//               <p className="mb-3">
//                 <IoCall
//                   color="secondary"
//                   size={25}
//                   className="me-3 icon-hover"
//                 />{" "}
//                 + 01 234 567 88
//               </p>
//               <p className="mb-3">
//                 <IoPrint
//                   color="secondary"
//                   size={25}
//                   className="me-3 icon-hover"
//                 />{" "}
//                 + 01 234 567 89
//               </p>
//             </MDBCol>
//           </MDBRow>
//         </MDBContainer>
//       </section>
//       <div
//         className="text-center p-4"
//         style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
//       >
//         © {new Date().getFullYear()} Copyright:
//         <span className="text-reset fw-bold">EHRMS.com</span>
//       </div>
//       </MDBFooter>
//     </div>
//   );
// };

// export default Home;