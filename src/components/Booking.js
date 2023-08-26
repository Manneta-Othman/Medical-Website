import React from "react";

import BookingForm from "./BookingForm";

export function Booking() {
  return <section className="booking">
        <div className="booking-container">
          <div className="content">
            <h1>Book an Appointment</h1>
            <p className='body2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Convallis felis vitae tortor augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim et.</p>
          </div>
          <BookingForm />
        </div>
      </section>
}
  