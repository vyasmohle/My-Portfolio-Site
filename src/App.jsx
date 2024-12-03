// import React from 'react'
// import Home from './components/Home'
// import About from './components/About/About'
// import Expertise from './components/Expertise'
// import Projects from './components/Projects'
// import Contact from './components/Contact'

// function App() {
//   return (
//     <div className='w-full min-h-sceen bg-zinc-800' >
//       <Home/>
//       <About/>
//       <Expertise/>
//       <Projects/>
//       <Contact/>

//     </div>
//   )
// }

// export default App

import React, { useEffect, useState } from "react";
import Home from "./components/Home";
import Nav from "./components/Nav";
import { Routes, Route, useLocation } from "react-router-dom";
import ProjectDetail from "./components/ProjectDetail";

function App() {

  

  return (
    <div className="relative w-full min-h-screen bg-gradient-to-r from-gray-900 via-black to-indigo-950  ">
      <div className='fixed  mt-5  rounded-full z-50  top-0 left-[25%]'>
        <Nav />
      </div>

      {/* <video
        autoPlay
        muted
        loop
        className="absolute  top-0 left-0 w-full h-full object-cover  -z-10"
        src="https://videos.pexels.com/video-files/7762080/7762080-hd_1920_1080_25fps.mp4"
      ></video> */}

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/projectDetail" element={<ProjectDetail />} />
      </Routes>

      {/* Components */}
     
        
    
    </div>
  );
}

export default App;
