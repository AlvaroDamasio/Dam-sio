
import './App.css';
import About from './components/about/AboutComponent';
import Header from './components/header/HeaderComponent';
import Home from './components/home/HomeComponent';
import Contato from './components/contato/ContatoComponent';

import TimeLine from './components/timeLine/TimeLine';
import Hero from './components/Hero/HeroComponent';



function App() {
  
  return (
    <div className="App">
      <Header/>
      <Home/>
      <Hero/>
      <About />
      <TimeLine/>
      <Contato/>
      
    </div>
  );
}

export default App;
