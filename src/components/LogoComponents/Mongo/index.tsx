import './index.css'
import MongoLogo from '../../../assets/MongoDB.png'

const Mongo = () => {
  return (
    <div className='mongo-container'>
      <div className='white-circle'>
        <img src={MongoLogo} className='logo' />
      </div>
      <label className='label'>MongoDB</label>
    </div>
  )
}

export default Mongo