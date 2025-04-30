import { useQuery } from '@tanstack/react-query';
import { fetchTopRated } from '../../Utils/api';
import React from 'react';
import MediaSlider from './Components/MediaSlider/MediaSlider';

function MediaTopRated({ mediaType, paginationClassname, prevClassname, nextClassname }) {

    const { data, isLoading } = useQuery({
        queryKey: [`${mediaType}_top_rated`],
        queryFn: () => fetchTopRated(mediaType),
        refetchOnWindowFocus: false
    });

    return (
        <section className='media-top-rated' id='mediaTopRated'>
            <div className='container'>
                {/* Title */}
                <h2 className='font-semibold mb-3 text-2xl'>Top Rated</h2>
                {/* Media Slider */}
                {
                    isLoading ? (
                        <>Loading...</>
                    ) : (
                        <MediaSlider
                            mediaList={data.results || []}
                            paginationClassname={paginationClassname}
                            prevClassname={prevClassname}
                            nextClassname={nextClassname}
                        />
                    )
                }
            </div>
        </section>
    )
}

export default MediaTopRated;