import React, { useEffect, useState } from "react";
import NewsItem from "../NewsItem/newsItem";

export default function NavBoard( {category}){
    const [articles,setArticles]=useState([]);

    useEffect(()=>{
        console.log(import.meta.env.VITE_API_KEY);
        let url=`https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
        fetch(url).then(response=> response.json()).then(data=>setArticles(data.articles));

    },[category])

    return (
        <div>
            <h2 className="d-flex m-4 justify-content-center">Latest<span className="badge text-bg-danger fs-5"> News</span></h2>
            {articles.map((news,index)=>{
                return (
                    
                    <NewsItem  key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url}/>
                )
            })}
        </div>
    )
}