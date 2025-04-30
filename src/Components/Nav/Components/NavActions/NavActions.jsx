// Components/NavActions.jsx
import React from 'react';
import SearchLink from './Components/SearchLink';
import Notifications from './Components/Notifications';
import NavMenuToggler from './Components/NavMenuToggler';

function NavActions() {
    return (
        <div className='flex items-center gap-2'>
            {/* Search Link */}
            <SearchLink />
            {/* Notifications */}
            <Notifications />
            {/* Nav Menu Toggler */}
            <NavMenuToggler />
        </div>
    );
}

export default NavActions;