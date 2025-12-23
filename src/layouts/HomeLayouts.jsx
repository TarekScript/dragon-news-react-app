import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Header';
import LatestNews from '../components/LatestNews';
import NavBar from '../components/NavBar';

const HomeLayouts = () => {
    return (
        <div>
            <header>
                <Header></Header>
                <LatestNews></LatestNews>
                <nav className='w-11/12 mx-auto'>
                    <NavBar></NavBar>
                </nav>
            </header>
            <main>
                <section className="left-nav"></section>
                <section className="main">
                    <Outlet></Outlet>
                </section>
                <section className="right-nav"></section>
            </main>
        </div>
    );
};

export default HomeLayouts;