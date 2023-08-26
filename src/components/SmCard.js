import './components.css'


import {AiOutlineEye, AiOutlineHeart} from 'react-icons/ai'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
    import 'swiper/css';
    import 'swiper/css/grid';
    import 'swiper/css/pagination';


// import required modules
import { Grid, Pagination } from 'swiper/modules';
import { useEffect, useState } from 'react';

const SmCard = () => {

    const [newsData, setNewsData] = useState([])

    const getData = () => {
        fetch('data.json', { headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }}).then((res) => {
            return res.json();
        }).then((data) => {
            setNewsData(data.news);
        })
    }

    useEffect(() => {
        getData();
    },[]);

    
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
                            <h3 className="small">{news.date}</h3>
                            <p className="body1">{news.title}</p>
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