import React from "react";
import ForminContact from "./ForminContact";
import pic from "../assets/halfpic.jpg";

function Contact() {
  const openLink = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div id="contact" className="w-full min-h-[80vh] pt-20 p-1 text-white">
      <h1 className="text-5xl text-center font-semibold my-5 font-[Borel] text-zinc-200 uppercase">
        Contact me
      </h1>
      <p className=" mx-auto text-center text-xl mt-10 font-light w-1/2">
        Feel free to Contact me by submitting the form below and I will get back
        to you as soon as possible
      </p>
      <div className="w-full p-10  flex justify-between px-20 ">
        <div className="w-[60vh]  ml-20 rounded-[3vh] bg-zinc-700 bg-opacity-30 p-6 px-10 ">
          <ForminContact />
        </div>
        <div className="w-[80vh] h-[70vh]  rounded-lg p-5">
          <div className="w-[40vh] h-[45vh] overflow-hidden opacity-60  mx-auto rounded-lg relative">
            <img src={pic} alt="" />

           
          </div>
          <div className="flex gap-10 mt-10 justify-center">
            <div
              onClick={() => openLink("https://github.com/vyasmohle")}
              className="w-[6vh] h-[6vh]   cursor-pointer rounded-full overflow-hidden"
            >
              <img
                className="w-full h-full object-cover"
                src="https://i.pinimg.com/originals/de/b4/6f/deb46f02a59e3b3a2aa58fac16290d63.gif"
                alt=""
              />
            </div>
            <div
              onClick={() => openLink("https://github.com/vyasmohle")}
              className="w-[6vh] cursor-pointer h-[6vh]  rounded-full overflow-hidden"
            >
              <img
                className="w-full h-full object-cover"
                src="https://i.pinimg.com/originals/16/21/3f/16213fe0d23aa40c1208ba1594acef50.gif"
                alt=""
              />
            </div>
          </div>
          <div className="flex justify-between items-center mt-5 px-20">
            <h1 className="border-b-2 cursor-pointer border-b-gray-500">
              vyasmohle1811@gmail.com
            </h1>
            <h1 className="border-b-2 cursor-pointer border-b-gray-500">+91 8269434702</h1>
          </div>
        </div>
      </div>

      <div className="p-1 rounded-md h-[50vh] backdrop-blur-3xl bg-black/50  ">
        <div className="w-full mt-12 flex justify-between px-40">
          <div className=" ">
            <h1 className="uppercase font-semibold text-xl inline">
              vyasnarayan mohle
            </h1>
            <h3 className="w-[70vh] mt-5 font-light tracking-tight leading-5 ml-5">
              A Frontend-focused Web Developer, specialize in creating intuitive
              and visually appealing websites and web applications that
              contribute to the overall success of the product.
            </h3>
          </div>
          <div>
            <h1 className="uppercase text-xl font-semibold mb-5">Social</h1>
            <div className="flex gap-2">
              <div
                onClick={() => openLink("https://github.com/vyasmohle")}
                className="w-[4vh] cursor-pointer h-[4vh] rounded-full overflow-hidden"
              >
                <img
                  className="w-full h-full object-cover"
                  src="https://cdn3.iconfinder.com/data/icons/2018-social-media-black-and-white-logos/1000/2018_social_media_popular_app_logo_linkedin-512.png"
                  alt=""
                />
              </div>
              <div
                onClick={() => openLink("https://github.com/vyasmohle")}
                className="w-[4vh] cursor-pointer h-[4vh] rounded-full overflow-hidden"
              >
                <img
                  className="w-full h-full object-cover"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCHxR2C_q8ugOMQzSmMovD3ni-z1QqTopSjg&s"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <hr className="w-[85vw] mt-[10vh] mx-auto bg-zinc-700 " />
        <h3 className="text-center my-10 text-xs">
          <span>@copyright2024</span> Made by:{" "}
          <span className="uppercase font-semibold text-xs border-b-[1px]">
            Vyas mohle
          </span>
        </h3>
      </div>
    </div>
  );
}

export default Contact;
