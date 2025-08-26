import React, { useState } from 'react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className='flex justify-center content-center'>
      <div className={`fixed top-0 z-20 flex flex-col bg-black/50 text-white p-2 max-w-[90%] sm:max-w-[70%] md:max-w-[50%] mx-auto mb-[5rem] mt-[1rem] items-center backdrop-blur-md motion-opacity-in-0 motion-translate-y-in-100 motion-blur-in-md transition-all duration-300 ${isMenuOpen ? 'rounded-lg p-4' : 'rounded-full'}`}>
        
        {/* Main navbar content */}
        <div className='flex items-center justify-between w-full'>
          {/* Hamburger menu - only visible on small screens */}
          <button 
            onClick={toggleMenu}
            className='sm:hidden flex flex-col justify-center items-center w-6 h-6 space-y-1 hover:-translate-y-1 transition-transform duration-100'
          >
            <div className={`w-4 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
            <div className={`w-4 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></div>
            <div className={`w-4 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
          </button>

          {/* Navigation links - visible on larger screens */}
          <div className='hidden sm:flex items-center'>
            <a href="#home" className='inline-block m-2 hover:-translate-y-1 transition-transform duration-100'>HOME</a>
            <a href="#about" className='inline-block m-2 hover:-translate-y-1 transition-transform duration-100'>ABOUT</a>
            <a href="#project" className='inline-block m-2 hover:-translate-y-1 transition-transform duration-100'>PROJECTS</a>
          </div>
          
          {/* Contact button - always visible */}
          <a href="#contact" className={`bg-[#fbd295] px-4 py-2 ml-5 text-black hover:bg-[#fcc97c] hover:-translate-y-1 transition-transform duration-100 ${isMenuOpen ? 'rounded-md' : 'rounded-full'}`}>
            CONTACT
          </a>
        </div>

        {/* Mobile dropdown menu */}
        <div className={`sm:hidden w-full overflow-hidden transition-all duration-300 ${isMenuOpen ? 'max-h-32 mt-2' : 'max-h-0'}`}>
          <div className='flex flex-col space-y-2 py-2'>
            <a href="#home" className='block text-center py-2 hover:bg-white/10 rounded-lg transition-colors duration-200'>HOME</a>
            <a href="#about" className='block text-center py-2 hover:bg-white/10 rounded-lg transition-colors duration-200'>ABOUT</a>
            <a href="#project" className='block text-center hover:bg-white/10 rounded-lg transition-colors duration-200'>PROJECTS</a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar