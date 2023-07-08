import React from 'react'

const Footer = () => {
  return (
    <div className="flex font-sans w-full h-[50px]"
        style = {{
        background: "#000000"
        }}>
      <div className='pt-3 max-w-screen-lg mx-auto flex text-white justify-center w-full h-full'>
        <p>&#169; Copyright 2022 by rkssngo.org</p>
      </div>
    </div>
  )
}

export default Footer