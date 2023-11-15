
import './App.css';
import About from './components/about/AboutComponent';
import Header from './components/header/HeaderComponent';
import Home from './components/home/HomeComponent';
import Contato from './components/contato/ContatoComponent';
import Hero from './components/hero/HeroComponent';


import ScrollTrigger from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import { useLayoutEffect } from 'react';
import Ilustration from './Ilustration/Ilustration';



function App() {
  
  
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Ilustration/>
      <Contato/>
      
    </div>
  );
}

export default App;
