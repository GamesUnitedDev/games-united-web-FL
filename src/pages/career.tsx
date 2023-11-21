import React from 'react';
import Meta from '@/components/layout/Meta';
import { useTranslation } from 'next-i18next';
import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
// import CareerForm from '@/components/forms/Career.form';
import GlobalBanner from '@/components/misc/GlobalBanner';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import BannerImage from '@/public/assets/img/banner-careers.webp';

function ParagraphEN() {
  return (
    <>
      <h2 className=" text-left text-2xl font-black text-primary-purple lg:text-5xl">
        Join our talented and passionate team.
      </h2>
      <p className="text-left text-sm font-normal text-black lg:text-2xl">
        We welcome your CV submissions at{' '}
        <a
          href="mailto:hr@gamesunited.co"
          className="font-black hover:underline"
        >
          hr@gamesunited.co.
        </a>{' '}
        Should your skills align with any of our current openings, we&apos;ll be
        sure to reach out to you promptly. Thank you for considering joining our
        team!
      </p>
    </>
  );
}
function ParagraphTR() {
  return (
    <>
      <h2 className=" text-left text-2xl font-black text-primary-purple lg:text-5xl">
        Yetenekli ekibimize katılın!
      </h2>
      <p className="text-left text-sm font-normal text-black lg:text-2xl">
        CV gönderimlerinizi{' '}
        <a
          href="mailto:hr@gamesunited.co"
          className="font-black hover:underline"
        >
          hr@gamesunited.co
        </a>{' '}
        adresinden bekliyoruz. Becerilerinizin mevcut açık pozisyonlarımızdan
        herhangi biriyle örtüşmesi durumunda, size en kısa sürede
        ulaşacağımızdan emin olabilirsiniz. Ekibimize katılmayı düşündüğünüz
        için teşekkür ederiz!
      </p>
    </>
  );
}

function Career() {
  const {
    t,
    i18n: { language },
  } = useTranslation();
  return (
    <>
      <Meta
        title={t('career.meta.title')}
        description={t('career.meta.description')}
      />
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-start font-theme">
        <GlobalBanner
          withPurpleDot
          image={BannerImage.src}
          title={t('career.title')}
        />
        {/* <CareerForm /> */}
        <section className="flex w-full flex-col items-center justify-center">
          <section className="flex w-full max-w-theme flex-col items-start justify-start gap-10 p-5 py-20">
            {language === 'tr' ? <ParagraphTR /> : <ParagraphEN />}
          </section>
        </section>
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

export default Career;
