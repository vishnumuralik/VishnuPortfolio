import React from 'react'
import {motion} from "framer-motion"
type Props = {}

function Skills(directionLeft: Props) {
  return (
    <div className="group relative flex cursor-pointer">
        <motion.img
        initial={{
            x: directionLeft ? -200 : 200,
            opacity: 0,
          }}
          transition={{
            duration:1
          }}
          whileInView={{opacity: 1, x: 0}}  
          src='https://i.postimg.cc/zBTgR7zw/pngwing-com.png' alt='react'
          className='rounded-full border border-gray-500 w-24 h-24 xl:w-20 xl:h-20 filter group-hover:grayscale transition duration-300 ease-in-out'/>
          <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-20 xl:h-20 rounded-full z-0'>
            <div className='flex items-center justify-center h-full'>
                <p className='text-3xl font-bold text-black opacity-100'>100</p>
            </div>
          </div>


          <div className="group relative flex cursor-pointer">
        <motion.img
        initial={{
            x: directionLeft ? -200 : 200,
            opacity: 0,
          }}
          transition={{
            duration:1
          }}
          whileInView={{opacity: 1, x: 0}}  
          src='https://i.postimg.cc/d0FFg6mL/icons8-python-48.png' alt='Python'
          className='rounded-full border border-gray-500 w-24 h-24 xl:w-20 xl:h-20 filter group-hover:grayscale transition duration-300 ease-in-out'/>
          <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-20 xl:h-20 rounded-full z-0'>
            <div className='flex items-center justify-center h-full'>
                <p className='text-3xl font-bold text-black opacity-100'>70</p>
            </div>
          </div>
    </div>

    <div className="group relative flex cursor-pointer">
        <motion.img
        initial={{
            x: directionLeft ? -200 : 200,
            opacity: 0,
          }}
          transition={{
            duration:1
          }}
          whileInView={{opacity: 1, x: 0}}  
          src='https://i.postimg.cc/RFGyg6BY/Workday-Symbol.png' alt='Workday'
          className='rounded-full border border-gray-500 w-24 h-24 xl:w-20 xl:h-20 filter group-hover:grayscale transition duration-300 ease-in-out'/>
          <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-20 xl:h-20 rounded-full z-0'>
            <div className='flex items-center justify-center h-full'>
                <p className='text-3xl font-bold text-black opacity-100'>60</p>
            </div>
          </div>
    </div>
    
    </div>


          
  );
}

export default Skills