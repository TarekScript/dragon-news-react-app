import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import Header from '../Header';
import RightAside from '../homeLayout/RightAside';
import NavBar from '../NavBar';
import NewsDetailsCart from './NewsDetailsCart';

const NewsDetails = () => {
    const { id } = useParams();
    const data = useLoaderData();
    const singleNews = data.find(news => news.id == id);

    return (
        <div className='w-10/12 mx-auto mt-4'>
            <header>
                <Header></Header>
                <NavBar></NavBar>
            </header>
            <h2 className='text-accent font-bold text-xl'>Dragon News</h2>
            <main className='grid grid-cols-1 md:grid-cols-4 gap-8 mt-6'>
                <section className='col-span-3 md:sticky top-4 h-fit'>
                    <NewsDetailsCart news={singleNews}></NewsDetailsCart>
                </section>
                <aside>
                    <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default NewsDetails;