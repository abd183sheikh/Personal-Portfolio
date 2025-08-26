import React from 'react';
import background from './assests/background.mp4';
import './App.css';
import {BrowserRouter as Router, Routes,Route} from "react-router-dom";
import Navbar from './mycomponent/navbar';
import Contact from './mycomponent/Contact';
import Home from './mycomponent/Home';
import SocialScroll from "./mycomponent/SocialScroll";
import About from './mycomponent/About.jsx';
import Project from './mycomponent/Project.jsx';





function App() {
  return (
    <>    
    
    {/* <Navbar/>
   
     <Home/>
    <About/>  
    
    <SocialScroll/>
      <Project/>   */}
        <Contact/>
      
    
    
    
    </>

  );
}

export default App;
