import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Link, useLocation } from "react-router-dom";

function Nav() {
  const location = useLocation();

  const [isNavVisible, setisNavVisible] = useState(false);

  useEffect(() => {
    if (location.pathname === "/projectDetail") {
      setisNavVisible(true);
    } else {
      setisNavVisible(false);
    }
  });

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const navVal = ["About", "Expertise", "Projects", "Contact"];

  return (
    <motion.div
    initial={{y:-100, opacity: 0 }}
    animate={{y:0, opacity: 1 }}
    transition={{duration: 1, delay: 0.2}}
     className={`navbar ${isNavVisible ? "opacity-0" : "opacity-100"} `}>
      <div className="navbar  flex p-2 px-10 gap-10 justify-center bg-opacity-20 bg-zinc-800 rounded-full">
        <Link to="/" >
        
          <motion.button
          whileHover={{scale:1.1}}
          whileTap={{scale:0.8}}
            onClick={() => scrollToSection("home")}
            className="px-4 rounded-full flex gap-2 py-2 bg-blue-300 text-zinc-100 bg-opacity-35"
          >
            <i className="ri-home-9-line"></i>
            Home
          </motion.button>
        </Link>
        {navVal.map((item, index) => {
          return (
            <div key={index} >
              <motion.button
                
                onClick={() => scrollToSection(item.toLowerCase())}
                className="px-4 rounded-full  py-2 bg-zinc-600 text-zinc-300 bg-opacity-35"
                whileHover={{ scale: 1.1, color: "white" }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.1 }}
              >
                {item}
              </motion.button>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}

export default Nav;
