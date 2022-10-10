import React from 'react'
import {motion} from 'framer-motion'
import Image from "next/image";
import obsession from '../imgs/obsession.png'
type Props = {}

export default function Obsession({}: Props) {
  return (
    <article className=' text-white h-full opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden snap-center  bg-black flex flex-col md:flex-row  rounded-lg flex-shrink-0 w-full'>
   
        <div className='brightness-75 h-2/5 md:h-full bg-black md:w-4/5'>
            <Image className='h-2/5'src={obsession}/>
        </div>
        <div className='h-2/5 mt-8 md:h-full bg-black md:w-2/5 flex flex-col text-white p-10'>
            <h1 className='text-3xl md:text-5xl uppercase font-light tracking-[10px]'>Obsession</h1>
            <h2 className='text-xl opacity-50 uppercase font-extralight tracking-[5px]'>Writer</h2>
            <p className='relative py-2 tracking-[10px] opacity-30'> 2020 </p>
            <p className='text-md  text-justify '>Obsessed with the idea of space are silent hero notices something falling from the sky he rushes out of the house in hopes of finding where it landed.</p>
   
        </div>


 

    </article>
  )
}