import React from 'react';
import Link from 'next/link';
import Logo from '@/public/assets/img/logo.webp';

function Footer(): JSX.Element {
  return (
    <footer className="flex w-full flex-col items-center justify-start gap-20 bg-[#430098] py-16 px-5 font-theme">
      <section className="flex w-full max-w-md flex-wrap items-start justify-center gap-12 lg:max-w-[1100px] lg:flex-nowrap lg:justify-between lg:gap-24">
        <section className="flex w-full flex-col items-center justify-start gap-5 lg:items-start">
          <Link
            href="/"
            className="relative transition-all duration-200 lg:hover:scale-110"
          >
            <img
              alt="Logo"
              src={Logo.src}
              className="w-full max-w-[127px] object-contain object-center"
            />
          </Link>
          <p className="text-center text-sm font-normal text-white lg:text-left lg:text-2xl">
            For any inquiries and questions about us and our activities, please
            contact us at{' '}
            <a className="hover:underline" href="mailto:hello@gamesunited.co">
              hello@gamesunited.co
            </a>
          </p>
        </section>
        <section className="flex w-full flex-wrap items-center justify-center gap-x-20 gap-y-10 lg:flex-nowrap lg:justify-between">
          <section className="flex flex-col items-center justify-start gap-6 text-center lg:items-start lg:text-left">
            <h4 className="text-2xl font-semibold text-white">Company</h4>
            <ul className="m-0 flex list-none flex-col items-center justify-start gap-4 p-0 text-2xl font-normal text-white lg:items-start">
              <li>
                <Link className="hover:underline" href="/#games">
                  Games
                </Link>
              </li>
              <li>
                <Link className="hover:underline" href="/about">
                  About
                </Link>
              </li>
              <li>
                <Link className="hover:underline" href="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </section>
          <section className="flex flex-col items-center justify-start gap-6 text-center lg:items-start lg:text-left">
            <h4 className="text-2xl font-semibold text-white">Social Links</h4>
            <ul className="m-0 flex list-none flex-col items-center justify-start gap-4 p-0 text-2xl font-normal text-white lg:items-start">
              <li>
                <Link
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline"
                  href="https://instagram.com"
                >
                  Instagram
                </Link>
              </li>
              <li>
                <Link
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline"
                  href="https://youtube.com"
                >
                  Youtube
                </Link>
              </li>
              <li>
                <Link
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline"
                  href="https://linkedin.com"
                >
                  Linkedin
                </Link>
              </li>
            </ul>
          </section>
        </section>
      </section>
      <section className="flex w-full max-w-md flex-col items-center justify-center gap-5 lg:max-w-theme">
        <p className="text-center text-xl font-normal text-[#23044A]">
          © 2021 - 2023 Games United Corporation. All rights reserved.
        </p>
        <section className="flex w-full flex-wrap items-center justify-center gap-6 text-center text-xl text-[#23044A]">
          <Link
            className="underline transition-all duration-150 hover:text-white"
            href="/legal/privacy-notice"
          >
            Privacy Notice
          </Link>
          <Link
            className="underline transition-all duration-150 hover:text-white"
            href="/legal/terms-of-service"
          >
            Terms of Service
          </Link>
          <Link
            className="underline transition-all duration-150 hover:text-white"
            href="/legal/code-of-conduct"
          >
            Code of Conduct
          </Link>
          <Link
            className="underline transition-all duration-150 hover:text-white"
            href="/legal/cookie-policy"
          >
            Cookie Policy
          </Link>
          <Link
            className="underline transition-all duration-150 hover:text-white"
            href="/legal/unsolicited-content-and-product-feedback-policy"
          >
            Unsolicited content and product feedback policy
          </Link>
        </section>
      </section>
    </footer>
  );
}

export default Footer;
