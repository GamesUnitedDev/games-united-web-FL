import React from 'react';
import Meta from '@/components/layout/Meta';
import { useTranslation } from 'next-i18next';
import Team from '@/components/homepage/Team';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Entry from '@/components/homepage/Entry';
import GameBlock from '@/components/homepage/GameBlock';
import Milestones from '@/components/homepage/Milestones';
import Description from '@/components/homepage/Description';
import UniverseCSoon from '@/components/homepage/UniverseCSoon';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import MergeParkBanner from '@/public/assets/img/games/mergepark/home-banner.webp';

export default function Home(): JSX.Element {
  const { t } = useTranslation();
  return (
    <>
      <Meta
        title={t('home.meta.title')}
        description={t('home.meta.description')}
      />
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-start font-theme">
        <Entry />
        <Description />
        <GameBlock
          game={{
            title: 'games.mergepark.gameblock.title',
            image: MergeParkBanner.src,
            description: 'games.mergepark.gameblock.description',
            url: '/games/merge-park',
            googleplayUrl: 'https://google.com',
            appstoreUrl: 'https://google.com',
          }}
        />
        <Milestones />
        <Team />
        <UniverseCSoon />
      </main>
      <Footer />
    </>
  );
}

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}
