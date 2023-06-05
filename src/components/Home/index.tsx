/* eslint-disable */
import { useCallback } from "react";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import './index.css'

const Home = () => {

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  const options = {
    fullScreen: false,
    background: {
      color: {
        value: "#22577a",
      },
    },
    fpsLimit: 75,
    particles: {
      color: {
        value: "#fbfff1",
      },
      collisions: {
        enable: true,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: false,
        speed: .7,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 36,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 5 },
      },
    },
    detectRetina: true,
  }

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    await console.log(container);
  }, []);


  return (
    <div className='home-container'>
      <Particles
        className='particle'
        init={particlesInit}
        loaded={particlesLoaded}
        options={options as any}
      />
      <div className='title-container'>
        <div className='main-title-container'>
          <h1 className='main-title'>Hello, I'm&nbsp;</h1>
          <h1 className='main-title-name'>Justin Case</h1>
        </div>
        {window.innerWidth <= 645 ?
          null
          :
          (<h3 className='subtitle'>I'm a software engineer</h3>)
        }
      </div>
    </div>
  )
}

export default Home