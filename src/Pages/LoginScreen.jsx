import React, { useState } from 'react';
import './Style.css'
import Input from '../components/Input';
import Button from '../components/button';
import Heading from '../components/Heading';

const LoginScreen = () => {
  let [email,setEmail] = useState('')
  let [password,setPassword] = useState('')
  return (
    <div className="card">
      <div className='relative top-[50px]'>
        <Heading text="Signin to your PopX account" />
      </div>
      <div className='content login-content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
      <div className='relative top-[90px]'>
        <Input className=""
          type="email"
          placeholder="Enter Email Address"
          floatText="Email Address"
          setValue={setEmail}
          Value = {email}
        />
        <Input className="log-inp-2"
          type="password"
          placeholder="Enter password"
          floatText="Password"
          setValue={setPassword}
          Value = {password}
        />
        <Button />
      </div>
    </div>
  );
};

export default LoginScreen;
