import React from 'react';
import background from './assests/background.mp4';
import './App.css';
import {BrowserRouter as Router, Routes,Route} from "react-router-dom";
import Navbar from './mycomponent/navbar';
import Contact from './mycomponent/Contact';
import Home from './mycomponent/Home';



function App() {
  return (
    <>    
      <Navbar/>
    
    <div className='relative h-screen overflow-hidden sticky top-0 h-screen flex flex-col' >
    <video src={background} autoPlay muted loop className=" absolute object-cover left-0 w-full h-full"></video>
      
      <Home/>
     </div> 
      <Contact/>
      
    
    
    
    </>

  );
}

export default App;
