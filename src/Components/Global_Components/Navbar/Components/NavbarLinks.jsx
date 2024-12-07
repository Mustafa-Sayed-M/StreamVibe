import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const linksList = [
    { to: "/", text: "Home" },
    { to: "/movies", text: "Movies" },
    { to: "/shows", text: "Shows" },
    { to: "/support", text: "Support" },
    { to: "/subscriptions", text: "Subscriptions" },
]

function NavbarLinks() {

    const { navbarMenuOpen } = useSelector(state => state.app);

    return (
        <ul className={`flex items-center bg-black-color-6 border-2 border-black-color-12 py-2 px-3 rounded-md gap-1 max-lg:order-1 max-lg:flex-col max-lg:w-full ${!navbarMenuOpen && 'max-lg:hidden'}`}>            {
            linksList.map((link, index) => <li key={index} className='max-lg:w-full'>
                <NavLink
                    to={link.to}
                    className={({ isActive }) => `block max-lg:text-center py-3 px-5 rounded-md ${isActive ? "bg-black-color-10" : "sm:hover:bg-black-color-10 text-grey-color-75"} transition`}
                >
                    {link.text}
                </NavLink>
            </li>)
        }
        </ul>
    )
}

export default NavbarLinks;