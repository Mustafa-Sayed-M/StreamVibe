import React from 'react';

function MediaDetails({ mediaData }) {

    const {
        release_date,
        first_air_date,
        spoken_languages,
        vote_average,
        genres,
    } = mediaData;

    return (
        <div className='media-details bg-card-color p-3 rounded-md space-y-4 row-span-3' data-aos="fade-left">
            {/* Released Date */}
            <div className='released-date space-y-2'>
                {/* Head */}
                <div className="icon text-gray-400 mb-2">
                    <i className="fa-regular fa-calendar fa-fw me-2"></i>
                    <span>Released Year</span>
                </div>
                <p className='font-semibold'>{(release_date || first_air_date)?.toString().slice(0, 4)}</p>
            </div>

            {/* Spoken Languages */}
            <div className='spoken-languages space-y-2'>
                {/* Head */}
                <div className="icon text-gray-400 mb-2">
                    <i className="fa-solid fa-language fa-fw me-2"></i>
                    <span>Available Languages</span>
                </div>
                {/* List of Languages */}
                <ul className='flex items-center gap-2 flex-wrap'>
                    {spoken_languages?.map((lang, index) => <li
                        key={index}
                        className='bg-black-color p-2 rounded-md'
                    >
                        {lang.english_name}
                    </li>)}
                </ul>
            </div>

            {/* Rating */}
            <div className='rating space-y-2'>
                {/* Head */}
                <div className="icon text-gray-400 mb-2">
                    <i className="fa-regular fa-star me-2 fa-fw"></i>
                    <span>Rating</span>
                </div>
                {/* Body */}
                <div className="body flex items-center gap-2">
                    {/* List of Stars */}
                    <ul className='text-primary-color flex items-center'>
                        <li>
                            <i className="fa-solid fa-star fa-fw"></i>
                        </li>
                        <li>
                            <i className="fa-solid fa-star fa-fw"></i>
                        </li>
                        <li>
                            <i className="fa-solid fa-star fa-fw"></i>
                        </li>
                        <li>
                            <i className="fa-solid fa-star fa-fw"></i>
                        </li>
                        <li>
                            <i className="fa-solid fa-star fa-fw"></i>
                        </li>
                    </ul>
                    <p className='font-semibold'>{vote_average?.toString().length > 3 ? vote_average.toFixed(1) : vote_average}</p>
                </div>
            </div>

            {/* Genres */}
            <div className='genres space-y-2'>
                {/* Head */}
                <div className="icon text-gray-400 mb-2">
                    <i className="fa-solid fa-grip-vertical fa-fw me-2"></i>
                    <span>Genres</span>
                </div>
                {/* List of Genres */}
                <ul className='flex items-center gap-2 flex-wrap'>
                    {genres?.map((genre, index) => <li
                        key={index}
                        className='bg-black-color p-2 rounded-md'
                    >
                        {genre.name}
                    </li>)}
                </ul>
            </div>
        </div>
    )
}

export default MediaDetails;