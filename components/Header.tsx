import React from "react";
import {SocialIcon} from "react-social-icons";
import {motion} from "framer-motion"
import Link from "next/link";

type Props = {};

export default function Header({}: Props) {
  return(
   <header className="bg-neutral-50 sticky top-0 p-5 flex items-center justify-between  mx-auto z-20 xl:items-center">

    <motion.div
    initial={{
        opacity: 0,

    }}
    animate={{
        opacity: 1,
        scale: 1
    }}
    transition={{
        duration: 2,
        delay: 1
    }}
    className="flex flex-row">
        <SocialIcon url="https://www.instagram.com/issakhfilms/" fgColor="#525252" bgColor="transparent" />
        <SocialIcon url="https://www.youtube.com/channel/UCSGwz132fEfyVSxhzLAxgRg" fgColor="#525252" bgColor="transparent" />

    </motion.div>

    <motion.p
    initial={{
        opacity: 0,

    }}
    animate={{
        opacity: 1,
        scale: 1
    }}
    transition={{
        duration: 2,
        delay: 1
    }}
    className=" tracking-widest cursor-default uppercase text-2xl font-light text-neutral-600" 
>
    Issak Hindson
</motion.p>



    <motion.div
    initial={{
        opacity: 0,

    }}
    animate={{
        opacity: 1,
        scale: 1
    }}
    transition={{
        duration: 2,
        delay: 1
    }} className="flex flex-row items-center cursor-pointer uppercase font-light">
        <Link href="#contact">
        Get in touch
        </Link>
    </motion.div>


  </header>);
}
