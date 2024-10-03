import { ErrorMessage } from 'formik';
import React from 'react';

function FormikInput({ index, label, ...inputData }) {
    return (
        <div className='formik-input' data-aos="fade-left" data-aos-delay={50 * index}>
            <label htmlFor={inputData.id}>{label}</label>
            <input
                {...inputData}
                className='focus:outline-none focus:border-primary-color transition border border-white/10 p-2 rounded-md w-full bg-transparent mt-2'
            />
            {/* Error */}
            <ErrorMessage name={inputData.name} component={"div"} className='text-red-500 mt-2' />
        </div>
    )
}

export default FormikInput;