import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchUpcoming } from '../../Utils/api';
import MediaSlider from './Components/MediaSlider/MediaSlider';

function MediaUpcoming({ mediaType, paginationClassname, prevClassname, nextClassname }) {
    const { data, isLoading } = useQuery({
        queryKey: [`${mediaType}_upcoming`],
        queryFn: () => fetchUpcoming(mediaType),
        refetchOnWindowFocus: false
    });

    return (
        <section className='media-upcoming' id='mediaUpcoming'>
            <div className='container'>
                {/* Title */}
                <h2 className='font-semibold mb-3 text-2xl'>Upcoming</h2>
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

export default MediaUpcoming;