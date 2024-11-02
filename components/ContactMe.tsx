import React from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import { useForm, SubmitHandler } from "react-hook-form"

type Props = {}

type Inputs ={
    name:string,
    email: string,
    phoneNumber: number,
    message: string
};
function ContactMe({}: Props) {
    const { register, handleSubmit} = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (formData) => 
    window.location.href=`mailto:${formData.email}?subject=${formData.message}&body= Hi, My Name is ${formData.name}${formData.message}`;

  return (
    <div className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center space-y-10'>
         <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Contact</h3>

        <div className='flex flex-col space-y-0'>
        <h4 className='text-1xl font-semibold text-center'>Contact Me For Any Website Builds.{""}<span className='decoration-[#F7ABBA]/50 underline'>Lets Talk</span></h4>

        <div className='space-y-10 justify-center'>
            <div className='flex items-center space-x-5 justify-center'>
            <PhoneIcon className='text-[#F7ABBA] h-7 w-7 animate-pulse' />
            <p className='text-1xl'>8157086145</p>
            </div>
        </div>

        <div className='space-y-10 justify-center'>
            <div className='flex items-center space-x-5 justify-center'>
            <EnvelopeIcon className='text-[#F7ABBA]  h-7 w-7 animate-pulse' />
            <p className='text-sm'>vishnumuralikky@gmail.com</p>
            </div>
        </div>
        
        <div className='space-y-10 justify-center'>
            <div className='flex items-center space-x-5 justify-center'>
            <MapPinIcon className='text-[#F7ABBA] h-7 w-7 animate-pulse' />
            <p className='text-sm'>UST GLOBAL TVM,KERALA</p>
            </div>
        </div>
    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-5 w-fit mx-auto'>
        <div className='flex space-x-2 space-y-0'>
            <input {...register('name')}className='contactInput' type='text' placeholder='Name'/> 
            <input {...register('email')}className='contactInput' type="email" placeholder='Email'/>
        </div>
        <input {...register('phoneNumber')} className='contactInput'  type='number'placeholder='Contact'/>
        <textarea {...register('message')} className='contactInput' placeholder='Drop Your Message'/>
        <button type="submit" className='bg-[#F7ABBA] py-7 px-10 rounded-md text-black font-bold text-lg'>Submit</button>
    </form> 
    </div>
    </div>
  )
}

export default ContactMe