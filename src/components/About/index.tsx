import './index.css'
import selfie from '../../assets/IMG_4439.jpeg'

const About = () => {

  return (
    <div>
      <div className="about-container">
        <body className='body-container'>

          <p className='body-paragraph'>I am a Vietnamese-American Software Engineer with a passion for all things code related.  My specific interest in web development started during COVID. Despite being a finance major during my undergraduate studies, I took on coding as a way to destress and quickly found myself practicing more and more. Over the course of several months I taught myself Javascript, HTML, and CSS. Then, I used those skills to build my own responsive websites. What originated as a hobby to pass the time eventually developed into a newfound passion that I decided to change the course of my professional career to pursue.</p>

          <p className='body-paragraph'>My passion for web development and being displaced from college led me to enroll in Hack Reactor, the nations leading coding boot camp, where I learned the ins and outs of web development and honed the finer points of my craft.  During my time at Hack Reactor I worked with React, Redux, and Node.js.  These technologies gave me the resources needed to build full-scale modern websites with working back-end components.</p>

          <p className='body-paragraph'>Soon after, I began my career as a full-stack software engineer with NomiSo, a software consulting firm.  There, I built clean interactive web applications using React, Typescript, HTML, and CSS.  During my time with NomiSo I picked up React Native, allowing me to move into mobile development.</p>

          <p className='body-paragraph'>Outside of work I enjoy working on personal projects, working out, spending quality time with my friends and family, and exploring the city of Chicago.  I am currently looking for new opportunities and would love to hear from you!</p>

        </body>
        <div className='image-container'>
          <img src={selfie} className='image' />
        </div>
      </div>
    </div>
  )
}

export default About;