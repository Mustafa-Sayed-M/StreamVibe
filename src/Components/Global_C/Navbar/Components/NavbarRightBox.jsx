import React from 'react';
import { Link } from 'react-router-dom';
import NavbarMenuToggler from './NavbarMenu/NavbarMenuToggler';

function NavbarRightBox() {
    return (
        <div className='navbar-right-box flex items-center gap-2'>
            {/* Search Link */}
            <Link
                to='/search'
                className='text-xl'
            >
                <i className="fa-solid fa-magnifying-glass fa-fw"></i>
            </Link>
            {/* Notifications Button */}
            <button
                title='Notifications'
                aria-label='Notifications'
                type='button'
                className='text-xl'
            >
                <i className="fa-solid fa-bell fa-fw"></i>
            </button>
            {/* Navbar Menu Toggler */}
            <NavbarMenuToggler />
        </div>
    )
}

export default NavbarRightBox;