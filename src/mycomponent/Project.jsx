import { div } from 'motion/react-client'
import React,{ useEffect, useRef, useState } from 'react'
import projectback from "../assests/projectback.jpg"
import earth from "../assests/rotating_earth.mp4"
import cnn from "../assests/cnn_model.jpg"
import yolo from "../assests/yolo.png"
import flight from "../assests/flight.png"
const Project = () => {
  
  return (
    // Project section - improved responsiveness
    <div id='project' 
      className='sticky flex flex-col items-center content-center justify-center bg-cover bg-no-repeat bg-center px-4 py-8'  >
      <video src={earth} autoPlay muted loop className=" absolute top-0 object-cover left-0 w-full h-full"></video>
      
      {/* heading */}
      <div className='flex flex-col items-center content-center justify-center mt-5 text-center max-w-4xl z-10'>
        <h2 className='font-mono text-2xl sm:text-3xl lg:text-4xl text-blue-900 mb-2'>
          Featured <span className="text-blue-400">Project</span>
        </h2>
        <p className='text-white text-sm sm:text-base lg:text-lg max-w-2xl px-4 mb-2'>
          Here are some of my projects. Each project was carefully crafted with attention to details, performance, and user experience.
        </p>
      </div>
      
      {/* card section - responsive grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mt-8 max-w-6xl w-full px-4'>
        
        <div className="card border-3 border-black bg-black/50 hover:scale-105 transition-transform duration-300 shadow-lg max-w-sm mx-auto">
          
          <img src={cnn} className="card-img-top h-40 object-cover" alt="Medical diagnosis project"/>
          <div className="card-body p-3">
            <h5 className="card-title text-base font-semibold mb-2 text-white">
              Image Classification for medical diagnosis using convolutional neural network
            </h5>
            <p className="card-text text-white text-xs mb-3 ">
              Developed a CNN-based model to classify medical images and aid in early disease detection. The project showcases my skills in deep learning, image processing, and AI applications in healthcare, supporting faster and more reliable diagnostics.
            </p>
          </div>
          <div className="p-3 pt-0">
            <a href="" className='btn btn-primary text-sm py-2'>View Project</a>
          </div>
        </div>

        <div className="card bg-black/50 border-3 border-black hover:scale-105 transition-transform duration-300 shadow-lg max-w-sm mx-auto">
          <img src={yolo} className="card-img-top h-40 object-cover" alt="Traffic analysis project"/>
          <div className="card-body p-3">
            <h5 className="card-title text-base font-semibold mb-2 text-white">
              Traffic flow Analysis using YOLO algorithm
            </h5>
            <p className="card-text text-white text-xs mb-3">
              Built a YOLO-based model to detect and analyze vehicles in real time for traffic flow monitoring. The project highlights my expertise in computer vision, object detection, and AI applications in smart city solutions, enabling faster and more efficient traffic management.
            </p>
          </div>
          <div className="p-3 pt-0">
            <a href="https://github.com/abd183sheikh/Traffic-Flow-Analysis.git" className='btn btn-primary text-sm py-2'>View Project</a>
          </div>
        </div>

        <div className="card border-3 border-black bg-black/50 hover:scale-105 transition-transform duration-300 shadow-lg md:col-span-2 xl:col-span-1 max-w-sm mx-auto">
          <img src={flight} className="card-img-top h-40 object-cover" alt="Flight price prediction project"/>
          <div className="card-body p-3">
            <h5 className="card-title text-base font-semibold mb-2 text-white">
              Flight price prediction model
            </h5>
            <p className="card-text text-white  text-xs mb-3">
              Developed a machine learning model to predict flight prices based on factors like airlines, routes, duration, and travel dates. The project demonstrates my skills in data analysis, feature engineering, and predictive modeling, providing insights for smarter and cost-effective travel planning.
            </p>
          </div>
          <div className="p-3 pt-0">
            <a href="" className='btn btn-primary text-sm py-2'>View Project</a>
          </div>
        </div>
      </div>

      {/* github link */}
      <div className='flex items-center justify-center bg-black p-2 text-white rounded-full mt-[1rem] hover:bg-gray-800 transition-colors duration-300 z-10'>
        <span className="text-sm sm:text-base">Check my Github</span>
        <a className='flex ml-3' href="https://github.com/abd183sheikh" target='_blank' rel="noopener noreferrer"> 
          <svg className="bg-blue-900 rounded-full w-6 h-6 p-1 ml-2 hover:scale-110 transition-transform duration-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
          </svg>
        </a>
      </div>

    </div>    
  )
}

export default Project