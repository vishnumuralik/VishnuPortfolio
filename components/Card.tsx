import React from 'react'
import {motion} from "framer-motion"
type Props = {}

function Card({}: Props) {
  return (
    <article className='flex flex-row rounded-lg space-y-10 flex-shrink-0 w-[200px] h-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
        <motion.img
        initial={{
        y: -100,
        opacity:0
        }}
        transition={{ duration: 1.2}}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once:true }}
        />


        <div className='px-0 md:px-10'>
        <h4 className='text-4xl font-light'>Software Engineer -Ust 🚀</h4>
        <p className='py-1 text-gray-200'>
        At UST I work as a Software Engineer specializing in Human Capital Management (HCM) systems, enhancing functionality on platforms like Workday and ServiceNow. My role blends back-end development, data integration, and application support to streamline HR processes</p>
        <img className='h-20 w-20 rounded-md'src='https://i.postimg.cc/XJnqW43S/download-1.png' alt='Images'/>
        <p className='py-1 text-gray-200'>Elective Date [Nov-2022 to Present]</p>
        <p>---------------------------------------------------------------------------------------------------------------</p>
        <div className='flex space-x-2 my-2'>
            <img className='h-10 w-14 rounded-md'src='https://i.postimg.cc/mrhRKnxV/62c6c97aeee9410fe137d940.png' alt='Images'/>
         </div>
                <ul className='list-disc space-y-1 ml-5 text-sm'>
                <li>Develop and enhance Human Capital Management (HCM) systems to support efficient HR processes.</li>
                <li>Work with platforms like Workday and ServiceNow to integrate and optimize enterprise applications.</li>
                <li>Implement back-end solutions focused on data integration and system interoperability.</li>
                <li>Provide application support, troubleshooting, and technical assistance to ensure seamless operations.</li>
                <li>Design scalable, user-centered solutions that align with client requirements and evolving needs.</li>
                <li>Collaborate with cross-functional teams to deliver tailored solutions that drive business value.</li> 
                </ul>
        </div>
     </article>
  )
}

export default Card;