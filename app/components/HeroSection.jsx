'use client'

import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';



const HeroSection = () => {
  return (
    <section>
        <div className='grid grid-cols-1 sm:grid-cols-12'>
            <div className='col-span-7 place-self-center text-center sm:text-left'>
                <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold'>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-600">
                    Hello, I'm{" "}
                    </span>
                    <TypeAnimation
                        sequence={[
                        // Same substring at the start will only be typed out once, initially
                        'Shreyans',
                        1000, // wait 1s before replacing each item
                        'A Student at UWaterloo',
                        1000,
                        'A Software Engineer',
                        1000,
                        'A Football Fan',
                        1000
                    ]}
                        wrapper="span"
                        speed={50}
                        style={{fontSize: 'sm:3rem lg:3.75rem', display: 'inline-block'}}
                        repeat={Infinity}
                    />
                </h1>
                <p className='text-white text-base sm:text-lg mb-6 lg:text-xl'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Sed convallis libero bibendum, dapibus sem ut, ultricies ex. 
                    Aliquam ligula nisi, scelerisque faucibus congue eget, malesuada sodales turpis.
                </p> 
                <div>
                    <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-white hover:bg-slate-200 text-black'>LinkedIn</button>
                    <button className='px-6 py-3 w-full sm:w-fit rounded-full bg-transparent  hover:bg-slate-800 text-white border border-white mt-3'>My Resume</button>
                </div>
            </div>
            <div className='col-span-5 place-self-center mt-4 lg:mt-0'>
                <div className='rounded-full bg-[black] w-[250px] h-[400px] lg:w-[400px] lg:h-[250px] relative'>
                    <image
                        src=""
                        alt="Logo"
                        className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                        width={300}
                        height={300}
                    />
                </div>
            </div>
        </div>
    </section>
  )
}

export default HeroSection