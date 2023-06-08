import './index.css'
import SassLogo from '../../../assets/Sass-01.png'

const Sass = () => {
  return (
    <div className='sass-container'>
      <div className='white-circle'>
        <img src={SassLogo} className='logo' />
      </div>
      <label className='label'>Sass</label>
    </div>
  )
}

export default Sass