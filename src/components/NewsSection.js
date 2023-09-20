import React from "react";
import SmCard from "./SmCard";
import Heading from "./Heading";

import { useEffect, useState } from 'react';


   export default function NewsSection() {
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
      
      <section className="news">
        <Heading title='News' subHeading='Better information, Better health' />
        <div className="small-news">
          <SmCard newsData={newsData} />
        </div>
      </section>
      
      );
    }
  
  