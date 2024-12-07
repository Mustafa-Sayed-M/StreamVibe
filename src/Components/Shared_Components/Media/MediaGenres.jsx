import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { fetchMediaGenresList } from '../../../Utils/api';
import GenresSlider from '../Sliders/GenresSlider';
import MediaGenresSkeleton from '../../Skeletons/MediaGenresSkeleton';

function MediaGenres({ mediaType, page }) {

    // Fetch Genres List:
    const mediaGenresListQuery = useQuery({
        queryKey: [`${mediaType}-genres-list`],
        queryFn: () => fetchMediaGenresList(mediaType),
        staleTime: 600000
    });

    return (
        <section className='genres-slider p-5 rounded-md border border-black-color-15' id='genres'>
            {/* Label */}
            <p className='mb-3 text-grey-color-60'>Find With Genres</p>
            {/* Genres Slider */}
            {
                mediaGenresListQuery.isLoading ? (
                    <MediaGenresSkeleton />
                ) : mediaGenresListQuery.data && mediaGenresListQuery.data.genres.length > 0 ? (
                    <GenresSlider genresList={mediaGenresListQuery.data?.genres || []} page={page} />
                ) : null
            }
        </section>
    )
}

export default MediaGenres;