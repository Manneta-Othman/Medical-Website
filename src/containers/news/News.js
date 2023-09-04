import { NewsSidebar } from './../../components/newsSidebar';
import { Article } from './../../components/Article';
import './news.css'

import Pagination from '../../Pagination';
import React, { useState, useEffect, useMemo } from 'react'
import newsHeader from '../../assets/news-header.png'
import SubHeader from '../../components/SubHeader'

let PageSize = 4;

export default function News() {

  const [news, setNews] = useState([]);

  const getData = () => {
    fetch('data.json', {headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }}).then((res) => {
      return res.json();
    }).then((data) => {
      setNews(data.news);
    }).catch(() => {
      console.log("couldn't fetch data")
    })
  }

  useEffect(() => {
    getData();
  }, []);
  

  const [currentPage, setCurrentPage] = useState(1);


  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return news && news.slice(firstPageIndex, lastPageIndex);
  }, [news, currentPage]);
  


  useEffect(()=> {
    window.scrollTo(0, 0);
  },[currentPage])


  return (
    <div className='news-page'>
      <SubHeader img={newsHeader} title='Blog Posts' subTitle='Home / News' />

      <div className="news-page-container padding">
        <div className="content">
          { currentTableData.map((post) => (
            <Article 
            id={post.id}
            img={post.img}
            date={post.date}
            title={post.title}
            likes={post.likes}
            views={post.views}
            text={post.text}
            key={post.id}
            />
          ))}
          <Pagination
            className="pagination-bar"
            currentPage={currentPage}
            totalCount={news.length}
            pageSize={PageSize}
            onPageChange={page => setCurrentPage(page)}
          />
        </div>
        <NewsSidebar news={news}/>
      </div>
    </div>
  )
}
