import React from 'react';

const MediaGridSkeletonCard = () => {
    return (
        <div className='media-grid-skeleton-card bg-black-color-10 border border-black-color-15 p-3 rounded-md space-y-2'>
            {/* Image */}
            <div className='p-3 rounded-md h-64 animate-pulse bg-grey-color-60/30'></div>
            {/* Title */}
            <div className='p-3 rounded-md h-1 w-3/4 animate-pulse bg-grey-color-60/30'></div>
            {/* Foot */}
            <div className='flex items-center justify-between'>
                {/* Year */}
                <div className='p-3 rounded-full w-16 animate-pulse bg-grey-color-60/30'></div>
                {/* Rating */}
                <div className='p-3 rounded-full w-16 animate-pulse bg-grey-color-60/30'></div>
            </div>
        </div>
    )
};

function MediaGridSkeleton() {
    return (
        <div className='media-grid grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4'>
            <MediaGridSkeletonCard />
            <MediaGridSkeletonCard />
            <MediaGridSkeletonCard />
            <MediaGridSkeletonCard />

            <MediaGridSkeletonCard />
            <MediaGridSkeletonCard />
            <MediaGridSkeletonCard />
            <MediaGridSkeletonCard />

            <MediaGridSkeletonCard />
            <MediaGridSkeletonCard />
            <MediaGridSkeletonCard />
            <MediaGridSkeletonCard />

            <MediaGridSkeletonCard />
            <MediaGridSkeletonCard />
            <MediaGridSkeletonCard />
            <MediaGridSkeletonCard />

            <MediaGridSkeletonCard />
            <MediaGridSkeletonCard />
            <MediaGridSkeletonCard />
            <MediaGridSkeletonCard />
        </div>
    )
}

export default MediaGridSkeleton;