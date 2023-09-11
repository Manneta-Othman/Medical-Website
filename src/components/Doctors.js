import React, { useEffect, useState } from "react";

import Heading from "./Heading";


import { BsFacebook } from 'react-icons/bs';
import { FaInstagramSquare } from 'react-icons/fa';
import { AiFillTwitterCircle } from 'react-icons/ai';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

export function Doctors() {

    const [cards, setCards] = useState([]);

    const getData = () => {
      fetch('/db.json', { headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }}).then((res) => {
      return res.json();
    }).then((data) => {
      setCards(data);
    })}

    useEffect( ()=> {
      getData();
    }, []);

  return (
     <section className="doctors">
    
    <Heading title='Our Doctors' subHeading='Trusted Care' /> 
    

    <Swiper 
      effect={'coverflow'}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={'auto'}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      pagination={true}
      modules={[EffectCoverflow, Pagination]}
      className="mySwiper"
      >
        {cards.map((card) => (
          <SwiperSlide key={card.id}>
          <div className="card">
              <div className="image">
                <img src={card.img} alt="doctor" />
              </div>
              <div className="content">
                <p className="body1">{card.name}</p>
                <h3 className="caption">{card.specialty}</h3>
                <div className="icons">
                  <BsFacebook className='icon' />
                  <FaInstagramSquare className='icon' />
                  <AiFillTwitterCircle className='icon' />
                </div>
                <button className='body2'>View More</button>
              </div>
            </div>
          </ SwiperSlide>
        ))}
        </ Swiper>
          
</section>
  )
}
  