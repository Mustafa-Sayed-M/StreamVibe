import React from 'react';
import ReviewsSlider from '../Sliders/ReviewsSlider';
import { useQuery } from '@tanstack/react-query';
import { fetchMediaReviews } from '../../../Utils/api';

function MediaReviews({ mediaType, mediaId }) {

    // Fetch Media Reviews:
    const mediaReviewsQuery = useQuery({
        queryKey: [`${mediaType}-${mediaId}-reviews`],
        queryFn: () => fetchMediaReviews(mediaType, mediaId),
        staleTime: 600000, // 10 minutes
    });

    if (mediaReviewsQuery.data && mediaReviewsQuery.data.results.length === 0) return;

    return (
        <section className={`reviews space-y-2 bg-black-color-10 border border-black-color-10 rounded-md p-5`} id='reviews'>
            <h3 className='text-grey-color-60'>Reviews</h3>
            {/* Reviews Slider */}
            <ReviewsSlider reviews={mediaReviewsQuery.data?.results || []} />
        </section>
    )
}

export default MediaReviews;