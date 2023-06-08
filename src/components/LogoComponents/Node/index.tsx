import './index.css'
import NodeLogo from '../../../assets/Node-JS-02.png'

const Node = () => {
  return (
    <div className='nodejs-container'>
      <div className='white-circle'>
        <img src={NodeLogo} className='logo' />
      </div>
      <label className='label'>Node</label>
    </div>
  )
}

export default Node