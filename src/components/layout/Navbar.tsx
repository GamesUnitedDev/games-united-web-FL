import React from 'react';
import Link from 'next/link';
import { BsXLg } from 'react-icons/bs';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import LanguageSelector from '@/components/layout/LanguageSelector';
import { NavbarLink, MobileMenuProps } from '@/types/boilerplate.types';

import Logo from '@/public/assets/img/logo.webp';

const HeaderLinks: NavbarLink[] = [
  {
    id: 0,
    name: 'header.about',
    url: '/',
  },
  {
    id: 1,
    name: 'header.games',
    url: '/games/merge-park',
  },
  {
    id: 2,
    name: 'header.career',
    url: '/career',
  },
  {
    id: 3,
    name: 'header.contact',
    url: '/contact',
  },
];

function DesktopNavbarElement({
  url,
  name,
}: {
  url: string;
  name: string;
}): JSX.Element {
  const { t } = useTranslation();
  const Router = useRouter();

  const isCurrentRoute = React.useMemo(() => {
    if (
      url !== '/' &&
      (Router.pathname === url ||
        Router.pathname.includes(url.replace('#', '')))
    )
      return true;
    return false;
  }, [Router.pathname, url]);

  return (
    <Link
      className={`
        relative text-base font-semibold text-white
        before:absolute before:bottom-[-5px] before:left-1/2 before:h-[2px] before:w-[1px] before:-translate-x-1/2 before:bg-white before:opacity-0 before:transition-all before:duration-300
        ${
          isCurrentRoute
            ? 'before:!w-[150%] before:!opacity-100'
            : 'hover:before:w-[150%] hover:before:opacity-100'
        }
      `}
      href={url}
    >
      {t(name)}
    </Link>
  );
}

function Menu({ isActive }: MobileMenuProps): JSX.Element {
  const { t } = useTranslation();

  return (
    <nav
      className={`${
        isActive
          ? 'pointer-events-auto visible opacity-100'
          : 'pointer-events-none invisible opacity-0 delay-200'
      } fixed left-0 top-0  z-[2] m-0 flex h-full w-full items-stretch justify-center bg-purple-700/20 p-0 transition-all duration-300 lg:hidden lg:justify-end`}
    >
      <ul
        className={`${
          isActive ? 'translate-x-0 delay-200' : 'translate-x-full'
        } m-0 flex h-full min-h-fit w-full list-none flex-col items-start justify-start gap-5 overflow-y-auto bg-purple-700 p-5 pt-32 transition-all duration-500 lg:max-w-[50%] lg:p-20`}
      >
        {HeaderLinks.map(({ url, name, id }) => (
          <li key={`m-elm-${id}`}>
            <Link className="font-semibold text-white" href={url}>
              {t(name)}
            </Link>
          </li>
        ))}
        <li>
          <LanguageSelector />
        </li>
      </ul>
    </nav>
  );
}

export default function Navbar(): JSX.Element {
  const Router = useRouter();

  const [menuStatus, setMenuStatus] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (menuStatus) {
      window.scrollTo({
        top: 0,
        behavior: 'auto',
      });
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [menuStatus]);

  React.useEffect(() => {
    setMenuStatus(false);
  }, [Router]);

  return (
    <header className="absolute left-0 top-0 z-[10] flex min-h-[152px] w-full items-start justify-center bg-transparent pt-5 font-theme lg:min-h-[214px]">
      <div className="absolute left-0 top-0 z-[-1] h-full w-full bg-gradient-to-b from-[#490E95] to-transparent" />
      <section className="relative flex w-full flex-wrap items-center justify-between gap-5 p-5">
        <Link
          href="/"
          className="relative z-[50] transition-all duration-200 lg:hover:scale-110"
        >
          <img
            alt="Logo"
            src={Logo.src}
            className="w-full max-w-[76px] object-contain lg:max-w-[132px]"
          />
        </Link>
        <nav className="hidden w-fit items-center justify-end gap-5 lg:flex">
          <ul className="flex w-fit items-center justify-end gap-24">
            {HeaderLinks.map(({ url, name, id }) => (
              <li key={`d-elm-${id}`}>
                <DesktopNavbarElement url={url} name={name} />
              </li>
            ))}
          </ul>
        </nav>
        <section className="flex min-h-[1p] w-full max-w-[76px] items-center justify-end lg:max-w-[132px]">
          <div className="hidden lg:block">
            <LanguageSelector />
          </div>
          <button
            type="button"
            onClick={() => setMenuStatus(!menuStatus)}
            className="relative z-[100] flex max-w-fit items-center justify-center text-white lg:hidden"
          >
            <HiOutlineMenuAlt3
              className={`${
                menuStatus
                  ? 'rotate-180 -scale-0 opacity-0'
                  : '-scale-100 opacity-100 delay-100'
              } h-8 w-8 text-center transition-all duration-500`}
            />
            <BsXLg
              className={`${
                menuStatus
                  ? '-scale-100 opacity-100 delay-100'
                  : '-rotate-180 -scale-0 opacity-0'
              } absolute left-1/2 top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 text-center transition-all duration-500`}
            />
          </button>
        </section>
      </section>
      <Menu isActive={menuStatus} />
    </header>
  );
}
