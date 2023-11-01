import React from 'react';
import Meta from '@/components/layout/Meta';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function Home(): JSX.Element {
  return (
    <>
      <Meta
        title="Games | Games United"
        description="We are a Venture Builder which enables startup teams with capital, vision, and strategic direction. Unlike gaming VC’s, a venture builder deals with the day-to-day operations and strategic decisions to grow the new business."
      />
      <Navbar />
      <main className="flex min-h-screen items-center justify-center pt-[150px]">
        Games.
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
