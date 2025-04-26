import React from 'react';
import Button from '../components/button';
import Heading from '../components/Heading';
import { useNavigate } from 'react-router-dom';
const Home = () => {
  const navigate = useNavigate();
  const handleCreateAccount = () =>{
    navigate('/signup');
  }
  const handleLogin = () =>{
    navigate('/login');
  }
  return (
    <div className="relative w-[375px] h-[812px] bg-[#F7F8F9] border border-[#d7d7d7b8]">
      <div className='relative top-[550px]'>
        <Heading text="Welcome to PopX" />
      </div>
      <div className="relative top-[570px] left-[20px] w-[232px] h-[48px] text-left text-[#1D2226] opacity-60 text-[18px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      </div>
      <div className='relative top-[570px]'>
        <Button onClick={handleCreateAccount} text="Create your PopX account" disable={false} color="bg-[#6C25FF]" textColor="text-white" />
        <Button text="Already Registered? Login" disable={false} color="bg-[#6C25FF4B]" textColor="text-black" onClick={handleLogin} />
      </div>
    </div>
  );
};

export default Home;
