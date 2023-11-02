import React from 'react';

import TeamImg1 from '@/public/assets/img/team/team1.webp';
import TeamImg2 from '@/public/assets/img/team/team2.webp';
import TeamImg3 from '@/public/assets/img/team/team3.webp';
import TeamImg4 from '@/public/assets/img/team/team4.webp';
import TeamImg5 from '@/public/assets/img/team/team5.webp';
import TeamImg6 from '@/public/assets/img/team/team6.webp';

function Team() {
  return (
    <section
      data-aos="fade"
      data-aos-duration="300"
      className="m-0 flex w-full items-center justify-center p-0"
    >
      <section className="flex w-full max-w-xl flex-col items-start justify-start gap-3 py-10 px-5 lg:max-w-theme lg:py-20">
        <h2 className="text-2xl font-black text-primary-purple lg:text-6xl">
          Work with Games United
        </h2>
        <p className="text-sm font-black text-black lg:text-2xl">
          Work while having fun!
        </p>
        <section className="mt-1 flex w-full flex-wrap items-stretch justify-between gap-[8px]">
          <img
            src={TeamImg1.src}
            alt="Games United Team"
            className="h-[124px] w-full max-w-[calc(50%_-_6px)] object-cover object-center shadow-xl shadow-transparent transition-all duration-300 lg:h-[297px] lg:max-w-[calc(33.3%_-_6px)] lg:hover:scale-110 lg:hover:shadow-black/30"
          />
          <img
            src={TeamImg2.src}
            alt="Games United Team"
            className="h-[124px] w-full max-w-[calc(50%_-_6px)] object-cover object-center shadow-xl shadow-transparent transition-all duration-300 lg:h-[297px] lg:max-w-[calc(33.3%_-_6px)] lg:hover:scale-110 lg:hover:shadow-black/30"
          />
          <img
            src={TeamImg3.src}
            alt="Games United Team"
            className="h-[124px] w-full max-w-[calc(60%_-_6px)] object-cover object-center shadow-xl shadow-transparent transition-all duration-300 lg:h-[297px] lg:max-w-[calc(33.3%_-_6px)] lg:hover:scale-110 lg:hover:shadow-black/30"
          />
          <img
            src={TeamImg4.src}
            alt="Games United Team"
            className="h-[124px] w-full max-w-[calc(40%_-_6px)] object-cover object-center shadow-xl shadow-transparent transition-all duration-300 lg:h-[297px] lg:max-w-[calc(26%_-_6px)] lg:hover:scale-110 lg:hover:shadow-black/30"
          />
          <img
            src={TeamImg5.src}
            alt="Games United Team"
            className="h-[124px] w-full max-w-[calc(50%_-_6px)] object-cover object-center shadow-xl shadow-transparent transition-all duration-300 lg:h-[297px] lg:max-w-[calc(37%_-_6px)] lg:hover:scale-110 lg:hover:shadow-black/30"
          />
          <img
            src={TeamImg6.src}
            alt="Games United Team"
            className="h-[124px] w-full max-w-[calc(50%_-_6px)] object-cover object-center shadow-xl shadow-transparent transition-all duration-300 lg:h-[297px] lg:max-w-[calc(37%_-_6px)] lg:hover:scale-110 lg:hover:shadow-black/30"
          />
        </section>
      </section>
    </section>
  );
}

export default Team;
