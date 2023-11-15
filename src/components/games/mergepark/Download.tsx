import React from 'react';
import { useTranslation } from 'next-i18next';
import GameDownloadButton from '@/components/misc/GameDownloadButton';

import PhoneIlsDesktop from '@/public/assets/img/games/mergepark/phone-ils.webp';

function Download() {
  const { t } = useTranslation();
  return (
    <section className="m-0 flex w-full items-center justify-center overflow-hidden p-0">
      <section className="flex w-full max-w-xl flex-wrap items-center justify-center px-5 py-10 lg:max-w-theme lg:flex-nowrap lg:gap-20">
        <section className="flex w-full flex-col items-start justify-start gap-5 lg:max-w-[350px]">
          <h2 className="text-left text-2xl font-black text-black lg:text-4xl">
            {t('games.mergepark.main.download.title')}
          </h2>
          <p className="text-left text-sm text-black lg:text-2xl ">
            {t('games.mergepark.main.download.description')}
          </p>
          <section className="hidden w-full grid-cols-1 place-content-start place-items-start gap-5 lg:grid">
            <GameDownloadButton
              imgClassName="w-full object-center object-contain"
              className="flex w-full max-w-[228px] items-center justify-center"
              type="appstore"
              url="https://apps.apple.com/tr/app/merge-park/id6448870187?l=tr"
            />
            <GameDownloadButton
              imgClassName="w-full object-center object-contain"
              className="flex w-full max-w-[228px] items-center justify-center"
              type="googleplay"
              url="https://play.google.com/store/apps/details?id=com.GamesUnited.Mergedpark&pcampaignid=web_share"
            />
          </section>
        </section>
        <img
          alt="Merge Park"
          src={PhoneIlsDesktop.src}
          className="w-full object-contain object-center lg:max-w-[700px]"
        />
        <section className="flex w-full flex-wrap items-center justify-center gap-5 lg:hidden">
          <GameDownloadButton
            type="appstore"
            imgClassName="h-full object-center object-contain"
            className="flex h-[45px] max-w-fit items-center justify-center"
            url="https://apps.apple.com/tr/app/merge-park/id6448870187?l=tr"
          />
          <GameDownloadButton
            type="googleplay"
            imgClassName="h-full object-center object-contain"
            className="flex h-[45px] max-w-fit items-center justify-center"
            url="https://play.google.com/store/apps/details?id=com.GamesUnited.Mergedpark&pcampaignid=web_share"
          />
        </section>
      </section>
    </section>
  );
}

export default Download;
