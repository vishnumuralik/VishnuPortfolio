'use client';
import Head from 'next/head'
import Header from '../../components/Header'
import Hero from '../../components/Hero'
import About from '../../components/About';
import WorkExperience from '../../components/WorkExperience';
import Skill from '../../components/Skill';
import Projects from '../../components/Projects';
import ContactMe from '../../components/ContactMe';
import Link from 'next/link';
export default function Home() { 
  return (
   <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400 scrollbar-thumb-[#F7ABBA]/80'>
    <Head>
      <title>Vishnu </title>
      </Head>
      <Header/>
      <section id='hero' className='snap-start'>
        <Hero/>
      </section>
      <section id="about" className='snap-center'>
        <About/>
      </section>
    <section id="experience" className='snap-center'>
     <WorkExperience/>
    </section>
    <section id="skill" className='snap-start'>
     <Skill/>
    </section>
    <section id="projects" className='snap-start'>
     <Projects/>
    </section>
    <section id="contact" className='snap-start'>
    <ContactMe/>
    </section>
    <Link href="#hero">
      <footer className='sticky bottom-5 w-full cursor-pointer'>
        <div className='flex items-center justify-center'>
          <img className='h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer' src="https://i.postimg.cc/jjVTwWwy/photo.jpg" alt="footer"/>
        </div>
      </footer>
      </Link>
   </div>
   )
}




 