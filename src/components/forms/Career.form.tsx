import React from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'next-i18next';
import apiClient from '@/common/clients/api.client';
import { usePopup } from '@/contexts/Popup.context';
import FormErrorLabel from '@/components/misc/FormErrorLabel';
import { CloudUpload } from '@/components/misc/Illustrations';
import readFileAsBase64 from '@/common/utils/ReadAsBase64.util';
import Link from 'next/link';

function PrivacyPolicyText() {
  const {
    i18n: { language },
  } = useTranslation();

  if (language === 'en') {
    return (
      <p className="text-left text-base font-normal text-black lg:text-2xl">
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
    <p className="text-left text-base font-normal text-black lg:text-2xl">
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

function CareerForm() {
  const {
    reset,
    watch,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { t } = useTranslation();
  const Resume = watch('resume');

  const { activateAlertPopup } = usePopup();

  const onSubmit = async (body: {
    [key: string]: string | { [key: string]: string };
  }) => {
    activateAlertPopup(t('popups.sending-career'), 'loading');
    const resume = body.resume[0];
    const base64file = await readFileAsBase64(resume);

    const file = {
      name: resume.name,
      type: resume.type,
      data: base64file,
    };

    const { data, error } = await apiClient.sendCareerForm({
      name: body.name,
      email: body.email,
      resume: file,
    });

    if (data && !error) {
      reset();
      return activateAlertPopup(t('popups.career-sent'), 'success');
    }

    return activateAlertPopup(t('popups.something-went-wrong'), 'error');
  };

  return (
    <section className="m-0 flex w-full items-center justify-center p-0">
      <section className="grid w-full max-w-xl grid-cols-1 place-content-start place-items-start gap-10 px-5 py-20 lg:max-w-theme lg:grid-cols-2">
        <section className="flex w-full flex-col items-start justify-start gap-6 lg:max-w-[500px]">
          <h2 className=" text-left text-2xl font-black text-primary-purple lg:text-5xl">
            {t('career.sub-title')}
          </h2>
          <p className="text-left text-sm font-black text-black lg:text-2xl">
            {t('career.description')}
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
            <span className="text-left text-base font-normal text-black lg:text-2xl">
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
            <span className="text-left text-base font-normal text-black lg:text-2xl">
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
            htmlFor="resume"
            className="flex w-full flex-col items-start justify-start gap-3"
          >
            <span className="text-left text-sm font-normal text-black lg:text-2xl">
              {t('forms.inputs.resume')}
            </span>
            <section className="flex w-full flex-row flex-wrap items-center justify-between gap-5 rounded-xl bg-primary-purple p-5 lg:flex-nowrap">
              <section className="flex flex-row items-center justify-start gap-5">
                <CloudUpload className=" h-12 w-12 text-white" />
                <span className="text-left text-sm text-white">
                  {Resume?.length > 0 &&
                    (Resume[0].name.length > 20
                      ? `${Resume[0].name.substring(0, 20)}...`
                      : Resume[0].name)}
                </span>
              </section>
              <button
                type="button"
                onClick={() => document.getElementById('resume')?.click()}
                className="w-full rounded-2xl bg-[#300B60] px-14 py-3 text-center text-2xl font-normal text-white transition-all duration-150 hover:bg-purple-900 lg:w-auto"
              >
                {t('forms.browse-file')}
              </button>
            </section>
            <input
              id="resume"
              type="file"
              className="hidden"
              accept=".pdf,.doc,.docx"
              {...register('resume', {
                required: {
                  value: true,
                  message: t('forms.errors.required'),
                },
                validate: (value) => {
                  const allowedExtensions = [
                    'application/pdf',
                    'application/msword',
                    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
                  ];

                  return (
                    allowedExtensions.includes(value[0].type) ||
                    t('forms.errors.invalid-file')
                  );
                },
              })}
            />
            <FormErrorLabel>{errors.resume?.message}</FormErrorLabel>
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
              className="mt-10 rounded-2xl bg-primary-purple px-14 py-3 text-center text-2xl font-bold text-white transition-all duration-150 hover:bg-purple-900"
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

export default CareerForm;
