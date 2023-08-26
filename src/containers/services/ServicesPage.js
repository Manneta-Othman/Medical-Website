import { SvCard } from '../../components/SvCard';

import './services.css'

import React, { useContext } from 'react'

import SubHeader  from '../../components/SubHeader'
import servicesSubHeader from '../../assets/services-header.jpeg'


import { DataContext } from "../../App";
import { ContactSection } from '../../components/ContactSection';


export default function ServicesPage() {

  const {services} = useContext(DataContext);


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
