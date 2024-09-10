// import { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./Pages/LandingPage";
import Home from "./Pages/Home/Home";
import Landing from "./Pages/Landing/Landing";
import About from "./Pages/About/About";
import Menu from "./Pages/Menu/Menu";
import  Team  from "./Pages/Team/Team";
import Contact from "./Pages/Contact/Contact";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="/about" element={<About/>}/>
          <Route path="/menu" element={<Menu/>}/>
          <Route path="/team" element={<Team/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
