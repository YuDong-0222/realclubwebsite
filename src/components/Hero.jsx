import React from 'react'
import Typed from 'react-typed';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';

const Hero = () => {
  return (
    <motion.div
      variants={fadeIn('up','spring',0.2,0.5)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`overflow-hidden z-0`}
    >
      <div className='-z-1 max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#78bdf1] font-bold p-2 sm:text-xl md:text-2xl'>ASHS.NUTN CSIRC</p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-extrabold md:py-6 py-4 text-white'>南大附中資訊社</h1>
        <Typed className={`typed-cursor-22 md:text-5xl sm:text-4xl text-xl font-bold text-[#1ac37f]`}
        strings=
        {[
          'Hello, World!',
          '你好世界!',
          'Zero to Hero',
          'Since 2023',
          'Everything Is Code',
          'Nothing is impossible',
          "Let's Programming together! ",
        ]}
          typeSpeed={120}
          backSpeed={140}
          startDelay={1000}
          backDelay={1500}   
          autoInsertCss={true}

          loop>
          </Typed>
      </div>
    </motion.div>
  )
}

export default Hero