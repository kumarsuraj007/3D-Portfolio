import React from 'react'
import {Tilt} from 'react-tilt'
import {motion} from 'framer-motion'

import {styles} from '../styles.js'
import {services} from '../constants/index.js'
import {fadeIn, textVariant} from '../utils/motion.js'

const ServiceCard = ({index, title, icon}) => {
  return (
    
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div
      variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div options={{
          max:45,
          scale: 1,
          speed: 450
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
        <img src={icon} alt={title}  className='h-16 w-16 object-contain'/>
        <h3 className='text-center text-white text-[20px] font-bold'>{title}</h3>
          
        </div>


      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
    <div className='mt-[100px] w-[90vw] mx-auto'>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Introduction</p>
      <h2 className={styles.sectionHeadText}>Overview</h2>
    </motion.div>

    <motion.p
    variants={fadeIn("", "", 0.1, 1)}
    className='text-secondary mt-4 text-[15px] max-w-3xl leading-[30px]'
    >
      I'm a mern stack developer with experience in javascript, and i know framework like React, Nodejs, and for design tailwind, Bootstrap and Sass. I'm a quick learner and collaborate with clients to create efficient, scalable and user-friendly websites. Let's work together to bring your ideas to life!
      
    </motion.p>

    <div className='mt-20 flex flex-wrap gap-10'>
      {services.map((service, index) => (
        <ServiceCard key={service.id} index={index} {...service} />
      ))}
    </div>
    </div>
    </>
  )
}

export default About