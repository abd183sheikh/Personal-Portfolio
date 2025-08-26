import React, { useState, useEffect } from "react";
import { motion } from "motion/react"
import Aboutbackground from "../assests/about_background.jpg";
import GotoSchool from "../assests/go_to_school.png";
import { useRef } from 'react';


const About = () => {
  
  const educationData = [
    {
      year: "2022 — 2025",
      title: "B.Tech Computer Science",
      description: "Integral University, Lucknow — Specializing in Cloud & AI",
    },
    {
      year: "2020 — 2021",
      title: "Higher Secondary",
      description: "St. Teresa’s Day School & College, Lucknow - ICSE",
    },
    {
      year: "2018 — 2019",
      title: "Secondary School",
      description: "St. Teresa’s Day School & College, Lucknow - ICSE",
    },
  ];
  return (
    <div className=" relative flex flex-col items-center justify-center content-center bg-cover min-h-screen" id="about" style={{
      backgroundImage:`url(${Aboutbackground})`,
      backgroundPosition: "calc(35%) center" 
    }}>
      <div className=" flex flex-col  md:flex-row items-center justify-center content-center items-center">
      {/* left side */}
      <div className="md:w-1/2 w-full p-3 md:m-[10px]">
        <h1 className="text-[5rem] md:text-[7rem] text-[#fcc97c]">ABOUT</h1>
        <h1 className="text-white text-[5rem] md:text-[7rem]">ME</h1>
        <br />


        <p className="text-[20px] text-gray-400">
          Recent B.Tech Computer Science graduate with a disciplined and
          methodical approach to problem-solving. Developed leadership and
          teamwork skills as a Social Club Coordinator, gaining experience in
          event management and effective collaboration. Passionate about <a className="underline decoration-sky-500 underline-offset-4">machine
          learning</a> and <a className="underline decoration-pink-500 underline-offset-4">web development</a>, with hands-on experience in building
          solutions to complex problems and designing responsive, user-friendly
          applications. Eager to apply my skills in a professional setting,
          contribute to impactful projects, and grow within the dynamic
          technology sector. Actively seeking opportunities to work, learn, and
          make a meaningful impact.
        </p>
      </div>

      {/* right side */}

      <div >
        <div>
          <div className="max-w-xl md: p-3 mt-10">
            <h2 className="text-white font-bold text-2xl mb-6">EDUCATION</h2>
            <div className="relative">
              {/* vertical line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-300"></div>

              {educationData.map((item, index) => (
                <div key={index} className="mb-8 pl-10 relative">
                  {/* circle */}
                  <div className="absolute -left-1.5 top-1 w-3 h-3 rounded-full bg-blue-600 border-2 border-white"></div>
                  <p className="text-[20px] text-gray-500 mb-10">{item.year}</p>
                  <h3 className="text-lg font-medium text-[#fcc97c]">{item.title}</h3>
                  <p className="text-white">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>


      </div>
      
{/* timeline  born---gotoschool--- */}
      <div className="sticky top-0 flex flex-col md:flex-row gap-[10vw] justify-between items-center content-center justify-center overflow-hidden">
             
              {/* left side */}
              
          <div  className="">
              <img src={GotoSchool} alt="" />
              </div>
              <div className="h-[25vw] hidden md:block border-1 border-white"></div>
              
        {/* right side  */}
       
        <div className="flex flex-col justify-center items-center overflow-hidden">
          
          <h1 className="text-white font-bold mb-7 text-2xl skills">MY SKILLS</h1>
        <div className="grid md:grid-cols-4 grid-cols-3 gap-x-5  max-md:ml-[2rem] max-lg:mr-[3rem] lg:mr-5">
      

        <div className="animate-floatUp bg-[#03f0fc] text-black w-24 h-24 flex items-center justify-center rounded-full overflow-hidden shadow-[0_0_25px_5px_rgba(3,240,252,0.3)] m-7 font-bold design max-sm:ml-3 ">Python</div>
        <div className="animate-floatDown bg-[#03f0fc] text-black w-24 h-24 flex items-center justify-center rounded-full overflow-hidden m-7 shadow-[0_0_25px_5px_rgba(3,240,252,0.4)] font-mono font-bold design max-sm:ml-3">Java</div>
        <div className="animate-floatUp bg-[#03f0fc] text-black w-24 h-24 flex items-center justify-center rounded-full overflow-hidden shadow-[0_0_25px_5px_rgba(3,240,252,0.4)] m-7 font-mono font-bold design max-sm:ml-3">SQL</div>
        <div className="animate-floatDown bg-[#03f0fc] text-black w-24 h-24 flex items-center justify-center rounded-full overflow-hidden shadow-[0_0_25px_5px_rgba(3,240,252,0.4)] m-7 font-mono font-bold design max-sm:ml-3">HTML</div>
        <div className="animate-floatDown bg-[#03f0fc] text-black w-24 h-24 flex items-center justify-center rounded-full overflow-hidden shadow-[0_0_25px_5px_rgba(3,240,252,0.4)] m-7 font-mono font-bold design max-sm:ml-3">CSS</div>
        <div className="animate-floatUp bg-[#03f0fc] text-black w-24 h-24 flex items-center justify-center rounded-full  overflow-hidden shadow-[0_0_25px_5px_rgba(3,240,252,0.4)] m-7 font-mono font-bold design max-sm:ml-3">JavaScript</div>
        <div className="animate-floatDown bg-[#03f0fc] text-black w-24 h-24 flex items-center justify-center rounded-full  overflow-hidden shadow-[0_0_25px_5px_rgba(3,240,252,0.4)] m-7 font-mono font-bold design max-sm:ml-3">ReactJS</div>
        <div className="animate-floatUp bg-[#03f0fc] text-black w-24 h-24 flex items-center justify-center rounded-full  overflow-hidden shadow-[0_0_25px_5px_rgba(3,240,252,0.4)] m-7 font-mono font-bold design max-sm:ml-3">Leadership</div>
        <div className="animate-floatUp bg-[#03f0fc] text-black w-24 h-24 flex items-center justify-center rounded-full  overflow-hidden shadow-[0_0_25px_5px_rgba(3,240,252,0.4)] m-7 text-[13px] font-mono font-bold design max-sm:ml-3">Communication</div>
        <div className="animate-floatDown bg-[#03f0fc] text-black w-24 h-24 flex items-center justify-center rounded-full  overflow-hidden shadow-[0_0_25px_5px_rgba(3,240,252,0.4)] m-7 font-mono font-bold design max-sm:ml-3">Team work</div>
        <div className="animate-floatUp bg-[#03f0fc] text-black w-24 h-24 flex flex-col items-center justify-center  rounded-full  overflow-hidden shadow-[0_0_25px_5px_rgba(3,240,252,0.4)] m-7 font-mono font-bold design max-sm:ml-3"><span>Time</span><span className="text-[14px]">Management</span></div>
        <div className="animate-floatDown bg-[#03f0fc] text-black w-24 h-24 flex items-center justify-center rounded-full  overflow-hidden shadow-[0_0_25px_5px_rgba(3,240,252,0.4)] text-[14px] m-7 font-mono font-bold design max-sm:ml-3">Adaptability</div>
        
        </div>      

        </div>


      </div >


      


    </div>




  );
};

export default About;
