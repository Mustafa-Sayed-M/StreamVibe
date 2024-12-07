import React from 'react';

function MediaReviewCard({ reviewData }) {

    const {
        author_details: {
            name,
            username,
            avatar_path,
            rating
        },
        content
    } = reviewData;

    return (
        <div className='p-5 rounded-md bg-black-color-6 border border-black-color-15 space-y-2'>
            {/* Header */}
            <div className='header flex items-center justify-between'>
                {/* Author Info */}
                <div className='author-info flex items-center gap-2'>
                    {/* Author Avatar */}
                    <img
                        src={`https://image.tmdb.org/t/p/w500${avatar_path}`}
                        alt={name || username || 'Author Avatar'}
                        className='rounded-full object-cover h-[35px] w-[35px]'
                    />
                    {/* Text Info */}
                    <div className='text-info'>
                        {/* Author Name */}
                        <h4>{name || `Unknown`}</h4>
                        {/* Author Username */}
                        <p className='text-grey-color-60'>{username}</p>
                    </div>
                </div>
                {/* Rating */}
                <div className='rating py-2 px-4 rounded-full bg-black-color-8 border border-black-color-15'>
                    <span className='text-red-color-45 mr-2'><i className="fa-solid fa-star"></i></span>
                    <span className='text-grey-color-60 font-medium'>{rating || 0}</span>
                </div>
            </div>
            {/* Content */}
            <p className='text-grey-color-60 line-clamp-5'>{content}</p>
        </div>
    )
}

export default MediaReviewCard;