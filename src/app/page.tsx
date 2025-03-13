import Image from 'next/image';
import React from 'react';

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="text-left">
          <h1 className="text-5xl font-bold mb-1">Breno</h1>
          <p className="text-2xl text-gray-600">By Notins (My alter ego)</p>
        </div>
        <p className="text-center text-lg sm:text-left">
          Hi, my name is <span className="font-bold">Breno Simão</span>, a software engineer with a passion for building web applications.
        </p>
        <p className="text-center text-lg sm:text-left">
          I have been working in the tech industry for over 5 years and have a strong background in front-end development.
        </p>
        <p className="text-center text-lg sm:text-left">
          I am excited to share my knowledge and skills with you through this website.
        </p>
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="/about"
          >
            Learn more about me
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/contact"
        >
          <Image
            aria-hidden
            src="/icons/contact.svg"
            alt="Contact book icon"
            width={32}
            height={32}
          />
          Contact me
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/blog"
        >
          <Image
            aria-hidden
            src="/icons/linkedin.svg"
            alt="LinkedIn icon"
            width={32}
            height={32}
          />
          My LinkedIn
        </a>
      </footer>
    </div>
  );
}
