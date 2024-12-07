import React from 'react';
import { useSearchParams } from 'react-router-dom';

function SearchSelects() {

    const [searchParams, setSearchParams] = useSearchParams();

    const queryParam = searchParams.get('query');
    const typeParam = searchParams.get('type');
    const yearParam = searchParams.get('year');
    const languageParam = searchParams.get('language');

    const handleSelectChange = (e) => {
        const newParam = new URLSearchParams(searchParams);
        newParam.set(e.target.name, e.target.value);
        if (e.target.name === 'type' && e.target.value !== 'multi') {
            newParam.set('year', 2024);
        } else if (e.target.name === 'type' && e.target.value === 'multi') {
            newParam.delete('year');
        }
        setSearchParams(newParam);
    };

    const handleYearChange = (e) => {
        const newParam = new URLSearchParams(searchParams);
        newParam.set('year', e.target.value);
        setSearchParams(newParam);
    };

    return (
        <div className='search-selects grid sm:grid-cols-2 md:grid-cols-3 gap-3'>
            {/* Type Select */}
            <select
                onChange={handleSelectChange}
                id='type'
                name='type'
                defaultValue={typeParam || 'multi'}
                title={queryParam ? 'Select Media Type 😀' : 'Please Enter a Query Param to Select Media Type 🙄'}
                disabled={!queryParam}
                className={`focus:outline-none rounded-md border border-grey-color-60 p-2 bg-transparent *:text-black ${queryParam ? 'cursor-pointer' : 'cursor-not-allowed'}`}
            >
                <option value={`multi`}>Multi</option>
                <option value={`movie`}>Movies</option>
                <option value={`tv`}>Shows</option>
            </select>
            {/* Year Select */}
            <select
                onChange={handleYearChange}
                id='year'
                name='year'
                defaultValue={yearParam || '2024'}
                title={queryParam && typeParam !== 'multi' ? 'Select Year 😀' : typeParam === 'multi' ? 'This Type Not Support Year Param 💔' : 'Please Enter a Query Param to Select Year 🙄'}
                disabled={!queryParam || typeParam === 'multi'}
                className={`focus:outline-none rounded-md border border-grey-color-60 p-2 bg-transparent *:text-black ${queryParam && typeParam !== 'multi' ? 'cursor-pointer' : 'cursor-not-allowed'}`}
            >
                <option value={`2024`}>2024</option>
                <option value={`2000`}>2000</option>
                <option value={`2001`}>2001</option>
                <option value={`2002`}>2002</option>
                <option value={`2003`}>2003</option>
                <option value={`2004`}>2004</option>
                <option value={`2005`}>2005</option>
                <option value={`2006`}>2006</option>
                <option value={`2007`}>2007</option>
                <option value={`2008`}>2008</option>
                <option value={`2009`}>2009</option>
                <option value={`2010`}>2010</option>
                <option value={`2011`}>2011</option>
                <option value={`2012`}>2012</option>
                <option value={`2013`}>2013</option>
                <option value={`2014`}>2014</option>
                <option value={`2015`}>2015</option>
                <option value={`2016`}>2016</option>
                <option value={`2017`}>2017</option>
                <option value={`2018`}>2018</option>
                <option value={`2019`}>2019</option>
                <option value={`2020`}>2020</option>
                <option value={`2021`}>2021</option>
                <option value={`2022`}>2022</option>
                <option value={`2023`}>2023</option>
            </select>
            {/* Language Select */}
            <select
                onChange={handleSelectChange}
                id='language'
                name='language'
                defaultValue={languageParam || 'en-Us'}
                title={queryParam ? 'Select Media Language 😀' : 'Please Enter a Query Param to Select Media Language 🙄'}
                disabled={!queryParam}
                className={`focus:outline-none rounded-md border border-grey-color-60 p-2 bg-transparent *:text-black ${queryParam ? 'cursor-pointer' : 'cursor-not-allowed'}`}
            >
                <option value={`en`}>English</option>
                <option value={`ar`}>Arabic</option>
            </select>
        </div>
    )
}

export default SearchSelects;