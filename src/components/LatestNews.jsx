import React from 'react';
import Marquee from "react-fast-marquee";


const LatestNews = () => {
    return (
        <div className='flex font-bold items center gap-8 w-11/12 mx-auto bg-base-200 py-4 px-8 mt-6'>
            <p className='bg-secondary text-white font-bold px-3 py-2'>Latest</p>
            <Marquee><p className='text-accent'>( Governments across several regions announce new security and policy measures as  International tensions remain high today.    Markets show mixed movement amid global economic uncertainty, while technology companies unveil updates focused on artificial intelligence and digital safety.   Meanwhile, weather authorities issue alerts in parts of Asia and Europe due to changing climate conditions, and sports fans await key international fixtures scheduled this week.</p></Marquee>
        </div>
    );
};

export default LatestNews;