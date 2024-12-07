import React from 'react';
import MediaSlider from '../Sliders/MediaSlider';
import { useQuery } from '@tanstack/react-query';
import { fetchMediaTopRated } from '../../../Utils/api';

function MediaTopRated({ mediaType, title }) {

    // Fetch Top Rated Movies:
    const mediaTopRatedQuery = useQuery({
        queryKey: [`${mediaType}-top-rated`],
        queryFn: () => fetchMediaTopRated(mediaType),
        staleTime: 600000
    });

    return (
        <section className='movies-top-rated p-5 rounded-xl border border-black-color-15 pt-10 relative' id='top-rated'>
            <h1 className='font-semibold text-lg absolute left-3 -top-5 p-1 bg-red-color-45 rounded-md'>{title} Top Rated</h1>
            {/* Media Slider */}
            {
                !mediaTopRatedQuery.isLoading && (
                    <MediaSlider title={'Top Rated Movies'} mediaList={mediaTopRatedQuery.data?.results || []} />
                )
            }
        </section>
    )
}

export default MediaTopRated;