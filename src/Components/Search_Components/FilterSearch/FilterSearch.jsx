import React from 'react';
import SearchQuery from './Components/SearchQuery';
import SearchSelects from './Components/SearchSelects';

function FilterSearch() {
    return (
        <div className='filter-search space-y-3'>
            {/* Search Query */}
            <SearchQuery />
            {/* Search Selects */}
            <SearchSelects />
        </div>
    )
}

export default FilterSearch;