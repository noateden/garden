import { Ubuntu } from 'next/font/google';
import React from 'react';

const MainFont = Ubuntu({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  preload: false,
});

export default function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={MainFont.className}>
      <div className="mx-auto max-w-3xl px-2">
        <div className="mt-10 flex justify-between items-center">
          <a href="/">
            <p className="text-xl font-bold text-foreground">Eden Garden 🍃</p>
          </a>
          <div className="flex justify-center">
            <a className="underline" href="/">
              Home
            </a>
            <a className="ml-5 underline" href="/writings">
              Writings
            </a>
            <a className="ml-5 underline" href="https://github.com/noateden" target="_blank">
              Github
            </a>
          </div>
        </div>
        <div className="mt-2 flex justify-start">
          <p className="text-base text-foceground-light">My garden is full of bugs, but I'm loving it!</p>
        </div>
      </div>

      <div className="my-10 w-full mx-auto max-w-3xl px-2">{children}</div>
    </div>
  );
}
