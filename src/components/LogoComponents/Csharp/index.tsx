import './index.css'
import CsharpLogo from '../../../assets/Csharp-logo.png'

const Csharp = () => {
  return (
    <div className='csharp-container'>
      <div className='white-circle'>
        <img src={CsharpLogo} className='logo' />
      </div>
      <label className='label'>C#</label>
    </div>
  )
}

export default Csharp