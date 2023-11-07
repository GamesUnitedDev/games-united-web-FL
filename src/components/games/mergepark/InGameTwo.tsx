import React from 'react';
import { useTranslation } from 'next-i18next';

import InGameImgFour from '@/public/assets/img/games/mergepark/ingame/ingame-design.webp';
import InGameImgFive from '@/public/assets/img/games/mergepark/ingame/ingame-create.webp';

function InGameTwo() {
  const { t } = useTranslation();
  return (
    <section className="m-0 flex w-full items-center justify-center p-0">
      <section className="flex w-full max-w-xl flex-col items-start justify-start gap-6 py-10 px-5 lg:max-w-theme lg:py-20">
        <h2 className="text-2xl font-black text-primary-purple lg:px-5 lg:text-5xl">
          {t('games.mergepark.main.design.title')}
        </h2>
        <section className="grid w-full grid-cols-1 place-content-start place-items-stretch gap-5 lg:grid-cols-2">
          <img
            alt="Merge Park"
            src={InGameImgFour.src}
            className="h-full w-full rounded-[15px] object-cover object-center"
          />
          <img
            alt="Merge Park"
            src={InGameImgFive.src}
            className="h-full w-full rounded-[15px] object-cover object-center"
          />
        </section>
        <p className="text-left text-sm text-black lg:px-5 lg:text-2xl">
          {t('games.mergepark.main.design.description')}
        </p>
      </section>
    </section>
  );
}

export default InGameTwo;
