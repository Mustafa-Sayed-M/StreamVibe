import React from 'react';
import { Link } from 'react-router-dom';

const BoxContainer = ({ children, name, icon }) => {
    return (
        <div className='box-container'>
            {/* Head */}
            <div className='head flex items-center gap-2 text-grey-color-60 font-medium mb-3'>
                <i className={`fa-solid fa-${icon} fa-fw text-xl`}></i>
                <span>{name}</span>
            </div>
            {/* Children */}
            {children}
        </div>
    )
};

const ListSkeleton = () => {
    return (
        <ul className='flex items-center gap-2 *:flex-1 *:animate-pulse'>
            {
                Array.from({ length: 4 }).map((_, index) => (<li
                    key={index}
                    className='p-4 rounded-md bg-black-color-8 border border-black-color-15'
                ></li>))
            }
        </ul>
    )
};

function SubDetails({ rowSpanCount, subDetailOrder, mediaData: { spoken_languages, release_date, first_air_date, genres, vote_average, vote_count }, isLoading }) {

    const year = {
        long: release_date || first_air_date || 0,
        short: (release_date || first_air_date || '').slice(0, 4),
    };

    return (
        <div className={`sub-details space-y-5 row-span-4`} style={{ order: subDetailOrder || null, gridRow: `span ${rowSpanCount} / span ${rowSpanCount}` }}>
            {/* Year */}
            <BoxContainer name={'Released Year'} icon={'calendar'}>
                {
                    isLoading ? (
                        <>Loading...</>
                    ) : (
                        <div className='font-semibold' title={year.long}>{year.short}</div>
                    )
                }
            </BoxContainer>
            {/* Languages */}
            <BoxContainer name={'Languages'} icon={'language'}>
                {
                    isLoading ? (
                        <ListSkeleton />
                    ) : (
                        <ul className='flex items-center gap-2 flex-wrap'>
                            {
                                (spoken_languages || []).slice(0, 6).map(({ iso_639_1, name }, index) => (<li key={index}>
                                    <Link
                                        to={`/search?language=${iso_639_1}`}
                                        title={`Search With ${name} Language`}
                                        className='block py-2 px-4 rounded-md bg-black-color-8 border border-black-color-15 sm:hover:bg-black-color-10 transition'
                                    >
                                        {name}
                                    </Link>
                                </li>))
                            }
                        </ul>
                    )
                }
            </BoxContainer>
            {/* Genres */}
            <BoxContainer name={'Genres'} icon={'layer-group'}>
                {
                    isLoading ? (
                        <ListSkeleton />
                    ) : (
                        <ul className='flex items-center gap-2 flex-wrap'>
                            {
                                (genres || []).slice(0, 6).map(({ id, name }, index) => (<li key={index}>
                                    <Link
                                        to={`/movies?genres=${id}`}
                                        title={`Find Movies With ${name} Genre`}
                                        className='block py-2 px-4 rounded-md bg-black-color-8 border border-black-color-15 sm:hover:bg-black-color-10 transition'
                                    >
                                        {name}
                                    </Link>
                                </li>))
                            }
                        </ul>
                    )
                }
            </BoxContainer>
            {/* Rating */}
            {
                (vote_average > 0 || vote_count > 0) && <BoxContainer name={'Ratings'} icon={'star-half-stroke'}>
                    {
                        isLoading ? (
                            <>Loading...</>
                        ) : (
                            <div className='children-container space-y-2 *:flex *:items-center *:justify-between *:gap-2 *:font-semibold *:bg-black-color-8 *:py-2 *:px-4 *:rounded-md *:border *:border-black-color-15'>
                                {/* Vote Average */}
                                {
                                    vote_average > 0 ? (
                                        <div className='vote-average' title='Vote Average'>
                                            {/* List of Stars */}
                                            <ul className='flex items-center gap-0.5'>
                                                {
                                                    Array.from({ length: 5 }).map((_, index) => (<li key={index} className='text-red-color-45'>
                                                        <i className='fa-solid fa-star fa-fw'></i>
                                                    </li>))
                                                }
                                            </ul>
                                            {/* Vote Average */}
                                            <span>{vote_average}</span>
                                        </div>
                                    ) : null
                                }
                                {/* Vote Count */}
                                {
                                    vote_count > 0 ? (
                                        <div className='vote-count' title='Vote Count'>
                                            <span className='text-red-color-45'>Reviews</span>
                                            <span>{vote_count}</span>
                                        </div>
                                    ) : null
                                }
                            </div>
                        )
                    }
                </BoxContainer>
            }
        </div>
    )
}

export default SubDetails;