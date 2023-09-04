import React, { useContext } from "react";

import { AiOutlineArrowRight } from 'react-icons/ai'
import { PiBandaidsLight } from 'react-icons/pi'
import { Link } from "react-router-dom";

import './components.css';import './components.css'



export function SvCard({img, title, text, id}) {

  return <div className="services-card">
              <div className="image">
                <img src={img} alt="services card" />
                <PiBandaidsLight className='icon' />
              </div>
              <div className="content">
                <h3 className="title">{title}</h3>
                <p className="body2">{text.slice(0, 90) + '...'}</p>
                <div className="more">
                  <Link to={`/services/${id}`} ><p className="body2">Learn More</p></Link> 
                  <AiOutlineArrowRight />
                </div>
              </div>
            </div>;
}
  