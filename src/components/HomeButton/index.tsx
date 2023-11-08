import './index.css'
import {useEffect, useState} from 'react'

type HomeButtonProps = {
  buttonText: string
}

const HomeButton = ({ buttonText }: HomeButtonProps) => {

  const [contactHeight, setContactHeight] = useState(0)
  const [aboutHeight, setAboutHeight] = useState(0)

  useEffect(() => {
    const contactElement = document.getElementsByClassName('contact-form-container')
    const aboutElement = document.getElementsByClassName('about-container')

    setContactHeight(window.pageYOffset + contactElement[0].getBoundingClientRect().top)
    setAboutHeight(window.pageYOffset + aboutElement[0].getBoundingClientRect().top - 50)
  }, [])


  const clickBehavior = () => {
    if (buttonText === 'About Me') {
      return () => window.scrollTo({ top: aboutHeight, behavior: 'smooth' })
    } else {
      return () => window.scrollTo({ top: contactHeight, behavior: 'smooth' })
    }
  }

  return (
    <div className='home-button-container fade-in' onClick={clickBehavior()}>
      <div className='home-button-text'>{buttonText}</div>
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="14" className="arrow"><path fill="none" fillRule="evenodd" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 7h16M11 1l6 6-6 6"></path></svg>
    </div>
  )
}

export default HomeButton;