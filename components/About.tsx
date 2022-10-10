import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import hind from "../imgs/299840913_394351786179451_4446314775862409124_n.jpeg"

type Props = {};

export default function About({}: Props) {
  return (
    <div className="h-screen flex text-neutral-700 flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
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
        className="absolute hidden md:block top-24 uppercase tracking-[20px]"
      >
        About
      </motion.h3>
  
        <motion.div
        
        initial={{
            x: -100,
            opacity: 0
        }}
        whileInView={{
            x: 0,
            opacity: 1
        }}
        
        transition={{
            duration: 1.2
        }}
        viewport={{
            once:true
        }}
       className=" overflow-hidden pt-10"
       >
       
            <Image
            src={hind} />
        </motion.div>
      
      <motion.div
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

        className="space-y-10 px-0 md:px-10"
      >
        <h4 className="uppercase text-neutral-700 tracking-widest">
          A bit about me
        </h4>
        <p className="text-sm text-justify">
        I am passionate about film and work in many different areas of the industry with a focus on Assistant Directing, Directing and Director of Photography work. I live in Sydney but love to travel and film new locations and work where ever I am needed. I have worked on multiple Short Films and Documentaries. Film has been my dream since I was a child and working in the industry is a dream come true on its own, but I hope one day to sit in a packed cinema watching my own film. I have been working tirelessly to improve my skills so that I can achieve my dream.
        </p>
      </motion.div>
    </div>
  );
}
