import React from 'react';
import { endpoints } from '../../../Api/endpoints';

function LandingBackdrop({ mediaData }) {

    const {
        title,
        name,
        backdrop_path,
        overview
    } = mediaData;

    return (
        <div
            className='landing-backdrop h-[80vh] mb-5'
            data-aos="fade-up"
        >
            <div className='container h-full'>
                <div
                    style={{
                        backgroundImage: backdrop_path && `url(${endpoints.IMAGE}${endpoints.BACKDROP}${backdrop_path})`,
                        backgroundSize: 'cover',
                    }}
                    className='content w-full h-full rounded-xl text-center space-y-3'
                >
                    {/* Text Container */}
                    <div className='text-container h-full flex items-end bg-black/35'>
                        {/* Text Area */}
                        <div className='text-area w-full relative bottom-36 space-y-3'>
                            {/* Title or Name Media */}
                            <h1 className='font-semibold text-xl md:text-3xl'>{title || name}</h1>
                            {/* Overview Media */}
                            <p className='md:max-w-[500px] line-clamp-2 mx-auto text-gray-400 font-medium'>{overview}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingBackdrop;