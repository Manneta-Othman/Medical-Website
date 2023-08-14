import './components.css'

import clock from '../assets/clock.svg'
import local from '../assets/local.svg'
import phone from '../assets/phone.svg'

import {FiSearch, FiMenu} from 'react-icons/fi'
import {AiOutlineClose} from 'react-icons/ai'

import { Link } from 'react-router-dom';
import { useState } from 'react'


const Navebar = () => {

    const [showMenu, setShowMenu] = useState(false);

    return ( 
        <nav className="navbar">
            <div className="navbar-top">
                <div className="logo">
                    Med<span>dical</span>
                </div>

                <div className="top-left">
                    <div className="item">
                        <div className="icon">
                            <img src={phone} alt="" />
                        </div>
                        <div className="content">
                            <p>Emergency</p>
                            <p>(237) 681-812-255</p>
                        </div>
                    </div>

                    <div className="item">
                        <div className="icon">
                            <img src={clock} alt="" />
                        </div>
                        <div className="content">
                            <p>Work Hour</p>
                            <p>09:00 - 20:00 Everyday</p>
                        </div>
                    </div>

                    <div className="item">
                        <div className="icon">
                            <img src={local} alt="" />
                        </div>
                        <div className="content">
                            <p>Location</p>
                            <p>0123 Some Place</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="navbar-bottom">
                <div className="logo">
                    Med<span>dical</span>
                </div>

                <ul className={showMenu ? 'nav-links active' : 'nav-links'}>
                    <li>
                        <Link className='link active' to="/">Home</Link>
                    </li>
                    <li>
                        <Link className='link' to="/about">about us</Link>
                    </li>
                    <li>
                        <Link className='link' to="/services">services</Link>
                    </li>
                    <li>
                        <Link className='link' to="/doctors">Doctors</Link>
                    </li>
                    <li>
                        <Link className='link' to="/news">News</Link>
                    </li>
                    <li>
                        <Link className='link' to="/contact">contact</Link>
                    </li>
                </ul>


                <div className="left-side">
                            <FiSearch className='search-icon' /> 

                            <div className="toggle-menu">
                                {
                                    showMenu ? <AiOutlineClose onClick={() => setShowMenu(!showMenu)}/>
                                             : <FiMenu onClick={() => setShowMenu(!showMenu)}/> 
                                }
                            </div>

                    <div className="appointment btn">Appointment</div>
                </div>

            </div>
        </nav>
     );
}
 
export default Navebar;