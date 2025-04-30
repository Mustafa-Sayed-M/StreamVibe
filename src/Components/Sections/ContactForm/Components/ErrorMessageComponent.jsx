import { ErrorMessage } from 'formik';
import React from 'react';

function ErrorMessageComponent({ name }) {
    return (
        <ErrorMessage name={name} component={'div'} className='text-red-color-45 mt-2' />
    )
}

export default ErrorMessageComponent;