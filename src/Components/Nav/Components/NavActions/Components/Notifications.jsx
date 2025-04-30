import React from 'react';
import { useNav } from '../../../../../Context/NavContext';

function Notifications() {

    const { notificationsIsOpen, setNotificationsIsOpen, setMenuIsOpen } = useNav();

    const handleOpenNotifications = React.useCallback((e) => {
        e.stopPropagation();
        setMenuIsOpen(false)
        setNotificationsIsOpen(prev => !prev);
    }, [setMenuIsOpen, setNotificationsIsOpen]);

    React.useEffect(() => {
        const handleClickOutSide = () => {
            setNotificationsIsOpen(false);
        };
        document.addEventListener('click', handleClickOutSide);
        return () => document.removeEventListener('click', handleClickOutSide);
    }, [setNotificationsIsOpen]);

    React.useEffect(() => {
        if (notificationsIsOpen) {
            document.body.classList.add('pointer-events-none')
        } else {
            document.body.classList.remove('pointer-events-none')
        }
    }, [notificationsIsOpen]);

    return (
        <div className='relative'>
            <button
                title='Notifications'
                aria-label='Notifications'
                onClick={handleOpenNotifications}
                className={`text-2xl ${notificationsIsOpen ? 'text-red-color-45' : 'sm:hover:text-red-color-45'} pointer-events-auto transition`}
            >
                <i className='fa-solid fa-bell fa-fw'></i>
            </button>
            <div
                onClick={e => e.stopPropagation()}
                className={`notifications-box text-nowrap min-w-[200px] pointer-events-auto text-center p-5 rounded-md bg-black-color-6 border border-black-color-15 absolute z-30 right-0 top-full mt-3 transition-opacity duration-200 ease-out ${!notificationsIsOpen ? 'opacity-0 scale-0' : ''}`}
            >
                No Notifications
            </div>
        </div>
    )
}

export default Notifications;