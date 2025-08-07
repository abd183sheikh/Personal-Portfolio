import React from "react";



const Home = () => {


  return (
    <div className=" bg-ur flex justify-center items-center h-screen content-center ">
      

      {/* first section */}
  
      <div className="motion-translate-y-in-100 motion-duration-[2s] motion-ease-spring-smooth bg-black/50 backdrop-blur-sm backdrop-blur-sm p-10 rounded-lg ">
      <div className="text-[5rem] text-white font-bold">
        <h1 className="text-[#7a7979] motion-preset-slide-right-lg motion-duration-2000 motion-delay-100 motion-ease-bounce" >HI, I AM</h1>
        <h1 className="motion-preset-slide-left-lg motion-duration-2000 motion-delay-100 motion-ease-bounce" >ABDULLAH NOOR</h1>
        
      </div >
      <div className="text-[1] text-white mb-[3rem]">
        <p className="italic motion-preset-slide-right-lg motion-duration-2000 motion-delay-100 motion-ease-bounce">Recent graduate student from integral university,
        </p>
        <p className="italic motion-preset-slide-left-lg motion-duration-2000 motion-delay-100 motion-ease-bounce"> looking for a job to kick-start my career</p>

      </div>
      
      {/* icon */}
      <div className="flex flex-row md:flex-row gap-[2rem]">
        <div className="flex motion-preset-slide-right-lg motion-duration-2000 motion-delay-100 motion-ease-bounce">
        <a href="https://www.linkedin.com/in/your-linkedin-id" target="_blank" className="inline-block motion-translate-x-in-100">
  <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" className="w-7 h-7 m-[5px] hover:scale-110 transition-transform duration-200 rounded-full" />
</a>
<a href="https://www.instagram.com/your-instagram-id" target="_blank">
    <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram" className="w-7 h-7 m-[5px] hover:scale-110 transition-transform duration-200  rounded-full"/>
  </a>


  <a href="https://github.com/your-github-id" target="_blank">
    <img src="https://cdn-icons-png.flaticon.com/512/733/733553.png" alt="GitHub" className="w-7 h-7 m-[5px] hover:scale-110 transition-transform duration-200 rounded-full"/>
  </a>
  </div>
  <div>
  <a href="" target="_blank">
<button className="text-black font-bold bg-[#fbd295] p-2 hover:bg-[#fcc97c] motion-preset-slide-left-lg motion-duration-2000 motion-delay-100 motion-ease-bounce">DOWNLOAD CV</button>
</a>
</div>
      </div>
      </div>
      
    </div>
  );
};

export default Home;
