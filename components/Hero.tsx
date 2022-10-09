import Link from 'next/link'
import React from 'react'
import Background from './Background'
import {motion} from 'framer-motion'
import Image from 'next/image'


type Props = {}

export default function Hero({}: Props) {
  return (
    <div className='h-screen bg-neutral-50 flex flex-col  items-center justify-center text-center
    overflow-hidden z-0'>


        <motion.div 
        initial={{
          clipPath:'polygon(0 0, 100% 0, 100% 100%, 0 100%)'
        }}
        animate={{
          clipPath: 'polygon(50% 0, 50% 0, 52% 100%, 52% 100%)'
        }}
        transition={{
          duration: 3,
          delay: 1
        }}
        
        className='absolute z-10 top-0 bg-neutral-50 h-screen w-screen'>
          
        </motion.div>
        
         <Background />

      <div className='relative text-2xl uppercase font-light -top-32 text-white flex flex-row space-x-4 md:space-x-12 -top-10'>
      
        <Link href="#showreel">
        <button className="heroButton uppercase">Showreel</button>
        </Link>

        <Link href="#projects">
        <button className="heroButton uppercase">Projects</button>
        </Link>


        <Link href="#about">
        <button className="heroButton uppercase">About</button>
        </Link>

        <Link href="#resume">
        <button className="heroButton uppercase font-light">Resume</button>
        </Link>

       
        


      </div>
    
    {/* <div className='flex flex-col space-y-4 place-items-center'>
    <motion.div
    initial={{ opacity: 0
        
    }}

    animate={{
        opacity: 1
    }}

    transition={{
        duration: 2,
        delay: 2
    }}
    
    className='uppercase font-light flex flex-row space-x-16 self-center relative z-10'>
        <Link href="#resume">
            <p className='cursor-pointer text-lg hover:underline hover:underline-offset-4'>Resume</p>
        </Link>
        <Link href="#projects">
            <p className='cursor-pointer text-lg hover:underline hover:underline-offset-4'>Projects</p>
        </Link>
        <Link href="#showreel">
            <p className='cursor-pointer text-lg hover:underline hover:underline-offset-4'>Showreel</p>
        </Link>

    </motion.div>
   </div> */}

    </div>
  )
}