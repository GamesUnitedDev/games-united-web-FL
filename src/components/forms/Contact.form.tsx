import React from 'react';
import { useForm } from 'react-hook-form';
import FormErrorLabel from '../misc/FormErrorLabel';

function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <section className="m-0 flex w-full items-center justify-center p-0">
      <section className="grid w-full max-w-xl grid-cols-1 place-content-start place-items-start gap-10 px-5 py-20 lg:max-w-theme lg:grid-cols-2">
        <section className="flex w-full flex-col items-start justify-start gap-6 lg:max-w-[500px]">
          <h2 className=" text-left text-2xl font-black text-primary-purple lg:text-5xl">
            We&apos;ll get back to you as soon as possible
          </h2>
          <p className="text-left text-sm font-black text-black lg:text-2xl">
            For any Inquiries and questions about us and our activities, please
            contact us at info@gamesunited.co
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
            htmlFor="message"
            className="flex w-full flex-col items-start justify-start gap-3"
          >
            <span className="text-left text-sm font-normal text-black lg:text-2xl">
              Message
            </span>
            <textarea
              id="message"
              className="min-h-[240px] w-full rounded-xl border border-primary-purple bg-[#F5F5F5] p-2 text-left text-base text-black !outline-none ring-2 ring-transparent transition-all duration-150 focus-within:ring-primary-purple"
              {...register('message', {
                required: {
                  value: true,
                  message: 'This field is required',
                },
                minLength: {
                  value: 10,
                  message: 'This field must be at least 10 characters long',
                },
              })}
            />
            <FormErrorLabel>{errors.message?.message}</FormErrorLabel>
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

export default ContactForm;
