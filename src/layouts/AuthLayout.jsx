import React from 'react';
import { Outlet } from 'react-router';
import NavBar from '../components/NavBar';

const AuthLayout = () => {
    return (
        <div className='pt-4 min-h-screen bg-base-200'>
            <header className='w-10/12 mx-auto'>
                <NavBar></NavBar>
            </header>
            <main>
                <Outlet></Outlet>
            </main>
        </div>
    );
};

export default AuthLayout;