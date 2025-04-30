import React from 'react';
import HeaderMediaSlider from '../../Components/Sections/HeaderMediaSlider/HeaderMediaSlider';
import MediaGenres from '../../Components/Sections/MediaGenres';
import DiscoverMedia from '../../Components/Sections/DiscoverMedia';
import MediaTopRated from '../../Components/Sections/MediaTopRated';
import MediaPopular from '../../Components/Sections/MediaPopular';
import MediaUpcoming from '../../Components/Sections/MediaUpcoming';
import SlidersWrapper from '../../Components/Sections/Components/SlidersWrapper';

function Movies() {
    return (
        <div className='movies-page min-h-screen'>
            {/* Header Media */}
            <HeaderMediaSlider mediaType='movie' />
            {/* Media Genres */}
            <MediaGenres mediaKey={`genres_movies`} mediaType={`movie`} />
            {/* Discover Movies */}
            <DiscoverMedia mediaTitle={`Discover Movies`} mediaKey={`movies`} mediaType={`movie`} />
            {/* Sliders Wrapper */}
            <SlidersWrapper>
                {/* Movies Top Rated */}
                <MediaTopRated
                    mediaType={'movie'}
                    paginationClassname={'movie_top_rated_pagination'}
                    prevClassname={'movie_top_rated_prev_btn'}
                    nextClassname={'movie_top_rated_next_btn'}
                />
                {/* Movies Popular */}
                <MediaPopular
                    mediaType={'movie'}
                    paginationClassname={'movie_popular_pagination'}
                    prevClassname={'movie_popular_prev_btn'}
                    nextClassname={'movie_popular_next_btn'}
                />
                {/* Movies Upcoming */}
                <MediaUpcoming
                    mediaType={'movie'}
                    paginationClassname={'movie_upcoming_pagination'}
                    prevClassname={'movie_upcoming_prev_btn'}
                    nextClassname={'movie_upcoming_next_btn'}
                />
            </SlidersWrapper>
        </div>
    )
}

export default Movies;