import { ContactSection } from './components/ContactSection';
import { Doctors } from './components/Doctors';
import { Booking } from './components/Booking';
import { Services } from './components/Services';
import { Welcome } from './components/Welcome';
import { Header } from './components/Header';
import './home.css'

import React from 'react'
import Heading from './components/Heading';
import SpecialtiesContainer from './components/SpecialtiesContainer';

import SmCard from './components/SmCard';


export default function Home() {
  
  return (
    <div className='home'>

      {/********* Header *********/}

      <Header/>

      {/********* Welcome *********/}

      <Welcome />

      {/********* Services *********/}

      <Services />

      {/******** Our Specialties ********/}

      <section className='specialties'>
        <Heading title='Our Specialties' subHeading='Always Caring' />
        <SpecialtiesContainer />
      </section>

      {/******** Booking ********/}

      <Booking     />

    {/******** Doctors ********/}

      <Doctors />

    {/******** News Section ********/}

      <section className="news">
        <Heading title='News' subHeading='Better information, Better health' />
        
        <div className="small-news">
          <SmCard />
        </div>
      </section>

    {/******** Contact Section ********/}
      <ContactSection />
    </div>
  )
}

  