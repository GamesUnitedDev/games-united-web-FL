import React from 'react';
import GameDownloadButton from '@/components/misc/GameDownloadButton';

import PhoneIlsDesktop from '@/public/assets/img/games/mergepark/phone-ils.webp';

function Download() {
  return (
    <section className="m-0 flex w-full items-center justify-center overflow-hidden p-0">
      <section className="flex w-full max-w-xl flex-wrap items-center justify-center gap-5 px-5 py-10 lg:max-w-theme lg:flex-nowrap">
        <section className="flex w-full flex-col items-start justify-start gap-5 lg:min-w-[300px]">
          <h2 className="text-left text-2xl font-black text-black lg:text-4xl">
            Download Now!
          </h2>
          <p className="text-left text-sm text-black lg:text-2xl ">
            Merge new assets and travel undiscovered lands...
          </p>
          <section className="hidden w-full grid-cols-1 place-content-start place-items-start gap-5 lg:grid">
            <GameDownloadButton
              className="flex w-full max-w-[228px] items-center justify-center"
              type="appstore"
              url="https://google.com"
            />
            <GameDownloadButton
              className="flex w-full max-w-[228px] items-center justify-center"
              type="googleplay"
              url="https://google.com"
            />
          </section>
        </section>
        <img
          alt="Merge Park"
          src={PhoneIlsDesktop.src}
          className="w-full translate-x-1/3 scale-150 object-contain object-center lg:-mr-0 lg:translate-x-0 lg:scale-125"
        />
        <section className="flex w-full flex-wrap items-center justify-center gap-5 lg:hidden">
          <GameDownloadButton
            className="flex h-[45px] max-w-fit items-center justify-center"
            type="appstore"
            url="https://google.com"
          />
          <GameDownloadButton
            className="flex h-[45px] max-w-fit items-center justify-center"
            type="googleplay"
            url="https://google.com"
          />
        </section>
      </section>
    </section>
  );
}

export default Download;
