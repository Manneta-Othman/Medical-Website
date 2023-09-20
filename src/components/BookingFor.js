import React, { useState, useRef } from 'react'
import '../containers/appointment/appointment.css'

import { IoIosArrowDown } from 'react-icons/io'  

export default function BookingFor() {
  const genderRef = useRef()
  const doctorRef = useRef()
  const departmentRef = useRef()

  window.addEventListener('click', (e) => {
    if(genderRef.current !== e.target){
      setIsGenderOpen(false)
    }
    if(doctorRef.current !== e.target){
      setIsDoctorsOpen(false)
    }
    if(departmentRef.current !== e.target){
      setIsDepartmentOpen(false)
    }
  })


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

  function handleSubmit(e) {
    e.preventDefault()
    alert(`your appointment has been booked properly on  ${date} at  ${time}`)
    window.location.reload()
  }

  return (


    <form className='homeForm' action="submit">
      
    <div className="fields">
      <input required type="text" placeholder='Name' />

      <div className={ isGenderOpen ? 'select-box show' : 'select-box'} 
        onClick={() => {
          setIsGenderOpen( prev => !prev)
            setIsDoctorsOpen(false)
            setIsDepartmentOpen(false)
          }}
          ref={genderRef}
          >
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

      <input required type="email" placeholder='Email' />
      <input required type="phone" placeholder='Phone' />

      <div className="date">
        <div className="setdate">
          <p className="body2" >{date}</p>
          <IoIosArrowDown />
        </div>
        <input 
          required
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
          required
          onClick={e => e.target.showPicker()} 
          type='time' value={time} 
          onChange={e => setTime(e.target.value)}
          />                  
      </div>

      <div className={ isDoctorsOpen ? 'select-box show' : 'select-box'}
         onClick={() => {
            setIsDoctorsOpen( prev => !prev)
            setIsGenderOpen(false)
            setIsDepartmentOpen(false)
          }}
          ref={doctorRef}
          >
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
        }}
        ref={departmentRef}
        >
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
    <button className='body2' type="submit" onClick={handleSubmit}>Submit</button>
  </form>
  
  )
}
