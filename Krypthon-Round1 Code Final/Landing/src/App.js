import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import About from './Components/About';
import Timeline from './Components/Timeline';

import Contact from './Components/Contact';
import Top from './Components/GoTo/Top';
function App() {
  return (
    <div className="App bg-green-900">
    <Navbar/>
    <Hero/>
    <About/>
    <Timeline></Timeline>
    <Contact/>
    <Top/>
    </div>
  );
}

export default App;
