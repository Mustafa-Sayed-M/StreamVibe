import React from 'react';
import ContactText from './ContactText';
import ContactForm from './ContactForm';

function Contact() {
    return (
        <section className='contact-section py-10' id='contact'>
            <div className='content-container grid grid-cols-1 lg:grid-cols-3 gap-5'>
                {/* Contact Text */}
                <ContactText />
                {/* Contact Form */}
                <ContactForm />
            </div>
        </section>
    )
}

export default Contact;