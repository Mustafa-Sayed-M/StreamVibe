import React from 'react';
import { NavLink } from 'react-router-dom';

function SearchLink() {
    return (
        <NavLink
            to={`/search`}
            className={({ isActive }) => `text-2xl ${isActive ? 'text-red-color-45' : 'sm:hover:text-red-color-45'} transition`}
        >
            <span className='sr-only'>Search Page</span>
            <i className='fa-solid fa-search fa-fw'></i>
        </NavLink>
    )
}

export default SearchLink;