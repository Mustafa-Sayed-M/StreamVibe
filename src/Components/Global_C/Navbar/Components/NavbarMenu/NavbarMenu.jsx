import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { APP_LINKS } from '../../../../../Utils/constants';
import { NavLink, useLocation } from 'react-router-dom';
import { handleNavbarMenuStore } from '../../../../../Store/slices/appSlice';

function NavbarMenu() {

    const dispatch = useDispatch();
    const { pathname } = useLocation();

    const { navbar: { openMenu } } = useSelector(state => state.app);

    useEffect(() => {

        const handleClickOutSide = () => {
            if (openMenu) dispatch(handleNavbarMenuStore(false));
        }

        document.addEventListener('click', handleClickOutSide);

        return () => {
            document.removeEventListener('click', handleClickOutSide);
        }
    }, [dispatch, openMenu]);

    useEffect(() => {
        if (openMenu) dispatch(handleNavbarMenuStore(false));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch, pathname]);

    return (
        <div
            style={{
                transition: "ease 200ms",
                visibility: openMenu ? "visible" : "hidden",
                overflow: openMenu ? "visible" : "hidden",
                transform: openMenu ? "scale(1)" : "scale(0)",
                transformOrigin: "top right"
            }}
            className='navbar-menu container absolute z-50 left-0 top-full shadow-md md:hidden'
        >
            <div
                onClick={e => e.stopPropagation()}
                className='bg-black-color rounded-xl border-2 border-card-color'
            >
                <ul className='space-y-1'>
                    {APP_LINKS.map((link, index) => <li key={index}>
                        <NavLink
                            to={link.to}
                            className={({ isActive }) => {
                                return `${isActive ? "bg-card-color" : "sm:hover:bg-card-color"} block p-3 transition`;
                            }}
                        >
                            {link.label}
                        </NavLink>
                    </li>)}
                </ul>
            </div>
        </div>
    )
}

export default NavbarMenu;