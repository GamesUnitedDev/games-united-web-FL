import React from 'react';
import { useTranslation } from 'next-i18next';
import {
  Bars,
  Gears,
  M2021,
  M2022,
  M2023,
  MilestoneArrow,
} from '@/components/misc/Illustrations';

function Milestones() {
  const { t } = useTranslation();
  return (
    <section
      data-aos="fade"
      data-aos-duration="300"
      className="flex w-full items-center justify-center overflow-hidden bg-white"
    >
      <section className="flex w-full max-w-xl flex-col items-start justify-start gap-3 py-10 px-5 pb-16 lg:max-w-theme lg:pb-28">
        <h2 className="text-2xl font-black text-primary-purple lg:text-6xl">
          {t('home.milestones.title')}
        </h2>
        <p className="text-sm font-black text-black lg:text-2xl">
          {t('home.milestones.description')}
        </p>
        <ul className="m-0 mt-5 grid w-full list-none grid-cols-1 place-content-start place-items-stretch gap-14 p-0 text-center lg:grid-cols-3 lg:gap-0">
          <li
            data-aos="fade-right"
            data-aos-duration="1000"
            className="m-0 flex w-full flex-col items-center justify-start p-0"
          >
            <h3 className="mb-5">
              <M2021 className="w-full max-w-[103px]" fill="#45015B" />
            </h3>
            <MilestoneArrow className="w-full" fill="#45015B" />
            <div className="-mt-1 h-[28px] w-[1.5px] bg-[#45015B]" />
            <div className="flex aspect-square w-[60px] items-center justify-center rounded-full border-2 border-[#45015B] bg-white p-3">
              <Gears className="w-full" fill="#45015B" />
            </div>
            <ul className="m-0 mt-5 flex list-none flex-col items-center justify-start gap-5 p-0 text-[#45015B]">
              <li className="flex flex-col items-center justify-start">
                <h4 className="text-2xl font-black">
                  {t('home.milestones.milestones.0.elements.0.title')}
                </h4>
                <p className="text-xl font-normal">
                  {t('home.milestones.milestones.0.elements.0.description')}
                </p>
              </li>
              <li className="flex flex-col items-center justify-start">
                <h4 className="text-2xl font-black">
                  {t('home.milestones.milestones.0.elements.1.title')}
                </h4>
                <p className="text-xl font-normal">
                  {t('home.milestones.milestones.0.elements.1.description')}
                </p>
              </li>
              <li className="flex flex-col items-center justify-start">
                <h4 className="text-2xl font-black">
                  {t('home.milestones.milestones.0.elements.2.title')}
                </h4>
                <p className="text-xl font-normal">
                  {t('home.milestones.milestones.0.elements.2.description')}
                </p>
              </li>
            </ul>
          </li>
          <li
            data-aos="fade-right"
            data-aos-duration="1000"
            className="m-0 flex w-full flex-col items-center justify-start p-0"
          >
            <h3 className="mb-5">
              <M2022 className="w-full max-w-[103px]" fill="#5814AE" />
            </h3>
            <MilestoneArrow className="w-full" fill="#5814AE" />
            <div className="-mt-1 h-[28px] w-[1.5px] bg-[#5814AE]" />
            <div className="flex aspect-square w-[60px] items-center justify-center rounded-full border-2 border-[#5814AE] bg-white p-3">
              <Bars className="w-full" fill="#5814AE" />
            </div>
            <ul className="m-0 mt-5 flex list-none flex-col items-center justify-start gap-5 p-0 text-[#5814AE]">
              <li className="flex flex-col items-center justify-start">
                <h4 className="text-2xl font-black">
                  {t('home.milestones.milestones.1.elements.0.title')}
                </h4>
                <p className="p-with-dot text-xl font-normal">
                  {t('home.milestones.milestones.1.elements.0.elements.0')}
                </p>
                <p className="p-with-dot text-xl font-normal">
                  {t('home.milestones.milestones.1.elements.0.elements.1')}
                </p>
              </li>
              <li className="flex flex-col items-center justify-start">
                <h4 className="text-2xl font-black">
                  {t('home.milestones.milestones.1.elements.1.title')}
                </h4>
                <p className="p-with-dot text-xl font-normal">
                  {t('home.milestones.milestones.1.elements.1.elements.0')}
                </p>
                <p className="p-with-dot text-xl font-normal">
                  {t('home.milestones.milestones.1.elements.1.elements.1')}
                </p>
              </li>
            </ul>
          </li>
          <li
            data-aos="fade-right"
            data-aos-duration="1000"
            className="m-0 flex w-full flex-col items-center justify-start p-0"
          >
            <h3 className="mb-5">
              <M2023 className="w-full max-w-[103px]" fill="#8F47C6" />
            </h3>
            <MilestoneArrow
              className="w-full"
              fill="#8F47C6"
              strokeColor="#45015B"
            />
            <div className="-mt-1 h-[28px] w-[1.5px] bg-[#8F47C6]" />
            <div className="flex aspect-square w-[60px] items-center justify-center rounded-full border-2 border-[#8F47C6] bg-white p-3">
              <Bars className="w-full" fill="#8F47C6" />
            </div>
            <ul className="m-0 mt-5 flex list-none flex-col items-center justify-start gap-5 p-0 text-[#8F47C6]">
              <li className="flex flex-col items-center justify-start">
                <h4 className="text-2xl font-black">
                  {t('home.milestones.milestones.2.elements.0.title')}
                </h4>
                <p className="p-with-dot text-xl font-normal">
                  {t('home.milestones.milestones.2.elements.0.elements.0')}
                </p>
                <p className="p-with-dot text-xl font-normal">
                  {t('home.milestones.milestones.2.elements.0.elements.1')}
                </p>
              </li>
              <li className="flex flex-col items-center justify-start">
                <h4 className="text-2xl font-black">
                  {t('home.milestones.milestones.2.elements.1.title')}
                </h4>
                <p className="p-with-dot text-xl font-normal">
                  {t('home.milestones.milestones.2.elements.1.elements.0')}
                </p>
              </li>
            </ul>
          </li>
        </ul>
      </section>
    </section>
  );
}

export default Milestones;
