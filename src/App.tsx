import './App.css'
import { useState, useEffect } from 'react';
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import Timeline from './components/Timeline';
import ContactForm from './components/ContactForm';
// import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Slider from './components/Slider';

const App = () => {

  const [innerWidth, setInnerWidth] = useState(window.innerWidth)

  useEffect(() => {
    window.addEventListener('resize', () => { setInnerWidth(window.innerWidth) })

    return window.removeEventListener('resize', () => { setInnerWidth(window.innerWidth) })
  }, [])

  return (
    <div className='app-container'>
      {/* {innerWidth >= 1190 ? (<Sidebar />) : (null)} */}
      <Home />
      {innerWidth <= 645 ? null : <Navbar />}
      <About />
      <Timeline />
      <Slider />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default App