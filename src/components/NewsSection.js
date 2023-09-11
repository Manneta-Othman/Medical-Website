import React from "react";
import SmCard from "./SmCard";
import Heading from "./Heading";

   export default function NewsSection({}) {
      return (<section className="news">
        <Heading title='News' subHeading='Better information, Better health' />
        
        <div className="small-news">
          <SmCard />
        </div>
      </section>);
    }
  
  