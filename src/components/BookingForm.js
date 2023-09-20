import React, { useState, useRef } from 'react'
import '../containers/appointment/appointment.css'

import { IoIosArrowDown } from 'react-icons/io'

export default function BookingForm() {
  const genderRef = useRef()
  const doctorRef = useRef()
  const departmentRef = useRef()

  const [formData, setFormData] = useState({
    fullName: '',
    gender: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    doctor: '',
    department: '',
    message: ''
  })

  // click outside the select box to close the select
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

//
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

  function handleSelectGender (id) {
    setGender(prevGender => {
      return prevGender.map(prevG => {
        if(prevG.id === id){
          setFormData(prev => {
            return {...prev, gender: !prevG.isSelected ? prevG.name : ''}
          })
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
          setFormData(prev => {
            return {...prev, doctor: !prevDoctors.isSelected ? prevDoctors.name : ''}
          })
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
          setFormData(prev => {
            return {...prev, department: !prevDepartment.isSelected ? prevDepartment.name : ''}
          })
          return {...prevDep, isSelected: !prevDep.isSelected}
        }else{
          return prevDep
        }
      })
    })
    setFormData(prev => {
      return {...prev, department: '' ? departments[id-1].name : ''}
    })
    setIsDepartmentOpen(false)
  }

  function handleSubmit(e) {
    e.preventDefault()
    if(formData.name !== '' && formData.phone !== '' && formData.date !== '' && formData.time !== ''){
      console.log(formData)
      alert(`your appointment has been booked properly on  ${formData.date} at  ${formData.time}`)
      window.location.reload()
    }else{
      alert('Please fill the required fields')
    }
  }


  return (


    <form className='homeForm' action="submit">
      
    <div className="fields">
      <input required type="text"
      placeholder='Name'
       value={formData.fullName !== '' ? formData.fullName : ''} 
       onChange={e => setFormData(prevData => {
        return {...prevData, fullName: e.target.value}
       })} />

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

      <input type="email" 
        required 
        placeholder='Email' 
        value={formData.email !== '' ? formData.email : ''} 
        onChange={e => setFormData(prevData => {
          return {...prevData, email: e.target.value}
         })} />
      <input type="number"
        required 
        placeholder='Phone'
        value={formData.phone !== '' ? formData.phone : ''} 
        onChange={e => setFormData(prevData => {
          return {...prevData, phone: e.target.value}
         })} />

      <div className="date">
        <div className="setdate">
          <p className="body2" >{formData.date !== '' ? formData.date : 'Date'}</p>
          <IoIosArrowDown />
        </div>
        <input 
          required
          onClick={e => e.target.showPicker()} 
          type='date' value={formData.date}
          onChange={e => setFormData(prevData => {
            return {...prevData, date: e.target.value}
           })}
          />
      </div>

      <div className="time">
        <div className="setdate">
          <p className="body2">{formData.time !== '' ? formData.time : 'Time'}</p>
          <IoIosArrowDown />
        </div>
        <input 
          required
          onClick={e => e.target.showPicker()} 
          type='time' value={formData.time} 
          onChange={e => setFormData(prevData => {
            return {...prevData, time: e.target.value}
           })}          />                  
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
    <textarea className='body2' 
      placeholder='Message' 
      onChange={e => {
        setFormData(prevData => {
        return {...prevData, message: e.target.value}
      })}} 
      />
    <button className='body2' type="submit" onClick={handleSubmit}>Submit</button>
    </form>
  
  )
}
