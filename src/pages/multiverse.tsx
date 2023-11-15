import React from 'react';
import Meta from '@/components/layout/Meta';
import { useTranslation } from 'next-i18next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import MultiverseLogo from '@/public/assets/img/multiverse/logo.webp';

export default function Home(): JSX.Element {
  const { t } = useTranslation();
  return (
    <>
      <Meta
        title={t('multiverse.meta.title')}
        description={t('multiverse.meta.description')}
      />
      <Navbar withGradient={false} />
      <main className="flex min-h-screen flex-col items-center justify-center gap-10 bg-black p-5 pb-32 pt-[200px] font-theme">
        <img
          alt="Multiverse Logo"
          src={MultiverseLogo.src}
          className="w-full max-w-[364px]"
        />
        <iframe
          allowFullScreen
          title="Merge Park"
          className="aspect-video w-full p-0 lg:p-10"
          src="https://www.youtube.com/embed/ZMQO5nMXdpM?si=Kr56kNe9NqHWLSLF&autoplay=1&mute=1"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
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
