import React, { useContext } from "react";

import { AiOutlineArrowRight } from 'react-icons/ai'
import { PiBandaidsLight } from 'react-icons/pi'
import { Link } from "react-router-dom";

import './components.css';import './components.css'

import { DataContext } from "../App";


export function SvCard({img, title, text, id}) {

const {setServiceId} = useContext(DataContext);


  return <div className="services-card">
              <div className="image">
                <img src={img} alt="services card" />
                <PiBandaidsLight className='icon' />
              </div>
              <div className="content">
                <h3 className="title">{title}</h3>
                <p className="body2">{text.slice(0, 90) + '...'}</p>
                <div className="more" onClick={() => setServiceId(id)} >
                  <Link to='/services-details'><p className="body2">Learn More</p></Link> 
                  <AiOutlineArrowRight />
                </div>
              </div>
            </div>;
}
  