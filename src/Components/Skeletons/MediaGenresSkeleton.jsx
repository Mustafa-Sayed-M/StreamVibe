import React from 'react';

const MediaGenresSkeletonCard = ({ className }) => {
    return <div className={`bg-grey-color-60/20 animate-pulse rounded-full h-10 w-full ${className}`}></div>;
};

function MediaGenresSkeleton() {
    return (
        <div className='media-genres-skeleton flex items-center gap-2'>
            {/* Prev */}
            <div className='bg-grey-color-60/20 animate-pulse rounded-full w-10 h-10 leading-10 text-center'></div>
            {/* Swiper */}
            <div className='flex items-center gap-2 w-full'>
                <MediaGenresSkeletonCard />
                <MediaGenresSkeletonCard />
                <MediaGenresSkeletonCard className={`max-sm:hidden max-md:hidden`} />
                <MediaGenresSkeletonCard className={`max-sm:hidden max-md:hidden max-lg:hidden`} />
                <MediaGenresSkeletonCard className={`max-sm:hidden`} />
            </div>
            {/* Next */}
            <div className='bg-grey-color-60/30 animate-pulse rounded-full w-10 h-10 leading-10 text-center'></div>
        </div>
    )
}

export default MediaGenresSkeleton;