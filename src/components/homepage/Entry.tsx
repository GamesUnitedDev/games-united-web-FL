import React from 'react';
import { useTranslation } from 'next-i18next';

import EntryGuy from '@/public/assets/img/entry-guy.png';

function Entry() {
  const { t } = useTranslation();
  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-white">
      <svg
        className="absolute left-0 top-0 hidden w-[105%] lg:block"
        viewBox="0 0 1728 827"
        fill="none"
      >
        <path d="M0 0H1728V359.673L0 827V0Z" fill="#5814AE" />
      </svg>
      <svg
        className="absolute left-0 top-0 block w-[105%] lg:hidden"
        viewBox="0 0 393 642"
        fill="none"
      >
        <path d="M-471 0H864V279.214L-471 642V0Z" fill="#5814AE" />
      </svg>
      <section className="z-[2] flex w-full max-w-xl flex-col px-5 lg:max-w-theme lg:flex-row lg:flex-nowrap lg:items-start lg:justify-between">
        <h1 className="mt-[150px] w-fit max-w-[80%] border-b-[3px] pb-5 pr-1 text-left text-4xl font-black text-white md:max-w-[70%] md:text-5xl lg:mt-[200px] lg:text-8xl">
          {t('home.entry.title')}
        </h1>
        <img
          alt="Games United"
          src={EntryGuy.src}
          className="mt-[-20px] w-full max-w-[212px] self-end object-contain object-center lg:ml-[-50px] lg:mt-[100px] lg:max-w-[476px]"
        />
      </section>
    </section>
  );
}

export default Entry;
