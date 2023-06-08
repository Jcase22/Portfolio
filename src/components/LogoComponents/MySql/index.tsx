import './index.css'
import MySqlLogo from '../../../assets/MySQL-01.png'

const MySql = () => {
  return (
    <div className='mysql-container'>
      <div className='white-circle'>
        <img src={MySqlLogo} className='logo' />
      </div>
      <label className='label'>MySql</label>
    </div>
  )
}

export default MySql