import './index.css'
import HtmlLogo from '../../../assets/HTML-5-logo-vector-01.png'

const Html = () => {
  return (
    <div className='html-container'>
      <div className='white-circle'>
        <img src={HtmlLogo} className='logo' />
      </div>
      <label className='label'>HTML</label>
    </div>
  )
}

export default Html