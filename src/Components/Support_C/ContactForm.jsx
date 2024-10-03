import React from 'react';
import { ErrorMessage, Formik } from 'formik';
import * as Yup from 'yup';
import FormikInput from './FormikInput';

const inputsData = [
    {
        type: "text",
        id: "firstName",
        name: "firstName",
        autoComplete: "on",
        placeholder: "Enter First Name",
        label: "First Name"
    },
    {
        type: "text",
        id: "lastName",
        name: "lastName",
        autoComplete: "on",
        placeholder: "Enter Last Name",
        label: "Last Name"
    },
    {
        type: "email",
        id: "email",
        name: "email",
        autoComplete: "on",
        placeholder: "Enter Your Email",
        label: "Email"
    },
    {
        type: "tel",
        id: "phone",
        name: "phone",
        autoComplete: "on",
        placeholder: "Enter Phone Number",
        label: "Phone Number"
    },
];

const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
};

const validationSchema = {
    firstName: Yup.string().required().min(2).max(16),
    lastName: Yup.string().required().min(2).max(16),
    email: Yup.string().required().email(),
    phone: Yup.number().required(),
    message: Yup.string().required().min(4).max(100),
};

function ContactForm() {
    return (
        <div className='contact-form lg:col-span-2'>
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
                        {/* Inputs Container */}
                        <div className='inputs-container mb-5 grid grid-cols-1 sm:grid-cols-2 gap-4'>
                            {
                                inputsData.map((input, index) => <FormikInput
                                    index={index}
                                    key={index}
                                    {...{
                                        ...input,
                                        onChange: handleChange,
                                        onBlur: handleBlur,
                                    }}
                                />)
                            }
                            {/* Text Area ( Message Field ) */}
                            <div className='message-field sm:col-span-2' data-aos="fade-left" data-aos-delay={50 * inputsData.length}>
                                <label htmlFor="message">Message</label>
                                <textarea
                                    style={{
                                        resize: "none"
                                    }}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    id='message'
                                    name='message'
                                    placeholder='Your Message'
                                    className='focus:outline-none focus:border-primary-color transition border border-white/10 p-2 rounded-md w-full bg-transparent mt-2 h-[200px]'
                                ></textarea>
                                {/* Error */}
                                <ErrorMessage name="message" component={"div"} className='text-red-500 mt-2' />
                            </div>
                        </div>
                        {/* Submit */}
                        <div className='flex items-center justify-between'>

                            {/* Submit Checkbox Terms */}
                            <div className='submit-checkbox-terms flex items-center gap-2 relative' data-aos="fade-up" data-aos-delay={250}>
                                <input
                                    id='terms'
                                    name='terms'
                                    type='checkbox'
                                    className='appearance-none w-5 h-5 rounded-md border border-white/20 cursor-pointer peer'
                                />
                                <div className='w-5 rounded-md h-5 absolute left-0 top-1/2 -translate-y-1/2 scale-0 rotate-180 peer-checked:rotate-0 peer-checked:scale-100 transition text-xs flex items-center justify-center'>
                                    <i className="fa-solid fa-check"></i>
                                </div>
                                <label htmlFor='terms' className='select-none text-gray-400 font-medium cursor-pointer'>I agree with Terms of Use and Privacy Policy</label>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                data-aos="fade-up"
                                data-aos-delay={250}
                                disabled={isSubmitting}
                                className='bg-primary-color py-2 px-5 rounded-md font-medium'
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                )}
            </Formik>
        </div>
    )
}

export default ContactForm;