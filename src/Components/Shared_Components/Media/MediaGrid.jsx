import React from 'react';
import MediaCard from './MediaCards/MediaCard';

function MediaGrid({ mediaList }) {
    return (
        <div className='content-grid grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4'>
            {mediaList.map((media, index) => <MediaCard index={index} key={index} mediaData={media} />)}
        </div>
    )
}

export default MediaGrid;