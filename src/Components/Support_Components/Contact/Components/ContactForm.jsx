import React from 'react';
import { ErrorMessage, Formik } from 'formik';
import * as Yup from 'yup';

const fieldsData = [
    {
        id: 'firstName',
        name: 'firstName',
        type: "text",
        autoComplete: 'off',
        label: "First Name",
        placeholder: 'Enter First Name',
    },
    {
        id: 'lastName',
        name: 'lastName',
        type: "text",
        autoComplete: 'off',
        label: "Last Name",
        placeholder: 'Enter Last Name',
    },
    {
        id: 'email',
        name: 'email',
        type: "email",
        autoComplete: 'off',
        label: "Email Address",
        placeholder: 'Enter your email',
    },
    {
        id: 'phone',
        name: 'phone',
        type: "tel",
        autoComplete: 'off',
        label: "Phone Number",
        placeholder: 'Enter Phone Number',
    }
];

const FormikField = ({ label, ...dataAttributes }) => {
    return (
        <div className='formik-field'>
            {/* Label */}
            <label htmlFor={dataAttributes.id} className='font-medium'>{label}</label>
            {/* Input Field */}
            <input
                {...dataAttributes}
                className='focus:outline-none p-2 rounded-md w-full block bg-black-color-8 border border-black-color-15 mt-2'
            />
            {/* Error Message */}
            <ErrorMessage component={'div'} name={dataAttributes.name} className='text-red-color-45 mt-2' />
        </div>
    )
};

const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
};

const validationSchema = {
    firstName: Yup.string().required(),
    lastName: Yup.string(),
    email: Yup.string().email().required(),
    phone: Yup.number().required(),
    message: Yup.string().required().min(16).max(100),
};

function ContactForm() {
    return (
        <div className='contact-form md:col-span-2 bg-black-color-6 border border-black-color-15 rounded-md p-5'>
            <Formik
                initialValues={initialValues}
                validationSchema={Yup.object(validationSchema)}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}
            >
                {({
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                }) => (
                    <form onSubmit={handleSubmit}>
                        {/* Fields Grid */}
                        <div className='fields-grid grid sm:grid-cols-2 gap-3'>
                            {fieldsData.map((field, index) => <FormikField
                                key={index}
                                {...{
                                    ...field,
                                    onChange: handleChange,
                                    onBlur: handleBlur,
                                }}
                            />)}
                            <div className='formik-field sm:col-span-2'>
                                {/* Label */}
                                <label htmlFor='message' className='font-medium'>Message</label>
                                {/* Text Area */}
                                <textarea
                                    id='message'
                                    name='message'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    placeholder='Enter Your Message'
                                    style={{
                                        resize: "none"
                                    }}
                                    className='focus:outline-none p-2 rounded-md w-full block bg-black-color-8 border border-black-color-15 mt-2 h-[120px]'
                                >
                                </textarea>
                                {/* Error Message */}
                                <ErrorMessage component={'div'} name='message' className='text-red-color-45 mt-2' />
                            </div>
                        </div>
                        {/* Submit */}
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className='bg-red-color-45 py-2 px-4 rounded-md mt-5 ms-auto block max-sm:w-full'
                        >
                            Send Message
                        </button>
                    </form>
                )}
            </Formik>
        </div>
    )
}

export default ContactForm;