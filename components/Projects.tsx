import React from "react";
import { motion } from "framer-motion";
import ProjecteCard from "./ProjectCard";
import ProjectCard from "./ProjectCard";
import Link from "next/link";
import HorrificallyBeautiful from "./HorrificallyBeautiful";
import WhoAreWe from "./WhoAreWe";
import MurderMystery from "./MurderMystery";
import Obsession from "./Obsession";

type Props = {};

export default function Projects({}: Props) {
  return (
    <div className="h-screen flex flex-col overflow-hidden relative text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center">
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
          once: true,
        }}
        className="absolute top-24 uppercase tracking-[20px]"
      >
        Projects
      </motion.h3>


      <div className="w-full h-4/5 mt-40 mb-10 space-x-5 flex overflow-x-scroll snap-x snap-mandatory md:scrollbar md:scrollbar-track-neutral-50 md:scrollbar-thumb-neutral-900">
          <WhoAreWe />
          <MurderMystery />
          <HorrificallyBeautiful />
          <Obsession />
          
      </div>

    
    </div>
  );
}
