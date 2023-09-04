import React from "react";
import {AiOutlineEye, AiOutlineHeart, AiOutlineCalendar, AiOutlineArrowRight} from 'react-icons/ai'
import { Link } from "react-router-dom";


export function Article({id, img, date, title, views, likes, text}) {


return (
        <article>
              <div className="image">
                <img src={img} alt="blog" />
              </div>
              <div className="sub">
                <div className="date body2"> <AiOutlineCalendar className='icon' />{date}</div>
                <div className="views body2"> 
                <AiOutlineEye 
                className='icon' 
                style={{color: 'rgba(82, 106, 233, 1)'}} 
                />
                {views} 
                </div>
                <div className="likes body2"> <AiOutlineHeart className='icon' style={{
          color: '#E2315C'
        }} /> {likes} </div>
              </div>
              <h2>{title}</h2>
              <p className="body2">{text.slice(0, 200) + '...'}</p>
              <Link to={`/news/${id}`}> <button className="btn-more"> Read More <AiOutlineArrowRight /> </button> </Link>
            </article>
            );
}
  