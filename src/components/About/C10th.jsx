import { motion } from 'motion/react'
import React from 'react'

function C10th() {
  return (
    
    <motion.div
    initial={{height:'15vh', width:'40vw'}}
    whileHover={{scale:1.05,height:'75vh', width:'50vw' }}
  
    transition={{duration:0.5}}
     className='  bg-zinc-600 bg-opacity-20  mt-10 p-10 overflow-hidden   rounded-[10vh]' >
      <h1 className='text-3xl mb-5 font-semibold' >Educational Background</h1>
        
        <div className='10th ml-10 my-6' >
        <span className='font-semibold text-xl' >10th Grade:</span>
          <h3 className='ml-8' > Achieved an excellent score of 90% from Govt. Higher Secondary School Gondpendri, showcasing dedication and strong academic performance.</h3>
        </div>

        <div className='12th ml-10 my-6' >
        <span className='font-semibold text-xl' >12th Grade: </span>
          <h3 className='ml-8'>   Completed with Physics, Chemistry, and Mathematics, scoring 83%, furthering my analytical and problem-solving skills.</h3>
        </div>

        <div className='college ml-10 my-6 '>
        <span className='font-semibold text-xl'>B.Tech in (Computer Science): </span>
  <h3>
    
  
    <ul className='flex flex-col gap-1 list-disc ml-6'>
      <li>Currently in the 3rd year, with all semesters cleared successfully.</li>
      <li>Actively participated in hackathons, enhancing problem-solving and team collaboration skills.</li>
      <li>Gained valuable experience working on team projects.</li>
      <li>Currently specializing in web development, focusing on frontend technologies and creating responsive websites.</li>
    </ul>
  </h3>
</div>




    </motion.div>
  )
}

export default C10th