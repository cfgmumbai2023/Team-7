import React, { useState } from 'react';
import Navbar from './Navbar';
import Socials from './Socials';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Homepage = () => {
  const navigate = useNavigate();
  const [textInput, setTextInput] = useState('');
  const [Class, setClass] = useState('');
  const [Language, setLanguage] = useState('');
  const [videoData, setVideoData] = useState([]);
  const [query, setQuery] = useState('');
  const handleTextInputChange = (e) => {
    setTextInput(e.target.value);
  };

  const handleClassChange = (e) => {
    setClass(e.target.value);
  };

  const handlelanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  const handlOnClick = ()=>{
    sendDataToServer();
    handleSearch();
  }

  const sendDataToServer = async () => {
    try {
      const data = {
        class: Class,
        topic:textInput,
        language:Language,
      };

      await axios.post('http://localhost:5000/api/endpoint', data);
      console.log('Data sent to server successfully');
    } catch (error) {
      console.error('Error sending data to server:', error);
    }
  };
  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/videos?querystring=${encodeURIComponent(query)}`);
      setVideoData(response.data);
    } catch (error) {
      console.error('Error fetching video data:', error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/search');
    console.log('Text input:', textInput);
    console.log('Dropdown 1 value:', Class);
    console.log('Dropdown 2 value:', Language);
  };

  const handleResetClick = () => {
    setTextInput('');
    setClass('');
    setLanguage('');
  };

  return (
    <div name="home" className="flex font-sans w-full h-screen"
      style = {{
        background: "linear-gradient(0deg, hsla(0, 85%, 56%, 1) 0%, hsla(0, 0%, 0%, 1) 80%)"
      }}>
      <Navbar/>
      <Socials />
      <div className='max-w-screen-lg align-items justify-center flex flex-col font-bold mx-auto rounded-[40px] my-auto h-[400px] w-[700px] text-black' 
        style = {{  
          background: "rgba(255, 255, 255, 1)"
      }}>
        <form onSubmit={handleSubmit}>
        <div className='p-5 align-items justify-center flex flex-col md:flex-row'>
          <label htmlFor="text-input" className='inline-block text-center pt-4'>Enter the title to search </label>
          <input
            type="text" 
            id="text-input"
            placeholder='Search Title Here'
            value={textInput}
            onChange={handleTextInputChange}
            className='input1 mt-2 ml-[70px] w-[200px]'
          />
        </div>
        <div className='p-5 flex align-items justify-center flex-col md:flex-row'>
          <label htmlFor="Class" className='flex pt-4'>Enter your class</label><br />
          <select id="class" value={Class} onChange={handleClassChange} placeholder="Select your class" className='mt-2 ml-[125px] flex justify-end w-[200px]'>
            <option value="">Select an option</option>
            <option value="class1">Class I</option>
            <option value="class2">Class II</option>
            <option value="class3">Class III</option>
            <option value="class4">Class IV</option>
            <option value="class5">Class V</option>
            <option value="class6">Class VI</option>
            <option value="class7">Class VII</option>
            <option value="class8">Class VIII</option>
            <option value="class9">Class IX</option>
            <option value="class10">Class X</option>
            <option value="class11">Class XI</option>
            <option value="class12">Class XII</option>

          </select>
        </div>
        <div className='p-5 align-items justify-center flex flex-col md:flex-row'>
          <label htmlFor="language" className='pt-4'>Enter your preferred language</label><br />
          <select id="language" value={Language} onChange={handlelanguageChange} className='mt-2 ml-[22px] w-[200px]'>
            <option value="">Select a language</option>
            <option value="english">English</option>
            <option value="hindi">Hindi</option>
            <option value="gujarati">Gujarati</option>
            <option value="marathi">Marathi</option>
          </select>
        </div>
        <div className='p-5 align-items justify-center pl-[190px] pr-[190px] flex flex-col w-full mx-auto md:flex-row'>
            <button type="submit" className='mt-5 text-center flex flex-col mx-auto p-2 px-4 rounded-md text-[white] bg-[#ff0d0d] hover:text-[white] hover:bg-[#c00000]' onClick={handlOnClick} href='http://localhost:3000/search'>Submit</button>
            <button onClick={handleResetClick} className='mt-5 text-center flex flex-col mx-auto p-2 px-4 rounded-md text-[white] bg-[#003cff] hover:text-[white] hover:bg-[#2326cf]'>Reset</button>
        </div>
        </form>
      </div>
    </div>
  )
}

export default Homepage