import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMediaTrendingDay, searchMedia } from '../Utils/api';
import MediaGrid from '../Components/Shared_Components/Media/MediaGrid';
import MediaGridSkeleton from '../Components/Skeletons/MediaGridSkeleton';
import FilterSearch from '../Components/Search_Components/FilterSearch/FilterSearch';

function Search() {

    const [searchParams] = useSearchParams();

    const queryParam = searchParams.get(`query`);
    const typeParam = searchParams.get(`type`);
    const yearParam = searchParams.get(`year`);
    const languageParam = searchParams.get(`language`);

    // Fetch Search Media:
    const searchMediaQuery = useQuery({
        queryKey: [`search`, queryParam, typeParam, yearParam, languageParam],
        queryFn: () => searchMedia(queryParam, typeParam, yearParam, languageParam),
        enabled: Boolean((queryParam && typeParam && languageParam)),
        staleTime: 600000
    });

    // Fetch Media Trending Day:
    const mediaTrendingDayQuery = useQuery({
        queryKey: [`movie-trending`],
        queryFn: () => fetchMediaTrendingDay(`movie`),
        staleTime: 600000
    });

    return (
        <div className='search-page pt-5'>
            <div className='container space-y-7'>
                {/* Filter Search */}
                <FilterSearch />
                {/* Box Container */}
                <div className='box-container'>
                    {/* Label */}
                    <p className='mb-2 text-grey-color-60 capitalize'>
                        {searchMediaQuery.data ? `Search Results ( ${typeParam} Media )` : "Trending Now"}
                    </p>
                    {/* Media Grid */}
                    {
                        searchMediaQuery.isLoading ? (
                            <MediaGridSkeleton />
                        ) : mediaTrendingDayQuery.isLoading ? (
                            <MediaGridSkeleton />
                        ) : (
                            <MediaGrid mediaList={searchMediaQuery.data ? searchMediaQuery.data.results : mediaTrendingDayQuery.data ? mediaTrendingDayQuery.data.results : []} />
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Search;