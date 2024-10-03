import React from 'react';
import Contact from './Components/Contact';
import LinksComponents from './Components/LinksComponents';

const homeLinksList = [
    { href: "categories", label: "Categories" },
    { href: "devices", label: "Devices" },
    { href: "pricing", label: "Pricing" },
    { href: "faq", label: "FAQ" },
];
const moviesLinksList = [
    { to: "movies-discover", label: "Discover" },
    { to: "movies-trending-now", label: "Trending Now" },
    { to: "movies-top-rated", label: "Top Rated" },
];
const showsLinksList = [
    { to: "shows-discover", label: "Discover" },
    { to: "shows-trending-now", label: "Trending Now" },
    { to: "shows-top-rated", label: "Top Rated" },
];
const supportLinksList = [
    { href: "contact", label: "Contact Us" },
    { href: "faq", label: "FAQ" },
];
const subscriptionsLinksList = [
    { href: "pricing", label: "Plans" },
    { href: "", label: "Features" },
];


function Footer() {
    return (
        <footer className='bg-black-color'>
            <div className='container py-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3'>
                {/* Home Links */}
                <LinksComponents linksList={homeLinksList} title={"Home"} page={'/'} />
                {/* Movies Links */}
                <LinksComponents linksList={moviesLinksList} title={"Movies"} page={'/movies-and-shows'} />
                {/* Shows Links */}
                <LinksComponents linksList={showsLinksList} title={"Shows"} page={'/movies-and-shows'} />
                {/* Support Links */}
                <LinksComponents linksList={supportLinksList} title={"Support"} page={'/support'} />
                {/* Subscriptions Links */}
                <LinksComponents linksList={subscriptionsLinksList} title={"Subscriptions"} page={'/subscriptions'} />
                {/* Contact */}
                <Contact />
            </div>
        </footer>
    )
}

export default Footer;