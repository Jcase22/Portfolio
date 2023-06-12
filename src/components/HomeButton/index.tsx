import './index.css'

type HomeButtonProps = {
  buttonText: string
}

const HomeButton = ({ buttonText }: HomeButtonProps) => {

  const clickBehavior = () => {
    if (buttonText === 'About Me') {
      return () => window.scrollTo({ top: 725, behavior: 'smooth' })
    } else {
      return () => window.scrollTo({ top: 2297, behavior: 'smooth' })
    }
  }

  return (
    <div className='home-button-container fade-in' onClick={clickBehavior()}>
      <div className='home-button-text'>{buttonText}</div>
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="14" className="arrow"><path fill="none" fill-rule="evenodd" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 7h16M11 1l6 6-6 6"></path></svg>
    </div>
  )
}

export default HomeButton;