import React, { useState } from 'react'
import SubHeader from '../../components/SubHeader'
import './appointment.css'

import Map from '../../components/Map'
import header from '../../assets/appointment-header.jpeg'
import { PiPhoneCall } from 'react-icons/pi'
import { ContactSection } from '../../components/ContactSection'
import { IoIosArrowDown } from 'react-icons/io'

export default function Appointment() {


  const [gender, setGender] = useState([
    {name: 'Male', id: 1, isSelected: false},
    {name: 'Female', id: 2, isSelected: false}
  ])

  const [doctors, setDoctors] = useState([
    {name: 'Doctor 1', id: 1, isSelected: false},
    {name: 'Doctor 2', id: 2, isSelected: false},
    {name: 'Doctor 3', id: 3, isSelected: false}
  ])

  const [departments, setDepartments] = useState([
    {name: 'Department 1', id: 1, isSelected: false},
    {name: 'Department 2', id: 2, isSelected: false},
    {name: 'Department 3', id: 3, isSelected: false}
  ])

  const [isGenderOpen, setIsGenderOpen] = useState(false)
  const [isDoctorsOpen, setIsDoctorsOpen] = useState(false)
  const [isDepartmentOpen, setIsDepartmentOpen] = useState(false)

  const [date, setDate] = useState('data')
  const [time, setTime] = useState('Time')

  function handleSelectGender(id) {
    setGender(prevGender => {
      return prevGender.map(prevG => {
        if(prevG.id === id){
          return {...prevG, isSelected: !prevG.isSelected}
        }else{
          return prevG
        }
      })
    })
    setIsGenderOpen(false)
  }

  function handleSelectDoctors(id) {
    setDoctors(prevDoctors => {
      return prevDoctors.map(prevD => {
        if(prevD.id === id){
          return {...prevD, isSelected: !prevD.isSelected}
        }else{
          return prevD
        }
      })
    })
    setIsDoctorsOpen(false)
  }

  function handleSelectDepartment(id) {
    setDepartments(prevDepartment => {
      return prevDepartment.map(prevDep => {
        if(prevDep.id === id){
          return {...prevDep, isSelected: !prevDep.isSelected}
        }else{
          return prevDep
        }
      })
    })
    setIsDepartmentOpen(false)
  }



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

                  <div className={ isGenderOpen ? 'select-box show' : 'select-box'} 
                    onClick={() => {
                      setIsGenderOpen( prev => !prev)
                        setIsDoctorsOpen(false)
                        setIsDepartmentOpen(false)
                      }}>
                    <p className="body2">Gender</p>
                      <div className='options'>
                      {gender.map((g, index) => (
                          <p className={ g.isSelected ? "body2 selected" : "body2"}
                            onClick={() => {
                              handleSelectGender(g.id)
                              setIsGenderOpen( prev => !prev)
                            }} 
                            key={index} 
                          >{g.name}</p>
                        ))}
                      </div>
                  </div>

                  <input type="email" placeholder='Email' />
                  <input type="phone" placeholder='Phone' />

                  <div className="date">
                    <div className="setdate">
                      <p className="body2" >{date}</p>
                      <IoIosArrowDown />
                    </div>
                    <input 
                      onClick={e => e.target.showPicker()} 
                      type='date' value={date} 
                      onChange={e => setDate(e.target.value)}
                      />
                  </div>

                  <div className="time">
                    <div className="setdate">
                      <p className="body2">{time}</p>
                      <IoIosArrowDown />
                    </div>
                    <input 
                      onClick={e => e.target.showPicker()} 
                      type='time' value={date} 
                      onChange={e => setTime(e.target.value)}
                      />                  
                  </div>

                  <div className={ isDoctorsOpen ? 'select-box show' : 'select-box'}
                     onClick={() => {
                        setIsDoctorsOpen( prev => !prev)
                        setIsGenderOpen(false)
                        setIsDepartmentOpen(false)
                      }}>
                    <p className="body2">Dorctors</p>
                      <div className='options'>
                        {doctors.map((doctor, index) => (
                          <p className={ doctor.isSelected ? "body2 selected" : "body2"}
                            onClick={() => {
                              handleSelectDoctors(doctor.id)
                              setIsDoctorsOpen( prev => !prev)
                              }}
                              key={index}
                           >{doctor.name}</p>
                        ))}
                      </div>
                  </div>

                  <div className={ isDepartmentOpen ? 'select-box show' : 'select-box'} 
                    onClick={() => {
                      setIsDepartmentOpen( prev => !prev)
                      setIsGenderOpen(false)
                      setIsDoctorsOpen(false)
                    }}>
                    <p className="body2">Departments</p>
                      <div className='options'>
                      {departments.map((dep, index) => (
                          <p className={ dep.isSelected ? "body2 selected" : "body2"}
                          onClick={() => {
                            handleSelectDepartment(dep.id)
                            setIsDepartmentOpen( prev => !prev)
                            }}
                            key={index}  
                          >{dep.name}</p>
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
