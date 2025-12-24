import React from 'react';
import { CiBookmark, CiShare2, CiStar } from "react-icons/ci";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { MdOutlineRemoveRedEye } from "react-icons/md";

const NewsCart = ({ news }) => {
    const { author, title, thumbnail_url, details, rating, total_view } = news;
    return (
        <div className='mb-8 rounded-lg shadow-lg  py-6 px-4'>
            <div className='flex rounded-lg justify-between items-center bg-base-300'>
                <div className='flex items-center p-4 gap-4'>
                    <div>
                        <img className='w-10 rounded-full' src={author.img} alt="" />
                    </div>
                    <div>
                        <h2 className='font-bold mb-1'>{author.name}</h2>
                        <h3 className='text-accent'>{new Date(author.published_date).toLocaleDateString()}</h3>
                    </div>
                </div>
                <div>
                    <button className="btn text-xl bg-base-300"><CiBookmark /></button>
                    <button className="btn  text-xl bg-base-300 border-0"><CiShare2 /></button>
                </div>
            </div>

            <div className='p-4 space-y-4'>
                <h1 className='font-semibold text-2xl'>{title}</h1>
                <img className='rounded-xl' src={thumbnail_url} alt="" />
                {
                    details.length > 200 ? (<>
                        {details.slice(0, 200)}....
                        <span className='text-[#FF8C47] font-semibold'>Read More</span>
                    </>)
                        :
                        details
                }
            </div>
            <hr class="border-t border-dashed border-gray-400" />
            <div className='mt-4 flex items-center justify-between px-8'>
                <div className='flex gap-2'>
                    <div className="flex gap-1 text-yellow-400">
                        {[...Array(rating.number)].map((_, i) => (
                            <span key={i}> <h3 className='text-[#FF8C47] font-bold text-2xl'><MdOutlineStarPurple500 /></h3></span>
                        ))}
                    </div>
                    <div>
                        <span>({rating.number})</span>
                    </div>
                </div>
                <div>
                    <h3 className='flex gap-1 items-center'><MdOutlineRemoveRedEye /> {total_view}</h3>
                </div>
            </div>
        </div>
    );
};

export default NewsCart;