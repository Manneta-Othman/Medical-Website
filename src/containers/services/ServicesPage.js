import { SvCard } from '../../components/SvCard';

import './services.css'

import React, { useState, useEffect } from 'react'

import SubHeader  from '../../components/SubHeader'
import servicesSubHeader from '../../assets/services-header.jpeg'

import { ContactSection } from '../../components/ContactSection';


export default function ServicesPage() {

  const [services, setServices] = useState([]);

  const getData = () => {
    fetch('data.json', {headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }}).then((res) => {
      return res.json();
    }).then((data) => {
      setServices(data.services);
    }).catch(() => {
      console.log("couldn't fetch data")
    })
  }

  useEffect(() => {
    getData();
  }, []);


  return (
    <div className='services-page'>
      <SubHeader img={servicesSubHeader} subTitle='Home / Services' title='Our Services' />
          <div className="services-cards padding">
            {services && services.map((card) => (
              <SvCard 
              img={card.img} 
              title={card.title} 
              text={card.text} 
              id={card.id}
              key={card.id}
              />
            ))}
        </div>
      <ContactSection />
    </div>
  )
}
