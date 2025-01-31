import { useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

const text = "We are an exquisite restaurant with a mission for customers satisfaction and delivery efficiency. Book a reservation with us."

const words = text.split(" ");

const Intro = () => {

    const scrollRef = useRef(); 
    const {scrollYProgress} = useScroll({
        target:scrollRef, offset:[ 'start end', 'end end']
    });

    const [currentWord, setCurrentWord] = useState(0);
    const wordIndex = useTransform(scrollYProgress,[0,1],[0,words.length]);

    useEffect(()=>{
        wordIndex.on('change',(latest)=>{
            setCurrentWord(latest);
        })
    },[wordIndex])

  return (
    <div className="py-20">
        <div className="sticky flex top-20">
            <div className="flex flex-1">
                <p className="text-sky-500 text-6xl font-medium text-center">Welcome to Little lemon!!
                    {words.map((word,wordIndex)=>(
                     <span key={wordIndex} 
                     className={twMerge('transition duration-500 text-white/15', wordIndex<currentWord && 'text-white')}
                     > {`${word}`}  </span>
                    ))}
                     Lets get started !!!! </p>
            </div>
            <div className="flex flex-1">
                Left
            </div>
        </div>
        <div className="h-[150vh]" ref={scrollRef}></div>
    </div>
  )
}

export default Intro