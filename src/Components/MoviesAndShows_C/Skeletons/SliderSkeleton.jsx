import React from 'react';

const SlideSkeleton = () => {
    return (
        <div className='slide-skeleton p-3 rounded-md bg-card-color shadow-md space-y-2'>
            {/* Poster */}
            <div className='poster h-80 bg-primary-color/20 animate-pulse rounded-md'></div>
            {/* Others */}
            <div className='poster w-3/4 h-5 bg-primary-color/20 animate-pulse rounded-md'></div>
            <div className='poster w-1/2 h-5 bg-primary-color/20 animate-pulse rounded-md'></div>
        </div>
    )
}

function SliderSkeleton() {
    return (
        <div className='slider-skeleton py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3'>
            <SlideSkeleton />
            <SlideSkeleton />
            <SlideSkeleton />
            <SlideSkeleton />
        </div>
    )
}

export default SliderSkeleton;