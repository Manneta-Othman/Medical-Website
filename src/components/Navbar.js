import './components.css'

import clock from '../assets/clock.svg'
import local from '../assets/local.svg'
import phone from '../assets/phone.svg'

import {FiSearch, FiMenu} from 'react-icons/fi'
import {AiOutlineClose} from 'react-icons/ai'

import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react'


const Navebar = () => {


    const [showMenu, setShowMenu] = useState(false);

    const menuRef = useRef()

    useEffect(() => {

        const handleShow = (e) => {

            if(!menuRef.current.contains(e.target)) {
                setShowMenu(false)
            }

        }

        document.addEventListener('mouseup', handleShow)

        const links = menuRef.current.childNodes;

        links.forEach(item => {
            item.addEventListener('click', () => {
                setShowMenu(false)
            })
        })

    })

    function CustomLink ({children, ...props}) {

        const path = useResolvedPath(props.to).pathname

        const isActive = useMatch({ path, end: true })

        return(
                <Link className={isActive ? 'link active' : 'link'} to={props.to} > {children} </Link>
        ) 
    }

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

                <ul className={showMenu ? 'nav-links active' : 'nav-links'} ref={menuRef} >
                    <li>
                        <CustomLink className='link' to="/">Home</CustomLink>
                    </li>
                    <li>
                        <CustomLink className='link' to="/about">about us</CustomLink>
                    </li>
                    <li>
                        <CustomLink className='link' to="/services">services</CustomLink>
                    </li>
                    <li>
                        <CustomLink className='link' to="/doctors">Doctors</CustomLink>
                    </li>
                    <li>
                        <CustomLink className='link' to="/news">News</CustomLink>
                    </li>
                    <li>
                        <CustomLink className='link' to="/contact">contact</CustomLink>
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
                    <div className="appointment btn">
                        <Link to='/appointment'>Appointment</Link> 
                    </div>
                </div>

            </div>
        </nav>
     );

}


 
export default Navebar;