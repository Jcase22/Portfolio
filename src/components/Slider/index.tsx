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
import Mongo from '../LogoComponents/Mongo';

const Slider = () => {

  return (
    <div className='slider-container'>
      <Marquee speed={50}>
        <Javascript />
        <Typescript />
        <React />
        <Html />
        <Css />
        <Node />
        <MySql />
        <Mongo />
        <Sass />
        <Javascript />
        <Typescript />
        <React />
        <Html />
        <Css />
        <Node />
        <MySql />
        <Mongo />
        <Sass />
      </Marquee>
    </div>
  )
}
export default Slider