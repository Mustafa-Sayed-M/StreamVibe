import React from 'react';
import { APP_LINKS } from '../../../../Utils/constants';
import { NavLink } from 'react-router-dom';

function NavbarLinks() {
    return (
        <ul className='max-md:hidden flex items-center gap-2 bg-black-color rounded-xl border-2 border-card-color p-2 shadow-lg'>
            {
                APP_LINKS.map((link, index) => <li key={index}>
                    <NavLink
                        to={link.to}
                        className={({ isActive }) => {
                            return `${isActive ? "bg-card-color" : "hover:bg-card-color hover:text-white text-gray-color"} block p-2 rounded-md font-medium transition`;
                        }}
                    >
                        {link.label}
                    </NavLink>
                </li>)
            }
        </ul>
    )
}

export default NavbarLinks;