import React, { useState } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from 'react-scroll';
import logo from '../assets/RKSS_Logo.png';

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
            link:"donate",

        },
        {
            id:4,
            link:"achievements",
        },
    ];

  return (
    <div className='h-16 flex justify-between mx-auto pl-[250px] pr-[250px] items-center w-full md:h-[80px] border-b-2 text-white fixed px-4 bg-white z-50'>
      <div className='text-4xl text-red-500'>
        <img src = {logo} alt = "RKSS Logo" target="_blank" className='w-1/4 sm:w-[60px]'/>
      </div>

      <ul className='hidden md:flex gap-3'>

        {links.map(({id, link}) => (
          <li key={id} className='flex justify-end w-full h-full text-xl cursor-pointer capitalize px-6 p-2 text-[#000000] hover:text-[#c00000]  hover:scale-110'>
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>

      <div className='text-xl cursor-pointer capitalize px-6 p-2 rounded-full text-[#ffffff] bg-[#c00000] hover:bg-[#4b4747]'>
        <a href="https://www.github.com/himanshu-03">
          <button>
            Login
          </button>
        </a>
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