import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCart from '../NewsCart';

const CategoryNews = () => {
    const [categoryNews, setCategoryNews] = useState([]);
    const { id } = useParams();
    const data = useLoaderData();
    useEffect(() => {
        if (id == "0") {
            setCategoryNews(data);
        }
        else if (id == '1') {
            const filterdNews = data.filter(news => news.others.is_today_pick);
            setCategoryNews(filterdNews);
            console.log(filterdNews);
        }
        else {
            const filterdNews = data.filter(news => news.category_id == id);
            setCategoryNews(filterdNews);
        }
    }, [data, id])
    return (
        <div>
            <h1 className='mb-6 text-accent font-bold'>Today's News  <span className='font-bold text-secondary ml-2'>({categoryNews.length})</span></h1>
            {
                categoryNews.map(news => <NewsCart key={news.id} news={news}></NewsCart>)
            }
        </div>
    );
};

export default CategoryNews;