import React from 'react'
import Navbar from './Navbar';
import Flowchart1 from './Flowchart1';
import Flowchart2 from './Flowchart2';
import Flowchart3 from './Flowchart3';

const Insights = () => {
  return (
    <div name="insights" className="flex font-sans w-full h-full"
    style = {{
      background: "white"
    }}>
        <Navbar />
        <div className='flex flex-col mt-[200px] w-[600px] my-auto mx-auto'>
          <div className='flex flex-col mt-[-50px]'>
            <Flowchart1 />
          </div>
          <div className='flex flex-col mt-[-320px]'>
            <Flowchart2 />
          </div>
          <div>
            <Flowchart3 />
          </div>
        </div>
    </div>
  )
}

export default Insights