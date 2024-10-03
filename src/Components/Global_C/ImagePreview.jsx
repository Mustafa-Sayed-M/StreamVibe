import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { handleImagePreviewStore } from '../../Store/slices/appSlice';
import LazyImage from '../Shared_C/LazyImage';
import { endpoints } from '../../Api/endpoints';

function ImagePreview() {

    const dispatch = useDispatch();

    const { imagePreview: { preview, imageData } } = useSelector(state => state.app);

    const handleClose = () => {
        dispatch(handleImagePreviewStore({
            preview: false,
            imageData: null
        }));
    };

    return (
        <div
            onClick={handleClose}
            style={{
                visibility: preview ? "visible" : "hidden"
            }}
            className={`image-preview fixed top-0 left-0 flex items-center justify-center z-[1000] h-screen w-full backdrop-blur-md transition-colors ${preview ? "bg-black/20" : "overflow-hidden"}`}
        >
            <div className='image-container px-3 md:max-w-[768px]' onClick={e => e.stopPropagation()}>
                {/* Close Button */}
                <button
                    type='button'
                    onClick={handleClose}
                    title='Close Image Preview'
                    aria-label='Closer Image Preview'
                    className='text-3xl block ms-auto mb-2'
                >
                    <i className="fa-solid fa-xmark"></i>
                </button>
                {/* Image */}
                {
                    imageData && (
                        <div className='image'>
                            <LazyImage
                                image={{
                                    src: `${endpoints.IMAGE}${endpoints.BACKDROP}${imageData.file_path}`,
                                    alt: " ",
                                    effect: "blur",
                                    className: "rounded-md",
                                }}
                            />
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default ImagePreview;