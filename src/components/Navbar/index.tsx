import './index.css'
import { useEffect, useState } from 'react';

const Navbar = () => {

  const [contactHeight, setContactHeight] = useState(0)
  const [timelineHeight, setTimelineHeight] = useState(0)
  const [aboutHeight, setAboutHeight] = useState(0)


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
        if (navbar?.classList.contains('sticky')) {
          navbar.classList.remove('sticky');
          setFillerDivFlag(false);
        }
      }
    }

    const setFillerDivFlag = (flag: boolean) => {
      if (flag && !fillerDivFlag) {
        const fillerDiv = document.createElement('div');
        fillerDiv.style.height = '7vh';
        navbar?.insertAdjacentElement('afterend', fillerDiv);
      } else if (!flag && fillerDivFlag) {
        const fillerDiv = navbar?.nextElementSibling;
        fillerDiv?.parentNode?.removeChild(fillerDiv);
      }
      fillerDivFlag = flag;
    }


    window.addEventListener('scroll', () => { addOrRemoveSticky() })

    return window.removeEventListener('scroll', () => { addOrRemoveSticky() })

  }, [])

  useEffect(() => {
    const contactElement = document.getElementsByClassName('contact-form-container')
    const timelineElement = document.getElementsByClassName('timeline-container')
    const aboutElement = document.getElementsByClassName('about-container')

    setContactHeight(window.pageYOffset + contactElement[0].getBoundingClientRect().top)
    setTimelineHeight(window.pageYOffset + timelineElement[0].getBoundingClientRect().top - 35)
    setAboutHeight(window.pageYOffset + aboutElement[0].getBoundingClientRect().top - 50)
  }, [])

  return (
    <>
      <div id='navbar-container'>
        <div className='link-container'>
          <div className='navbar-link' onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Home</div>
          <div className='navbar-link' onClick={() => window.scrollTo({ top: aboutHeight, behavior: 'smooth' })}>About</div>
          <div className='navbar-link' onClick={() => window.scrollTo({ top: timelineHeight, behavior: 'smooth' })}>Timeline</div>
          <div className='navbar-link' onClick={() => window.scrollTo({ top: contactHeight, behavior: 'smooth' })}>Contact</div>
        </div>
      </div>
    </>
  )
}

export default Navbar;