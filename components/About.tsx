import React from 'react'
import {motion} from "framer-motion"


type Props = {}

function About({}: Props) {
  return (

    <motion.div 
    initial={{opacity: 0}}
    whileInView={{opacity:1}}
    transition={{ duration: 1.5}}
    className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
    <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>ABOUT</h3>
    <motion.img 
    initial ={{
        x: -200,
        opacity:0
    }}
    transition={{
        duration: 1.2
    }}
    whileInView={{ opacity:1, x:0 }}
    viewport={{ once: true }}
    src="https://i.postimg.cc/jjVTwWwy/photo.jpg" className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[300px] xl:h-[300px]"/>


     <div className='space-y-10 px-0 md:p-10'>
     <h4 className='text-4xl font-semibold'>Meet Vishnu:  {""}
     <span className='underline decoration-[#F7ABBA]/50'>Your Next Data Dynamo & Tech Explorer</span> 🚀 {""}</h4>
         <p className='text-base text-justify'>
           Hello! I’m Vishnu 👋, a dedicated Software Engineer at UST with two years of experience in developing innovative solutions 💻. I’m currently expanding my skill set in data science 📊 and data engineering, along with mastering React ⚛️ and React Native 📱, to enhance my ability to create impactful applications and systems.
           My journey in tech is driven by a passion for continuous learning and problem-solving 🔍. As I upskill, I aim to leverage my knowledge in data and front-end development to contribute to projects that make a difference. Additionally, I have a strong interest in psychology 🧠, which informs my approach to understanding user experience and crafting intuitive interfaces.
          I believe in the power of technology to drive change, and I’m excited about the opportunities that lie ahead 🌟. Let’s connect and explore how I can contribute to innovative projects and continue growing within the tech community!
        </p>
 </div>
 </motion.div>
  )
}

export default About;