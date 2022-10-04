import React from 'react'
import {motion} from 'framer-motion'
import Image from "next/image";
import whoarewe from '../imgs/whoarewe.png'
type Props = {}

export default function WhoAreWe({}: Props) {
  return (
    <article className=' text-white h-full opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden snap-center  bg-black flex flex-col md:flex-row  rounded-lg flex-shrink-0 w-full'>
   
        <div className='h-2/5 md:h-full bg-black md:w-4/5'>
            <Image src={whoarewe}/>
        </div>
        <div className='h-3/5 mt-16 md:h-full bg-black md:w-2/5 flex flex-col text-white p-10'>
            <h1 className='text-4xl md:text-5xl uppercase font-light tracking-[10px]'>Who are we</h1>
            <h2 className='text-2xl opacity-50 uppercase font-extralight tracking-[5px]'>Assistant Director / Editor</h2>
            <p className='relative py-2 tracking-[10px] opacity-30'> 2021 </p>
            <p className='text-md  text-justify '>A man fights within himself to come to terms with the thing he has done in the past and the trauma he received as a child.</p>
   
        </div>


 

    </article>
  )
}