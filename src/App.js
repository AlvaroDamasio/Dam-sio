
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
import Stacks from './components/stacks/Stacks';
import Action from './components/action/Action';
import Project from './components/projects/Projects';
import Words from './components/words/Words';




function App() {
  
  
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Ilustration/>
      <Stacks/>
      <Action/>
      <Project image={""} url="/home"/>
      <Project position="rigth" image={""} url="/about"/>
      <Words delay="1"/>
      <Words delay="3"/>
      <Words delay="2"/>
      <Contato/>
  
      
    </div>
  );
}

export default App;
