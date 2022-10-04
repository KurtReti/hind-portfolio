import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import hind from "../imgs/299840913_394351786179451_4446314775862409124_n.jpeg"
import contactimg from "../imgs/contact img.png"

type Props = {};

export default function Contact({}: Props) {
  return (
    <div className="h-screen flex text-white flex-col relative text-center md:text-left md:flex-row  px-10 justify-evenly mx-auto items-center">
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
        className="absolute top-28 text-neutral-900 xl:text-white z-10 uppercase tracking-[20px]"
      >
        Contact Me
      </motion.h3>
        <div className="absolute hidden md:block z-0 left-0">
         <Image src={contactimg}/>
        </div>

          <form className="backdrop-grayscale backdrop-blur-sm border md:bg-transparent w-full md:w-auto bg-neutral-800 md:b  relative z-10 border-white px-12 py-8 " method="post">
            <div className="w-full justify-start flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
              <p>
                <label className="uppercase font-light tracking-widest " htmlFor="name">Name</label>
                <input className="text-sm py-1 px-2 bg-transparent border-b border-white ml-4 " type="text" name="name" />
              </p>
              <p>
              <label className="uppercase font-light tracking-widest " htmlFor="email">Email</label>
                <input className="text-sm py-1 px-2 bg-transparent border-b border-white ml-4 " type="email" name="email"/>
              </p>
            </div>
            <div className="flex align space-y-4 md:space-y-0 flex-col md:flex-row mt-4">
              <label className="self-start uppercase font-light tracking-widest" htmlFor="message">Message</label>
              <textarea className="px-2 py-2 text-sm bg-transparent border border-white md:ml-4 w-full h-80 md:h-48 " name="message" />
            </div>
            
          </form>
      <footer className="bg-transparent absolute text-neutral-400 font-light uppercase tracking-widest text-xs md:text-sm bottom-0 p-5 flex mx-auto max-w-7xl justify-between w-full z-20">
        <p> All rights reserved <a className="text-neutral-500 cursor-pointer ">Issak Hindson</a></p>
        <p> Developed by <a className="text-neutral-500 cursor-pointer ">Kurt Reti</a></p>
      </footer>

    </div>
  )
}
