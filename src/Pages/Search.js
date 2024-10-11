import React, { useCallback, useEffect } from 'react';
import SearchHeader from '../Components/Search/SearchHeader';
import { SEARCH_API } from '../Store/slices/searchSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import MediaGrid from '../Components/Shared_C/Media/MediaGrid';
import SkeletonMediaGrid from '../Components/MoviesAndShows_C/Skeletons/SkeletonMediaGrid';

function Search() {

    const { results, loading } = useSelector(state => state.search);

    const dispatch = useDispatch();
    const [searchParams] = useSearchParams();

    const QUERY_PARM = searchParams.get('query');

    const SearchTrigger = useCallback(() => {
        dispatch(SEARCH_API({
            page: '1',
            year: searchParams.get('year'),
            query: searchParams.get('query'),
            type: searchParams.get('type'),
        }));
    }, [dispatch, searchParams]);

    useEffect(() => {
        if (QUERY_PARM) SearchTrigger();
    }, [QUERY_PARM, SearchTrigger]);

    return (
        <div className='search-page pt-20 pb-10'>
            <div className='container space-y-5'>
                {/* Search Header */}
                <SearchHeader />
                {/* Display Media */}
                <div className='display-media space-y-3'>
                    {/* Heading */}
                    <h1 className='font-bold text-2xl'>{results.length > 0 ? "Search Results" : "Other Content"}</h1>
                    {
                        results.length > 0 ? (
                            loading ? (
                                <SkeletonMediaGrid />
                            ) : (
                                <MediaGrid mediaList={results || []} />
                            )
                        ) : (
                            "Other Content"
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Search;