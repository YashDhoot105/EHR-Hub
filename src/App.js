import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NewsBoard from './components/NewsDashboard';
import RegistrationForm from './components/RegistrationForm';
import { useEffect, useState } from 'react';
import { auth } from './components/firebase'; // Double-check this import
import Login from './components/Login';
import PatientSearch from './components/PatientSearch';
import Vaccination from './components/vaccination';
import Registration_form_vaccination from './components/registration_form_vaccination';
import PrescriptionManagementPage from './components/PrescriptionManagementPage';
// import HealthInsurancePlans from './components/HealthInsurancePlans';

function App() {
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
      } else {
        setUserName('');
      }
      console.log(user);
    });

    // Cleanup function to unsubscribe from the listener
    return unsubscribe;
  }, [auth]); // Add any necessary dependencies

  return (
    <>
      <Navbar name={userName} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/newsBoard" element={<NewsBoard />} />
          <Route path="/registrationForm" element={<RegistrationForm />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration/:vaccinationId" element={<Registration_form_vaccination />} />
          <Route path="/vaccination" element={<Vaccination />} />
          <Route path="/record" element={<PatientSearch />} />
          <Route path="/prescription" element={<PrescriptionManagementPage />} />
          {/* <Route path="/health-insurance" element={<HealthInsurancePlans />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;