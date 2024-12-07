import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { fetchSingleMedia } from '../../Utils/api';
import MediaRecommendations from '../../Components/Shared_Components/Media/MediaRecommendations';
import MediaImages from '../../Components/Shared_Components/Media/MediaImages';
import MediaReviews from '../../Components/Shared_Components/Media/MediaReviews';
import MediaSubInfoCard from '../../Components/Shared_Components/Media/MediaCards/MediaSubInfoCard';
import LazyImage from '../../Components/Shared_Components/LazyImage';
import MediaOverviewCard from '../../Components/Shared_Components/Media/MediaCards/MediaOverviewCard';

function Series() {

    const { seriesId } = useParams();

    // Fetch Media:
    const mediaQuery = useQuery({
        queryKey: [`series-${seriesId}`],
        queryFn: () => fetchSingleMedia(`tv`, seriesId),
        staleTime: 600000
    });

    return (
        <div className={`series-${seriesId} space-y-7`}>
            {/* Landing */}
            {
                mediaQuery.data?.backdrop_path && (
                    <div
                        className='landing relative'
                    >
                        {/* Backdrop Image */}
                        <LazyImage
                            image={{
                                src: `https://image.tmdb.org/t/p/original${mediaQuery.data?.backdrop_path}`,
                                alt: mediaQuery.data?.name
                            }}
                        />
                        {/* Content Wrapper */}
                        <div className='content-wrapper py-7 bg-black/40 h-full flex flex-col justify-end px-4 space-y-3 absolute top-0 left-0 w-full z-10'>
                            {/* Text Box */}
                            <div className='text-box space-y-2 text-center w-full'>
                                <h1 className='sm:text-xl md:text-3xl lg:text-4xl font-semibold'>{mediaQuery.data?.title}</h1>
                                <p className='md:max-w-[600px] mx-auto line-clamp-3 max-sm:text-sm text-grey-color-60'>{mediaQuery.data?.overview}</p>
                            </div>
                            {/* Actions */}
                            <div className='actions w-full flex items-center justify-center gap-2'>
                                {/* Detail Link */}
                                <button
                                    aria-label='Play'
                                    type='button'
                                    title='Play'
                                    className='block py-2 px-4 bg-red-color-45 rounded-md'
                                >
                                    <i className="fa-solid fa-play fa-fw me-2"></i>
                                    <span>Play</span>
                                </button>
                                {/* Add Button */}
                                <button
                                    type='button'
                                    aria-label='Add'
                                    title='Add'
                                    className='bg-black-color-6 border border-black-color-15 rounded-md p-2 sm:hover:bg-black-color-10 transition'
                                >
                                    <i className="fa-solid fa-plus fa-fw"></i>
                                </button>
                                {/* Like Button */}
                                <button
                                    type='button'
                                    aria-label='Like'
                                    title='Like'
                                    className='bg-black-color-6 border border-black-color-15 rounded-md p-2 sm:hover:bg-black-color-10 transition'
                                >
                                    <i className="fa-solid fa-thumbs-up fa-fw"></i>
                                </button>
                                {/* Volume Button */}
                                <button
                                    type='button'
                                    aria-label='Volume'
                                    title='Volume'
                                    className='bg-black-color-6 border border-black-color-15 rounded-md p-2 sm:hover:bg-black-color-10 transition'
                                >
                                    <i className="fa-solid fa-volume-high fa-fw"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                )
            }
            {/* Container */}
            <div className='container py-5 space-y-7'>
                {/* Content Grid */}
                <div className='content-grid grid grid-cols-1 md:grid-cols-3 gap-5 items-start'>
                    {/* Details */}
                    <div className='details md:col-span-2 space-y-5'>
                        {/* Overview */}
                        <MediaOverviewCard overview={mediaQuery.data?.overview} />
                        {/* Images */}
                        <MediaImages mediaType={`tv`} mediaId={seriesId} />
                        {/* Reviews */}
                        <MediaReviews mediaType={`tv`} mediaId={seriesId} />
                    </div>
                    {/* Sub Info */}
                    <MediaSubInfoCard mediaData={mediaQuery.data} />
                </div>
                {/* Media Recommendations */}
                <MediaRecommendations mediaId={seriesId} mediaType={`tv`} />
            </div>
        </div>
    )
}

export default Series;