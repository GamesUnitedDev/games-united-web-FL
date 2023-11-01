import React from 'react';
import Meta from '@/components/layout/Meta';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Entry from '@/components/homepage/Entry';
import GameBlock from '@/components/homepage/GameBlock';
import Description from '@/components/homepage/Description';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import MergeParkBanner from '@/public/assets/img/games/mergepark/home-banner.png';

export default function Home(): JSX.Element {
  return (
    <>
      <Meta
        title="Games United"
        description="We are a Venture Builder which enables startup teams with capital, vision, and strategic direction. Unlike gaming VC’s, a venture builder deals with the day-to-day operations and strategic decisions to grow the new business."
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
          }}
        />
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
