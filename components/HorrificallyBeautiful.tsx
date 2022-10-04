import React from 'react'
import {motion} from 'framer-motion'
import Image from "next/image";
import horrific from '../imgs/horrificallybeautiful.png'
type Props = {}

export default function MurderMystery({}: Props) {
  return (
    <article className=' text-white h-full opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden snap-center  bg-black flex flex-col md:flex-row  rounded-lg flex-shrink-0 w-full'>
   
        <div className='h-2/5 md:h-full bg-black md:w-4/5'>
            <Image src={horrific}/>
        </div>
        <div className='h-2/5 mt-16 md:h-full bg-black md:w-2/5 flex flex-col text-white p-10'>
            <h1 className='text-4xl md:text-5xl uppercase font-light tracking-[10px]'>Horrifically Beautiful</h1>
            <h2 className='text-2xl opacity-50 uppercase font-extralight tracking-[5px]'>Assistant Director / Editor</h2>
            <p className='relative py-2 tracking-[10px] opacity-30'> 2020 </p>
            <p className='text-md  text-justify '>A documentary on up-and-coming filmmaker Kevin Kashan and how he broke into the industry and advice for the next generation.</p>
   
        </div>


 

    </article>
  )
}