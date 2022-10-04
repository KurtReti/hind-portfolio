import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import hind from "../imgs/299840913_394351786179451_4446314775862409124_n.jpeg"

type Props = {};

export default function Resume({}: Props) {
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
        className="absolute top-24 uppercase tracking-[20px]"
      >
        Resume
      </motion.h3>
  
        
      
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

        className=" px-0 md:px-10 space-y-12 md:space-y-0 md:flex-row md:space-x-24 flex flex-col justify-evenly"
      >
        <div className="self-start w-96">
          <h1 className="uppercase text-5xl font-light">Education</h1>
          <h2 className="uppercase py-4 font-light text-xl">Bachelor of film 2021-2022</h2>
          <p className="text-sm text-justify">
Studied at SAE for two years doing a bachelor of film I worked under professional leaders and with industry standard equipment.          </p>
        </div>

        <div className="self-start w-96">
          <h1 className="uppercase text-5xl font-light ">Skills and Expertise</h1>
        <ul className="list-disc text-sm mt-4 space-y-2 text-justify">
          <li>Collaborative able to work with all departments to produce the highest quality product</li>

          <li>Team player works well with others</li>

          <li> Knowledgable about many different roles departments so i have flexibility </li>

          <li>Always excited to learn more on all fronts</li>

          </ul>
        </div>
      
      </motion.div>
    </div>
  );
}
