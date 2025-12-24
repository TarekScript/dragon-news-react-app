import React, { Suspense } from 'react';
import Categoris from '../Categoris';

const LeftAside = () => {
    return (
        <div className='sticky top-0'>
            <Suspense fallback={<span className="loading loading-ring loading-xl"></span>}>
                <Categoris></Categoris>
            </Suspense>
        </div >
    );
};

export default LeftAside;