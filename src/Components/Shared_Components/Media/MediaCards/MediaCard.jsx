import React from 'react';
import { Link } from 'react-router-dom';
import LazyImage from '../../LazyImage';

function MediaCard({ index, mediaData }) {

    const {
        id,
        title,
        poster_path,
        name,
        release_date,
        first_air_date,
        vote_average,
    } = mediaData;

    return (
        <div
            data-aos='fade-up'
            data-aos-delay={50 * index}
            className={`media-card-${id} flex flex-col bg-black-color-10 aspect-[2/3.5] border border-black-color-15 p-2 rounded-md`}
        >
            {/* Poster Link */}
            <Link
                title={title || name}
                to={`/${title ? "movies" : "shows"}/${id}`}
                className='block flex-1 mb-2 sm:hover:shadow-2xl sm:hover:grayscale sm:hover:rounded-none rounded-md overflow-hidden transition ease-in-out duration-500 delay-200'
            >
                {
                    poster_path ? (
                        <LazyImage
                            image={{
                                src: `https://image.tmdb.org/t/p/w500${poster_path}`,
                                alt: title || name
                            }}
                        />
                    ) : (
                        <div className='bg-black-color-8 p-2 rounded-md mb-2 h-full flex items-center justify-center'>No poster available</div>
                    )
                }
            </Link>
            {/* Name */}
            <Link
                title={title || name}
                to={`/${title ? "movies" : "shows"}/${id}`}
                className='mb-2 sm:hover:underline'
            >
                <h2 className='font-medium line-clamp-1 mb-2'>{title || name}</h2>
            </Link>
            {/* Foot Info */}
            <div className='foot-info flex items-center justify-between gap-2'>
                {/* Year */}
                <div className='year text-sm flex items-center gap-1 py-2 px-4 rounded-full bg-black-color-8 border border-black-color-15'>
                    <i className="fa-solid fa-calendar fa-fw text-grey-color-60"></i>
                    <p className='font-medium'>{(release_date || first_air_date || "").slice(0, 4)}</p>
                </div>
                {/* Rating  */}
                <div className='rating text-sm flex items-center gap-1 py-2 px-4 rounded-full bg-black-color-8 border border-black-color-15'>
                    <i className="fa-solid fa-star fa-fw text-red-color-45"></i>
                    <p className='font-medium'>{(vote_average || 0).toFixed(1)}</p>
                </div>
            </div>
        </div>
    )
}

export default MediaCard;