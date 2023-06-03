import './index.css'
import { useEffect, useRef } from 'react';

const Navbar = () => {

  const fillerDivFlagRef = useRef(false)

  useEffect(() => {
    const navbar = document.getElementById('navbar-container');

    const sticky = navbar?.offsetTop;

    console.log(fillerDivFlagRef)

    const addOrRemoveSticky = () => {
      if (sticky && window.scrollY >= sticky) {
        navbar.classList.add('sticky', 'content')
        fillerDivFlagRef.current = true
      } else {
        navbar?.classList.remove('sticky', 'content');
        fillerDivFlagRef.current = false
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