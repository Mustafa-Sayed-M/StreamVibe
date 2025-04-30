import React from "react";

const NavContext = React.createContext();

export const NavContextProvider = ({ children }) => {

    const [menuIsOpen, setMenuIsOpen] = React.useState(false);
    const [notificationsIsOpen, setNotificationsIsOpen] = React.useState(false);

    return (
        <NavContext.Provider
            value={{
                menuIsOpen, setMenuIsOpen,
                notificationsIsOpen, setNotificationsIsOpen
            }}
        >
            {children}
        </NavContext.Provider>
    )
};

export const useNav = () => React.useContext(NavContext);