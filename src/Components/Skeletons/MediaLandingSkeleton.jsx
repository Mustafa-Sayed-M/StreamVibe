import React from 'react';

function MediaLandingSkeleton() {
    return (
        <div className='media-landing-skeleton h-[600px] bg-grey-color-60/20 rounded-xl flex items-end'>
            {/* Skeleton Wrapper */}
            <div className='mb-16 space-y-2 w-full flex flex-col items-center'>
                {/* Title */}
                <div className='w-48 h-4 rounded-md bg-grey-color-60/30 animate-pulse'></div>
                {/* Description */}
                <div className='w-96 h-2 rounded-md bg-grey-color-60/30 animate-pulse'></div>
                <div className='w-80 h-2 rounded-md bg-grey-color-60/30 animate-pulse'></div>
                <div className='w-72 h-2 rounded-md bg-grey-color-60/30 animate-pulse'></div>
                {/* Actions */}
                <div className='actions flex items-center justify-center gap-2'>
                    <div className='w-36 h-7 rounded-md bg-grey-color-60/30 animate-pulse'></div>
                    <div className='w-7 h-7 rounded-full bg-grey-color-60/30 animate-pulse'></div>
                    <div className='w-7 h-7 rounded-full bg-grey-color-60/30 animate-pulse'></div>
                    <div className='w-7 h-7 rounded-full bg-grey-color-60/30 animate-pulse'></div>
                </div>
            </div>
        </div>
    )
}

export default MediaLandingSkeleton;