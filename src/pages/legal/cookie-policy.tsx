import React from 'react';
import Meta from '@/components/layout/Meta';
import { useTranslation } from 'next-i18next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ReactHtmlParser from 'react-html-parser';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import PDFTR from '@/public/assets/legal/cookie-policy-en.html';
import PDFEN from '@/public/assets/legal/cookie-policy-tr.html';

type Props = {
  pdf: string;
};

function CookiePolicy({ pdf }: Props) {
  const { t } = useTranslation();
  const parcedPDF: JSX.Element[] = ReactHtmlParser(pdf);
  return (
    <>
      <Meta
        title={t('legal.cookie-policy.meta.title')}
        description={t('legal.cookie-policy.meta.description')}
      />
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-start font-theme">
        <section className="flex min-h-[40vh] w-full items-center justify-center bg-primary-purple pt-[200px]">
          <section className="flex w-full max-w-theme items-start justify-start p-5">
            <h1 className="text-left text-2xl font-black text-white lg:text-5xl">
              {t('legal.cookie-policy.title')}
            </h1>
          </section>
        </section>
        <article
          className="custom-prose-vars prose prose-sm prose-neutral w-full max-w-theme py-10 prose-ol:pl-10 prose-ul:pl-10 prose-li:pl-4"
          style={{
            fontSize: '12pt',
          }}
        >
          {parcedPDF}
        </article>
      </main>
      <Footer />
    </>
  );
}

export async function getServerSideProps({ locale }) {
  const pdfs = {
    tr: PDFTR,
    en: PDFEN,
  };

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      pdf: pdfs[locale],
    },
  };
}

export default CookiePolicy;
