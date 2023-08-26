import React from "react";
import './components.css';

import {BsHeartPulse} from 'react-icons/bs';

  function SpecialtiesContainer() {

    const specialties = [
      {title: 'Neurology', id: 0},
      {title: 'Bones', id: 1},
      {title: 'Oncology', id: 2},
      {title: 'Otorhinolaryngology', id: 3},
      {title: 'Ophthalmology', id: 4},
      {title: 'Cardiovascular', id: 5},
      {title: 'Pulmonology', id: 6},
      {title: 'Renal Medicine', id: 7},
      {title: 'Gastroenterology', id: 8},
      {title: 'Urology', id: 9},
      {title: 'Dermatology', id: 10},
      {title: 'Gynaecology', id: 11}
    ]

      return (
      <div className="specialties-container">
        {
          specialties.map((specialty) => (

            <div className="specialty" key={specialties.id}>
              <BsHeartPulse className='icon' />
              <p className="body2">{specialty.title}</p>
          </div>

          ))
        }

        </div>
        );
    }
  
    export default SpecialtiesContainer;