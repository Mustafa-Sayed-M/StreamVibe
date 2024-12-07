import React from 'react';
import { NavLink } from 'react-router-dom';

function NavbarRightBox() {

    const [openNotificationsBox, setOpenNotificationsBox] = React.useState(false);

    const handleOpenerNotifications = (e) => {
        e.stopPropagation();
        setOpenNotificationsBox(!openNotificationsBox)
    };

    const handleClickOutsideNotifications = React.useCallback((e) => {
        if (openNotificationsBox) setOpenNotificationsBox(false);
    }, [openNotificationsBox]);

    React.useEffect(() => {
        document.addEventListener('click', handleClickOutsideNotifications);

        return () => {
            document.removeEventListener('click', handleClickOutsideNotifications);
        };
    }, [handleClickOutsideNotifications]);

    return (
        <div className='navbar-right-box flex items-center gap-2'>
            {/* Search Link */}
            <NavLink
                to={`/search`}
                className={({ isActive }) => `text-xl ${isActive ? "text-red-color-45" : "sm:hover:text-red-color-45"} transition-colors`}
            >
                <i className="fa-solid fa-magnifying-glass fa-fw"></i>
                <span className='sr-only'>Search Link</span>
            </NavLink>
            {/* Notifications */}
            <div className='notifications-wrapper relative'>
                {/* Notifications Toggler */}
                <button
                    type='button'
                    aria-label='Notifications'
                    title={(openNotificationsBox ? "Close" : "Open") + " Notifications"}
                    onClick={handleOpenerNotifications}
                    className={`text-xl ${openNotificationsBox ? "text-red-color-45" : "sm:hover:text-red-color-45"}`}
                >
                    <i className="fa-solid fa-bell fa-fw"></i>
                </button>
                {/* Notifications Box */}
                <div
                    style={{
                        transformOrigin: "top right"
                    }}
                    onClick={e => e.stopPropagation()}
                    className={`notifications-box text-center shadow-md bg-black-color-6 border border-black-color-15 rounded-md p-2 absolute z-50 top-full mt-2 right-2 min-w-[150px] transition-transform ${!openNotificationsBox && "scale-0"}`}
                >
                    Notifications Box
                </div>
            </div>
        </div>
    )
}

export default NavbarRightBox;