"use client";
import React, { useTransition, useState } from 'react'
import TabButton from './TabButton';

const Tab_Data = [
    {
        title: "Skills",
        id: "Skills",
        content: (
            <ul>
                <li>Python</li>
            </ul>
        )
    },
    {
        title: "Education",
        id: "Education",
        content: (
            <ul>
                <li>University of Waterloo</li>
            </ul>
        )
    },
    {
        title: "Experience",
        id: "Experience",
        content: (
            <ul>
                <li>University of Waterloo</li>
            </ul>
        )
    },
]

const AboutMe = () => {
    const[tab, setTab] = useState("Skills");
    const[isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
          setTab(id);
        });
      };
    
  return (
    <section className='text-white'>
        <div className='md grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16'>
            <div className='mt-4 d:mt-0 text-left flex felx-col h-full'>
  <div class="relative bg-white bg-opacity-55 px-6 pb-8 pt-10 shadow-xl ring-1 ring-gray-900/5 backdrop-blur-md sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
    <div class="mx-auto max-w-md">
      <div class="divide-y divide-gray-300/50">
        <div class="space-y-6 py-8 text-base leading-7 text-gray-600">
          <p>An advanced online playground for Tailwind CSS, including support for things like:</p>
          <ul class="space-y-4">
            <li class="flex items-center">
              <svg class="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="11" />
                <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
              </svg>
              <p class="ml-4">
                Customizing your
                <code class="text-sm font-bold text-gray-900">tailwind.config.js</code> file
              </p>
            </li>
            <li class="flex items-center">
              <svg class="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="11" />
                <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
              </svg>
              <p class="ml-4">
                Extracting classes with
                <code class="text-sm font-bold text-gray-900">@apply</code>
              </p>
            </li>
            <li class="flex items-center">
              <svg class="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="11" />
                <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
              </svg>
              <p class="ml-4">Code completion with instant preview</p>
            </li>
          </ul>
          <p>Perfect for learning how the framework works, prototyping a new idea, or creating a demo to share online.</p>
        </div>
        <div class="pt-8 text-base font-semibold leading-7">
          <p class="text-gray-900">Want to dig deeper into Tailwind?</p>
        </div>
      </div>
    </div>
  </div>

            </div>
            <div>
                <h2>
                    About Me
                </h2>
                <p>
                    In this tutorial, we will build a responsive and customizable portfolio website using NextJs and Tailwind.
                </p>
                <div className='flex flex-row mt-9'>
                    <TabButton selectTab={() => handleTabChange("Skills")} active={tab === "Skills"}> Skills </TabButton>
                    <TabButton selectTab={() => handleTabChange("Experience")} active={tab === "Experience"}> Experience </TabButton>
                    <TabButton selectTab={() => handleTabChange("Education")} active={tab === "Education"}> Education </TabButton>
                </div>
                <div className='mt-8'>
                    {Tab_Data.find((t) => t.id === tab).content}
                </div>
            </div>
        </div>
    </section>

  )
}

export default AboutMe