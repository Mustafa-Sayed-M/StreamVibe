import React from 'react';
import HeaderMediaContent from '../Components/HeaderMediaContent';

function HeaderMediaDetails({ mainData, mainDataIsLoading }) {
    return (
        <header className='media-header py-7'>
            <div className='container'>
                {/* Header Content */}
                <div className='header-content aspect-video rounded-2xl border border-black-color-15 overflow-hidden relative shadow-md'>
                    {/* Header Media Content */}
                    {
                        mainDataIsLoading ? (
                            <>Loading..</>
                        ) : (
                            <HeaderMediaContent
                                mainData={mainData}
                            />
                        )
                    }
                </div>
            </div>
        </header>
    )
}

export default HeaderMediaDetails;