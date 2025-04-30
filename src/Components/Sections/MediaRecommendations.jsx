import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { fetchRecommendations } from '../../Utils/api';
import MediaSlider from './Components/MediaSlider/MediaSlider';

function MediaRecommendations({ mediaType, mediaId }) {

    const { data, isLoading } = useQuery({
        queryKey: [`${mediaType}_recommendations`],
        queryFn: () => fetchRecommendations(mediaType, mediaId),
        refetchOnWindowFocus: false
    });

    return (
        <section className='media-recommendations py-5' id='mediaRecommendations'>
            <div className='container'>
                {/* Title */}
                <h2 className='font-semibold mb-3 text-2xl'>Recommendations</h2>
                {/* Media Slider */}
                {
                    isLoading ? (
                        <>Loading...</>
                    ) : (
                        <MediaSlider mediaList={data.results || []} />
                    )
                }
            </div>
        </section>
    )
}

export default MediaRecommendations;