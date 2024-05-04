import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react';

import climateLogoLight from '/public/climate-cool-logo-lght.svg'


export default function Footer (){

    const year = new Date().getFullYear();
    const links = ['home','services', 'why us', 'contact'];

    return(
        <footer>
            <section className="bg-gunmetal ">
                <div className="container mx-auto px-4 lg:px-16">
                    <div className="flex flex-wrap justify-center text-center md:text-start">
                        <div className="w-full md:w-1/3 p-4 pt-14 lg:pt-2">
                            <Image
                                src={climateLogoLight}
                                style={{width: '50%', height: 'auto',}}
                                alt="Climate-Cool Logo"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                className="max-w-full h-auto focus:border-none active:border-none"
                            />
                        </div>
                    
                        <div className="w-full md:w-1/3 p-4 pt-8 lg:pt-3">
                            <div className="flex justify-center md:justify-normal ">
                                {/* <ul className="md:items-start md:justify-start items-center justify-center  ">
                                    {
                                    links.map((link) => (
                                        <li key={link} className="capitalize font-semibold md:text-base text-almond hover:text-khakic py-1.5 px-6">
                                            <Link href={link === 'home'? '/' : link} className=''>
                                                {link}
                                            </Link>
                                        </li>
                                    ))}
                                </ul> */}
                            </div>
                        </div>

                        <div className="w-full md:w-1/3 p-4 pt-14 lg:pt-8">
                            <p className="text-lg font-bold text-almond">© Climate-Cool {year} | All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </section>
        </footer>
        
    )
}