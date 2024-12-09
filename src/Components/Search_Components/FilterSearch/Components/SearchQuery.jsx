import React from 'react';
import { useSearchParams } from 'react-router-dom';

function SearchQuery() {

    const [searchParams, setSearchParams] = useSearchParams();

    const [inputQueryValue, setInputQueryValue] = React.useState(null);

    const handleChange = (e) => {
        const value = e.target.value;
        if (value) {
            setInputQueryValue(value);
        } else {
            const newParam = new URLSearchParams(searchParams);
            newParam.delete('query');
            newParam.delete('type');
            newParam.delete('year');
            newParam.delete('language');
            setSearchParams(newParam);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputQueryValue) {
            const newParam = new URLSearchParams(searchParams);
            newParam.set('query', inputQueryValue);
            newParam.set('type', searchParams.get('type') || 'multi');
            newParam.set('language', searchParams.get('language') || 'en-US');
            setSearchParams(newParam);
        }
    };

    return (
        <form className='search-query flex gap-3' onSubmit={handleSubmit}>
            {/* Search Input */}
            <input
                id='search-query'
                name='search-query'
                type='text'
                required
                defaultValue={searchParams.get('query')}
                placeholder='Enter a search term...'
                onChange={handleChange}
                className='focus:outline-none w-full rounded-md p-2 bg-transparent border border-grey-color-60 focus:border-red-color-45 transition'
            />
            {/* Submit Button */}
            <button
                title=''
                aria-label=''
                type='submit'
                className='bg-red-color-45 py-2 px-4 rounded-md sm:hover:bg-white sm:hover:text-red-color-45 font-medium transition'
            >
                Search
            </button>
        </form>
    )
}

export default SearchQuery;
