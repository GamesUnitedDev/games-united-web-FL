import React from 'react';
import Meta from '@/components/layout/Meta';
import { useTranslation } from 'react-i18next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

type Props = {
  pdf: string;
};

function PrivacyNotice({ pdf }: Props) {
  const { t } = useTranslation();

  return (
    <>
      <Meta
        title={t('legal.privacy-notice.meta.title')}
        description={t('legal.privacy-notice.meta.description')}
      />
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-start font-theme">
        <section className="flex min-h-[40vh] w-full items-center justify-center bg-primary-purple pt-[200px]">
          <section className="flex w-full max-w-theme items-start justify-start p-5">
            <h1 className="text-left text-2xl font-black text-white lg:text-5xl">
              {t('legal.privacy-notice.title')}
            </h1>
          </section>
        </section>
        <article className="custom-prose-vars prose prose-sm prose-neutral w-full max-w-theme p-5 py-10 prose-ol:pl-10 prose-ul:pl-10 prose-li:pl-4">
          <embed
            src={pdf}
            width="100%"
            height="100%"
            type="application/pdf"
            className="h-full min-h-screen w-full bg-white"
          />
        </article>
      </main>
      <Footer />
    </>
  );
}

export async function getServerSideProps({ locale }) {
  const pdfs = {
    tr: '/assets/legal/privacy-notice-tr.pdf',
    en: '/assets/legal/privacy-notice-en.pdf',
  };

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      pdf: pdfs[locale],
    },
  };
}

export default PrivacyNotice;
