import React from 'react';
import AppLogo from './Components/AppLogo';
import NavLinks from './Components/NavLinks';
import NavActions from './Components/NavActions/NavActions';
import { useLocation } from 'react-router-dom';

function Nav() {

    const { pathname } = useLocation();

    return (
        <nav className={`transition border-b ${pathname === '/' ? 'absolute top-0 left-0 w-full z-50 border-transparent' : 'sticky z-50 top-0 bg-black-color-8 border-b-black-color-15'}`}>
            <div className='container flex items-center justify-between max-lg:min-h-[80px] lg:min-h-[110px] py-3'>
                {/* App Logo */}
                <AppLogo />
                {/* Nav Links */}
                <NavLinks />
                {/* Nav Actions */}
                <NavActions />
            </div>
        </nav>
    )
}

export default Nav;