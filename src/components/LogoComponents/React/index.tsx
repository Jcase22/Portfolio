import './index.css'
import ReactLogo from '../../../assets/React-01.png'

const React = () => {
  return (
    <div className='react-container'>
      <div className='white-circle'>
        <img src={ReactLogo} className='logo' />
      </div>
      <label className='label'>React</label>
    </div>
  )
}

export default React