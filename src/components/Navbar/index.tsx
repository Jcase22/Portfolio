import './index.css'
import { useEffect, useState } from 'react';

const Navbar = () => {

  const [fillerDivFlag, setFillerDivFlag] = useState(false)

  useEffect(() => {
    const navbar = document.getElementById('navbar-container');

    const sticky = navbar?.offsetTop;

    const addOrRemoveSticky = () => {
      if (sticky && window.scrollY >= sticky) {
        navbar.classList.add('sticky')
        setFillerDivFlag(true)
      } else {
        navbar?.classList.remove('sticky');
        setFillerDivFlag(false)
      }
    }

    window.addEventListener('scroll', () => {addOrRemoveSticky()})

    return window.removeEventListener('scroll', () => {addOrRemoveSticky()})

  }, [])

  return (
    <>
    <div id='navbar-container'>
      <div className='navbar-link' onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Home</div>
      <div className='navbar-link' onClick={() => window.scrollTo({ top: 725, behavior: 'smooth' })}>About</div>
      <div className='navbar-link' onClick={() => window.scrollTo({ top: 1275, behavior: 'smooth' })}>Projects</div>
      <div className='navbar-link' onClick={() => window.scrollTo({ top: 1827, behavior: 'smooth' })}>Contact</div>
    </div>
    </>
  )
}

export default Navbar;