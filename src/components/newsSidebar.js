
import {AiOutlineSearch} from 'react-icons/ai'
import { Link } from 'react-router-dom'



export function NewsSidebar({news}) {

  return (
        
        <div className="sidebar">
          <div className="search">
            <input type="search" placeholder='Search' />
            <AiOutlineSearch className='icon' /> 
          </div>

          <div className="recent-blogs">
              <h2>Recent blogs</h2>
              {news && news.slice(0, 5).map(blog => <div className="blog" key={blog.id}>
                  <div className="image">
                    <img src={blog.img} alt="blog" />
                  </div>
                  <Link to={`/news/${blog.id}`} > <div className="recent-content">
                      <p className="date">{blog.date}</p>
                      <p className="title">{blog.title}</p>
                    </div> </Link>
                </div>)}
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
        )
}
  