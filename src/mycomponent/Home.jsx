import React from "react";
import background from '../assests/background.mp4';


const Home = () => {


  return (
    <div className="relative flex justify-center items-center content-center h-screen" id="home">
      <video src={background} autoPlay muted loop className=" absolute object-cover left-0 w-full h-full"></video>
      
``
      {/* first section */}
  
      <div className="motion-translate-y-in-100 motion-duration-[2s] md:w-[30rem] w-[20rem] lg:w-[50rem] motion-ease-spring-smooth bg-black/50 backdrop-blur-sm backdrop-blur-sm p-10 rounded-lg ">
      <div className="text-[2.5rem] md:text-[5rem] text-white font-bold">
        <h1 className="text-[#7a7979] motion-preset-slide-right-lg motion-duration-2000 motion-delay-100 motion-ease-bounce" >HI, I AM</h1>
        <h1 className="w-auto motion-preset-slide-left-lg motion-duration-2000 motion-delay-100 motion-ease-bounce" >ABDULLAH NOOR</h1>
        
      </div >
      <div className="text-[1] text-white mb-[3rem]">
        <p className="italic motion-preset-slide-right-lg motion-duration-2000 motion-delay-100 motion-ease-bounce">Recent graduate student from integral university,<br />
        <span> looking for a job to kick-start my career</span>
        </p>

      </div>
      
      {/* icon */}
      <div className="flex flex-row md:flex-row gap-[2rem]">
        <div className="flex motion-preset-slide-right-lg motion-duration-2000 motion-delay-100 motion-ease-bounce">
        <a href="https://www.linkedin.com/in/abdullah-noor-30b517264/" target="_blank" className="inline-block motion-translate-x-in-100">
  <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" className="w-7 h-7 m-[5px] hover:scale-110 transition-transform duration-200 rounded-full" />
</a>
<a href="https://www.instagram.com/your-instagram-id" target="_blank">
    <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram" className="w-7 h-7 m-[5px] hover:scale-110 transition-transform duration-200  rounded-full"/>
  </a>


  <a href="https://github.com/abd183sheikh" target="_blank">
    <img src="https://cdn-icons-png.flaticon.com/512/733/733553.png" alt="GitHub" className="w-7 h-7 m-[5px] hover:scale-110 transition-transform duration-200 rounded-full"/>
  </a>
  </div>
  <div className="flex items-center justify-center">
  <a href="https://drive.google.com/file/d/1b41o_hApFOvFwEr6ps8-vGHg0KU86MsJ/view?usp=sharing" target="_blank">
<button className="text-black text font-bold bg-[#fbd295] p-1 lg:p-2 hover:bg-[#fcc97c] motion-preset-slide-left-lg motion-duration-2000 motion-delay-100 motion-ease-bounce text-[10px] lg:text-[15px]">DOWNLOAD CV</button>
</a>
</div>
      </div>
      </div>
      
    </div>
  );
};

export default Home;
