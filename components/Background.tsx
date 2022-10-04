import React from 'react'
import {motion} from 'framer-motion'
import Image from 'next/image'
import heroImg from '../imgs/Screen Shot 2022-09-30 at 4.24.28 pm.png'
import heroImgMobile from '../imgs/mobile.png'
import heroImgTiny from '../imgs/tiny.png'

type Props = {}

export default function Background({}: Props) {
  return (
     <div>
          

    
        <div className='relative hidden xl:block'>
            <Image
                src={heroImg}
                alt="Picture of the author"
            />
        </div>
        <div className='relative hidden md:block xl:hidden'>
            <Image
                src={heroImgMobile}
                alt="Picture of the author"
            />
        </div>
        <div className='relative block md:hidden'>
            <Image
                src={heroImgTiny}
                alt="Picture of the author"
            />
        </div>
    </div>
  )
}