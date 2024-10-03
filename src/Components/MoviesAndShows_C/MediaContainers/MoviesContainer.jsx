import React from 'react';
import { useSelector } from 'react-redux';
import SliderSkeleton from '../Skeletons/SliderSkeleton';
import MediaSlider from '../MediaSlider';

function MoviesContainer({ activeContainer }) {

    const { moviesData, moviesTrendingNowData, moviesTopRatedData } = useSelector(state => state.movies);

    const mediaType = "movies";

    return (
        <section
            data-aos="fade-up-left"
            className={`movies-container border-2 border-card-color space-y-5 rounded-xl p-3 md:p-5 relative ${activeContainer !== "Movies" && "max-sm:hidden"}`}
        >
            {/* Head Title */}
            <h3 className='absolute hidden sm:block bg-primary-color py-2 px-5 rounded-md -mt-10 left-10 font-medium'>Movies</h3>
            {/* Discover */}
            {moviesData.loading ?
                <SliderSkeleton />
                :
                <MediaSlider mediaType={mediaType} mediaList={moviesData.data.results} titleSlider={"Discover"} />
            }
            {/* Trending Now */}
            {moviesTrendingNowData.loading ?
                <SliderSkeleton />
                :
                <MediaSlider mediaType={mediaType} mediaList={moviesTrendingNowData.data.results} titleSlider={"Trending Now"} />
            }
            {/* Top Rated */}
            {moviesTopRatedData.loading ?
                <SliderSkeleton />
                :
                <MediaSlider mediaType={mediaType} mediaList={moviesTopRatedData.data.results} titleSlider={"Top Rated"} />
            }
        </section>
    )
}

export default MoviesContainer;