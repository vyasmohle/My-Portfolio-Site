import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import LocomotiveScroll from "locomotive-scroll";
import { motion } from "motion/react";



function HoverOpacityChange() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const loaction = useLocation();
  const { item } = loaction.state || {};

  const navigate = useNavigate();

  function openGithubLink(link) {
    window.open(link, "_blank");
  }

  function openProject(link) {
    window.open(link, "_blank");
  }



  const scroll = new LocomotiveScroll();


  return (
    <div className="w-full min-h-screen p-10 text-white bg-gradient-to-r from-gray-900 via-black to-indigo-950">
      <div className="project-overview w-full  p-5   ">
        <div
       
         className="content  overflow-hidden ">
          <h1
           className="text-center  my-5 overflow-hidden text-5xl font-bold "><motion.div
           initial={{y:100, opacity: 0}}
        animate={{y:0, opacity: 1}}
        transition={{duration:1.1, delay:0.2}}
           >
            {item.name}
            </motion.div></h1>
          <h3 className="text-center  w-[40vw] my-10 mx-auto overflow-hidden">
            <motion.div
            initial={{y:100, opacity: 0}}
            animate={{y:0, opacity: 1}}
            transition={{duration:1.1, delay:0.3}}
            >
            {item.detail}
            </motion.div>
          </h3>
        
            <motion.button
            initial={{y:100, opacity: 0}}
            animate={{y:0, opacity: 1}}
            transition={{duration:1.1, delay:0.4}}
            onClick={() => openProject(item.projectLink)}
            className="px-4 py-2 bg-violet-600 rounded-lg relative left-[45%] -translate-x-[50%]"
          >
            Open Project
          </motion.button>
          
        </div>

        <div className="w-full min-h-screen  p-10 my-5">
          <motion.h1
          initial={{y:100, opacity: 0}}
          animate={{y:0, opacity: 1}}
          transition={{duration:1.1, delay:0.4}}
           className="text-center text-5xl ">Overview</motion.h1>
          <motion.div
          initial={{y:100, opacity: 0}}
          animate={{y:0, opacity: 1}}
          transition={{duration:1.1, delay:1}}
           className="w-full flex  justify-between px-5 h-[55vh] p-5 mt-12  ">
            <div
            data-scroll
            data-scroll-speed='0.2'
             className=" text w-[50%] h-full py-20 px-5  rounded-[5vh]">
              <p >
                {item.overview1}
              </p>
            </div>
            <div className="w-[42%] h-full bg-red-500  rounded-[5vh] overflow-hidden">
              <video
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                src={item.video1}
              ></video>
            </div>
          </motion.div>
          <div className="w-full flex justify-between px-5 h-[55vh] p-5 mt-12  ">
            <div className="w-[42%] h-full overflow-hidden  rounded-[5vh]">
              <video
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                src={item.video2}
              ></video>
            </div>
            <div
            data-scroll
            data-scroll-speed='0.2'
             className="w-[50%] h-full py-20 px-5  rounded-[5vh]">
              <p>{item.overview2}</p>
            </div>
          </div>
        </div>

        <div className="w-full p-5">
          <h1 className="text-center text-3xl font-bold">Tool used</h1>
          <div className="max-w-screen-lg mx-auto h-[20vh] gap-10 flex items-center justify-center ">
            {item.tools.map((tool, index) => {
              return (
                <h1
                  key={index}
                  className="px-7 py-2 text-white rounded-md bg-opacity-15 bg-zinc-300"
                >
                  {tool}{" "}
                </h1>
              );
            })}
          </div>

          <div className="p-4 rounded-lg w-[50vw] mx-auto bg-zinc-500 bg-opacity-10 ">
            <h1 className="ml-32 mt-5 text-2xl font-semibold text-white">
              See Live
            </h1>
            <div className="flex gap-5 max-w-screen-md mx-[15%] mt-5  ">
              <button
                onClick={() => openProject(item.projectLink)}
                className="px-5 py-2 rounded-lg bg-violet-700 text-white"
              >
                Open Project
              </button>
              <button
                onClick={() => openGithubLink(item.githubLink)}
                className="px-5 py-2 rounded-lg bg-violet-700 text-white"
              >
                Github Link
              </button>
              <button
                onClick={() => navigate(-1)}
                className="px-5 py-2 rounded-lg bg-violet-700 text-white"
              >
                Go Back
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HoverOpacityChange;
