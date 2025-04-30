import React from 'react';
import { useParams } from 'react-router-dom';
import HeaderMediaDetails from '../../../Components/Sections/HeaderMediaDetails/HeaderMediaDetails';
import MediaDetails from '../../../Components/Sections/MediaDetails/MediaDetails';
import { useQuery } from '@tanstack/react-query';
import { fetchSingleMedia } from '../../../Utils/api';
import MediaRecommendations from '../../../Components/Sections/MediaRecommendations';

function Movie() {

    const { movieId } = useParams();

    const { data: mainData, isLoading: mainDataIsLoading } = useQuery({
        queryKey: [`movie_${movieId}`],
        queryFn: () => fetchSingleMedia('movie', movieId),
        refetchOnWindowFocus: false
    });

    return (
        <div className='movie-page min-h-screen'>
            {/* Header */}
            <HeaderMediaDetails mainData={mainData} mainDataIsLoading={mainDataIsLoading} />
            {/* Details Media */}
            <MediaDetails
                rowSpanCount={4}
                mediaType={'movie'}
                mediaId={movieId}
                mainData={mainData}
                mainDataIsLoading={mainDataIsLoading}
            />
            {/* Media Recommendations */}
            <MediaRecommendations mediaType={'movie'} mediaId={movieId} />
        </div>
    )
}

export default Movie;