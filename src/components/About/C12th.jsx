import React from 'react'
import { motion } from 'motion/react'

function C12th() {
  return (
    <motion.div
    initial={{height:'12vh', width:'40vw'}}
    whileHover={{scale:1.05,height:'50vh', width:'35vw', scale:1.05 }}
     className='w-[35vw] h-[60vh] bg-zinc-600 bg-opacity-20 overflow-hidden p-5 hover:p-10 rounded-[10vh] mt-10'>
  <h1 className='text-3xl font-semibold'>Hobbies:</h1>
  <div className='mt-5 ml-5'>
    <h2 className='text-xl font-semibold'>Music Enthusiast:</h2>
    <ul className='list-disc ml-6'>
      <li>Passionate about playing musical instruments, especially the piano.</li>
      <li>Enjoys listening to music, which helps in relaxation and creativity.</li>
    </ul>
  </div>
</motion.div>

  )
}

export default C12th


