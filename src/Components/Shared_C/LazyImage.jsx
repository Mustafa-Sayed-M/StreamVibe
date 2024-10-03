import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

function LazyImage({ image }) {
    return <LazyLoadImage {...image} />
}

export default LazyImage;