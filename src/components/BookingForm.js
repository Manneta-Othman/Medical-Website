import './components.css'

import { AiOutlineArrowRight } from 'react-icons/ai';


const BookingForm = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return ( 
        <div className="booking-form">
            <div className="form">
            <form action="submit" onClick={(e) => handleSubmit(e)}>
                <div className="fields">
                  <div className="field">
                    <input type="text" placeholder='Name' />
                  </div>
                  <div className="field">
                    <p className="body2">Gender</p>
                    <AiOutlineArrowRight/>
                    <select>
                        <option><p className="body2">Male</p></option>
                        <option><p className="body2">Female</p></option>            
                    </select> 
                  </div>
                  <div className="field">
                    <input type="email" placeholder='abcd@efg.com' />
                  </div>
                  <div className="field">
                    <input type="tel" placeholder='+213 4567-890'/>
                  </div>
                  <div className="field">
                    
                  <input type="date" name="date" id="date" />
                  </div>
                  <div className="field">
                    <p className="body2">Time</p>
                    <AiOutlineArrowRight />
                    <input type="time" value='' />
                  </div>
                  <div className="field">
                    <p className="body2">Doctor</p>
                    <AiOutlineArrowRight />
                    <select>
                        <option><p className="body2">Doctor 1</p></option>
                        <option><p className="body2">Doctor 2</p></option>
                        <option><p className="body2">Doctor 3</p></option>            
                        <option><p className="body2">Doctor 4</p></option>                        
                    </select> 
                  </div>
                  <div className="field">
                    <p className="body2">Depatment</p>
                    <AiOutlineArrowRight />
                    <select>
                        <option><p className="body2">Depatment 1</p></option>
                        <option><p className="body2">Depatment 2</p></option>
                        <option><p className="body2">Depatment 3</p></option>            
                        <option><p className="body2">Depatment 4</p></option>                        
                    </select> 
                  </div>
                </div>
                  <div className="message">
                    <textarea className='text body2'></textarea>
                  </div>
                <button type='submit' className='body2'>Submit</button>
            </form>
          </div>
        </div>
     
    );
}
 
export default BookingForm;