import React from 'react';
import MediaLanding from '../../Components/Shared_Components/Media/MediaLanding';
import MediaGenres from '../../Components/Shared_Components/Media/MediaGenres';
import MediaTopRated from '../../Components/Shared_Components/Media/MediaTopRated';
import MediaPopular from '../../Components/Shared_Components/Media/MediaPopular';
import MediaDiscover from '../../Components/Shared_Components/Media/MediaDiscover';

function Shows() {
    return (
        <div className='shows-page pt-7'>
            <div className='container space-y-7'>
                {/* Media Landing */}
                <MediaLanding mediaType={`tv`} />
                {/* Media Genres */}
                <MediaGenres page={`shows`} mediaType={`tv`} />
                {/* Media Discover */}
                <MediaDiscover mediaType={`tv`} title={`Shows`} />
                {/* Media Top Rated */}
                <MediaTopRated mediaType={`tv`} title={`Shows`} />
                {/* Media Popular */}
                <MediaPopular mediaType={`tv`} title={`Shows`} />
            </div>
        </div>
    )
}

export default Shows;