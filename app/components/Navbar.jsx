"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import Navlink from './Navlink';
import { Bars3Icon, XmarkIcon } from '@heroicons/react/24/solid';

const navlink= [
    {
        title: "About",
        path: "#about",
    },
    {
        title: "Projects",
        path: "#projects",
    },
    {
        title: "Contact",
        path: "#contact",
    },
];


const NavBar = () => {
    const [navbarOpen, setnavbarOpen] = useState(false)
    return (
        <nav className='fixed top-0 left-0 right-0 z-10 bg-[#000000] bg-opacity-80 backdrop-blur-md'> {/* Trying to recreate Apple Frosted Glass Effect */}
            <div className='flex flex-wrap items-center justify-between mx-auto p-8 '>
                <Link href={"/"} className='text-2xl md:text-5xl text-white font-semibold'>
                    LOGO
                </Link>
                <div className='mobile-menu block md:hidden'>
                    {
                        !navbarOpen ? (
                            <button onClick={() => setnavbarOpen(true)} className='flex items-center p-3 py-2 border-rounded border-white hover:text-white hover:border-white text-white'><Bars3Icon className='h-5 w-5' /></button>
                        ) : (
                            <button onClick={() => setnavbarOpen(false)} className='flex items-center p-3 py-2 border-rounded border-white hover:text-white hover:border-white text-white'><XmarkIcon className='h-5 w-5' /></button>
                        )
                    }
                </div> 
                <div className='menu hidden md:block md:w-auto' id='navbar'>
                    <ul className='flex p-4 md:p-0 md:flex- row md:space-x-8 mt-0'>
                        {
                            navlink.map((link, index) => (
                                <li key={index}>
                                    <Navlink href={link.path} title={link.title} />
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;

