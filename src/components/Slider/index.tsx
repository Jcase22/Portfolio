import './index.css'
import Marquee from 'react-fast-marquee';
import Javascript from '../LogoComponents/Javascript';
import Typescript from '../LogoComponents/Typescript';
import React from '../LogoComponents/React';
import Html from '../LogoComponents/Html';
import Css from '../LogoComponents/Css';
import Node from '../LogoComponents/Node';
import MySql from '../LogoComponents/MySql';
import Sass from '../LogoComponents/Sass';

const Slider = () => {

  return (
    <div className='slider-container'>
      <Marquee>
        <Javascript />
        <Typescript />
        <React />
        <Html />
        <Css />
        <Node />
        <MySql />
        <Sass />
      </Marquee>
    </div>
  )
}
export default Slider