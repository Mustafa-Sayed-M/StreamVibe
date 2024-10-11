import React from 'react';
import MediaCard from './MediaCard';

function MediaGrid({ mediaList }) {
    return (
        <div className='media-grid grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4'>
            {mediaList.map((mediaItem, index) => <MediaCard key={index} mediaData={mediaItem} />)}
        </div>
    )
}

export default MediaGrid;