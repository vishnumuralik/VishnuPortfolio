'use client';
import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCricles from './BackgroundCricles';
import MyPhoto from '../components/photo.jpg';
import Image from 'next/image';
import Link from 'next/link';
type Props = {}

function Hero({}: Props) {
    const [text, count] = useTypewriter({
        words:["Hello,This is Vishnu💻 < Welcome 💪🚀🔥 />"],
        loop: true,
        delaySpeed:2000
    });

  return (
   <div className='h-screen flex flex-col space-y-8 justify-center text-center overflow-hidden'>
    <BackgroundCricles/>
    <Image src={MyPhoto} alt='Picture' className='relative rounded-full h-32 w-32 mx-auto object-cover'/>
         <div className='z-20'>
            <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>SOFTWARE ENGINEER</h2>
            <div>
                    <h1 className='text-5xl lg:text-6xl font-semibold px-10'> 
                    <span className='mr-3'>{text}</span>
                    <Cursor cursorColor="#F7ABBA"/>
                    </h1>
                            <div className='pt-5'>
                                <Link href="#about">
                                <button className='heroButton'>About</button>
                                </Link>
                                <Link href="#experience">
                                <button className='heroButton'>Experience</button>
                                </Link>
                                <Link href="#project">
                                <button className='heroButton'>Projects</button>
                                </Link>
                                <Link href="#skill">
                                <button className='heroButton'>Skill</button>
                                </Link>
                                <Link href="#contact">
                                <button className='heroButton'>Contact</button>
                                </Link>
                        </div>
                </div>
            </div>  
   </div> 
  );
}

export default Hero;