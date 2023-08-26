import React from "react";

import Heading from "./Heading";
import {IoBandageOutline} from 'react-icons/io5';
import {TbHeartPlus} from 'react-icons/tb';
import {LiaBriefcaseMedicalSolid} from 'react-icons/lia';
import {MdOutlineBloodtype} from 'react-icons/md';

import services1 from '../assets/services1.png';
import services2 from '../assets/services2.png';

export function Services() {
  return <section className="services">
        <Heading title='Our Services' subHeading='Care you can believe in' />

        <div className="services-row">
          <div className="services-left">
            <div className='top'>
              <div className="row free-checkup">
                <IoBandageOutline className='icon' />
                <p className="body2">Free Checkup</p>
              </div>
              <div className="row cardiogram">
                <TbHeartPlus className='icon' />
                <p className="body2">Cardiogram</p>
              </div>
              <div className="row dna-testing">
                <LiaBriefcaseMedicalSolid className='icon' />
                <p className="body2">dna testing</p>
              </div>
              <div className="row blood-bank">
                <MdOutlineBloodtype className='icon' />
                <p className="body2">blood bank</p>
              </div>
            </div>
            <p className="view-all small">View</p>
          </div>

          <div className="services-center">
            <p className='title'>A passion for putting patients first.</p>
            <div className="goals">
              <li className='body1'><div className='dot' /> A Passion for Healing</li>
              <li className='body1'><div className='dot' /> 5-Star Care</li>
              <li className='body1'><div className='dot' /> All our best</li>
              <li className='body1'><div className='dot' /> Believe in Us</li>
              <li className='body1'><div className='dot' /> A Legacy of Excellence</li>
              <li className='body1'><div className='dot' /> Always Caring</li>
            </div>
            <p className="body2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Quisque placerat scelerisque tortor ornare ornare Convallis felis vitae tortor augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim et.</p><br />
            <p className="body2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque. Convallis felis vitae tortor augue. Velit nascetur proin massa in.</p>
          </div>
          <div className="services-right">
            <img src={services1} alt="services" />
            <img src={services2} alt="services" />
          </div>

        </div>
      </section>;
}
  