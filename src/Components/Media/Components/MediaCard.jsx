import React from 'react';
import { Link } from 'react-router-dom';
import { imageApi } from '../../../Utils/api';
import { LazyLoadImage } from 'react-lazy-load-image-component';

function MediaCard({ index, mediaData: {
    id,
    name,
    title,
    poster_path,
    vote_average,
    release_date,
    first_air_date
} }) {

    const mediaPath = `/${title ? 'movies' : 'shows'}/${id}`;

    return (
        <div
            className='media-card p-2 sm:p-3 bg-black-color-10 border border-black-color-15 rounded-md aspect-[1/1.5]'
        >
            <div
                data-aos='fade'
                data-aos-delay={index * 50}
            >
                <Link
                    to={mediaPath}
                    className='block transition sm:hover:grayscale duration-300 ease-in aspect-[1/1.5]'
                >
                    {/* Poster Image */}
                    <LazyLoadImage
                        src={`${imageApi.baseEndpoint}${imageApi.posterUrl}${poster_path}`}
                        alt={title || name}
                        effect='blur'
                        className='media-poster-image w-full h-auto rounded-md'
                    />
                </Link>
            </div>
            {/* Info */}
            <div className='media-info'>
                {/* Title/Name */}
                <Link
                    to={mediaPath}
                >
                    <h3 className={`media-${title ? 'title' : 'name'} font-medium line-clamp-1 sm:hover:underline mb-2`}>{title || name}</h3>
                </Link>
                <div className='flex items-center justify-between font-medium'>
                    {/* Year */}
                    <p className='media-year text-grey-color-60'>{((release_date || first_air_date || 0).toString() || '').slice(0, 4)}</p>
                    {/* Rating */}
                    <div className='media-rating'>
                        <span className='text-grey-color-60 me-1'>{vote_average}</span>
                        <i className='fa-solid fa-star fa-fw text-red-color-45'></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MediaCard;