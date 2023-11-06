import React from 'react';
import { useForm } from 'react-hook-form';
import FormErrorLabel from '../misc/FormErrorLabel';
import { CloudUpload } from '../misc/Illustrations';

function CareerForm() {
  const {
    watch,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const Resume = watch('resume');

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <section className="m-0 flex w-full items-center justify-center p-0">
      <section className="grid w-full max-w-xl grid-cols-1 place-content-start place-items-start gap-10 px-5 py-20 lg:max-w-theme lg:grid-cols-2">
        <section className="flex w-full flex-col items-start justify-start gap-6 lg:max-w-[500px]">
          <h2 className=" text-left text-2xl font-black text-primary-purple lg:text-5xl">
            Join our talented and passionate team.
          </h2>
          <p className="text-left text-sm font-black text-black lg:text-2xl">
            Find your next opportunity with Games United
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
              Name
            </span>
            <input
              id="name"
              type="text"
              className="min-h-[65px] w-full rounded-xl border border-primary-purple bg-[#F5F5F5] p-2 text-left text-base text-black !outline-none ring-2 ring-transparent transition-all duration-150 focus-within:ring-primary-purple"
              {...register('name', {
                required: {
                  value: true,
                  message: 'This field is required',
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
              E-mail
            </span>
            <input
              id="email"
              type="email"
              className="min-h-[65px] w-full rounded-xl border border-primary-purple bg-[#F5F5F5] p-2 text-left text-base text-black !outline-none ring-2 ring-transparent transition-all duration-150 focus-within:ring-primary-purple"
              {...register('email', {
                required: {
                  value: true,
                  message: 'This field is required',
                },
                validate: (value) => {
                  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

                  return emailRegex.test(value) || 'Invalid email address';
                },
              })}
            />
            <FormErrorLabel>{errors.email?.message}</FormErrorLabel>
          </label>
          <label
            htmlFor="phone"
            className="flex w-full flex-col items-start justify-start gap-3"
          >
            <span className="text-left text-sm font-normal text-black lg:text-2xl">
              Phone
            </span>
            <input
              id="phone"
              type="text"
              className="min-h-[65px] w-full rounded-xl border border-primary-purple bg-[#F5F5F5] p-2 text-left text-base text-black !outline-none ring-2 ring-transparent transition-all duration-150 focus-within:ring-primary-purple"
              {...register('phone', {
                required: {
                  value: true,
                  message: 'This field is required',
                },
                validate: (value) => {
                  const phoneRegex = /^[\d\s+()]*$/;

                  return phoneRegex.test(value) || 'Invalid phone number';
                },
              })}
            />
            <FormErrorLabel>{errors.phone?.message}</FormErrorLabel>
          </label>
          <label
            htmlFor="resume"
            className="flex w-full flex-col items-start justify-start gap-3"
          >
            <span className="text-left text-sm font-normal text-black lg:text-2xl">
              Resume
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
                Browse File
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
                  message: 'This field is required',
                },
                validate: (value) => {
                  const allowedExtensions = [
                    'application/pdf',
                    'application/msword',
                    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
                  ];

                  return (
                    allowedExtensions.includes(value[0].type) ||
                    'Invalid file type'
                  );
                },
              })}
            />
            <FormErrorLabel>{errors.resume?.message}</FormErrorLabel>
          </label>
          <section className="flex w-full items-center justify-center">
            <button
              className=" mt-10 rounded-2xl bg-primary-purple px-14 py-3 text-center text-2xl font-bold text-white transition-all duration-150 hover:bg-purple-900"
              type="submit"
            >
              Submit
            </button>
          </section>
        </form>
      </section>
    </section>
  );
}

export default CareerForm;
