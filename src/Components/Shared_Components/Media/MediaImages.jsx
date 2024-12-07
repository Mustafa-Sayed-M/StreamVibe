import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { fetchMediaImages } from '../../../Utils/api';
import ImagesSlider from '../Sliders/ImagesSlider';

function MediaImages({ mediaType, mediaId }) {

    // Fetch Media Images:
    const mediaQuery = useQuery({
        queryKey: [`${mediaType}-${mediaId}-images`],
        queryFn: () => fetchMediaImages(mediaType, mediaId),
        staleTime: 600000, // 10 minutes
    });

    if (mediaQuery.data && mediaQuery.data.backdrops.length === 0) return;

    return (
        <section className={`images space-y-2 bg-black-color-10 border border-black-color-10 rounded-md p-5`} id='images'>
            <h3 className='text-grey-color-60'>Images</h3>
            {/* Images Slider */}
            {
                mediaQuery.data && (
                    <ImagesSlider imagesList={mediaQuery.data.backdrops || []} />
                )
            }
        </section>
    )
}

export default MediaImages;