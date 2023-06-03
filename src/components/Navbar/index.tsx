import './index.css'

const Navbar = () => {
  return (
    <div className='navbar-container'>
      <div className='navbar-link' onClick={() =>  window.scrollTo({ top: 0, behavior: 'smooth' })}>Home</div>
      <div className='navbar-link' onClick={() =>  window.scrollTo({ top: 725, behavior: 'smooth' })}>About</div>
      <div className='navbar-link' onClick={() =>  window.scrollTo({ top: 1275, behavior: 'smooth' })}>Projects</div>
      <div className='navbar-link' onClick={() =>  window.scrollTo({ top: 1827, behavior: 'smooth' })}>Contact</div>
    </div>
  )
}

export default Navbar;