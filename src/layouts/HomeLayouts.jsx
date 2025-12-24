import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Header';
import LeftAside from '../components/homeLayout/LeftAside';
import RightAside from '../components/homeLayout/RightAside';
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
            <main className='w-11/12 mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mt-12'>
                <aside >
                    <LeftAside></LeftAside>
                </aside>
                <section className='overflow-scroll h-[1650px] col-span-2'>
                    <Outlet></Outlet>
                </section>
                <aside>
                    <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default HomeLayouts;