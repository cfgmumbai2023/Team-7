import React, { useState } from 'react' 
import Navbar from "./Navbar";
import Socials from "./Socials";

const Login = () => {

    const [email, setEmail] = useState(""); //email
    const [password, setPassword] = useState(""); //password

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email value:', email);
    console.log('Password value:', password);
  };

  return (
    <div name="home" className="flex font-sans w-full h-screen"
      style = {{
        background: "linear-gradient(0deg, hsla(0, 85%, 56%, 1) 0%, hsla(0, 0%, 0%, 1) 80%)"
      }}>
      <Navbar />
      <Socials />
      <div className='max-w-screen-lg align-items justify-center flex flex-col font-bold mx-auto rounded-[40px] my-auto h-[400px] w-[700px] text-black' 
        style = {{  
          background: "rgba(255, 255, 255, 1)"
      }}>
        <form onSubmit={handleSubmit}>
        
        <div className='p-5 align-items justify-center flex flex-col md:flex-row'>
          <label htmlFor="text-input" className='inline-block text-center pt-4'>Please enter your Email</label>
          <input
            type="email" 
            id="email"
            placeholder='email@company.com'
            value={email}
            onChange={handleEmailChange}
            className='input1 mt-2 ml-[100px] w-[200px]'
          />
        </div>
        <div className='p-3 align-items justify-center flex flex-col md:flex-row'>
          <label htmlFor="text-input" className='pt-4'>Please enter your password </label>
          <input
            type="password" 
            id="password"
            placeholder='Password'
            value={password}
            onChange={handlePasswordChange}
            className='input1 mt-2 ml-[70px] w-[200px]'
          />
        </div>
        
        <div className='p-3 align-items justify-center pl-[190px] pr-[190px] flex flex-col w-full mx-auto md:flex-row'>
          <button type="submit" className='mt-5 text-center flex flex-col mx-auto p-2 px-4 rounded-md text-[black] bg-[#15e92a] hover:text-[white] hover:bg-[#169f26]'>Log In</button>
        </div>
        </form>
      </div>
    </div>
  )
}

export default Login