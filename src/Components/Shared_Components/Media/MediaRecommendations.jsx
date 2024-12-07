import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchMediaRecommendations } from '../../../Utils/api';
import MediaSlider from '../Sliders/MediaSlider';

function MediaRecommendations({ mediaType, mediaId }) {

    // Fetch Media Recommendations:
    const mediaRecommendationsQuery = useQuery({
        queryKey: [`${mediaType}-${mediaId}-recommendations`],
        queryFn: () => fetchMediaRecommendations(mediaType, mediaId),
        staleTime: 600000, // 10 minutes
    });

    if (mediaRecommendationsQuery.data && mediaRecommendationsQuery.data.results.length === 0) return;

    return (
        <section className={`recommendations space-y-2 bg-black-color-10 border border-black-color-10 rounded-md p-5`} id='recommendations'>
            <h3 className='text-grey-color-60'>Recommendations</h3>
            {
                !mediaRecommendationsQuery.isLoading && mediaRecommendationsQuery.data && (
                    <MediaSlider mediaList={mediaRecommendationsQuery.data.results || []} />
                )
            }
        </section>
    )
}

export default MediaRecommendations;