import React from 'react';
import { useTranslation } from 'next-i18next';

function Description() {
  const { t } = useTranslation();
  return (
    <section
      data-aos="fade"
      data-aos-duration="300"
      className="flex w-full items-center justify-center"
    >
      <section className="flex w-full max-w-xl flex-col items-start justify-start gap-5 p-5 py-10 lg:max-w-theme lg:py-20">
        <h2 className="text-2xl font-black text-primary-purple lg:text-5xl">
          {t('home.description.title')}
        </h2>
        <p className="text-sm font-normal text-black lg:text-2xl">
          {t('home.description.description')}
        </p>
      </section>
    </section>
  );
}

export default Description;
