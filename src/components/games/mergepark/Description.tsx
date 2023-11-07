import GameDownloadButton from '@/components/misc/GameDownloadButton';
import React from 'react';

function Description() {
  return (
    <section className="m-0 flex w-full items-center justify-center p-0">
      <section className="flex w-full max-w-xl flex-col items-center justify-start gap-12 px-5 py-10 lg:max-w-theme">
        <section className="flex flex-wrap items-center justify-center gap-4">
          <GameDownloadButton
            className="flex h-[45px] w-fit max-w-fit items-center justify-center lg:h-[76px]"
            type="appstore"
            url="https://google.com"
          />
          <GameDownloadButton
            className="flex h-[45px] w-fit max-w-fit items-center justify-center lg:h-[76px]"
            type="googleplay"
            url="https://google.com"
          />
        </section>
        <iframe
          allowFullScreen
          title="Merge Park"
          className="aspect-video w-full"
          src="https://www.youtube.com/embed/eRsrbTrbHvE?si=9m0UuiH9l8KDXUBd&autoplay=1&mute=1"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        />
        <p className="whitespace-pre-wrap text-center text-sm font-normal text-black lg:text-2xl">
          {`We know how exciting it is to do something new by combining! That's why we are \npreparing a huge universe full of adventures for you. \nLet’s Merge!`}
        </p>
      </section>
    </section>
  );
}

export default Description;
