import React from 'react';
import Meta from '@/components/layout/Meta';
import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import Banner from '@/components/games/mergepark/Banner';
import Description from '@/components/games/mergepark/Description';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import InGameOne from '@/components/games/mergepark/InGameOne';
import InGameTwo from '@/components/games/mergepark/InGameTwo';
import Download from '@/components/games/mergepark/Download';
import Characters from '@/components/games/mergepark/Characters';

function GameMergePark() {
  return (
    <>
      <Meta
        title="Games United"
        description="We are a Venture Builder which enables startup teams with capital, vision, and strategic direction. Unlike gaming VC’s, a venture builder deals with the day-to-day operations and strategic decisions to grow the new business."
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
