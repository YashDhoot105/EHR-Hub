
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import NewsBoard from './components/NewsDashboard';
import Footer from './components/Footer';
import RegistrationForm from './components/RegistrationForm';
import { useEffect, useState } from 'react';
import { auth } from './components/firebase';
import Login from './components/Login';
import PatientSearch from './components/PatientSearch';
import Vaccination from './components/vaccination';
import Registration_form_vaccination from './components/registration_form_vaccination';
import PrescriptionManagementPage from './components/PrescriptionManagementPage';
// import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  const [userName, setUserName] = useState('');
  useEffect(()=>{
    auth.onAuthStateChanged((user) =>{
      if(user){
        setUserName(user.displayName);
      }else{
        setUserName('');
      }
      console.log(user);
    });
  })
  return (
    <>
    <Navbar name ={userName}/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/newsBoard" element={<NewsBoard/>}/>
        <Route path="/registrationForm" element={<RegistrationForm/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/registration/:vaccinationId" element={<Registration_form_vaccination />} />
        <Route path="/vaccination" element={<Vaccination/> }/>
        <Route path="/record" element={<PatientSearch/>}/>
        <Route path="/prescription" element={<PrescriptionManagementPage />} />
      </Routes>
    </BrowserRouter>
    {/* <Footer/> */}
    </>
    
  );
}

export default App;
