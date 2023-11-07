import React from 'react';
import Meta from '@/components/layout/Meta';
import { useTranslation } from 'next-i18next';
import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import Banner from '@/components/games/mergepark/Banner';
import Download from '@/components/games/mergepark/Download';
import InGameOne from '@/components/games/mergepark/InGameOne';
import InGameTwo from '@/components/games/mergepark/InGameTwo';
import Characters from '@/components/games/mergepark/Characters';
import Description from '@/components/games/mergepark/Description';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

function GameMergePark() {
  const { t } = useTranslation();
  return (
    <>
      <Meta
        title={t('games.mergepark.main.meta.title')}
        description={t('games.mergepark.main.meta.description')}
      />
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-start font-theme">
        <Banner />
        <Description />
        <InGameOne />
        <Characters />
        <InGameTwo />
        <Download />
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

export default GameMergePark;
