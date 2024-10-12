import React from 'react';
import { endpoints } from '../../../Api/endpoints';
import { Link } from 'react-router-dom';

function MediaTrending({ mediaData }) {

    const {
        id,
        title,
        name,
        backdrop_path,
        overview,
    } = mediaData;

    return (
        <div
            style={{
                backgroundImage: `url(${endpoints.IMAGE}${endpoints.BACKDROP}${backdrop_path})`,
                backgroundSize: 'cover'
            }}
            className='media-trending h-full rounded-xl'
        >
            <div className='h-full flex flex-col items-center justify-end px-5 md:px-10 bg-black/40'>
                {/* Info */}
                <div className='info text-center py-16 space-y-4'>
                    {/* Title */}
                    <h1 className='font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl'>{title || name}</h1>
                    {/* Overview */}
                    <p className='md:max-w-[600px] line-clamp-2 text-gray-400'>{overview}</p>
                    {/* Actions */}
                    <div className='actions flex items-center justify-center gap-2'>
                        {/* Link Detail */}
                        <Link
                            to={`/movies-and-shows/${title ? "movie" : "series"}/${id}`}
                            title='Go To Details Page'
                            className='block bg-primary-color py-2 px-4 rounded-md w-fit sm:hover:bg-primary-color/50 transition-colors'
                        >
                            Detail
                        </Link>
                        {/* Other Actions */}
                        <div className='other-actions flex items-center gap-2'>
                            {/* Action Add */}
                            <button
                                type='button'
                                aria-label='add'
                                title='add'
                                className='bg-card-color p-2 rounded-md border border-gray-color'
                            >
                                <i className="fa-solid fa-plus fa-fw"></i>
                            </button>
                            {/* Action Like */}
                            <button
                                type='button'
                                aria-label='like'
                                title='like'
                                className='bg-card-color p-2 rounded-md border border-gray-color'
                            >
                                <i className="fa-solid fa-thumbs-up fa-fw"></i>
                            </button>
                            {/* Action Volume */}
                            <button
                                type='button'
                                aria-label='volume'
                                title='Mute Volume'
                                className='bg-card-color p-2 rounded-md border border-gray-color'
                            >
                                <i className="fa-solid fa-volume-high fa-fw"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MediaTrending;