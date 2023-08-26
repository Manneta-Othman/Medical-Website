import React from "react";

import {BsSendFill} from 'react-icons/bs'
import {BiLogoLinkedin} from 'react-icons/bi'
import {FaFacebookF, FaInstagram} from 'react-icons/fa'


export function Footer() {
  return (
    <footer>
        <div className="container padding">
          <div className="footer-top">
            <div className="col logo">
              <h1>Meddical</h1>
              <p className="body2">Leading the Way in Medical <br /> Execellence, Trusted Care.</p>
            </div>
            <div className="col links">
              <p className="body1">Important Links</p>
              <p className="body2">Appointment</p>
              <p className="body2">Doctors</p>
              <p className="body2">Services</p>
              <p className="body2">About Us</p>

            </div>
            <div className="col contact">
              <p className="body1">Contact Us</p>
              <p className="body2">Call: (237) 681-812-255</p>
              <p className="body2">Email: fildineesoe@gmail.com</p>
              <p className="body2">Email: fildineesoe@gmail.com</p>
              <p className="body2">Some country</p>
            </div>
            <div className="col newsletter">
              <p className="body1">Newsletter</p>
              <div className="email">
              <input type="email" placeholder='Enter your email address' className='body2' />
              <BsSendFill className='icon' />
              </div>
            </div>
          </div>

          <div className="line"></div>

          <div className="footer-bottom">
            <p className='body2'> © 2021 Hospital’s name All Rights Reserved by PNTEC-LTD </p>
            <div className="social-media">
              <BiLogoLinkedin className='icon' />
              <FaFacebookF className='icon' />
              <FaInstagram className='icon' />
            </div>
          </div>
        </div>
      </footer>
  );
}
  