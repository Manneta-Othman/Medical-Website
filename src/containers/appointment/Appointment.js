import React from 'react'
import SubHeader from '../../components/SubHeader'
import './appointment.css'

import Map from '../../components/Map'
import header from '../../assets/appointment-header.jpeg'
import { PiPhoneCall } from 'react-icons/pi'
import { ContactSection } from '../../components/ContactSection'
import BookingForm from '../../components/BookingForm'

export default function Appointment() {


  return (

    <div className='appointment-page'>
      <SubHeader img={header} subTitle='Home / Appointment' title='Book an Appointment'/>
      <div className="appointment-container padding">
        <div className="booking-container ">
          <div className="booking-left">
              <h2>Book an Appointment</h2>
              <p className='text body2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Convallis felis vitae tortor augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim et.</p>
              <BookingForm />
          </div>
          <div className="booking-right">
            <div className="work-time">
              <h1>Shedule hours</h1>
              <div className="days">
                <div className="day">
                  <p className="body1">Monday</p>
                  <span></span>
                  <p className="body1">09:00 AM - 07:00 PM</p>
                </div>
                <div className="day">
                  <p className="body1">Tuesday</p>
                  <span></span>
                  <p className="body1">09:00 AM - 07:00 PM</p>
                </div>
                <div className="day">
                  <p className="body1">Wednesday</p>
                  <span></span>
                  <p className="body1">09:00 AM - 07:00 PM</p>
                </div>
                <div className="day">
                  <p className="body1">Thursday</p>
                  <span></span>
                  <p className="body1">09:00 AM - 07:00 PM</p>
                </div>
                <div className="day">
                  <p className="body1">Friday</p>
                  <span></span>
                  <p className="body1">09:00 AM - 07:00 PM</p>
                </div>
                <div className="day">
                  <p className="body1">Saturday</p>
                  <span></span>
                  <p className="body1">09:00 AM - 07:00 PM</p>
                </div>
                <div className="day">
                  <p className="body1">Sunday</p>
                  <span></span>
                  <p className="body1">Close</p>
                </div>
              </div>
              <div className="line"></div>
              <div className="emergency">
                <div className="icon"> <PiPhoneCall className='phone-icon'/> </div>
                <div className="content">
                  <p className="title">Emergency</p>
                  <p className="title">(237) 681-812-255</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Map />
        <ContactSection />
      </div>
    </div>


  )
}
