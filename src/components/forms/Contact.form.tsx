import React from 'react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'next-i18next';
import apiClient from '@/common/clients/api.client';
import { usePopup } from '@/contexts/Popup.context';
import FormErrorLabel from '@/components/misc/FormErrorLabel';

function PrivacyPolicyText() {
  const {
    i18n: { language },
  } = useTranslation();

  if (language === 'en') {
    return (
      <p className="text-left text-2xl font-normal text-black">
        I have read and accept the{' '}
        <Link
          href="/legal/privacy-notice"
          target="_blank"
          rel="noreferrer"
          className="text-primary-purple underline"
        >
          Privacy Policy
        </Link>
        .
      </p>
    );
  }

  return (
    <p className="text-left text-2xl font-normal text-black">
      <Link
        href="/tr/legal/privacy-notice"
        target="_blank"
        rel="noreferrer"
        className="text-primary-purple underline"
      >
        Gizlilik Politikası
      </Link>{' '}
      &apos;nı okudum ve kabul ediyorum
    </p>
  );
}

function ContactForm() {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { t } = useTranslation();
  const { activateAlertPopup } = usePopup();

  const onSubmit = async (body: {
    [key: string]: string | { [key: string]: string };
  }) => {
    activateAlertPopup(t('popups.sending-message'), 'loading');
    const { data, error } = await apiClient.sendContactForm(body);

    if (data && !error) {
      reset();
      return activateAlertPopup(t('popups.message-sent'), 'success');
    }

    return activateAlertPopup(t('popups.something-went-wrong'), 'error');
  };

  return (
    <section className="m-0 flex w-full items-center justify-center p-0">
      <section className="grid w-full max-w-xl grid-cols-1 place-content-start place-items-start gap-10 px-5 py-20 lg:max-w-theme lg:grid-cols-2">
        <section className="flex w-full flex-col items-start justify-start gap-6 lg:max-w-[500px]">
          <h2 className=" text-left text-2xl font-black text-primary-purple lg:text-5xl">
            {t('contact.sub-title')}
          </h2>
          <p className="text-left text-sm font-black text-black lg:text-2xl">
            {t('contact.description')}{' '}
            <a className="hover:underline" href="mailto:info@gamesunited.co">
              info@gamesunited.co
            </a>
          </p>
        </section>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex w-full flex-col items-stretch justify-center gap-3"
        >
          <label
            htmlFor="name"
            className="flex w-full flex-col items-start justify-start gap-3"
          >
            <span className="text-left text-sm font-normal text-black lg:text-2xl">
              {t('forms.inputs.name')}
            </span>
            <input
              id="name"
              type="text"
              className="min-h-[65px] w-full rounded-xl border border-primary-purple bg-[#F5F5F5] p-2 text-left text-base text-black !outline-none ring-2 ring-transparent transition-all duration-150 focus-within:ring-primary-purple"
              {...register('name', {
                required: {
                  value: true,
                  message: t('forms.errors.required'),
                },
              })}
            />
            <FormErrorLabel>{errors.name?.message}</FormErrorLabel>
          </label>
          <label
            htmlFor="email"
            className="flex w-full flex-col items-start justify-start gap-3"
          >
            <span className="text-left text-sm font-normal text-black lg:text-2xl">
              {t('forms.inputs.email')}
            </span>
            <input
              id="email"
              type="email"
              className="min-h-[65px] w-full rounded-xl border border-primary-purple bg-[#F5F5F5] p-2 text-left text-base text-black !outline-none ring-2 ring-transparent transition-all duration-150 focus-within:ring-primary-purple"
              {...register('email', {
                required: {
                  value: true,
                  message: t('forms.errors.required'),
                },
                validate: (value) => {
                  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

                  return (
                    emailRegex.test(value) || t('forms.errors.invalid-email')
                  );
                },
              })}
            />
            <FormErrorLabel>{errors.email?.message}</FormErrorLabel>
          </label>
          <label
            htmlFor="message"
            className="flex w-full flex-col items-start justify-start gap-3"
          >
            <span className="text-left text-sm font-normal text-black lg:text-2xl">
              {t('forms.inputs.message')}
            </span>
            <textarea
              id="message"
              className="min-h-[240px] w-full rounded-xl border border-primary-purple bg-[#F5F5F5] p-2 text-left text-base text-black !outline-none ring-2 ring-transparent transition-all duration-150 focus-within:ring-primary-purple"
              {...register('message', {
                required: {
                  value: true,
                  message: t('forms.errors.required'),
                },
                minLength: {
                  value: 10,
                  message: t('forms.errors.min-length-10'),
                },
              })}
            />
            <FormErrorLabel>{errors.message?.message}</FormErrorLabel>
          </label>
          <label
            htmlFor="privacypolicy"
            className="mt-5 flex w-full flex-col items-start justify-start gap-3"
          >
            <section className="flex w-full flex-row flex-nowrap items-start justify-start gap-2">
              <input
                id="privacypolicy"
                type="checkbox"
                className="form-checkbox -mt-0.5 h-8 w-8 cursor-pointer rounded-lg border-2 text-primary-purple transition-all duration-200"
                {...register('privacypolicy', {
                  required: {
                    value: true,
                    message: t('forms.errors.required'),
                  },
                })}
              />
              <PrivacyPolicyText />
            </section>
            <FormErrorLabel>{errors.privacypolicy?.message}</FormErrorLabel>
          </label>
          <section className="flex w-full items-center justify-center">
            <button
              className=" mt-10 rounded-2xl bg-primary-purple px-14 py-3 text-center text-2xl font-bold text-white transition-all duration-150 hover:bg-purple-900"
              type="submit"
            >
              {t('forms.submit')}
            </button>
          </section>
        </form>
      </section>
    </section>
  );
}

export default ContactForm;
