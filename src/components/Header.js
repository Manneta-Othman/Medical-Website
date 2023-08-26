import React from "react";

import '../home.css';
import Heading from "../components/Heading";

import calendar from '../assets/calendar.svg';
import team from '../assets/team.svg';
import cash from '../assets/cash.svg';

export function Header() {
  return <div className="header">
        <div className="image">
          <div className="circle"></div>
        </div>
        <div className="content">
          <Heading subHeading='Caring for Life' />
          <h1>Leading the Way in Medical Excellence</h1>
          <div className="btn">Our Services</div>
        </div>
        <div className="header-boxes">
          <div className="col cal">
            <p className="body2">Book an Appointment</p>
            <img src={calendar} alt="calendar" className='icon' />
          </div>
          <div className="col team">
            <p className="body2">Book an Appointment</p>
            <img src={team} alt="team" className='icon' />
          </div>
          <div className="col cash">
            <p className="body2">Book an Appointment</p>
            <img src={cash} alt="cash" className='icon' />
          </div>
        </div>
      </div>
}
  