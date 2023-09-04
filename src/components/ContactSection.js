import React from "react";

import Heading from "./Heading";

import {LiaPhoneVolumeSolid} from 'react-icons/lia'
import {CiMail} from 'react-icons/ci'
import {BsClock} from 'react-icons/bs'
import {HiOutlineMapPin} from 'react-icons/hi2'


export function ContactSection() {

  return(
  
  <section className="contact">
        <Heading title='Contact' subHeading='Get in touch' />

        <div className="container">
            <div className="col emergency">
              <LiaPhoneVolumeSolid className='icon' />
              <p className="caption">Emergency</p>
              <p className="small">(237) 681-812-255</p>
              <p className="small">(237) 666-331-894</p>
            </div>
            <div className="col location">
              <HiOutlineMapPin className='icon' />
              <p className="caption">Location</p>
              <p className="small">0123 Some place</p>
              <p className="small">9876 Some country</p>
            </div>
            <div className="col email">
              <CiMail className='icon' />
              <p className="caption">Email</p>
              <p className="small">fildineeesoe@gmil.com</p>
              <p className="small">myebstudios@gmail.com</p>
            </div>
            <div className="col working-time">
              <BsClock className='icon' />
              <p className="caption">Working Hours</p>
              <p className="small">Mon-Sat 09:00-20:00</p>
              <p className="small">Sunday Emergency only</p>
            </div>
        </div>
      </section>
  )
}
  