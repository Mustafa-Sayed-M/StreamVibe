import React from 'react'
import LinksComponent from './Components/LinksComponent';
import SocialLinks from './Components/SocialLinks';
import Copyrights from './Components/Copyrights';

const HOME_LINKS = [
    { href: "/categories", text: "Categories" },
    { href: "/devices", text: "Devices" },
    { href: "/plans", text: "Pricing" },
    { href: "/faq", text: "FAQ" },
];
const MOVIES_LINKS = [
    { href: "/trending", text: "Trending" },
    { href: "/genres", text: "Genres" },
    { href: "/top-rated", text: "Top Rated" },
    { href: "/popular", text: "Popular" },
];
const SHOWS_LINKS = [
    { href: "/trending", text: "Trending" },
    { href: "/genres", text: "Genres" },
    { href: "/top-rated", text: "Top Rated" },
    { href: "/popular", text: "Popular" },
];
const SUPPORT_LINKS = [
    { href: "/contact", text: "Contact Us" },
];
const SUBSCRIPTIONS_LINKS = [
    { href: "/plans", text: "Plans" },
    { href: "/features", text: "Features" }
];

function Footer() {
    return (
        <footer className='pt-10 bg-black-color-6'>
            <div className='container space-y-3'>
                {/* Content Grid */}
                <div className='content-grid grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-x-4 gap-y-7'>
                    {/* Home Links */}
                    <LinksComponent
                        title={"Home"}
                        page='/'
                        linksList={HOME_LINKS}
                    />
                    {/* Movies Links */}
                    <LinksComponent
                        title={"Movies"}
                        page='/movies'
                        linksList={MOVIES_LINKS}
                    />
                    {/* Shows Links */}
                    <LinksComponent
                        page='/shows'
                        title={"Shows"}
                        linksList={SHOWS_LINKS}
                    />
                    {/* Support Links */}
                    <LinksComponent
                        page='/support'
                        title={"Support"}
                        linksList={SUPPORT_LINKS}
                    />
                    {/* Subscriptions Links */}
                    <LinksComponent
                        page='/subscriptions'
                        title={"Subscriptions"}
                        linksList={SUBSCRIPTIONS_LINKS}
                    />
                    {/* Social Links */}
                    <SocialLinks />
                </div>
                {/* Copyrights */}
                <Copyrights />
            </div>
        </footer>
    )
}

export default Footer;