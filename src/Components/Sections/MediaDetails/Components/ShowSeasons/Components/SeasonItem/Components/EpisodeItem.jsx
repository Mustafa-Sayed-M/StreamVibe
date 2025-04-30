import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { imageApi } from '../../../../../../../../Utils/api';
import { Link, useParams } from 'react-router-dom';

function EpisodeItem({ season_number, episodeData: { name, overview, runtime, still_path, episode_number } }) {

    const { showId } = useParams();

    return (
        <div className='episode-card border-b border-b-black-color-15 py-5 flex items-center gap-5 flex-wrap'>
            {/* Episode Number */}
            <div className='episode-number w-10 font-bold text-2xl text-grey-color-60 max-xl:w-full max-xl:bg-black-color-8 max-xl:py-2 max-xl:px-4 rounded-md'>
                {episode_number.toString().padStart(2, '0')}
            </div>
            {/* Backdrop */}
            <Link
                to={`/shows/${showId}/season/${season_number}/episode/${episode_number}`}
                className='block aspect-[1/0.5] rounded-xl overflow-hidden flex-1 xl:max-w-[250px]'>
                {
                    still_path ? (
                        <div className='h-full relative'>
                            {/* Episode Image */}
                            <LazyLoadImage
                                src={`${imageApi.baseEndpoint}${imageApi.backdropUrl}${still_path}`}
                                alt={name}
                                effect='blur'
                                width={'100%'}
                                height={'100%'}
                            />
                            {/* Play Btn */}
                            <div className='bg-black/60 backdrop-blur-sm w-16 h-16 flex items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full text-3xl'>
                                <i className='fa-solid fa-circle-play fa-fw'></i>
                            </div>
                        </div>
                    ) : (
                        <div className='w-full h-full bg-gray-600 flex items-center justify-center'>
                            <div className='opacity-60 font-light'>no picture</div>
                        </div>
                    )
                }
            </Link>
            {/* Text Content */}
            <div className='text-content max-xl:w-full xl:flex-1'>
                {/* Text Content Head */}
                <div className='text-content-head flex xl:items-center justify-between mb-2 max-xl:flex-col-reverse gap-y-3'>
                    {/* Name */}
                    <h3 className='font-semibold text-lg line-clamp-1'>{name}</h3>
                    {/* Runtime */}
                    <div className='bg-black-color-8 border border-black-color-15 text-grey-color-60 p-2 rounded-md w-fit'>
                        <i className='fa-solid fa-clock fa-fw me-2'></i>
                        <span>{runtime ? runtime + ' min' : `"no runtime"`}</span>
                    </div>
                </div>
                {/* Overview */}
                <p className='line-clamp-2'>{overview ? overview : 'no overview'}</p>
            </div>
        </div>
    )
}

export default EpisodeItem;