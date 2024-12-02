
import { div } from "motion/react-client";
import React, { useEffect, useState } from "react";

function Expertise() {
  const [hoveredDiv, sethoveredDiv] = useState(null);

  const skills = {
    programming: [
      { name: "C++", level: "70%" },
      { name: "Java", level: "50%" },
      { name: "Python", level: "30%" },
    ],
    frontend: [
      { name: "HTML", level: "90%" },
      { name: "CSS", level: "85%" },
      { name: "Js", level: "60%" },
      { name: "React", level: "70%" },
    ],

    technical: [
      { name: "DSA", level: "60%" },
      { name: "OS", level: "50%" },
      { name: "DBMS", level: "30%" },
      { name: "CN", level: "40%" },
    ],
  };

  return (
    <div
      id="expertise"
      className="w-full h-screen   backdrop-blur-2xl text-white"
    >
      <h1 className="relative top-[20%] text-6xl font-[Borel] text-zinc-200 text-center uppercase font-semibold">
        My Expertise
      </h1>

      <div className="flex justify-center gap-12 relative top-[30%]">

        <div
          onMouseEnter={() => sethoveredDiv("programming")}
          onMouseLeave={() => sethoveredDiv(null)}
          className="w-[28vw] hover:scale-90 cursor-none work h-[46vh] border-2 rounded-2xl  bg-zinc-600 bg-opacity-20   "
        >
          <div className=" passion w-full h-[17vh]  flex items-center justify-between px-5 gap-3">
            <div>
              <i className=" text-5xl ri-macbook-line"></i>
            </div>
            <h1 className="text-4xl font-semibold "> Programming Knowledge </h1>
          </div>
          <div className=" content w-full h-[14vh]  pt-5 px-5">
            <h3>
              Familiar with functional and OOP concepts using <span>C++</span>,
              <span>Java</span>, and
              <span> Python</span>.
            </h3>
          </div>
          <div className="logo w-full h-[14vh]  px-3 flex items-center justify-between">
            <div className="w-[11vh] h-[11vh]  rounded-full overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0wRjQxBx5KmwcRbry-IqA7A2kE5ae9P2Ahw&s"
                alt=""
              />
            </div>
            <div className="w-[11vh] h-[11vh]  rounded-full overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src="https://freepngimg.com/save/16269-java-png/512x512"
                alt=""
              />
            </div>
            <div className="w-[11vh] h-[11vh]  rounded-full overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src="https://cdn3d.iconscout.com/3d/free/thumb/free-python-3d-icon-download-in-png-blend-fbx-gltf-file-formats--pycharm-logo-programming-language-high-level-interpreted-coding-lang-pack-logos-icons-7578001.png?f=webp"
                alt=""
              />
            </div>
          </div>

          {hoveredDiv === "programming" && (
            <Popup skills={skills.programming} />
          )}
        </div>

        <div
          onMouseEnter={() => sethoveredDiv("frontend")}
          onMouseLeave={() => sethoveredDiv(null)}
          className="w-[28vw] hover:scale-90 cursor-none ease-out work h-[46vh] bg-zinc-600 bg-opacity-20 border-2 rounded-2xl   "
        >
          <div className=" passion w-full h-[17vh] flex items-center justify-between px-5 gap-3">
            <div>
              <i className=" text-6xl ri-reactjs-fill"></i>
            </div>
            <h1 className="text-4xl font-semibold "> Frontend Development </h1>
          </div>
          <div className=" content w-full h-[14vh]  pt-5 px-5">
            <h3>
              specialize in frontend development. My expertise lies in{" "}
              <span>HTML</span>,<span>CSS</span>, <span>JavaScript</span>, and{" "}
              <span>React</span>.
            </h3>
          </div>
          <div className="logo w-full h-[14vh]  px-3 flex items-center justify-between">
            <div className="w-[11vh] h-[11vh]  rounded-full overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYncmo7j1JNjWNMachF5rU8aLYIq_9gpoxXg&s"
                alt=""
              />
            </div>
            <div className="w-[11vh] h-[11vh]  rounded-full overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_640.png"
                alt=""
              />
            </div>
            <div className="w-[11vh] h-[11vh]  rounded-full overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFi4_-9fNmkOc4nkBq6YLPG8higxuZsBuXGQ&s"
                alt=""
              />
            </div>
            <div className="w-[11vh] h-[11vh]  rounded-full overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src="https://static.vecteezy.com/system/resources/previews/012/697/298/non_2x/3d-javascript-logo-design-free-png.png"
                alt=""
              />
            </div>
          </div>

          {hoveredDiv === "frontend" && <Popup skills={skills.frontend} />}
        </div>

        <div
          onMouseEnter={() => sethoveredDiv("technical")}
          onMouseLeave={() => sethoveredDiv(null)}
          className="w-[28vw] hover:scale-90 cursor-none work h-[46vh]  bg-zinc-600 bg-opacity-20 border-2 shadow-lg   rounded-2xl  "
        >
          <div className=" passion w-full h-[17vh]  flex items-center justify-between px-5 gap-3">
            <div>
              <i className=" text-6xl ri-bubble-chart-line"></i>
            </div>
            <h1 className="text-4xl font-semibold "> Core Technical Skills </h1>
          </div>
          <div className=" content w-full h-[14vh] pt-5 px-5">
            <h3>
              Fundamental understanding of <span className="font-bold font-serif text-lg" >DBMS</span>, <span className="font-bold font-serif text-lg" > OS</span>,
              <span className="font-bold font-serif text-lg" >CN</span> and <span className="font-bold font-serif text-lg "> DSA</span>, with problem-solving and
              system-level understanding.
            </h3>
          </div>
          <div className="logo w-full h-[14vh]  px-3 flex items-center justify-between">
            <div className="w-[11vh] h-[11vh]  rounded-full overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src="https://w7.pngwing.com/pngs/22/187/png-transparent-android-computer-icons-handheld-devices-mobile-operating-system-root-root-desktop-wallpaper-mobile-phones.png"
                alt=""
              />
            </div>
            <div className="w-[11vh] h-[11vh]  rounded-full overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQjM4CjWTzqhsPDzNKZhGsYbhiVUfR7gRBvg&s"
                alt=""
              />
            </div>
            <div className="w-[11vh] h-[11vh]  rounded-full overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src="https://w7.pngwing.com/pngs/965/11/png-transparent-agar-io-intranet-computer-icons-computer-network-intranet-icon-miscellaneous-photography-computer.png"
                alt=""
              />
            </div>
            <div className="w-[11vh] h-[11vh]  rounded-full overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src="https://w7.pngwing.com/pngs/409/834/png-transparent-data-structures-and-algorithms-computer-icons-computer-software-others-miscellaneous-blue-computer.png"
                alt=""
              />
            </div>
          </div>

          {hoveredDiv === "technical" && <Popup skills={skills.technical} />}
        </div>

      </div>
    </div>
  );
}

