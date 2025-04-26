import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginScreen from './Pages/LoginScreen';
import SignupScreen from './Pages/SignupScreen';
import ProfileScreen from './Pages/ProfileScreen';
import Home from './Pages/Home';
import './App.css'

const App = () => {
  return (
    <div className='appstyle'>  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/signup" element={<SignupScreen />} />
        <Route path="/profile" element={<ProfileScreen />} />
      </Routes>
    </div>
  );
};

export default App;
