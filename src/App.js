import {React,useEffect} from "react";
import { HashRouter as Router ,Route,Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import GetInTouch from "./Components/GetInTouch";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "./Components/Footer";



function App() {
  useEffect(() => {
  AOS.init({ duration: 1000, once: false }); // once=true يعني تتحرك مرة واحدة
}, []);
 return (
    <Router>
       <Header /> 
      <Routes>
        <Route path="/" element={
            <>
              <section id="home"><Home /></section>
              <section id="skills"><Skills /></section>
              <section id="projects"><Projects /></section>
              
            </>
          }
        />
      </Routes>
      <GetInTouch/>
      <Footer/>
    </Router>
  );
}

export default App;
