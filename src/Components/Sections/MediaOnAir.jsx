import { useQuery } from '@tanstack/react-query';
import { fetchOnAir } from '../../Utils/api';
import React from 'react';
import MediaSlider from './Components/MediaSlider/MediaSlider';

function MediaOnAir({ mediaType, paginationClassname, prevClassname, nextClassname }) {
    const { data, isLoading } = useQuery({
        queryKey: [`${mediaType}_on_air`],
        queryFn: () => fetchOnAir(mediaType),
        refetchOnWindowFocus: false
    });

    return (
        <section className='media-on-air' id='mediaOnAir'>
            <div className='container'>
                {/* Title */}
                <h2 className='font-semibold mb-3 text-2xl'>On Air</h2>
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

export default MediaOnAir;