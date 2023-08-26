import './news.css'

import React, { useContext, useState, useEffect, useRef } from 'react'
import newsHeader from '../../assets/news-header.png'
import SubHeader from '../../components/SubHeader'

import {AiOutlineEye, AiOutlineHeart, AiOutlineCalendar, AiOutlineSearch, AiOutlineArrowRight, AiOutlineArrowLeft} from 'react-icons/ai'


import { DataContext } from '../../App'

export default function News() {

  const {news} = useContext(DataContext);

  const [page, setPage] = useState(0);

  const refrech = useRef();

  useEffect(()=> {
    window.scrollTo(0, 0);
  },[page])


  return (
    <div className='news-page'>
      <SubHeader img={newsHeader} title='Blog Posts' subTitle='Home | News' />

      <div className="news-page-container padding">
        <div className="content" ref={refrech}>
          {news && news.slice(4*page, (page+1) * 4).map((post) => (
            <article key={post.id}>
              <div className="image">
                <img src={post.img} alt="blog" />
              </div>
              <div className="sub">
                <div className="date body2"> <AiOutlineCalendar className='icon' /> {post.date}</div>
                <div className="views body2"> <AiOutlineEye className='icon' style={{color: 'rgba(82, 106, 233, 1)'}}  /> {post.views} </div>
                <div className="likes body2"> <AiOutlineHeart className='icon' style={{color: '#E2315C'}} /> {post.likes} </div>
              </div>
              <h2>{post.title}</h2>
              <p className="body2">{post.text.slice(0, 200) + '...'}</p>
              <button className="btn-more">Read More <AiOutlineArrowRight /> </button>
            </article>
          ))}
            <div className="pages">
              <div className={page === 0 ? 'prev-page current' : 'prev-page'} onClick={() => setPage(page - 1)}>
                <AiOutlineArrowLeft />
                <p className="body2">Previous Page</p>
              </div>
              <div className="page-num">1,2,3,4</div>
              <div className={page === 1 ? 'prev-page current' : 'prev-page'} onClick={() => setPage(page + 1)}>
                <p className="body2">Next Page</p>
                <AiOutlineArrowRight />
              </div>
            </div>

        </div>

        <div className="sidebar">
          <div className="search">
            <input type="search" placeholder='Search' />
            <AiOutlineSearch className='icon' /> 
          </div>

          <div className="recent-blogs">
              <h2>Recent blogs</h2>
              {news && news.slice(0,5).map((blog) =>  (
                <div className="blog" key={blog.id}>
                  <div className="image">
                    <img src={blog.img} alt="blog" />
                  </div>
                  <div className="recent-content">
                    <p className="date">{blog.date}</p>
                    <p className="title">{blog.title}</p>
                  </div>
                </div>
              ))}
          </div>

          <div className="categories">
            <h2>Categories</h2>
            <div className="category">
              <p className="body1">Surgery</p>
              <span>3</span>
            </div>
            <div className="category">
              <p className="body1">Health Care</p>
              <span>5</span>
            </div>
            <div className="category">
              <p className="body1">Medical</p>
              <span>8</span>
            </div>
            <div className="category">
              <p className="body1">Professional</p>
              <span>13</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
