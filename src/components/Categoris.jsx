import React, { use } from 'react';
import { NavLink } from 'react-router';


const categotiesPromise = fetch('/categories.json').then(res => res.json())
const Categoris = () => {

    const categories = use(categotiesPromise);
    return (
        <div>
            <h1 className='font-bold text-gray-500'>All Caterogy ({categories.length})</h1>
            <div className='flex flex-col gap-4 mt-4'>
                {
                    categories.map(category => <NavLink to={`/category/${category.id}`} className='btn bg-base-100 border-0 hover:bg-base-200 font-semibold text-accent'>{category.name}</NavLink>)
                }
            </div>
        </div >
    );
};

export default Categoris;