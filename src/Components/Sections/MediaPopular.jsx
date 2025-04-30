import React from 'react';
import { fetchPopular } from '../../Utils/api';
import { useQuery } from '@tanstack/react-query';
import MediaSlider from './Components/MediaSlider/MediaSlider';

function MediaPopular({ mediaType, paginationClassname, prevClassname, nextClassname }) {
    const { data, isLoading } = useQuery({
        queryKey: [`${mediaType}_popular`],
        queryFn: () => fetchPopular(mediaType),
        refetchOnWindowFocus: false
    });

    return (
        <section className='media-popular' id='mediaPopular'>
            <div className='container'>
                {/* Title */}
                <h2 className='font-semibold mb-3 text-2xl'>Popular</h2>
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

export default MediaPopular;