import React from 'react';
import { useNav } from '../../../../../Context/NavContext';

function NavMenuToggler() {

    const { menuIsOpen, setMenuIsOpen, setNotificationsIsOpen } = useNav();

    const handleClick = React.useCallback((e) => {
        e.stopPropagation();
        setNotificationsIsOpen(false)
        setMenuIsOpen(prev => !prev);
    }, [setMenuIsOpen, setNotificationsIsOpen]);

    return (
        <button
            title=''
            onClick={handleClick}
            className={`text-3xl lg:hidden transition pointer-events-auto ${menuIsOpen ? 'text-red-color-45' : 'sm:hover:text-red-color-45'}`}
        >
            <i className={`fa-solid fa-${menuIsOpen ? 'xmark' : 'bars'} fa-fw`}></i>
        </button>
    )
}

export default NavMenuToggler;