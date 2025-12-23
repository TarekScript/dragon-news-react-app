import React from 'react';
import logo from '../assets/logo.png'
import { format } from "date-fns";
const Header = () => {
    return (
        <div className='mt-8 px-4'>
            <img className='flex mb-4 mx-auto' src={logo} alt="" />
            <h1 className="md:text-xl text-accent text-center">Journalism Without Fear or Favour</h1>
            <p className="text-accent text-center font-semibold pt-2">{format(new Date(), "EEEE, MMMM dd,   yyyy")}</p>
        </div>
    );
};

export default Header;