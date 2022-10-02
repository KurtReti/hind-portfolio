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
  
       
    </div>
  );
}
