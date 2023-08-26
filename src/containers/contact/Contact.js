import './contact.css'

import React from 'react'

import Map from '../../components/Map'
import SubHeader from '../../components/SubHeader'
import contactHeader from '../../assets/contact-header.png'
import Heading from '../../components/Heading'
import { ContactSection } from '../../components/ContactSection'
import SmCard from '../../components/SmCard'


export default function Contact() {
  return (
    <div className='contact-page'>
      <SubHeader img={contactHeader} subTitle='Home / Contact' title='Our Contact' />

      <div className=".contact-page-container padding">
        <Map />
        <div className="contact-wrapper">
          <div className="form">
            <Heading title='Contact' subHeading='Get in touch' />

            <form action="submit">
              <div className="name-email">
                <input id='name' type="text" placeholder='Name' className='body2' />
                <input type="email" placeholder='Email' className='body2' />
              </div>
              <input type="text" placeholder='Subject' className='body2' />
              <textarea placeholder='Message' className='body2' ></textarea>
              <button type="submit">Submit</button>
            </form>

          </div>
          <div className="contact-section">
            <ContactSection />
          </div>
        </div>
          <SmCard />
      </div>
      
      
    </div>
  )
}
