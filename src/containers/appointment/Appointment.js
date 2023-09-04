import React, { useEffect, useState } from 'react'
import SubHeader from '../../components/SubHeader'
import './appointment.css'

import Map from '../../components/Map'
import header from '../../assets/appointment-header.jpeg'
import { PiPhoneCall } from 'react-icons/pi'
import { ContactSection } from '../../components/ContactSection'
import { IoIosArrowDown } from 'react-icons/io'

export default function Appointment() {

  const [selected, setSelected] = useState(false)

  const handleSelect = (id) => {

    doctors[id-1].isSelected = true;

  console.log(doctors)
}

  const gender = [
    {name: 'Male', id: 1, isSelected: false},
    {name: 'Female', id: 2, isSelected: false}
  ]

  const doctors = [
    {name: 'Doctor 1', id: 1, isSelected: false},
    {name: 'Doctor 2', id: 2, isSelected: false},
    {name: 'Doctor 3', id: 3, isSelected: false}
  ]

  const departments = [
    {name: 'Department 1', id: 1, isSelected: false},
    {name: 'Department 2', id: 2, isSelected: false},
    {name: 'Department 3', id: 3, isSelected: false}
  ]



  return (

    <div className='appointment-page'>
      <SubHeader img={header} subTitle='Home / Appointment' title='Book an Appointment'/>
      <div className="appointment-container padding">
        <div className="booking-container ">
          <div className="booking-left">
              <h2>Book an Appointment</h2>
              <p className='text body2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Convallis felis vitae tortor augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim et.</p>
              <form action="submit">
                <div className="fields">
                  <input type="text" placeholder='Name' />

                  <div className="select-box">
                    <p className="body2">Gender</p>
                      <div className='options'>
                      {gender.map((g, index) => (
                          <p className="body2"  onClick={(id) => handleSelect(id)} key={index} >{g.name}</p>
                        ))}
                      </div>
                  </div>

                  <input type="email" placeholder='Email' />
                  <input type="phone" placeholder='Phone' />

                  <div className="date">
                    <div className="setdate">
                      <p className="body2">Date</p>
                      <IoIosArrowDown />
                    </div>
                    <input type="date" />
                  </div>
                  <div className="time">
                    <div className="setdate">
                      <p className="body2">Time</p>
                      <IoIosArrowDown />
                    </div>
                    <input type="time" />
                  </div>

                  <div className="select-box">
                    <p className="body2">Dorctors</p>
                      <div className='options'>
                        {doctors.map((doctor) => (
                          <p className={doctor.isSelected ? "body2 active" : "body2"} onClick={() => handleSelect(doctor.id)} key={doctor.id} >{doctor.name}</p>
                        ))}
                      </div>
                  </div>

                  <div className="select-box">
                    <p className="body2">Departments</p>
                      <div className='options'>
                      {departments.map((dep, index) => (
                          <p className="body2" onClick={(id) => handleSelect(id)} key={index} >{dep.name}</p>
                        ))}
                      </div>
                  </div>
                </div>
                <textarea className='body2' placeholder='Message'></textarea>
                <button className='body2' type="submit">Submit</button>
              </form>
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
