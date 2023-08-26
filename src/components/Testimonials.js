import React, { useState } from "react";

import quotation from '../assets/quotation.svg'


export function Testimonials() {

  const tes = [
    {
     text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Quisque placerat scelerisque felis vitae tortor augue. Velit nascetur Consequat faucibus porttitor enim et.',
     tester: 'Tomas Loe'
    },
    {
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Quisque placerat scelerisque felis vitae tortor augue.',
      tester: 'John Doe'
     },
     {
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Quisque placerat scelerisque felis vitae tortor augue. Velit nascetur Consequat faucibus porttitor enim et.',
      tester: 'David Lan'
     }
  ]

  const [currentSlide, setCurrentSlide] = useState(0);


  return <div className="testimonials">
        <div className="image" />
        <div className="content">
            <div className="slide">
                  <div className="tes">
                  <img src={quotation} alt="quotation" />
                  <p>{tes[currentSlide].text}</p>
                  <div className="line"></div>
                  <p>{tes[currentSlide].tester}</p>
                </div>               
            </div>
            <div className="pagination">
              <span className={currentSlide === 0 ? 'dot active' : 'dot'} onClick={() => setCurrentSlide(0)}></span>
              <span className={currentSlide === 1 ? 'dot active' : 'dot'} onClick={() => setCurrentSlide(1)}></span>
              <span className={currentSlide === 2 ? 'dot active' : 'dot'} onClick={() => setCurrentSlide(2)}></span>
            </div>
        </div>
      </div>
}
  