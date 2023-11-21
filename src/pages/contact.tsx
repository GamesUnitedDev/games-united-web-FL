import React from 'react';
import Meta from '@/components/layout/Meta';
import { useTranslation } from 'next-i18next';
import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
// import ContactForm from '@/components/forms/Contact.form';
import GlobalBanner from '@/components/misc/GlobalBanner';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import BannerImage from '@/public/assets/img/banner-contact.webp';

function ParagraphEN() {
  return (
    <>
      <h2 className=" text-left text-2xl font-black text-primary-purple lg:text-5xl">
        We&apos;ll get back to you as soon as possible
      </h2>
      <p className="text-left text-sm font-normal text-black lg:text-2xl">
        For any inquiries or questions about Games United and our activities,
        please feel free to reach out to us at{' '}
        <a
          href="mailto:hello@gamesunited.co"
          className="font-black hover:underline"
        >
          hello@gamesunited.co.
        </a>{' '}
      </p>
    </>
  );
}
function ParagraphTR() {
  return (
    <>
      <h2 className=" text-left text-2xl font-black text-primary-purple lg:text-5xl">
        Size en yakın sürede geri döneceğiz.
      </h2>
      <p className="text-left text-sm font-normal text-black lg:text-2xl">
        Games United ve faaliyetlerimizle ilgili sorularınız için lütfen{' '}
        <a
          href="mailto:hello@gamesunited.co"
          className="font-black hover:underline"
        >
          hello@gamesunited.co
        </a>{' '}
        adresinden bize ulaşmaktan çekinmeyin.
      </p>
    </>
  );
}

function Contact() {
  const {
    t,
    i18n: { language },
  } = useTranslation();
  return (
    <>
      <Meta
        title={t('contact.meta.title')}
        description={t('contact.meta.description')}
      />
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-start font-theme">
        <GlobalBanner
          withPurpleDot
          image={BannerImage.src}
          title={t('contact.title')}
        />
        {/* <ContactForm /> */}
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

export default Contact;
