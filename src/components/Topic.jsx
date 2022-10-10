import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Topic = ({topic}) => {
    const {name, logo, total} = topic;
    return (
        <div className='shadow-xl rounded-lg mt-10'>
            <div className='p-3 bg-slate-200'>
                <img src={logo} alt="" />
            </div>
            <div className='mt-5 flex flex-row justify-between items-center pb-4 px-1'>
                <div>
                    <h1 className='text-3xl font-semibold'>{name}</h1>
                    <p className='text-lg text-gray-600'>Total Quiz: {total}</p>
                </div>
                <button className='bg-blue-500 px-4 py-3 rounded-md text-gray-100 font-medium hover:bg-blue-700'>Start Practice
                <span className='ml-2'><FontAwesomeIcon icon={faArrowRight} /></span>
                </button>
            </div>
        </div>
    );
};

export default Topic;