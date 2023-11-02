import React from 'react';

import InGameImgOne from '@/public/assets/img/games/mergepark/ingame/ingame-discover.webp';
import InGameImgTwo from '@/public/assets/img/games/mergepark/ingame/ingame-merge.webp';
import InGameImgThree from '@/public/assets/img/games/mergepark/ingame/ingame-harvest.webp';

function InGameOne() {
  return (
    <section className="m-0 flex w-full items-center justify-center p-0">
      <section className="flex w-full max-w-xl flex-col items-start justify-start gap-6 py-10 px-5 lg:max-w-theme lg:py-20">
        <h2 className="text-2xl font-black text-primary-purple lg:px-5 lg:text-5xl">
          Discover New Areas and Complete Story!
        </h2>
        <p className="text-left text-sm text-black lg:px-5 lg:text-2xl">
          Merge new assets and travel undiscovered lands...
        </p>
        <section className="grid w-full grid-cols-1 place-content-start place-items-stretch gap-5 lg:grid-cols-3">
          <img
            alt="Merge Park"
            src={InGameImgOne.src}
            className="h-full w-full rounded-[15px] object-cover object-center"
          />
          <img
            alt="Merge Park"
            src={InGameImgTwo.src}
            className="h-full w-full rounded-[15px] object-cover object-center"
          />
          <img
            alt="Merge Park"
            src={InGameImgThree.src}
            className="h-full w-full rounded-[15px] object-cover object-center"
          />
        </section>
        <p className="text-left text-sm text-black lg:px-5 lg:text-2xl">
          Welcome to Merge Park! New suprises and fun things keep happening. Are
          you ready to discover the new story and meet new characters?
        </p>
      </section>
    </section>
  );
}

export default InGameOne;
