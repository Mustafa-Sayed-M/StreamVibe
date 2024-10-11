import React from 'react';

const SkeletonMediaCard = () => {
    return (
        <div className='skeleton-media-card'>
            <div className='h-72 bg-card-color mb-2 rounded-sm animate-pulse'></div>
            <div className='h-5 bg-card-color mb-2 rounded-sm animate-pulse'></div>
            <div className='flex items-center justify-between'>
                <div className='h-5 w-20 bg-card-color rounded-sm animate-pulse'></div>
                <div className='h-5 w-20 bg-card-color rounded-sm animate-pulse'></div>
            </div>
        </div>
    )
};

function SkeletonMediaGrid() {
    return (
        <div className='skeleton-media-grid grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4'>
            <SkeletonMediaCard />
            <SkeletonMediaCard />
            <SkeletonMediaCard />
            <SkeletonMediaCard />
            <SkeletonMediaCard />

            <SkeletonMediaCard />
            <SkeletonMediaCard />
            <SkeletonMediaCard />
            <SkeletonMediaCard />
            <SkeletonMediaCard />
        </div>
    )
}

export default SkeletonMediaGrid;