function Popup({ skills }) {
  const [progress, setProgress] = useState([]);

  useEffect(() => {
    const intervals = [];
    const newProgress = skills.map((skill) => {
      return { name: skill.name, level: 0 };
    });

    setProgress(newProgress);

    skills.forEach((skill, index) => {
      const maxLevel = parseInt(skill.level);
      const interval = setInterval(() => {
        setProgress((prevProgress) => {
          const updated = [...prevProgress];
          if (updated[index].level < maxLevel) {
            updated[index].level += 1;
          }
          return updated;
        });
      }, 20); // Increase percentage every 20ms
      intervals.push(interval);
    });

    return () => intervals.forEach(clearInterval);
  }, [skills]);

  return (
    <div className="absolute top-50% left-1/2 transform -translate-x-1/2 -translate-y-full w-[28vw] h-[50vh] px-[11vh] bg-gradient-to-r from-gray-900 via-black to-indigo-900 bg-opacity-10 p-5 rounded-[5vh]">
      <h2 className="text-3xl font-semibold mb-4 text-center">Skill Progress</h2>
      <div className="space-y-3">
        {progress.map((skill, index) => (
          <div key={index}>
            <div className="flex justify-between text-sm">
              <span className="text-xl" >{skill.name}</span>
              <span className="text-xl" >{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-500 rounded-xl h-5 mt-1">
              <div
                className="bg-green-500 h-full rounded-xl"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Expertise;


