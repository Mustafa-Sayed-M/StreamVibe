import React from 'react';
import { endpoints } from '../../../Api/endpoints';

function EpisodeCard({ episode_count, episodeData }) {

    const {
        episode_number,
        still_path,
        name,
        overview,
        runtime,
    } = episodeData;

    return (
        <div className='episode-card py-3 border-t border-t-white/10 flex items-center gap-7 relative'>
            {/* Number */}
            <h1 className='episode-number font-semibold text-2xl opacity-70'>{episode_count >= 99 ? episode_number.toString().padStart(3, "00") : episode_count >= 9 ? episode_number.toString().padStart(2, "0") : episode_number}</h1>
            {/* Content */}
            <div className='episode-content w-full flex  max-md:flex-col gap-3'>
                {/* Backdrop */}
                <img
                    src={`${endpoints.IMAGE}${endpoints.BACKDROP}${still_path}`}
                    alt={name}
                    loading='lazy'
                    className='rounded-md w-full md:w-[200px] object-cover'
                />
                {/* Info */}
                <div className='episode-info'>
                    {/* Head Text */}
                    <div className='head-title flex items-center justify-between gap-3 md:mb-3'>
                        {/* Name */}
                        <h4 className='font-medium md:text-xl line-clamp-1'>{name}</h4>
                        {/* Runtime */}
                        <div className='runtime text-nowrap text-gray-400 text-sm p-2 rounded-md bg-card-color border border-white/10'>
                            <i className="fa-regular fa-clock me-2"></i>
                            <span>{runtime} Min</span>
                        </div>
                    </div>
                    {/* Overview */}
                    <p className='text-gray-400 line-clamp-4 max-md:hidden'>{overview}</p>
                </div>
            </div>
        </div>
    )
}

export default EpisodeCard;