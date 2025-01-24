import React, { useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import LocomotiveScroll from "locomotive-scroll";
import { Link } from "react-router-dom";
import About from "./About/About";
import Expertise from "./Expertise";
import Projects from "./Projects";
import Contact from "./Contact";
import { motion } from "motion/react";
import myPic from "../assets/myPic.jpg";
import Tilt from 'react-parallax-tilt';
import resume from "../assets/resume1.pdf";

function Home() {
  
  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]"),
      smooth: true,
    });

    return () => {
      scroll.destroy();
    };
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        type: "spring",
        delay: 0.2,
        duration: 1,
        stiffness: 50,
        damping: 20,
      }}
    >
      <div id="home" className=" relative w-full h-[120vh] backdrop-blur-2xl ">
        <div
          data-scroll-container
          className="relative w-full h-full text-white"
        >
          <div className=" "></div>

          <div className="flex pt-40 px-40 justify-between">
            <div className="content w-[45vw] h-[70vh]  p-10  ">
              <motion.h1
                initial={{ x: -100, opacity: 0 }}
                animate={{  x: 0, opacity: 1 }}
                transition={{
                  ease: [0.65, 0, 0.35, 1],
                  duration: 1.5,
                  delay: 0.2,
                }}
                className="text-md font-serif tracking-widest text-zinc-400 uppercase font-light "
              >
                --Welcome to my world{" "}
              </motion.h1>
              <motion.h1
                initial={{ rotate: 0, x: -100, opacity: 0 }}
                animate={{ rotate: 0, x: 0, opacity: 1 }}
                transition={{
                  ease: [0.65, 0, 0.35, 1],
                  duration: 1.5,
                  delay: 1,
                }}
                className="text-5xl mt-5"
              >
                Hi, I'm{" "}
                <span className="text-yellow-300 font-mono font-bold ">
                  Vyasnarayan Mohle
                </span>
              </motion.h1>
              <motion.div
                initial={{ rotate: 0, x: -100, opacity: 0 }}
                animate={{ rotate: 0, x: 0, opacity: 1 }}
                transition={{
                  ease: [0.65, 0, 0.35, 1],
                  duration: 1.5,
                  delay: 1,
                }}
              >
                <TypeAnimation
                  sequence={[
                    " A Frontend Developer ",
                    1000,
                    " A Frontend developer ",
                    1000,
                    // 'We produce food for Guinea Pigs',
                    // 1000,
                    // 'We produce food for Chinchillas',
                    // 1000
                  ]}
                  wrapper="span"
                  speed={20}
                  style={{ fontSize: "2.5em", display: "inline-block" }}
                  repeat={Infinity}
                />
              </motion.div>
              <motion.p
                initial={{ rotate: 0, x: -100, opacity: 0 }}
                animate={{ rotate: 0, x: 0, opacity: 1 }}
                transition={{
                  ease: [0.65, 0, 0.35, 1],
                  duration: 1.5,
                  delay: 1.2,
                }}
                className="mt-10 border-l-2 pl-2 font-light"
              >
                I create responsive, user-friendly websites and web applications
                using React, JavaScript, and CSS, delivering seamless digital
                experiences with modern design and functionality.
              </motion.p>

              <div className="flex gap-5 mt-8 overflow-hidden h-[10vh] p-3  ">
                
                  <a  href={resume} target="_blank" rel="noopener noreferrer">
                  <motion.button
                  initial={{y:50, opacity: 0}}
                  animate={{y: 0, opacity: 1}}
                  transition={{duration:1, delay:2, ease: [0.65, 0, 0.35, 1]}}
                   className="uppercase px-4 py-3 rounded-lg bg-pink-900  ">
                    Open Resume
                  </motion.button>
                  </a>
                
                <motion.button
                initial={{y:50, opacity: 0}}
                animate={{y: 0, opacity: 1}}
                transition={{duration:1, delay:2, ease: [0.65, 0, 0.35, 1],}}
                  onClick={() => scrollToSection("projects")}
                  className="uppercase hover:bg-violet-800 hover:border-none px-4 py-1 rounded-lg border-2  "
                >
                  My Works
                </motion.button>
              </div>

              <motion.div
              initial={{y:50, opacity: 0}}
              animate={{y: 0, opacity: 1}}
              transition={{duration:1, delay:2.2, ease: [0.65, 0, 0.35, 1],}}
              >
                <h1 className="uppercase mt-16  "> Best skill on</h1>
                <div className="flex mt-3 gap-3">
                  <div className="w-[6vh] h-[6vh] rounded-md  overflow-hidden">
                    <img
                      className="w-full h-full object-cover"
                      src="https://cdn3d.iconscout.com/3d/free/thumb/free-html-3d-icon-download-in-png-blend-fbx-gltf-file-formats--html5-logo-dom-markup-language-frontend-coding-lang-pack-logos-icons-7578018.png"
                      alt=""
                    />
                  </div>

                  <div className="w-[6vh] h-[6vh] rounded-md  overflow-hidden">
                    <img
                      className="w-full h-full object-cover"
                      src="https://cdn3d.iconscout.com/3d/free/thumb/free-css-3d-icon-download-in-png-blend-fbx-gltf-file-formats--html-logo-css3-html5-cascading-style-sheets-coding-lang-pack-logos-icons-7578024.png"
                      alt=""
                    />
                  </div>
                  <div className="w-[6vh] h-[6vh] rounded-md  overflow-hidden">
                    <img
                      className="w-full h-full object-cover"
                      src="https://cdn3d.iconscout.com/3d/free/thumb/free-react-3d-icon-download-in-png-blend-fbx-gltf-file-formats--facebook-logo-native-javascript-library-user-interfaces-coding-lang-pack-logos-icons-7578010.png"
                      alt=""
                    />
                  </div>
                  <div className="w-[6vh] h-[6vh] rounded-md  overflow-hidden">
                    <img
                      className="w-full h-full object-cover"
                      src="https://static.vecteezy.com/system/resources/previews/048/332/149/non_2x/js-icon-transparent-background-free-png.png"
                      alt=""
                    />
                  </div>
                </div>
              </motion.div>
            </div>
            <Tilt
             tiltMaxAngleX={20}
             tiltMaxAngleY={20}
             glareMaxOpacity={0.5}
             
            >
            <motion.div
            initial={{x:150, opacity: 0}}
            animate={{x: 0, opacity: 1}}
            transition={{duration:1, delay:1.5, ease: [0.65, 0, 0.35, 1],}}

             className="content w-[70vh] h-[80vh] -mt-8 overflow-hidden  opacity-60 rounded-[5vh]">
              <img src={myPic} alt="" />
            </motion.div>
            </Tilt>
            
          </div>
        </div>
      </div>
      <About />
      <Expertise />
      <Projects />
      <Contact />
    </motion.div>
  );
}

export default Home;

