import React from 'react';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';

type Props = {
  game: {
    title: string;
    image: string;
    description: string;
    url?: string;
    urlText?: string;
  };
};

function GameBlock({
  game: {
    title,
    image,
    description,
    url,
    urlText = 'games.gameblock.view-button',
  },
}: Props) {
  const { t } = useTranslation();
  return (
    <section id="games" className="flex w-full items-center justify-center">
      <section className="flex w-full max-w-xl flex-col items-start justify-start gap-6 py-10 px-0 lg:max-w-theme lg:px-5 lg:py-20">
        <h3 className="px-5 text-2xl font-black text-primary-purple lg:px-0 lg:text-5xl">
          {t(title)}
        </h3>
        <img
          className="object-cover object-center lg:rounded-[36px]"
          src={image}
          alt={title}
        />
        <p className="px-5 text-sm font-normal text-black lg:mt-[36px] lg:px-0 lg:text-2xl">
          {t(description)}
        </p>
        {url && (
          <Link
            className="mx-5 rounded-[37.5px] border border-black bg-white py-4 px-6 text-center text-sm font-black text-primary-purple hover:bg-primary-purple/30 lg:mx-0 lg:py-6 lg:px-16 lg:text-xl"
            href={url}
          >
            {t(urlText)}
          </Link>
        )}
      </section>
    </section>
  );
}

export default GameBlock;
