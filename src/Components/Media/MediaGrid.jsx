import React from 'react';
import MediaCard from './Components/MediaCard';

function MediaGrid({ mediaList }) {
    return (
        <div className='media-grid grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5'>
            {
                mediaList.map((media, index) => <MediaCard index={index} mediaData={media} key={index} />)
            }
        </div>
    )
}

export default MediaGrid;