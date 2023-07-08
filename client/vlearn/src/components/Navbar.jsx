import React, { useState } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from 'react-scroll';

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
    <div className='h-16 flex mx-auto pl-10 items-center w-full md:h-20 text-white fixed px-4 bg-black z-50'>
      <div className='text-4xl text-red-500'>
        VLearn
      </div>

      <ul className='hidden md:flex gap-3 md:pl-[800px]'>

        {links.map(({id, link}) => (
          <li key={id} className='flex justify-end w-full h-full text-xl cursor-pointer capitalize px-6 p-2 text-[#f3e7e7] hover:text-[#d53b3b]  hover:scale-110'>
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>

      <div className='text-xl cursor-pointer capitalize px-6 p-2 text-[#f3e7e7] hover:text-[#d53b3b]  hover:scale-110'>
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