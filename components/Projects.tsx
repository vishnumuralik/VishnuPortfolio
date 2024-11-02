import React from 'react'
import {motion} from "framer-motion"
import { SocialIcon } from 'react-social-icons';

type Props = {}

function Projects({}: Props) {
    const projects = [1];
  return (
    <motion.div
    initial={{opacity: 0}}
    whileInView={{ opacity: 1}}
    transition={{ duration: 1.5}}
     className='relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
    <h3 className='absolute top-24 uppercase tracking-[10px] text-gray-500 text-3xl'>Projects</h3>


    <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400 scrollbar-thumb-[#F7ABBA]/80'>
    {projects.map((projects, i) => (
        <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
            <motion.img
            initial ={{
                y: -300,
                opacity:0
            }}
                transition={{ duration: 1.5}}
                whileInView={{opacity:1, y:0 }}
                viewport={{once: true}}
             src="https://i.postimg.cc/MGTCpnPx/DALL-E-2024-11-02-18-31-28-Create-a-sleek-modern-PNG-logo-for-a-data-science-project-called-Fili.webp" alt='projects' className='w-10 h-20 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-start'/>
             
            <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                <h4 className="text-4xl font-semibold text-center">
                    <span className="underline decoration-[#F7ABBA]/50">Case Study {i + 1}{projects.length} :</span>
                    <i>Amazon-Clone</i></h4>
            </div>
            <p className='text-sm text-center md:text-left justify-center'>
            <ul className='list-disc space-y-1 ml-5 text-sm'>
               <li>📊 1. Data Completeness Check - Built a simple script to calculate missing values in datasets, essential for quality control and preprocessing.</li> 
                <li>🎬 2. Director Movie Finder - Created a user-friendly app with tkinter that lets users search for movies by a specific director, providing an intuitive way to explore filmographies.</li>
               <li>🎥 3. Collaborative Filtering for Movies - Developed a recommendation system using collaborative filtering. By calculating movie similarities based on audience and critic scores, it suggests similar movies to users based on their favorites!</li> 
               <li>📝 4. Content-Based Review Recommendations - Used content-based filtering to recommend reviews with similar text and sentiment. Great for diving deeper into viewer opinions and understanding related reviews.</li> 
            </ul>
            Each project sharpened my skills in data processing, recommendation systems, and Python libraries like pandas, sklearn, and tkinter. It’s exciting to see how these small tools can add value in fields ranging from entertainment to data science!
            </p>
            
        </div>

    ))}
    </div>

    <div className='w-full absolute top-[30%] bg-[#F7ABBA]/10 left-0 h-[500px] -skew-y-12'>

    </div>
    </motion.div>
  )
}

export default Projects