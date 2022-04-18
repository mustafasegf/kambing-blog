import React from 'react';

import Link from 'next/link';

// import { GetStaticProps } from 'next';
import Batik from '../assets/Batik-Motive.svg';

const Hero = () => (
  <div className="hero bg-tertiary-200 text-black-200 h-3/5 truncate relative">
    <div className="container h-full grid gap-3 grid-cols-6 grid-rows-1 md:grid-cols-12">
      <aside className="h-full flex flex-col justify-center col-span-5 whitespace-normal">
        <h1 className="text-6xl lg:text-6xl xl:text-8xl font-header font-bold">
          goat shit.
        </h1>
        <p className="text-2xl md:text-3xl font-subheader italic font-medium text-secondary-200 mt-4">
          Stories, thinking, and experties direct from the stables of GOAT
        </p>
        <Link href="/">
          <a className="bg-primary-300 w-60 h-14 grid place-content-center rounded-2xl font-body font-semibold text-gray-100 text-xl mt-8">
            Start Reading
          </a>
        </Link>
      </aside>
    </div>
    <Batik className=" scale-[200%] opacity-10 absolute bottom-72 -right-[26rem] md:bottom-36 md:-right-64 xl:bottom-0 xl:-right-26 -rotate-45 -translate-x-52 translate-y-60" />
  </div>
);

export default Hero;
