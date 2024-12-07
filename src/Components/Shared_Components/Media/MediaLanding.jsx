import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { fetchMediaTrendingDay } from '../../../Utils/api';
import LandingSlider from '../Sliders/LandingSlider/LandingSlider';
import MediaLandingSkeleton from '../../Skeletons/MediaLandingSkeleton';

function MediaLanding({ mediaType }) {

    // Fetch Media Trending:
    const mediaTrendingQuery = useQuery({
        queryKey: [`${mediaType}-trending`],
        queryFn: () => fetchMediaTrendingDay(mediaType),
        staleTime: 600000
    });

    return (
        <section className='landing-slider' id='trending'>
            {
                mediaTrendingQuery.isLoading ? (
                    <MediaLandingSkeleton />
                ) : mediaTrendingQuery.data && mediaTrendingQuery.data.results.length > 0 ? (
                    <LandingSlider mediaList={mediaTrendingQuery.data?.results || []} />
                ) : null
            }
        </section>
    )
}

export default MediaLanding;