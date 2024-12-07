import React from 'react';
import Logo from './Components/Logo';
import NavbarLinks from './Components/NavbarLinks';
import NavbarRightBox from './Components/NavbarRightBox';
import NavbarMenuToggler from './Components/NavbarMenuToggler';

function Navbar() {
    return (
        <nav className='sticky top-0 z-50 bg-black-color-8 border-b border-b-black-color-15'>
            <div className='container flex flex-wrap items-center justify-between min-h-[60px] py-3 gap-y-5'>
                {/* Logo */}
                <Logo />
                {/* Navbar Links */}
                <NavbarLinks />
                {/* Box Container */}
                <div className='box-container flex items-center gap-2'>
                    {/* Navbar Right Box */}
                    <NavbarRightBox />
                    {/* Navbar Menu Toggler */}
                    <NavbarMenuToggler />
                </div>
            </div>
        </nav>
    )
}

export default Navbar;