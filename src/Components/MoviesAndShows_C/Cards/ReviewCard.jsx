import React from 'react';

function ReviewCard({ reviewData }) {
    const {
        author_details: {
            name,
            username,
            rating,
        },
        content,
    } = reviewData;

    return (
        <div className='review-card bg-black-color p-3 rounded-md space-y-3 h-full'>
            {/* Reviewer Details */}
            <div className='reviewer-details flex items-center justify-between'>
                {/* Reviewer Info */}
                <div className="reviewer-info space-y-1">
                    <h2 className='font-medium'>{name || "Unknown"}</h2>
                    <p className='text-gray-400 text-sm'>{username}</p>
                </div>
                {/* Reviewer Rating */}
                <div className='reviewer-rating flex items-center gap-2 p-2 rounded-full bg-card-color/50 border border-white/10'>
                    {/* List of Stars */}
                    <ul className='text-primary-color text-sm flex items-center'>
                        <li>
                            <i className="fa-solid fa-star"></i>
                        </li>
                        <li>
                            <i className="fa-solid fa-star"></i>
                        </li>
                        <li>
                            <i className="fa-solid fa-star"></i>
                        </li>
                        <li>
                            <i className="fa-solid fa-star"></i>
                        </li>
                        <li>
                            <i className="fa-solid fa-star"></i>
                        </li>
                    </ul>
                    <p className='font-semibold text-gray-400'>{rating || 0}</p>
                </div>
            </div>
            {/* Review Content */}
            <p className='text-gray-400 line-clamp-6'>{content}</p>
        </div>
    )
}

export default ReviewCard;