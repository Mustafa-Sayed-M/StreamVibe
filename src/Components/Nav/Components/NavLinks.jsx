import React from 'react';
import { NavLink } from 'react-router-dom';
import { useNav } from '../../../Context/NavContext';

const linksData = [
    { to: '/', label: 'Home' },
    { to: '/movies', label: 'Movies' },
    { to: '/shows', label: 'Shows' },
    { to: '/support', label: 'Support' },
    { to: '/subscription', label: 'Subscription' },
];

function NavLinks() {

    const { menuIsOpen, setMenuIsOpen, notificationsIsOpen, setNotificationsIsOpen } = useNav();
    const navLinksRef = React.useRef(null);

    React.useEffect(() => { // Handle Resizing:
        const handleResizeWindow = () => {
            const navLinksRefElement = navLinksRef.current;
            if (navLinksRefElement) {
                navLinksRefElement.classList.remove('transition-opacity');
            }
            if (window.innerWidth > 1024) {
                setMenuIsOpen(false);
            }
        };
        window.addEventListener('resize', handleResizeWindow);
        return () => window.removeEventListener('resize', handleResizeWindow);
    }, [setMenuIsOpen]);

    React.useEffect(() => { // Handle Click Out Side:
        const handleClickOutSide = () => {
            setMenuIsOpen(false);
        };
        document.addEventListener('click', handleClickOutSide);
        return () => document.removeEventListener('click', handleClickOutSide);
    }, [setMenuIsOpen]);

    React.useEffect(() => {
        if (menuIsOpen) {
            document.body.classList.add('pointer-events-none');
        } else {
            document.body.classList.remove('pointer-events-none');
        }
    }, [menuIsOpen]);

    const handleClick = () => {
        if (notificationsIsOpen) {
            setNotificationsIsOpen(false);
        }
        setMenuIsOpen(false);
    };

    return (
        <div
            ref={navLinksRef}
            className={`nav-links transition-opacity max-lg:absolute max-lg:top-full max-lg:mt-3 max-lg:w-full max-lg:z-50 max-lg:left-0 ${menuIsOpen ? '' : 'max-lg:opacity-0 max-lg:scale-0'}`}
        >
            <div className='max-lg:container'>
                <ul
                    onClick={e => e.stopPropagation()}
                    className={`flex items-center gap-1 bg-black-color-6 p-2 rounded-md border-4 border-black-color-12 max-lg:flex-col pointer-events-auto`}
                >
                    {
                        linksData.map((link, index) => <li
                            key={index}
                            className='max-lg:w-full'
                        >
                            <NavLink
                                to={link.to}
                                onClick={handleClick}
                                className={({ isActive }) => `block ${isActive ? 'bg-black-color-10' : 'sm:hover:bg-black-color-10'} py-2 px-4 rounded-md transition`}
                            >{link.label}</NavLink>
                        </li>)
                    }
                </ul>
            </div>
        </div>
    )
}

export default NavLinks;