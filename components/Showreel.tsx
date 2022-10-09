import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import hind from "../imgs/299840913_394351786179451_4446314775862409124_n.jpeg"
import Iframe from 'react-iframe'

type Props = {};

export default function Showreel({}: Props) {
  return (
    <div className="h-screen flex bg-black text-white flex-col relative text-center md:text-left md:flex-row  px-10 justify-evenly mx-auto items-center">
      <motion.h3
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        viewport={{
            once: true
        }}
        className="absolute top-24 uppercase tracking-[20px]"
      >
        Showreel
      </motion.h3>

      <div 
     
      
      className="mt-28 w-full h-2/5 md:h-4/5">
      <Iframe  url="https://www.youtube.com/embed/EfaxX2f4nzk" 
        id=""
        className="w-full h-full md:h-full"
        display="block"
        position="relative"/>
      </div> 
     
       
    </div>
  );
}
