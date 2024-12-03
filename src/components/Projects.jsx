import React from "react";
import { Link } from "react-router-dom";
// import obys from '../assets/obys.jpg'
import { motion } from "motion/react";



function Projects() {
  const ProjectData = [
    {
      width: "50vw",
      // height: "60vh",
      
      name: "Movie Hub",
      bg: "url('https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      detail:
        "A movie exploration platform that provides detailed information on movies, including ratings, trailers, release dates, actors, availability, and recommendations.",
      video1:
        "https://videos.pexels.com/video-files/3945446/3945446-uhd_2732_1440_25fps.mp4",
      video2:
        "https://videos.pexels.com/video-files/5927778/5927778-hd_1920_1080_30fps.mp4",
      overview1:
        "Movie Hub is a modern platform that provides users with a seamless experience for exploring movies and TV shows. The primary goal of this website is to make it easy for users to access detailed information about trending and popular movies, including ratings, trailers, and release dates, all in one place. The website features an intuitive navigation bar covering trending content, popular movies, TV shows, and additional sections like About Us and Contact. By leveraging The Movie Database (TMDB) API, it ensures real-time, accurate, and up-to-date information for its users.",
      overview2:
        "Movie Hub is built using cutting-edge technologies like React, Tailwind CSS, and Redux Toolkit, offering an interactive and responsive user interface. Features such as video playback (powered by the React Player library), infinite scrolling, and personalized recommendations enhance the user experience. The website is fully responsive, ensuring an optimal viewing experience for both mobile and desktop users. With live demo and GitHub repository integration, it empowers developers and viewers to explore and contribute to the project. This project serves as a comprehensive solution for exploring movies and TV shows, balancing functionality with modern design.",
      projectLink: "https://vyasmohle.github.io/Movie-Hub/",
      githubLink: "https://github.com/vyasmohle/Movie-Hub",
      tools: ["HTML", "CSS (tailwind css)", "JS", "React"],
    },

    {
      width: "37vw",
      // height: "60vh",
      
      name: "Obeys Agency (Animation UI) ",
      p: "3vh",
      bg: "url('https://images.unsplash.com/photo-1631879742077-0b48672bf910?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      detail:
        "Created a dynamic Obeys Agency clone using CSS and JavaScript, replicating its animations and interactive design.",
      video1:
        "https://obys.agency/wp-content/uploads/2022/11/Obys-Showreel-2022.mp4",
      video2: "",
      overview1:
        "Obeys Agency is a visually captivating animated website clone designed using HTML, CSS, and JavaScript. This project stands out with its seamless integration of advanced animation libraries such as Locomotive Scroll, ScrollTrigger, GSAP, Three.js, and Shery.js, which create an immersive user experience. The website showcases smooth scroll effects, dynamic transitions, and interactive elements that captivate viewers while maintaining an elegant and modern design.",
      overview2:
        "The implementation of JavaScript in combination with these libraries ensures fluid animations and robust functionality throughout the site. With a focus on creativity and innovation, Obeys Agency showcases smooth transitions, engaging visuals, and advanced web animation techniques.",
      projectLink: "https://vyasmohle.github.io/Obeys-Agency/",
      githubLink: "https://github.com/vyasmohle/Obeys-Agency",
      tools: ["HTML", "CSS", "JS"],
    },

    {
      width: "35vw",
      // height: "60vh",
      
      name: "Dribbble UI ",
      bg: "url('https://images.unsplash.com/photo-1696041760371-19e546d796f3?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      detail:
        "CUI clone of the Dribbble website created with HTML and CSS, focusing on elegant design, responsive layout, and seamless UI.",
      video1:
        "https://obys.agency/wp-content/uploads/2022/11/Obys-Showreel-2022.mp4",
      video2: "",
      overview1:
        "he Dribbble Clone website is a clean and visually appealing user interface project that replicates the design of the popular Dribbble platform. Built entirely with HTML and CSS, this project focuses on creating a pixel-perfect layout that captures the essence of Dribbble’s modern and professional design. It demonstrates an understanding of front-end development fundamentals, ensuring responsive design and cross-browser compatibility.",
      overview2:
        "Incorporating basic animations, the project adds subtle interactivity and smooth transitions, enhancing the user experience.",
      projectLink: "https://vyasmohle.github.io/Exoape-Animated-Homepage/",
      githubLink: "https://github.com/vyasmohle/Exoape-Animated-Homepage",
      tools: ["HTML", " CSS", "JS"],
    },

    {
      width: "50vw",
      // height: "60vh",
     
      name: "Mentor Connect ",
      bg: "url('https://images.pexels.com/photos/276223/pexels-photo-276223.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
      detail:
        "A Mentor Connect platform to facilitate mentor-mentee relationships, featuring live video calls, an automated scheduling system, and session tracking, using React and other web technologies.",
      video1:
        "https://obys.agency/wp-content/uploads/2022/11/Obys-Showreel-2022.mp4",
      video2:
        "https://videos.pexels.com/video-files/5927778/5927778-hd_1920_1080_30fps.mp4",
      overview1:
        "Mentor Connect is a fully functional platform designed to seamlessly connect mentors and mentees, fostering meaningful learning and professional relationships. Developed by a team of five members, the website is built using HTML, CSS, JavaScript, and React, with a focus on delivering a user-friendly interface and efficient functionality. As a contributor to the frontend development, I worked on creating responsive layouts, integrating dynamic components, and ensuring smooth navigation for users.",
      overview2:
        "The website offers features like user authentication, video calls, real-time chat, and access to mentors from various fields and expertise. It includes an automatic calendly system, enabling mentees to schedule meetings with mentors easily and fix convenient times for guidance, ensuring a seamless and efficient mentorship experience.",
      projectLink: "",
      githubLink: "",
      tools: ["HTML", "CSS (tailwind css)", "Js", "React"],
    },

    {
      width: "50vw",
      // height: "60vh",
     
      name: "Exoape-Animated-Homepage",
      bg: "url('https://images.pexels.com/photos/6112167/pexels-photo-6112167.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
      detail:
        "An animated homepage built with React, featuring smooth scrolling and stunning effects using Framer Motion, GSAP, and Locomotive Scroll",
      video1:
        "https://videos.pexels.com/video-files/12352337/12352337-hd_1920_1080_60fps.mp4",
      video2:
        "https://videos.pexels.com/video-files/3515758/3515758-uhd_2560_1440_25fps.mp4",
      overview1:
        "Exoape - Animated Homepage is a visually captivating web project that highlights modern web design and animation capabilities. Built using React, this homepage incorporates advanced animation libraries such as Framer Motion, GSAP, and Locomotive Scroll to deliver an engaging user experience. The smooth scrolling effects, creative transitions, and interactive elements make the website stand out as a prime example of front-end creativity and execution.",
      overview2:
        "This project features a visually engaging animated homepage built using React. It incorporates advanced animation libraries like Framer Motion, GSAP, and Locomotive Scroll to deliver smooth scrolling, dynamic transitions, and interactive visual effects. Designed with a modern layout, the website ensures responsiveness across devices, providing an immersive user experience.",
      projectLink: "",
      githubLink: "",
      tools: ["HTML", "Tailwind CSS", "react", "Locomotive Scroll", "ScrollTrigger"],
    },

    {
      width: "35vw",
      // height: "60vh",
      
      name: "Vyas Mohle - Personal Portfolio ",
      bg: "url('https://images.pexels.com/photos/7233353/pexels-photo-7233353.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
      detail:
        "A professional portfolio showcasing creative web designs, projects, and technical expertise with a blend of animation and modern UI/UX principles. Fully responsive and visually engaging",
      video1:
        "https://videos.pexels.com/video-files/4377755/4377755-uhd_2560_1440_24fps.mp4",
      video2: "https://videos.pexels.com/video-files/7639540/7639540-hd_1080_1920_30fps.mp4",
      overview1:
        "This portfolio website is a professional showcase of my journey as a web developer, highlighting my skills, projects, and accomplishments in an interactive and visually captivating manner. It uses modern web design principles, enriched with smooth animations and responsive layouts, ensuring seamless navigation across all devices.",
      overview2:
        "The website serves as a one-stop platform to explore my skills, view my project portfolio, and understand my expertise in frontend technologies like React, Tailwind CSS, and animation libraries like Framer Motion. It also includes sections for about me, contact, and dynamic project details, making it both functional and aesthetically pleasing.",
      projectLink: "https://vyasmohle.github.io/My-Portfolio-Site/",
      githubLink: "https://github.com/vyasmohle/My-Portfolio-Site",
      tools: ["HTML", "Tailwind CSS", "Framer Motion", "EmailJS","GSAP"],
    },
  ];

  return (
    <div
      id="projects"
      className="w-full min-h-screen py-20 backdrop-blur-2xl text-white p-1"
    >
      <h1 className="text-5xl text-center font-[Borel] text-zinc-200  mt-5 font-semibold  uppercase">
        Projects
      </h1>
      <p className=" mx-auto text-center text-xl my-10 font-light w-1/2">
        Here you will find some of the personal projects I created, along with a
        few carefully crafted clones, each showcasing its own case study.
      </p>

     

      

      <div className="w-full p-10  flex flex-wrap gap-20 ">
        {ProjectData.map((item, index) => {
          return (
            <motion.div
            whileHover={{scale:1.05}}
             id="mapdiv"
              key={index}
              className=" p-5  rounded-[5vh]   "
              style={{
                width: item.width,
                height: item.height,
                padding: item.p,
                backgroundImage: item.bg,
                backgroundSize: 'cover',  
                backgroundPosition: 'center',
              }}

              
            >
              <h1 className="text-center font-semibold text-4xl">
                {item.name}
              </h1>
              
              <div className=" w-full h-[40vh] py-5   p-2 flex items-center justify-center" >
              <div className="w-[30vw] h-full opacity-20 rounded-lg overflow-hidden bg-blue-400">
                <video autoPlay muted loop src={item.video1} className="w-full h-full object-cover " ></video>
              </div>
              </div>

              <div className="content max-w-screen-sm mx-auto   p-2 ">
                <h1>
                  A movie exploration platform that provides detailed
                  information on movies, including ratings, trailers, release
                  dates, actors, availability, and recommendations.
                </h1>
              </div>

              <Link to='/projectDetail' state={{item}} className="flex items-center justify-center my-2" >

              <motion.button
              whileTap={{scale:0.8}}
              whileHover={{scale:1.08}}
               className="px-14 py-3 mt-1 rounded-full bg-violet-800 ">Explore Now</motion.button>
              
              </Link>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
