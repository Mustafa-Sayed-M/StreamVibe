import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { handleNavbarMenuOpen } from '../../../../Store/slices/appSlice';

function NavbarMenuToggler() {

    const dispatch = useDispatch();

    const { navbarMenuOpen } = useSelector(state => state.app);

    const handleClick = () => {
        dispatch(handleNavbarMenuOpen(!navbarMenuOpen));
    };

    return (
        <button
            type='button'
            aria-label='Navbar Menu Toggler'
            title={(navbarMenuOpen ? "Close" : "Open") + "Menu"}
            onClick={handleClick}
            className='text-2xl lg:hidden'
        >
            <i className={`fa-solid fa-${(navbarMenuOpen ? "xmark" : "bars")} fa-fw`}></i>
        </button>
    )
}

export default NavbarMenuToggler;