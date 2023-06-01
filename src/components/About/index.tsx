import './index.css'
import selfie from '../../assets/IMG_4439.jpeg'

const About = () => {

  return (
    <div>
      <h1 className='about-title'>
        About
      </h1>
      <div className="about-container">
        <div className='body-container'>

          <div className='body-paragraph'>My name is Justin Case and I am a fullstack software engineer. I have been building websites for three years and enjoy working on them both professionally and as a hobby.  My interest in development began during COVID where my course as a finance student was altered and I began learning to code as a way to destress.  Over the course of several months I learned Javascript, HTML, and CSS and soon after began building my own responsive websites.</div>

          <div className='body-paragraph'>My passion for web development led me to enroll in Hack Reactor, the nations leading coding boot camp, where I learned the ins and out of web development and honed the finer points of my craft.  During my time at Hack Reactor I worked with React, Redux, and Node.js.  These technologies gave me the resources needed to build full-scale modern websites with working back-end components.</div>

          <div className='body-paragraph'>Soon after, I began my career as a full-stack software engineer with NomiSo, a software consulting firm.  There, I built clean interactive web applications using React, Typescript, HTML, and CSS.  During my time with NomiSo I picked up React Native, allowing me move into mobile development.</div>

          <div className='body-paragraph'>Outside of work I enjoy working on personal projects, working out, spending quality time with my friends and family, and exploring the city of Chicago.  I am currently looking for new opportunities and would love to hear from you!</div>

        </div>
        <div className='image-container'>
          <img src={selfie} className='image' />
        </div>
      </div>
    </div>
  )
}

export default About;