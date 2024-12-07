import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

function LazyImage({ image }) {
    return (
        <LazyLoadImage
            alt={image.alt}
            effect="blur"
            wrapperProps={{
                // If you need to, you can tweak the effect transition using the wrapper style.
                style: { transitionDelay: "400ms", objectFit: 'cover' }
            }}
            width={'100%'}
            height={'100%'}
            src={image.src} />
    )
}

export default LazyImage;