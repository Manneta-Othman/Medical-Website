import { Testimonials } from '../../components/Testimonials';
import './about.css'


import React from 'react'
import SubHeader from '../../components/SubHeader'
import aboutHeader from '../../assets/welcome.png'
import Heading from '../../components/Heading'
import aboutWelcomeImg from '../../assets/about-welcome.png'

import {Doctors} from '../../components/Doctors'
import SmCard from '../../components/SmCard'
import {ContactSection} from '../../components/ContactSection'



export default function AboutPage() {
  return (
    <div className='about-page'>

      {/* About - Welcome Section */}
      <SubHeader img={aboutHeader} subTitle='Home / About' title='About us' />
      <div className="about-welcome padding">
        <div className="about-left">
          <img src={aboutWelcomeImg} alt="welcome" />
        </div>
        <div className="about-right">
          <div className="welcome-component">
            <Heading title='Best Care for Your Good Health' subHeading='Welcome to Hospital name' />
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
        </div>
      </div>

      {/* About - Testomonials */}
      <Testimonials />

      {/* Our Doctors */}

      <Doctors />

      {/* News */}
      <section className="news">
        <SmCard />
      </section>

      {/* Contact */}

      <ContactSection />

    </div>
  )
}
