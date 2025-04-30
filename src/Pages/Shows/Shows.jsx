import React from 'react';
import HeaderMediaSlider from '../../Components/Sections/HeaderMediaSlider/HeaderMediaSlider';
import MediaGenres from '../../Components/Sections/MediaGenres';
import DiscoverMedia from '../../Components/Sections/DiscoverMedia';
import MediaTopRated from '../../Components/Sections/MediaTopRated';
import MediaPopular from '../../Components/Sections/MediaPopular';
import MediaOnAir from '../../Components/Sections/MediaOnAir';
import SlidersWrapper from '../../Components/Sections/Components/SlidersWrapper';

function Shows() {
    return (
        <div className='shows-page min-h-screen'>
            {/* Header Media */}
            <HeaderMediaSlider mediaType='tv' />
            {/* Media Genres */}
            <MediaGenres mediaKey={`genres_shows`} mediaType={`tv`} />
            {/* Discover Movies */}
            <DiscoverMedia mediaTitle={`Discover Shows`} mediaKey={`shows`} mediaType={`tv`} />
            {/* Sliders Wrapper */}
            <SlidersWrapper>
                {/* Movies Top Rated */}
                <MediaTopRated
                    mediaType={'tv'}
                    paginationClassname={'shows_top_rated_pagination'}
                    prevClassname={'shows_top_rated_prev_btn'}
                    nextClassname={'shows_top_rated_next_btn'}
                />
                {/* Movies Popular */}
                <MediaPopular
                    mediaType={'tv'}
                    paginationClassname={'shows_popular_pagination'}
                    prevClassname={'shows_popular_prev_btn'}
                    nextClassname={'shows_popular_next_btn'}
                />
                {/* Media On Air */}
                <MediaOnAir
                    mediaType={'tv'}
                    paginationClassname={'shows_on_air_rated_pagination'}
                    prevClassname={'shows_on_air_rated_prev_btn'}
                    nextClassname={'shows_on_air_rated_next_btn'}
                />
            </SlidersWrapper>
        </div>
    )
}

export default Shows;