import React from 'react';
import ContactForm from './Components/ContactForm';
import ContactHero from './Components/ContactHero';

function Contact() {
    return (
        <section className='contact grid md:grid-cols-3 gap-5 py-5 items-start' id='contact'>
            {/* Contact Hero */}
            <ContactHero />
            {/* Contact Form */}
            <ContactForm />
        </section>
    )
}

export default Contact;