import React from "react";
import './components.css';

import {BsHeartPulse} from 'react-icons/bs';

  function SpecialtiesContainer() {

    const specialties = [
      {title: 'Neurology'},
      {title: 'Bones'},
      {title: 'Oncology'},
      {title: 'Otorhinolaryngology'},
      {title: 'Ophthalmology'},
      {title: 'Cardiovascular'},
      {title: 'Pulmonology'},
      {title: 'Renal Medicine'},
      {title: 'Gastroenterology'},
      {title: 'Urology'},
      {title: 'Dermatology'},
      {title: 'Gynaecology'}
    ]

      return (
      <div className="specialties-container">
        {
          specialties.map((specialty) => (

            <div className="specialty">
              <BsHeartPulse className='icon' />
              <p className="body2">{specialty.title}</p>
          </div>

          ))
        }

        </div>
        );
    }
  
    export default SpecialtiesContainer;