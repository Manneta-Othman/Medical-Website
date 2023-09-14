import React from "react";

import { Link } from 'react-router-dom'
import '../home.css';
import Heading from "./Heading";
import { AiOutlineArrowRight } from 'react-icons/ai';
import welcome from '../assets/welcome.png'


export function Welcome() {

  return(
    <>
    <div className="welcome">
          <div className="content">
            <Heading title='A Great Place to Receive Care' subHeading='Welcome to Meddical' />
            <p className='body2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Convallis felis vitae tortor augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim et.</p>
            <div className="more">
              <p className="body2"><Link to='/about'>Learn More</Link></p>
              <AiOutlineArrowRight />
            </div>
          </div>
          <div className="image">
            <img src={welcome} alt="welcome" />
          </div>
        </div>
    </>
    ) 
}
  