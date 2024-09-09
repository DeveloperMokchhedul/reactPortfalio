import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './page/Home'
import Navbar from './components/Navbar'
import Contact from './page/Contact'
import Experience from './page/Experience'
import Project from './page/Project'
import Skill from './page/Skill'
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path = "/"  element = {<Home />} />
      <Route path = "/contact"  element = {<Contact />} />
      <Route path = "/experience"  element = {<Experience />} />
      <Route path = "/project"  element = {<Project />} />
      <Route path = "/skill"  element = {<Skill />} />
    </Routes>
    
    </BrowserRouter>

    </>
  )
}

export default App
