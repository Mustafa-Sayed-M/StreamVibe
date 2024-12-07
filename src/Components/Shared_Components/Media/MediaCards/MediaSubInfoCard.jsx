import React from 'react';
import { Link } from 'react-router-dom';

function MediaSubInfoCard({ mediaData }) {

    const {
        title,
        release_date,
        first_air_date,
        genres,
        spoken_languages
    } = mediaData || {};

    const boxStyle = `bg-black-color-10 border border-black-color-10 rounded-md p-5`;

    return (
        <div className={`media-sub-info-card ${boxStyle} space-y-5`}>
            {/* Released Year */}
            <div className='released-year'>
                <p className='mb-2'>
                    <i className="fa-solid fa-calendar fa-fw me-2"></i>
                    <span>Released Year</span>
                </p>
                <Link
                    title='Search By Year'
                    to={`/search?media=${title ? "movie" : "series"}&rating=5&language=en&year=${(release_date || first_air_date || "").slice(0, 4)}`}
                    className='sm:hover:text-red-color-45 transition'
                >
                    {(release_date || first_air_date || "").slice(0, 4)}
                </Link>
            </div>
            {/* Available Languages */}
            {
                spoken_languages?.length > 0 && (
                    <div className='available-languages'>
                        <p className='mb-2'>
                            <i className="fa-solid fa-language fa-fw me-2"></i>
                            <span>Available Languages</span>
                        </p>
                        <ul className='flex flex-wrap items-center gap-2'>
                            {spoken_languages?.map((lang, index) => <li
                                key={index}
                                className='bg-black-color-8 border border-black-color-15 p-2 rounded-md'
                            >
                                <Link
                                    title='Search By Language'
                                    to={`/search?type=${title ? "movie" : "tv"}&language=${lang.iso_639_1}&year=${(release_date || first_air_date || "").slice(0, 4)}`}
                                    className='sm:hover:text-red-color-45 transition'
                                >
                                    {lang.english_name}
                                </Link>
                            </li>)}
                        </ul>
                    </div>
                )
            }
            {/* Genres */}
            {
                genres?.length > 0 && (
                    <div className='genres'>
                        <p className='mb-2'>
                            <i className="fa-solid fa-layer-group fa-fw me-2"></i>
                            <span>Genres</span>
                        </p>
                        <ul className='flex flex-wrap items-center gap-2'>
                            {genres?.map((genre, index) => <li
                                key={index}
                                className='bg-black-color-8 border border-black-color-15 p-2 rounded-md'
                            >
                                <Link
                                    title='Find By Genre'
                                    to={`/${title ? "movies" : "shows"}?genre=${genre.id}`}
                                    className='sm:hover:text-red-color-45 transition'
                                >
                                    {genre.name}
                                </Link>
                            </li>)}
                        </ul>
                    </div>
                )
            }
        </div>
    )
}

export default MediaSubInfoCard;