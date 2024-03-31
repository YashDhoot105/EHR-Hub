import { createUserWithEmailAndPassword,updateProfile } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from './firebase';
import { useNavigate } from 'react-router-dom';
import "../styles/registration_form.css";


const RegistrationForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errMsg, setErrMsg] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === 'checkbox' ? checked : value;
    setFormData(prevState => ({
      ...prevState,
      [name]: val
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!formData.name || !formData.email || !formData.password || !formData.confirmPassword)
    {
      setErrMsg('Fill all fields');
      return;
    }
    setErrMsg('');
    if (formData.password !== formData.confirmPassword) {
      setErrMsg('password and confirm password field value does not match');
      return;
    }
    
    createUserWithEmailAndPassword(auth,formData.email,formData.password)
    .then( (res)=>{
      console.log(res);
      const user = res.user;
     updateProfile(user,{
        displayName: formData.name
      });
      navigate('/');
    })
    .catch(
      (err)=>{
        setErrMsg(err.message);
      }
    )
    // Clear form inputs after registration
    setFormData({
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    });
  };

  const handleClear = () => {
    // Clear form inputs
    setFormData({
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    });
    setErrMsg('');
  };

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-5">
          <div className="registration-container p-4 border rounded shadow">
            <h2 className="text-center mb-4 registration_heading">Registration</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-1">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
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
              <div className="mb-1">
                <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="mb-1 d-flex justify-content-around mt-3">
                <button type="submit" className="register_button p-2">Register</button>
                <button type="button" className="Clear_button p-2" onClick={handleClear}>Clear Form</button>
              </div>
              <div className="text-center">
                <b className='text-center text-danger'>{errMsg}</b>
              <p>Already have an account? <a href="/login">Log in</a></p>
            </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
