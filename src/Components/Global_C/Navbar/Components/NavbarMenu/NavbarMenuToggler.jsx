import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { handleNavbarMenuStore } from '../../../../../Store/slices/appSlice';

function NavbarMenuToggler() {

    const dispatch = useDispatch();

    const { navbar: { openMenu } } = useSelector(state => state.app);

    const handleClick = (e) => {
        e.stopPropagation();
        dispatch(handleNavbarMenuStore(!openMenu));
    };

    return (
        <button
            type='button'
            onClick={handleClick}
            title={openMenu ? "Close Menu" : "Open Menu"}
            className='navbar-menu-toggler md:hidden'
        >
            <div className='toggle-icon-container overflow-hidden space-y-2'>
                <span style={{ transformOrigin: "top right" }} className={`block w-10 h-0.5 bg-white ${openMenu && "-rotate-45"} transition`}></span>
                <span className={`block w-10 h-0.5 bg-white ${openMenu && "translate-x-full"} transition`}></span>
                <span style={{ transformOrigin: "top right" }} className={`block w-10 h-0.5 bg-white ${openMenu && "rotate-45"} transition`}></span>
            </div>
        </button>
    )
}

export default NavbarMenuToggler;