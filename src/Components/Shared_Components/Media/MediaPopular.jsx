import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchMediaPopular } from '../../../Utils/api';
import MediaSlider from '../Sliders/MediaSlider';

function MediaPopular({ mediaType, title }) {

    // Fetch Media Popular:
    const mediaPopularQuery = useQuery({
        queryKey: [`${mediaType}-popular`],
        queryFn: () => fetchMediaPopular(mediaType),
        staleTime: 600000
    });

    return (
        <section className='movies-popular p-5 rounded-xl border border-black-color-15 pt-10 relative' id='popular'>
            <h1 className='font-semibold text-lg absolute left-3 -top-5 p-1 bg-red-color-45 rounded-md'>{title} Popular</h1>
            {
                !mediaPopularQuery.isLoading && (
                    <MediaSlider title={'Popular Movies'} mediaList={mediaPopularQuery.data?.results || []} />
                )
            }
        </section>
    )
}

export default MediaPopular;