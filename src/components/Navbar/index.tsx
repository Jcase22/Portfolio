import './index.css'
import { useEffect } from 'react';

const Navbar = () => {


  useEffect(() => {

    const navbar = document.getElementById('navbar-container');
    const sticky = navbar?.offsetTop;
    let fillerDivFlag = false;

    const addOrRemoveSticky = () => {
      if (sticky && window.scrollY >= sticky) {
        if (!navbar.classList.contains('sticky')) {
          navbar.classList.add('sticky');
          setFillerDivFlag(true);
        }
      } else {
        if (navbar.classList.contains('sticky')) {
          navbar.classList.remove('sticky');
          setFillerDivFlag(false);
        }
      }
    }

    const setFillerDivFlag = (flag: boolean) => {
      if (flag && !fillerDivFlag) {
        const fillerDiv = document.createElement('div');
        fillerDiv.style.height = '7vh';
        navbar.insertAdjacentElement('afterend', fillerDiv);
      } else if (!flag && fillerDivFlag) {
        const fillerDiv = navbar.nextElementSibling;
        fillerDiv.parentNode.removeChild(fillerDiv);
      }
      fillerDivFlag = flag;
    }


    window.addEventListener('scroll', () => { addOrRemoveSticky() })

    return window.removeEventListener('scroll', () => { addOrRemoveSticky() })

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