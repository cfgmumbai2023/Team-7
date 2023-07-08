import React from "react";
import { Icon } from 'react-icons-kit'
import {facebook} from 'react-icons-kit/icomoon/facebook'
import {twitter} from 'react-icons-kit/icomoon/twitter'
import {instagram} from 'react-icons-kit/fa/instagram'


const Socials = () => {

  const links = [
    {
      id:1,
      child:(
        <>Facebook <Icon size={30} icon={facebook} style={{color: '#4267B2'}}/></>
      ),
      href: 'https://www.facebook.com/RkssTrust/',
    },
    {
      id:2,
      child:(
        <>Twitter <Icon size={30} icon={twitter} style={{color: '#00acee'}}/></>
      ),
      href: 'https://twitter.com/rkssngo?t=UvyGpQpybPkFHxSPppFIvw&s=09',
    },
    {
      id:3,
      child:(
        <>Instagram <Icon size={30} icon={instagram} style={{color: '#bc2a8d'}}/></>
      ),
      href: 'https://www.instagram.com/rkssmumbai/?igshid=YmMyMTA2M2Y%3D',
    },
  ];

  return (
    <div className="hidden lg:flex flex-col top-[35%] fixed left-0">
      <ul>

        {links.map(({child, href, style, id})=>(
          <li key={id} className={`flex justify-between items-center my-1 rounded-r-full mx-auto w-40 h-[65px] px-5 ml-[-100px] bg-black hover:ml-[-5px] hover:rounded-r-full duration-300 cursor-pointer ${style}`}>
            <a href = {href} className="flex justify-between pl-2 items-center text-white w-full" target="_blank" rel="noreferrer">
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Socials