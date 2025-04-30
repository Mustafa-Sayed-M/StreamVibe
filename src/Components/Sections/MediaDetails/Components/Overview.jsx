import React from 'react';

function Overview({ overview, isLoading }) {
    return (
        <div className='media-overview lg:col-span-2'>
            <p className='mb-3'>Overview</p>
            {
                isLoading ? (
                    <>Loading...</>
                ) : (
                    <p className='text-white leading-relaxed font-medium'>{overview}</p>
                )
            }
        </div>
    )
}

export default Overview;