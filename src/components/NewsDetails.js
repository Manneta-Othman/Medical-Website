import React, { useState, useEffect, useMemo } from 'react'

import { UseDataContext } from '../Context'

import SubHeader from './SubHeader'
import newsHeader from '../assets/newsDetails.jpeg'
import {AiOutlineArrowRight, AiOutlineArrowLeft} from 'react-icons/ai'
import { NewsSidebar } from './newsSidebar';
import { useParams, Link } from 'react-router-dom';


export default function NewsDetails() {
  
  const [news, setNews] = useState([]);
  
  const params = useParams().id
  
  const [article, setArticle] = useState({});
  


  useEffect(() => {
    const getData = async () => {

      const newsRresult = await fetch(`http://localhost:4000/news`)
      const news = await newsRresult.json()

      const ArticleResult = await fetch(`http://localhost:4000/news/${params}`)
      const data = await ArticleResult.json()

      setNews(news)
      setArticle(data)
    }
    getData();
  }, [params]);


  return (
    <div className='news-details'>
      <SubHeader img={newsHeader} subTitle='Home / News / Health Care' title={article.title} />

      <div className="news-page-container padding">
        <div className="content">
              <div className="image">
                <img src={article.img} alt="blog" />
              </div>
            <article key={article.id}>
              <h2>{article.title}</h2>
              <p className="body2">{article.text}</p>
            </article>
            <div className="prev-next">
            <Link to={`/news/${article.id  === 1 ? article.id : article.id - 1}`} > 
              <button 
                className={article.id  === 1 ? "btn-more disabled" : "btn-more"} >
                <AiOutlineArrowLeft /> Previous Article 
              </button>
            </Link>
              <Link to={`/news/${article.id  === news.length ? article.id : article.id + 1}`}> 
                <button 
                  className={article.id  === news.length ? "btn-more disabled" : "btn-more"} >
                  Next Article <AiOutlineArrowRight />
                </button>
              </Link>
            </div>
        </div>
        <NewsSidebar news={news} />
      </div>
    </div>
  )
}
