import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { imageApi } from "../Utils/api";

const ImagePreviewContext = React.createContext();

export const ImagePreviewContextProvider = ({ children }) => {

    const [imageData, setImageData] = React.useState(null);

    const handleClose = () => setImageData(null);

    return (
        <ImagePreviewContext.Provider
            value={{
                imageData, setImageData
            }}
        >
            {children}
            {/* Image Preview */}
            <div onClick={handleClose} className={`image-preview ${imageData ? '' : 'opacity-0 scale-0'} transition-opacity fixed bottom-0 left-0 w-full h-[calc(100dvh-111px)] bg-black/40 backdrop-blur-md z-50 flex items-center`}>
                <div className="container">
                    <div
                        onClick={e => e.stopPropagation()}
                        className={`image-preview-box ${imageData ? '' : 'opacity-0 translate-y-10'} mx-auto p-3 md:p-5 aspect-video bg-black-color-8 rounded-md transition delay-100`}
                    >
                        {/* Close Button */}
                        <button
                            title="Close"
                            onClick={handleClose}
                            className="text-xl md:text-2xl ms-auto w-10 h-10 flex items-center justify-center bg-black-color-15 sm:hover:bg-black-color-20 rounded-full text-center transition-colors"
                        >
                            <i className="fa-solid fa-xmark fa-fw"></i>
                        </button>
                        {/* Image */}
                        {
                            imageData && (<LazyLoadImage
                                alt={`...`}
                                effect="blur"
                                src={`${imageApi.baseEndpoint}${imageApi.backdropUrl}${imageData.src}`}
                                className="rounded-md w-full mt-3 md:mt-5"
                            />)
                        }
                    </div>
                </div>
            </div>
        </ImagePreviewContext.Provider>
    )
}

export const useImagePreview = () => React.useContext(ImagePreviewContext);