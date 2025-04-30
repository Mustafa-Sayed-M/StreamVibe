import React from 'react';
import { useParams } from 'react-router-dom';
import HeaderMediaDetails from '../../../Components/Sections/HeaderMediaDetails/HeaderMediaDetails';
import MediaDetails from '../../../Components/Sections/MediaDetails/MediaDetails';
import { useQuery } from '@tanstack/react-query';
import { fetchSingleMedia } from '../../../Utils/api';
import ShowSeasons from '../../../Components/Sections/MediaDetails/Components/ShowSeasons/ShowSeasons';
import MediaRecommendations from '../../../Components/Sections/MediaRecommendations';

function Show() {

    const { showId } = useParams();

    const { data: mainData, isLoading: mainDataIsLoading } = useQuery({
        queryKey: [`show_${showId}`],
        queryFn: () => fetchSingleMedia('tv', showId),
        refetchOnWindowFocus: false
    });

    return (
        <div className='show-page min-h-screen'>
            {/* Header */}
            <HeaderMediaDetails
                mainData={mainData}
                mainDataIsLoading={mainDataIsLoading}
            />
            {/* Details Media */}
            <MediaDetails
                rowSpanCount={5}
                mediaType={'tv'}
                mediaId={showId}
                mainData={mainData}
                subDetailOrder={-1}
                mainDataIsLoading={mainDataIsLoading}
            >
                {/* Show Seasons */}
                <ShowSeasons
                    seasonsData={mainData ? mainData.seasons : []}
                    mainDataIsLoading={mainDataIsLoading}
                />
            </MediaDetails>
            {/* Media Recommendations */}
            <MediaRecommendations mediaType={'tv'} mediaId={showId} />
        </div>
    )
}

export default Show;