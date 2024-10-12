import React from 'react';
import { useSelector } from 'react-redux';
import SliderSkeleton from '../Skeletons/SliderSkeleton';
import MediaSlider from '../MediaSlider';

function TvContainer({ activeContainer }) {

    const { tvData, tvTrendingNowData, tvTopRatedData } = useSelector(state => state.tv);

    const mediaType = "shows";

    return (
        <section
            data-aos="fade-up-left"
            className={`tv-container border-2 border-card-color rounded-xl p-3 md:p-5 relative ${activeContainer !== "Shows" && "max-sm:hidden"}`}
        >
            {/* Head Title */}
            <h3 className='absolute hidden sm:block bg-primary-color py-2 px-5 rounded-md -mt-10 left-10 font-medium'>Shows</h3>
            {/* Discover */}
            {tvData.loading ?
                <SliderSkeleton />
                :
                <MediaSlider mediaType={mediaType} mediaList={tvData.data.results} titleSlider={"Discover"} />
            }
            {/* Trending Now */}
            {tvTrendingNowData.loading ?
                <SliderSkeleton />
                :
                <MediaSlider mediaType={mediaType} mediaList={tvTrendingNowData.data.results} titleSlider={"Trending Now"} />
            }
            {/* Top Rated */}
            {tvTopRatedData.loading ?
                <SliderSkeleton />
                :
                <MediaSlider mediaType={mediaType} mediaList={tvTopRatedData.data.results} titleSlider={"Top Rated"} />
            }
        </section>
    )
}

export default TvContainer;