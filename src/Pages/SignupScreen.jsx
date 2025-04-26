import React, { useState } from 'react';
import './Style.css'
import Heading from '../components/Heading';
import Input from '../components/Input';
import Button from '../components/Button';
import Radio from '../components/Radio';

const SignupScreen = () => {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [isAgency, setIsAgency] = useState('');
  return (
    <div className="card">
      <div className='relative top-[50px]'>
        <Heading text="Signin to your PopX account" />
      </div>
      <div className='content login-content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
      <div className='relative top-[90px]'>
        <Input className=""
          type="text"
          floatText="Full Name*"
          setValue={setFullName}
          Value = {fullName}
        />
        <Input className="log-inp-2"
          type="Number"
          floatText="Phone number*"
          setValue={setPhoneNumber}
          Value = {phoneNumber}
        />
        <Input className="log-inp-2"
          type="email"
          floatText="Email address*"
          setValue={setEmail}
          Value = {email}
        />
        <Input className="log-inp-2"
          type="password"
          floatText="Password*"
          setValue={setPassword}
          Value = {password}
        />
        <Input className="log-inp-2"
          type="text"
          floatText="Company name"
          setValue={setCompanyName}
          Value = {companyName}
        />
        <div className='pl-5 pt-2'>Are you an Agency?*</div>
        <Radio name="Agency" options={["Yes", "No"]} selected={isAgency} setSelected={setIsAgency} />
        <Button text="Create Account" disable={false} color="bg-[#6C25FF]" textColor="text-white" />
      </div>
    </div>
  );
};

export default SignupScreen;
