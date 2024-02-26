import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';
import Banner from './MainHead';
import Skills from './Skills';
import Projects from './Projects';
import Footer from './footer';
import ConatctForm from './Contact';

function App() {
  return (
    <>
      <Navbar/>
      <Banner/>
      <Skills/>
      <Projects/>
      <ConatctForm/>
      <Footer/>
    </>
  )
}

export default App
