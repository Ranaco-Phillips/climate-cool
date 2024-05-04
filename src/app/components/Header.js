import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react';

import Close from '/public/close.svg'
import HamburgerMenu from '/public/hamburger-menu.svg'
import climateLogoDrk from '/public/climate-cool-logo-drk.svg'

const links = ['home','about', 'services','why choose us','contact'];

export default function Header () {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const [navbar, setNavbar] = useState(false);

    return(
        <header className='pt-3'>
            <nav className="relative flex-nowrap lg:flex-wrap items-center justify-between lg:justify-start" >
                <div className="container mx-auto md:flex w-full flex-wrap md:items-center justify-between px-4 md:px-16">
                <div>
                    <div className="flex w-full flex-wrap items-center justify-between md:block">
                    {/* LOGO */}
                    <Link href="/">
                        <Image
                            src={climateLogoDrk}
                            style={{width: '30%', height: 'auto',}}
                            alt="Climate Cool Logo"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="max-w-full h-auto focus:border-none active:border-none"
                        />
                    </Link>
                    {/* HAMBURGER BUTTON FOR MOBILE */}
                    <div className="md:hidden">
                        <button
                        className="p-2 rounded-md outline-none focus:border-khaki focus:border"
                        onClick={() => setNavbar(!navbar)}
                        >
                        {navbar ? (
                            <Image src={Close} width={30} height={30} alt="logo" />
                        ) : (
                            <Image
                            src={HamburgerMenu}
                            width={30}
                            height={30}
                            alt="logo"
                            className="focus:border-none active:border-none"
                            />
                        )}
                        </button>
                    </div>
                    </div>
                </div>
                <div>
                    <div
                    className={`flex-1 justify-self-center md:block pb-3 mt-8 md:pb-0 md:mt-0 ${
                        navbar ? 'p-12 md:p-0 block' : 'hidden'
                    }`}
                    >
                    <ul className="h-screen md:h-auto items-center justify-center md:flex ">
                        {
                        links.map((link) => (
                            <li key={link} className="capitalize font-semibold text-2xl md:text-base text-gunmetal py-6 px-6 md:py-2 text-center border-b-2 md:border-b-0 hover:text-khaki hover:border-b-2 active:bg-khaki">
                                <Link href={link === 'home'? '/' : '#'+link} onClick={() => setNavbar(!navbar)} className=''>
                                    {link}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    
                    </div>
                </div>
                </div>
            </nav>
        </header>
    )
    
}