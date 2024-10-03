import React from 'react';

function NavContainer({ activeContainer, setActiveContainer }) {

    const handleClick = (container) => {
        setActiveContainer(container);
    }

    return (
        <div className='nav-container sm:hidden bg-body-color border-2 border-card-color p-2 rounded-md flex items-center gap-1'>
            {/* Movie */}
            <button
                type='button'
                title='Movies'
                aria-label='Movies'
                onClick={() => handleClick("Movies")}
                className={`py-3 font-medium rounded-md w-full ${activeContainer === "Movies" ? "bg-card-color" : "text-gray-color"}`}
            >
                Movies
            </button>
            {/* Shows */
                <button
                    title='Shows'
                    type='button'
                    aria-label='Shows'
                    onClick={() => handleClick("Shows")}
                    className={`py-3 font-medium rounded-md w-full ${activeContainer === "Shows" ? "bg-card-color" : "text-gray-color"}`}
                >
                    Shows
                </button>}
        </div>
    )
}

export default NavContainer;