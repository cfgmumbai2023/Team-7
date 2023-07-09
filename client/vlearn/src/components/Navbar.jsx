import React, { useState } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from 'react-scroll';
import logo from '../assets/RKSS_Logo.png';
import {useNavigate} from 'react-router-dom'
const Navbar = () => {

  const [nav, setNav] = useState(false);

    const links = [
        {
            id:1,
            link:"about",

        },
        {
            id:2,
            link:"partners",

        },
        {
            id:3,
            link:"contribute",
        },
    ];
    const  navigate= useNavigate();

    const routeToSignUp=()=>{
      let path = `/signup`;
      navigate(path)
    }

    const routeToLogin=()=>{
      let path = `/login`;
      navigate(path)
    }

    const routeToHomepage=()=>{
      let path = `/`;
      navigate(path)
    }

  const [showTooltip, setShowTooltip] = useState(false);
  const toggleTooltip = () => {
    setShowTooltip(!showTooltip);
  };

  return (
    <div className='h-16 flex justify-between mx-auto pl-[250px] pr-[250px] items-center w-full md:h-[80px] border-b-2 text-white fixed px-4 bg-white z-50'>
      <div className='flex flex-row text-4xl text-red-500'>
        <button onClick={routeToHomepage} className='flex flex-row'>
          <img src = {logo} alt = "RKSS Logo" target="_blank" className='w-1/4 sm:w-[250px]'/>
        </button>
      </div>

      <ul className='hidden md:flex gap-3'>

        {links.map(({id, link, url}) => (
          <li key={id} className='flex justify-end w-full h-full text-xl cursor-pointer capitalize px-6 p-2 text-[#000000] hover:text-[#c00000]  hover:scale-110' onMouseEnter={toggleTooltip} onMouseLeave={toggleTooltip}>
            <a href={url}>
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
            </a>
            {showTooltip && (
            <div className='mt-10 ml-[-100px] bg-yellow-200 text-gray-800 text-sm py-1 px-1 rounded-md absolute top-0 right-0 transform translate-x-full'>
              Work in Progress
            </div>
            )}
          </li>
        ))}
      </ul>

      <a href="http://localhost:3000/insights" className='text-black flex h-full text-xl cursor-pointer capitalize px-6 p-2 pt-6 hover:text-[#c00000] hover:scale-110'>Insights</a>

      <div className="flex justify-between flex-row gap-5">
        <div className='text-xl cursor-pointer capitalize px-6 p-2 rounded-full text-[#ffffff] bg-[red] hover:bg-[#c00000]' onClick={routeToLogin}>
              Login
        </div>
        <div className='text-xl cursor-pointer capitalize px-6 p-2 rounded-full text-[#ffffff] bg-[blue] hover:bg-[#2326cf]' onClick={routeToSignUp}>
              Register
        </div>
        
      </div>

      <div onClick={()=> setNav(!nav)} className='cursor-pointer text-gray-400 pr-3 z-50 md:hidden'>
        {
            nav ? <FaTimes size={30}/> : <FaBars size={30}/>
        }
      </div>

      {nav && (
        <ul className='flex flex-col justify-center items-center w-full h-screen absolute left-0 top-0' style={{
          background: "linear-gradient(180deg, hsla(0, 0%, 0%, 1) 0%, hsla(0, 78%, 49%, 1) 110%)"
        }}>
                    
          {links.map(({id, link}) => (
            <li key={id} className='text-3xl cursor-pointer rounded-full capitalize px-4 py-6 text-[#ffffff] hover:text-[#ff3131]  hover:scale-110'>
              <Link
                onClick={() => setNav(!nav)}
                to={link} smooth duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Navbar