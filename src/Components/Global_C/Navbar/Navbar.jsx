import React from 'react';
import NavbarLinks from './Components/NavbarLinks';
import AppLogo from '../../Shared_C/AppLogo';
import NavbarRightBox from './Components/NavbarRightBox';
import NavbarMenu from './Components/NavbarMenu/NavbarMenu';

function Navbar() {
    return (
        <nav className='navbar absolute w-full z-50 left-0 top-0'>
            <div className='container flex items-center justify-between min-h-[60px] py-3 relative'>
                {/* App Logo */}
                <AppLogo />
                {/* Navbar Links */}
                <NavbarLinks />
                {/* Navbar Right Box */}
                <NavbarRightBox />
                {/* Navbar Menu */}
                <NavbarMenu />
            </div>
        </nav>
    )
}

export default Navbar;