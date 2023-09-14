import './components.css'

import {Link} from 'react-router-dom'

import {AiOutlineEye, AiOutlineHeart} from 'react-icons/ai'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
    import 'swiper/css';
    import 'swiper/css/grid';
    import 'swiper/css/pagination';


// import required modules
import { Grid, Pagination } from 'swiper/modules';

const SmCard = ({newsData}) => {
    
    return ( 
        <div className="sm-card">
            <Swiper
                slidesPerView={2}
                grid={{
                rows: 2,
                }}
                spaceBetween={30}
                pagination={{
                clickable: true,
                }}
                modules={[Grid, Pagination]}
                className="mySwiper"
            >

                {newsData && newsData.map((news) => (
                    <SwiperSlide className='news-card' key={news.id} >
                        <div className="image">
                            <img src={news.img} alt="news" />
                        </div>
                        <div className="content">
                            <h3 className="small"><Link to={`/news/${news.id}`}>{news.date}</Link></h3>
                            <p className="body1"><Link to={`/news/${news.id}`}>{news.title}</Link></p>
                            <div className="icons">
                                <div className="views">
                                    <AiOutlineEye style={{color: 'rgba(82, 106, 233, 1)'}} />
                                    <p className="small">{news.views}</p>
                                </div>
                                <div className="likes">
                                    <AiOutlineHeart style={{color: '#E2315C'}} />
                                    <p className="small">{news.likes}</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
                
                
            </Swiper>
        </div>
     );
}
 
export default SmCard;