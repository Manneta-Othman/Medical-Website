import React, { useContext } from 'react'

import SubHeader from './SubHeader';

import {IoBandageOutline} from 'react-icons/io5';
import {TbHeartPlus} from 'react-icons/tb';
import {LiaBriefcaseMedicalSolid} from 'react-icons/lia';
import {MdOutlineBloodtype} from 'react-icons/md';
import {GiMedicalPackAlt} from 'react-icons/gi';

import services1 from '../assets/services1.jpeg';


import { DataContext } from "../App";
import { Doctors } from './Doctors';
import { ContactSection } from './ContactSection';

export default function SvDetails() {

    const {services, serviceId} = useContext(DataContext);


  return (
    <div className='sv-details'>
        <SubHeader img={services1} subTitle='Home / Services' title='Our Services' />
        
        <div className="services-row padding">
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
              <div className="row blood-bank">
                <GiMedicalPackAlt className='icon' />
                <p className="body2">Dermalogy</p>
              </div>
              <div className="row blood-bank">
                <GiMedicalPackAlt className='icon' />
                <p className="body2">Orthopedic</p>
              </div>
            </div>
          </div>

          <div className="services-center">
            <div className="image">
                <img src={services1} alt="services" />
            </div>
            <p className='title'>{services && services[serviceId -1].title}</p>
            <div className="goals">
              <li className='body1'><div className='dot' /> A Passion for Healing</li>
              <li className='body1'><div className='dot' /> 5-Star Care</li>
              <li className='body1'><div className='dot' /> All our best</li>
              <li className='body1'><div className='dot' /> Believe in Us</li>
              <li className='body1'><div className='dot' /> A Legacy of Excellence</li>
              <li className='body1'><div className='dot' /> Always Caring</li>
            </div>
            <p className="body2">{services && services[serviceId -1].text}</p><br />
            <p className="body2">{services && services[serviceId -1].text}</p>
          </div>

        </div>
        
        <Doctors />
        <ContactSection />

    </div>
  )
}
