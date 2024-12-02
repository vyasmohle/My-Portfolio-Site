import React from 'react'
import C10th from './C10th'
import C12th from './C12th'
import Goal from './Goal'

const About = () => {
  return (
    <div id='about'  className='w-full h-[150vh]  backdrop-blur-2xl  text-white p-1' >
      {/* <video autoPlay muted loop className='w-full blur-3xl  h-full object-cover' src="https://videos.pexels.com/video-files/7762080/7762080-hd_1920_1080_25fps.mp4"></video> */}

      <div className='absolute top-[7%]'>
      <h1 className='text-6xl text-center mt-10 font-[Borel] text-zinc-200 font-semibold uppercase' >About Me </h1>
        <p className=' mx-auto text-center text-xl mt-10 font-light w-1/2' >Here you will find more information about me, what I do, and my skills in programming and technology, and my journey from excelling in school to pursuing web development.</p>
        <div className='flex justify-around mb-5 px-18' >
            <C10th/>
            <C12th/>
        </div>
        <Goal/>

      </div>
        
        
        
    </div>
  )
}

export default About