import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { discoverMedia } from '../../Utils/api';
import MediaGrid from '../Media/MediaGrid';
import { useSearchParams } from 'react-router-dom';

function DiscoverMedia({ mediaTitle, mediaKey, mediaType }) {

    const [searchParams] = useSearchParams();
    const genresParam = searchParams.get('genres');

    const { data: mediaData, isLoading: mediaIsLoading } = useQuery({
        queryKey: [mediaKey, genresParam],
        queryFn: () => discoverMedia(mediaType, genresParam ? genresParam : null),
        refetchOnWindowFocus: false
    });

    return (
        <section className='discover-media py-7' id='discoverMedia'>
            <div className='container'>
                {/* Media Title */}
                <h2 className='font-semibold mb-3 text-grey-color-60'>{mediaTitle}</h2>
                {/* Media Grid */}
                {
                    mediaIsLoading ? (
                        <>Loading...</>
                    ) : (
                        <MediaGrid mediaList={mediaData.results || []} />
                    )
                }
            </div>
        </section>
    )
}

export default DiscoverMedia;