import { ErrorMessage, Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import ErrorMessageComponent from './Components/ErrorMessageComponent';
import ContactHero from './Components/ContactHero';

const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
};
const validationSchema = {
    firstName: Yup.string().min(4).max(32).required(),
    lastName: Yup.string().min(4).max(32),
    email: Yup.string().email().required(),
    phone: Yup.number(),
    message: Yup.string().min(10).max(100),
};
const inputsData = [
    {
        id: "firstName",
        name: "firstName",
        type: "text",
        placeholder: "Enter First Name",
        label: "First Name",
        autoComplete: 'on'
    },
    {
        id: "lastName",
        name: "lastName",
        type: "text",
        placeholder: "Enter Last Name",
        label: "Last Name",
        autoComplete: 'on'
    },
    {
        id: "email",
        name: "email",
        type: "email",
        placeholder: "Enter your Email",
        label: "Email",
        autoComplete: 'on'
    },
    {
        id: "id",
        name: "Phone",
        type: "tel",
        placeholder: "Enter Phone Number",
        label: "Phone Number",
        autoComplete: 'on'
    }
];
const textareaData = [
    {
        id: "message",
        name: "message",
        placeholder: "Enter your Message",
        label: "Message"
    }
];

function ContactForm() {

    const fieldClassname = `w-full p-2 rounded-md bg-black-color-8 border border-black-color-15 mt-2 placeholder:transition-opacity focus:placeholder:opacity-0`;

    return (
        <section className='contact-form-section py-7' id='contactForm'>
            <div className='container'>
                {/* Content Wrapper */}
                <div className='content-wrapper grid lg:grid-cols-3 gap-10'>
                    {/* Contact Hero */}
                    <ContactHero />
                    {/* Form Container */}
                    <div className='form-container lg:col-span-2 p-3 md:p-5 rounded-md bg-black-color-6 border border-black-color-15'>
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
                                /* and other goodies */
                            }) => (
                                <form onSubmit={handleSubmit}>
                                    {/* Fields Wrapper */}
                                    <div className='fields-wrapper grid md:grid-cols-2 gap-5 mb-5'>
                                        {
                                            inputsData.map(({ label, ...inputAttributes }, index) => (
                                                <div className='input-card' key={index}>
                                                    <label htmlFor={inputAttributes.id}>{label}</label>
                                                    <input
                                                        {...inputAttributes}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        className={`${fieldClassname}`}
                                                    />
                                                    <ErrorMessageComponent name={inputAttributes.name} />
                                                </div>
                                            ))
                                        }
                                        {
                                            textareaData.map(({ label, ...textareaAttributes }, index) => (
                                                <div className='input-card md:col-span-2' key={index}>
                                                    <label htmlFor={textareaAttributes.id}>{label}</label>
                                                    <textarea
                                                        {...textareaAttributes}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        style={{
                                                            resize: 'none'
                                                        }}
                                                        className={`${fieldClassname} h-[200px]`}
                                                    ></textarea>
                                                    <ErrorMessageComponent name={textareaAttributes.name} />
                                                </div>
                                            ))
                                        }
                                    </div>
                                    {/* Submit */}
                                    <div className='submit flex items-center justify-between'>
                                        {/* Submit Condition */}
                                        <div className='submit-condition'>
                                            Submit Condition
                                        </div>
                                        {/* Submit Btn */}
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className='py-2 px-4 rounded-md bg-red-color-45'
                                        >
                                            Send Message
                                        </button>
                                    </div>
                                </form>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactForm;