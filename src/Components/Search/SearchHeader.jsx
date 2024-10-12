import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

function SearchHeader() {

    const [query, setQuery] = useState(null);
    const [searchParams, setSearchParams] = useSearchParams();

    // Make a New Url Search Params:
    const newParam = new URLSearchParams(searchParams);

    // Handle Query Change:
    const handleQueryChange = (e) => {
        if (e.target.value) {
            setQuery(e.target.value);
        } else {
            newParam.delete('query');
            setSearchParams(newParam);
        }
    };

    // Handle Select Change:
    const handleSelectChange = (e) => {
        if (e.target.value) {
            newParam.set(e.target.name, e.target.value);
            setSearchParams(newParam);
        } else {
            newParam.delete(e.target.name);
            setSearchParams(newParam);
        }
    };

    // Handle Form Submission:
    const handleSubmit = (e) => {
        e.preventDefault();
        if (query) {
            newParam.set('query', query);
            setSearchParams(newParam);
        }
    };

    return (
        <div className='search-header'>
            <form onSubmit={handleSubmit} className='space-y-5'>
                {/* Input Query */}
                <div className='input-query flex gap-2'>
                    <input
                        required
                        type='text'
                        id='input-query'
                        defaultValue={searchParams.get('query')}
                        name='input-query'
                        placeholder='Search...'
                        className='focus:outline-none w-full rounded-md p-2 text-black-color font-medium border-2 focus:border-primary-color transition-colors'
                        onChange={handleQueryChange}
                    />
                    {/* Submit */}
                    <button
                        type='submit'
                        title='Search'
                        aria-label='Submit'
                        className='py-2 px-4 bg-primary-color rounded-md sm:hover:bg-white sm:hover:text-primary-color transition-colors'
                    >
                        Search
                    </button>
                </div>
                {/* Selects */}
                <div className='selects grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3'>
                    {/* Select Type */}
                    <div className='select-type flex items-center gap-2'>
                        {/* Icon */}
                        <label htmlFor='type' className='cursor-pointer'>
                            <i className="fa-solid fa-photo-film fa-fw text-xl"></i>
                        </label>
                        {/* Select */}
                        <select
                            name='type'
                            id='type'
                            defaultValue={searchParams.get('type')}
                            onChange={handleSelectChange}
                            className='focus:outline-none w-full rounded-md p-2 text-black-color font-medium border-2 focus:border-primary-color transition-colors cursor-pointer'
                        >
                            <option value={'movie'}>Movies</option>
                            <option value={'tv'}>Tv Shows</option>
                            <option value={'multi'}>Multi</option>
                        </select>
                    </div>
                    {/* Select Year */}
                    <div className='select-year flex items-center gap-2'>
                        {/* Icon */}
                        <label htmlFor='year' className='cursor-pointer'>
                            <i className="fa-regular fa-calendar fa-fw text-xl"></i>
                        </label>
                        {/* Select */}
                        <select
                            id='year'
                            name='year'
                            defaultValue={searchParams.get('year')}
                            onChange={handleSelectChange}
                            className='focus:outline-none w-full rounded-md p-2 text-black-color font-medium border-2 focus:border-primary-color transition-colors cursor-pointer'
                        >
                            <option value={''}>No</option>
                            <option value={'2000'}>2000</option>
                            <option value={'2001'}>2001</option>
                            <option value={'2002'}>2002</option>
                            <option value={'2003'}>2003</option>
                            <option value={'2004'}>2004</option>
                            <option value={'2005'}>2005</option>
                            <option value={'2006'}>2006</option>
                            <option value={'2007'}>2007</option>
                            <option value={'2008'}>2008</option>
                            <option value={'2009'}>2009</option>
                            <option value={'2010'}>2010</option>
                            <option value={'2011'}>2011</option>
                            <option value={'2012'}>2012</option>
                            <option value={'2013'}>2013</option>
                            <option value={'2014'}>2014</option>
                            <option value={'2015'}>2015</option>
                            <option value={'2016'}>2016</option>
                            <option value={'2017'}>2017</option>
                            <option value={'2018'}>2018</option>
                            <option value={'2019'}>2019</option>
                            <option value={'2020'}>2020</option>
                            <option value={'2021'}>2021</option>
                            <option value={'2022'}>2022</option>
                            <option value={'2023'}>2023</option>
                            <option value={'2024'}>2024</option>
                        </select>
                    </div>
                    {/* Language */}
                    <div className='select-lang flex items-center gap-2'>
                        {/* Icon */}
                        <label htmlFor='lang' className='cursor-pointer'>
                            <i className="fa-solid fa-language fa-fw text-xl"></i>
                        </label>
                        {/* Select */}
                        <select
                            id='lang'
                            name='lang'
                            defaultValue={searchParams.get('lang')}
                            onChange={handleSelectChange}
                            className='focus:outline-none w-full rounded-md p-2 text-black-color font-medium border-2 focus:border-primary-color transition-colors cursor-pointer'
                        >
                            <option value={'en-Us'}>English</option>
                            <option value={'ar-EG'}>Arabic</option>
                        </select>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default SearchHeader;