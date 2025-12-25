import React from 'react';
import { Link } from 'react-router';
import { FaArrowLeft } from "react-icons/fa6";


const NewsDetailsCart = ({ news }) => {
    const { thumbnail_url, category_id, title, details } = news;
    return (
        <div className='space-y-6 shadow-sm p-8 rounded-lg'>
            <img className='rounded-xl w-full' src={thumbnail_url} alt="" />
            <h1 className='font-bold text-2xl'>{title}</h1>
            <p className='text-accent'>{details}</p>
            <Link className='btn btn-secondary' to={`/category/${category_id}`}><FaArrowLeft /> All  news in this category</Link>
        </div>
    );
};

export default NewsDetailsCart;