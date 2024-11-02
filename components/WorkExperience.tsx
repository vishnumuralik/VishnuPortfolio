'use client';
import React from 'react'
import {motion} from "framer-motion"
import Card from './Card';

type Props = {}

function WorkExperience({}: Props) {
  return (
    <motion.div 
    initial={{opacity: 0}}
    whileInView={{opacity:1}}
    transition={{ duration: 1.5}}

    className='h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-5 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-10 uppercase tracking-[10px] text-gray-500 text-2xl'>Experience</h3>
    <div className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-track-gray-400 scrollbar-thumb-[#F7ABBA]/80 '>
        <Card/>
    </div>
    </motion.div>
  )
}

export default WorkExperience;