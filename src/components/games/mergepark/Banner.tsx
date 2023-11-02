import React from 'react';

import GameBanner from '@/public/assets/img/games/mergepark/home-banner.webp';
import InBannerImg from '@/public/assets/img/games/mergepark/in-banner.webp';

function Banner() {
  return (
    <section
      style={{
        backgroundImage: `url(${GameBanner.src})`,
      }}
      className="relative m-0 flex min-h-[50vh] w-full items-center justify-center bg-cover bg-center p-0 lg:min-h-screen"
    >
      <span className="absolute left-0 bottom-0 flex h-1/2 w-full items-end justify-center bg-opacity-[0.93] bg-gradient-to-t from-[#40104E] to-transparent">
        <img
          alt="Merge Park"
          src={InBannerImg.src}
          className="w-full max-w-xl object-contain object-center px-5 lg:max-h-[318px] lg:max-w-theme"
        />
      </span>
    </section>
  );
}

export default Banner;
