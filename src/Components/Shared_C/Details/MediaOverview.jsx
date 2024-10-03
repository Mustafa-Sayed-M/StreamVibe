import React from 'react';

function MediaOverview({ overview }) {
    return (
        <div className='media-overview bg-card-color p-3 rounded-md col-span-2' data-aos="fade-up">
            <h4 className='text-gray-400 mb-2'>Description</h4>
            <p>{overview}</p>
        </div>
    )
}

export default MediaOverview;