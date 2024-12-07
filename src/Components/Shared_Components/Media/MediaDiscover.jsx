import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchDiscoverMedia } from '../../../Utils/api';
import MediaGridSkeleton from '../../Skeletons/MediaGridSkeleton';
import MediaGrid from './MediaGrid';

function MediaDiscover({ mediaType, title }) {

    const [searchParams] = useSearchParams();

    const genreParam = searchParams.get('genre') || '';

    // Fetch Media:
    const mediaQuery = useQuery({
        queryKey: [mediaType, genreParam],
        queryFn: () => fetchDiscoverMedia(mediaType, genreParam),
        staleTime: 600000
    });

    return (
        <section className='media-grid' id='media-grid'>
            <p className='mb-2 text-grey-color-60'>{title}</p>
            {/* Content Grid */}
            {
                mediaQuery.isLoading ? (
                    <MediaGridSkeleton />
                ) : mediaQuery.data && mediaQuery.data.results.length > 0 ? (
                    <MediaGrid mediaList={mediaQuery.data.results || []} />
                ) : null
            }
        </section>
    )
}

export default MediaDiscover;