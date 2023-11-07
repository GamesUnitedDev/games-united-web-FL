import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

import ChEmma from '@/public/assets/img/games/mergepark/characters/ch-emma.webp';
import ChMrPuddleton from '@/public/assets/img/games/mergepark/characters/ch-mr-puddleton.webp';
import ChJennifer from '@/public/assets/img/games/mergepark/characters/ch-jennifer.webp';
import ChOlivia from '@/public/assets/img/games/mergepark/characters/ch-olivia.webp';
import ChAnthony from '@/public/assets/img/games/mergepark/characters/ch-anthony.webp';
import { Swiper as SwiperType } from 'swiper';
import { ChevronsLeft, ChevronsRight } from '@/components/misc/Illustrations';

function Characters() {
  const [slider, setSlider] = React.useState<SwiperType | null>(null);
  const [activeSindex, setActiveSindex] = React.useState(0);

  const characters = [
    {
      name: 'Emma',
      img: ChEmma.src,
    },
    {
      name: 'Mr. Puddleton',
      img: ChMrPuddleton.src,
    },
    {
      name: 'Jennifer',
      img: ChJennifer.src,
    },
    {
      name: 'Olivia',
      img: ChOlivia.src,
    },
    {
      name: 'Anthony',
      img: ChAnthony.src,
    },
  ];

  return (
    <section className="m-0 flex w-full items-center justify-center p-0">
      <section className="flex w-full max-w-xl flex-col items-start justify-start gap-12 py-10 px-5 lg:max-w-theme lg:py-20">
        <h2 className="text-2xl font-black text-primary-purple lg:px-5 lg:text-5xl">
          Meet New Friends...
        </h2>
        <ul className="m-0 hidden w-full items-stretch justify-between gap-5 p-0 px-10 lg:flex lg:flex-nowrap">
          {characters.map((character, index) => (
            <li
              key={`merge-park-character-${index}`}
              className="m-0 flex w-fit flex-col items-center justify-between gap-9 p-0"
            >
              <img
                alt={`Merge Park - ${character.name}`}
                src={character.img}
                className="h-full max-h-[275px] w-full object-contain object-center"
              />
              <p className="text-center text-2xl font-black text-black">
                {character.name}
              </p>
            </li>
          ))}
        </ul>
        <section className="relative m-0 flex w-full items-center justify-center p-0 lg:hidden">
          <button
            onClick={() => slider?.slidePrev()}
            type="button"
            className="absolute left-5 top-1/2 z-[3] -translate-y-1/2 transition-all duration-300"
            style={{
              opacity: slider?.isBeginning ? 0 : 1,
              visibility: slider?.isBeginning ? 'hidden' : 'visible',
              pointerEvents: slider?.isBeginning ? 'none' : 'all',
            }}
          >
            <ChevronsLeft className="h-8 w-8" />
          </button>
          <button
            onClick={() => slider?.slideNext()}
            type="button"
            className="absolute right-5 top-1/2 z-[3] -translate-y-1/2 transition-all duration-300"
            style={{
              opacity: slider?.isEnd ? 0 : 1,
              visibility: slider?.isEnd ? 'hidden' : 'visible',
              pointerEvents: slider?.isEnd ? 'none' : 'all',
            }}
          >
            <ChevronsRight className="h-8 w-8" />
          </button>
          <Swiper
            onSwiper={(swiper) => {
              setSlider(swiper);
            }}
            spaceBetween={5}
            slidesPerView={2}
            updateOnWindowResize
            onSlideChange={(swiper) => {
              setActiveSindex(swiper.activeIndex);
            }}
            className="mergepark-ch-slider relative w-full flex-wrap items-stretch justify-between gap-5 p-0 px-10 pr-32 "
          >
            {characters.map((character, index) => (
              <SwiperSlide
                style={{
                  opacity: activeSindex === index ? 1 : 0.1,
                }}
                key={`merge-park-character-slide-${index}`}
                className=" m-0 !flex !h-full w-full flex-col items-center justify-between gap-9 p-0 !transition-opacity !duration-300"
              >
                <img
                  alt={`Merge Park - ${character.name}`}
                  src={character.img}
                  className="h-[275px] w-full object-contain object-center"
                />
                <p className="text-center text-2xl font-black text-black">
                  {character.name}
                </p>
              </SwiperSlide>
            ))}
            <SwiperSlide />
          </Swiper>
        </section>
        <p className="text-left text-sm text-black lg:px-5 lg:text-2xl">
          Welcome to Merge Park! New suprises and fun things keep happening. Are
          you ready to discover the new story and meet new characters?
        </p>
      </section>
    </section>
  );
}

export default Characters;
