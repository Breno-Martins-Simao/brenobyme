import Image from 'next/image';
import React from 'react';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      <header className="text-center mb-8">
        <h1 className="text-6xl font-bold">Welcome to My Portfolio</h1>
        <p className="text-xl mt-2">Discover more about me and my work</p>
      </header>
      <main className="flex flex-col items-center gap-12">
        <section className="text-center max-w-xl">
          <h2 className="text-4xl font-semibold mb-4">About Me</h2>
          <p className="text-lg">
            I am a passionate software engineer, dedicated to crafting applications that solve real-world problems. With over 5 years in the tech industry, I specialize in front-end development and enjoy sharing my knowledge through tutorials and articles.
          </p>
        </section>
        <section className="flex flex-col items-center gap-6">
          <a
            className="border border-solid border-white rounded-full px-6 py-3 text-lg hover:bg-white hover:text-black transition-all"
            href="/about"
          >
            More About Me
          </a>
          <a
            className="border border-solid border-white rounded-full px-6 py-3 text-lg hover:bg-white hover:text-black transition-all"
            href="/projects"
          >
            View My Projects
          </a>
        </section>
      </main>
      <footer className="mt-12 flex gap-8">
        <a
          className="flex items-center gap-2 hover:underline"
          href="/contact"
        >
          <Image
            aria-hidden
            src="/icons/contact.svg"
            alt="Contact"
            width={32}
            height={32}
          />
          Contact Me
        </a>
        <a
          className="flex items-center gap-2 hover:underline"
          href="/blog"
        >
          <Image
            aria-hidden
            src="/icons/linkedin.svg"
            alt="LinkedIn"
            width={32}
            height={32}
          />
          My LinkedIn
        </a>
      </footer>
    </div>
  );
}
