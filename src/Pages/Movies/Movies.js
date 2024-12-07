import React from 'react';
import MediaLanding from '../../Components/Shared_Components/Media/MediaLanding';
import MediaGenres from '../../Components/Shared_Components/Media/MediaGenres';
import MediaTopRated from '../../Components/Shared_Components/Media/MediaTopRated';
import MediaPopular from '../../Components/Shared_Components/Media/MediaPopular';
import MediaDiscover from '../../Components/Shared_Components/Media/MediaDiscover';

function Movies() {
    return (
        <div className='movies-page pt-7'>
            <div className='container space-y-7'>
                {/* Media Landing */}
                <MediaLanding mediaType={`movie`} />
                {/* Media Genres */}
                <MediaGenres page={`movies`} mediaType={`movie`} />
                {/* Media Discover */}
                <MediaDiscover mediaType={`movie`} title={`Movies`} />
                {/* Media Top Rated */}
                <MediaTopRated mediaType={`movie`} title={`Movies`} />
                {/* Media Popular */}
                <MediaPopular mediaType={`movie`} title={`Movies`} />
            </div>
        </div>
    )
}

export default Movies;