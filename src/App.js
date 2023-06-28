
import './App.css';
import About from './components/about/AboutComponent';
import Header from './components/header/HeaderComponent';
import Home from './components/home/HomeComponent';
import Section from './components/section/SectionComponent';
import Contato from './components/contato/ContatoComponent';

import TimeLine from './components/timeLine/TimeLine';


function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <Section/>
      <About/>
      <TimeLine/>
      <Contato/>
      
    </div>
  );
}

export default App;
