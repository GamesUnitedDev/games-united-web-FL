import React from 'react';
import { useTranslation } from 'next-i18next';
import GameDownloadButton from '@/components/misc/GameDownloadButton';

function Description() {
  const { t } = useTranslation();
  return (
    <section className="m-0 flex w-full items-center justify-center p-0">
      <section className="flex w-full max-w-xl flex-col items-center justify-start gap-12 px-5 py-10 lg:max-w-theme">
        <section className="flex flex-wrap items-center justify-center gap-4">
          <GameDownloadButton
            type="appstore"
            imgClassName="h-full object-contain object-center"
            url="https://apps.apple.com/tr/app/merge-park/id6448870187?l=tr"
            className="flex h-[45px] w-fit max-w-fit items-center justify-center lg:h-[76px]"
          />
          <GameDownloadButton
            type="googleplay"
            imgClassName="h-full object-contain object-center"
            className="flex h-[45px] w-fit max-w-fit items-center justify-center lg:h-[76px]"
            url="https://play.google.com/store/apps/details?id=com.GamesUnited.Mergedpark&pcampaignid=web_share"
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
          {t('games.mergepark.main.description')}
        </p>
      </section>
    </section>
  );
}

export default Description;
