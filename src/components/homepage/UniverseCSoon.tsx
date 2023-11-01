import React from 'react';

import BannerImg from '@/public/assets/img/coming-soon-banner.webp';

function UniverseCSoon() {
  return (
    <section
      style={{
        backgroundImage: `url(${BannerImg.src})`,
      }}
      className="flex w-full items-center justify-center bg-cover bg-center px-5 py-14"
    >
      <section className="flex w-full max-w-xl flex-col items-center justify-start gap-7 text-center lg:max-w-theme">
        <h2 className="w-full max-w-[514px] text-2xl font-black text-white lg:text-6xl">
          Our Universe Is Future Of Gaming
        </h2>
        <p className="text-sm font-black text-white lg:text-2xl ">
          Studios working in a multidiciplinary structure produce games that are
          more innovative and connected to the Games United Universe!
        </p>
        <div className="flex items-center justify-center rounded-[37.5px] border border-white bg-transparent py-3 px-6 text-sm font-black text-white transition-all duration-200 hover:bg-white/10 lg:py-4 lg:px-10 lg:text-xl">
          Coming Soon
        </div>
      </section>
    </section>
  );
}

export default UniverseCSoon;
