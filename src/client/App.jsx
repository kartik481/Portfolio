import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';
import Banner from './MainHead';
import Skills from './Skills';
import Projects from './Projects';
import Footer from './footer';
import ContactForm from './Contact';
import { useEffect } from 'react';
import ReactGA from "react-ga4";




function App() {
  useEffect(()=>{
    ReactGA.initialize([
      {
        trackingId: "G-D116MV7TGH",
      }
    ]);
    ReactGA.send({ hitType: "pageview", page: window.location.pathname + window.location.search, title: "Porfolio" });
    
    },[])
  return (
    <>
      <Navbar/>
      <Banner/>
      <Skills/>
      <Projects/>
      <ContactForm/>
      <Footer/>
    </>
  );
}

export default App;
