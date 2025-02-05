import React, { Fragment, useEffect, useRef, useState } from 'react'
import Logos from '../Data/logo'
import { motion, useAnimate } from 'framer-motion'
import { twMerge } from 'tailwind-merge';


const Logo = () => {

  const[isHovered,setIsHovered] = useState(false);
  const animation = useRef();
  const [scope,animate] =useAnimate();

  useEffect(()=>{
    animation.current= animate(scope.current,{x:'-50%'},{
      duration:5,
      ease:'linear',
      repeat:Infinity,
    });
  },[]);

  useEffect(()=>{
      if(animation.current){
        if(isHovered){
          animation.current.speed =0.25;
        }else{
          animation.current.speed=1;
        }
      }
  },[isHovered])

  return (
    <div className='mt-32'>
       <div className='flex overflow-hidden'>
        <motion.div
        ref={scope}
        onMouseEnter={()=>setIsHovered(true)}
        onMouseLeave={()=>setIsHovered(false)}
        className={twMerge('flex flex-none gap-32 pr-32', isHovered && 'cursor-pointer')}>
          {Array.from({length:2}).map((_,id)=>(
            <Fragment key={id}>
                {Logos.map((logo)=>(
                <img key={logo.id} src={logo.image} alt="" 
                className='h-16'
                />
            ))}
            </Fragment>
          ))}
        </motion.div>
    </div>
    </div>
  )
}

export default Logo