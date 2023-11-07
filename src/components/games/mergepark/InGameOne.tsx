import React from 'react';
import { useTranslation } from 'next-i18next';

import InGameImgOne from '@/public/assets/img/games/mergepark/ingame/ingame-discover.webp';
import InGameImgTwo from '@/public/assets/img/games/mergepark/ingame/ingame-merge.webp';
import InGameImgThree from '@/public/assets/img/games/mergepark/ingame/ingame-harvest.webp';

function InGameOne() {
  const { t } = useTranslation();
  return (
    <section className="m-0 flex w-full items-center justify-center p-0">
      <section className="flex w-full max-w-xl flex-col items-start justify-start gap-6 py-10 px-5 lg:max-w-theme lg:py-20">
        <h2 className="text-2xl font-black text-primary-purple lg:px-5 lg:text-5xl">
          {t('games.mergepark.main.discover.title')}
        </h2>
        <p className="text-left text-sm text-black lg:px-5 lg:text-2xl">
          {t('games.mergepark.main.discover.description')}
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
          {t('games.mergepark.main.discover.sub-description')}
        </p>
      </section>
    </section>
  );
}

export default InGameOne;
