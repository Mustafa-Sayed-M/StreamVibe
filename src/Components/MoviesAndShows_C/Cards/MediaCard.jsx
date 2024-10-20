import React from 'react';
import LazyImage from '../../Shared_C/LazyImage';
import { endpoints } from '../../../Api/endpoints';
import { Link } from 'react-router-dom';

function MediaCard({ mediaData }) {

  const {
    id,
    title,
    name,
    poster_path,
    vote_average,
    first_air_date,
    release_date
  } = mediaData;

  return (
    <div className='p-3 rounded-md bg-card-color shadow-md'>
      {/* Poster Media */}
      <Link
        to={`/movies-and-shows/${title ? "movie" : "series"}/${id}`}
        className='poster-media block mb-3'
      >
        <LazyImage
          image={{
            src: `${endpoints.IMAGE}${endpoints.POSTER}${poster_path}`,
            alt: title || name,
            className: "rounded-md",
            effect: "blur"
          }}
        />
      </Link>
      {/* Title or Name Media */}
      <h2 className='line-clamp-1 mb-3 font-medium'>{title || name}</h2>
      {/* Foot Info Media */}
      <div className='foot-info flex items-center justify-between font-medium text-sm'>
        {/* Year Date Media */}
        <div className='year-date bg-body-color text-gray-color py-2 px-3 rounded-full flex items-center gap-1'>
          <i className="fa-solid fa-calendar-days fa-fw"></i>
          <p>{(first_air_date || release_date || "").toString().slice(0, 4)}</p>
        </div>
        {/* Rating Media */}
        <div className='year-date bg-body-color text-gray-color py-2 px-3 rounded-full flex items-center gap-1'>
          {/* Icon Star */}
          <i className="fa-solid fa-star text-primary-color"></i>
          {/* Vote Average */}
          <span>{vote_average.toString().length > 3 ? vote_average.toFixed(1) : vote_average}</span>
        </div>
      </div>
    </div>
  )
}

export default MediaCard;
