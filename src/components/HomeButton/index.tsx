import './index.css'
import { useEffect } from 'react';

type HomeButtonProps = {
  buttonText: string
}

const HomeButton = ({ buttonText }: HomeButtonProps) => {


  return (
    <div className='home-button-container fade-in'>
      <div className='home-button-text'>{buttonText}</div>
    </div>
  )
}

export default HomeButton;