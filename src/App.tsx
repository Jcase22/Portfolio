import './App.css'
import { useState, useEffect } from 'react';
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import Timeline from './components/Timeline';
import ContactForm from './components/ContactForm';
import Sidebar from './components/Sidebar';

const App = () => {

  const [innerWidth, setInnerWidth] = useState(window.innerWidth)

  useEffect(() => {
    window.addEventListener('resize', () => { setInnerWidth(window.innerWidth) })

    return window.removeEventListener('resize', () => { setInnerWidth(window.innerWidth) })
  }, [])

  return (
    <div className='app-container'>
      {innerWidth >= 1190 ? (<Sidebar />) : (null)}
      <Home />
      <Navbar />
      <About />
      <Timeline />
      <ContactForm />
    </div>
  );
};

export default App