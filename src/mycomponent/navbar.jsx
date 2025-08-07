import React from 'react'

const navbar = () => {
  return (
    <nav className='flex justify-center content-center '>
        <div className='fixed top-0 z-20 whitespace-nowrap flex bg-black/50 justify-center text-white p-1 max-w-[50%] mx-auto m-5 content-center items-center rounded-full overflow-x-auto backdrop-blur-md motion-opacity-in-0 motion-translate-y-in-100 motion-blur-in-md'>
            <a href="#" className='inline-block m-3 hover:-translate-y-1 transition-transform duration-100'>HOME</a>
            <a href="#" className='inline-block m-3 hover:-translate-y-1 transition-transform duration-100'>ANOUT</a>
            <a href="#" className='inline-block m-3 hover:-translate-y-1 transition-transform duration-100'>PROJECTS</a>
            <a href="#contact" className='m-3 bg-[#fbd295] ml-[3rem] p-2 text-black rounded-full hover:bg-[#fcc97c] hover:-translate-y-1 transition-transform duration-100 '>CONTACT</a>
             
        </div>
        
    </nav>
  )
}

export default navbar
