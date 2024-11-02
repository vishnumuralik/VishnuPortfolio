import React from 'react';
import { motion } from "framer-motion";
import Skills from './Skills';

type Props = {};

function Skill({}: Props) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'
    >
      <h3 className='absolute top-10 uppercase tracking-[10px] text-gray-500 text-3xl'>Skills</h3>
    
      <h3 className='absolute top-20 uppercase tracking-[3px] text-gray-500 text-sm'>Hover over a skill for proficiency</h3>

      <article className='flex flex-row rounded-lg space-y-10 flex-shrink-0 w-[1000px] h-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
        <motion.img
          initial={{ y: -100, opacity: 0 }}
          transition={{ duration: 1.2 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        />

        <div className='px-0 md:px-10'>
          <h4 className='text-4xl font-light'>Skilled Acquired--🚀</h4>
          <p>----------------------------------------------------------------------------------</p>
          <ul className='list-disc space-y-1 ml-5 text-sm'>
            <li>Data Science: Gained expertise in statistical analysis and data interpretation.</li>
            <li>Data Analytics: Developed skills in data visualization and reporting tools.</li>
            <li>React: Enhanced proficiency in building interactive user interfaces.</li>
            <li>React Native: Learned to create mobile applications using React principles.</li>
            <li>Psychology: Explored concepts to understand user behavior and enhance UX design.</li>
          </ul>
          <p>🚀Hover over a skill for proficiency🚀</p>
            <p>----------------------------------------------------------------------------------</p>
        
          <div className='grid grid-cols-3 gap-3'>
        <Skills />
        <Skills />
      </div>
        </div>
      </article>
    </motion.div>
  );
}

export default Skill;
