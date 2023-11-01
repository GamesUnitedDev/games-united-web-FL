import React from 'react';
import { useRouter } from 'next/router';
import Wait from '@/common/utils/Wait.util';

import Logo from '@/public/assets/img/logo.webp';

function Loader(): JSX.Element | null {
  const Router = useRouter();
  const [loader, setLoader] = React.useState({
    inHTML: true,
    isActive: true,
  });

  const HideLoader = async () => {
    await Wait(500);
    setLoader({
      inHTML: true,
      isActive: false,
    });
    await Wait(500);
    setLoader({
      inHTML: false,
      isActive: false,
    });
  };

  const ShowLoader = async () => {
    setLoader({
      inHTML: true,
      isActive: true,
    });
  };

  React.useEffect(() => {
    Router.events.on('routeChangeStart', () => ShowLoader());
    Router.events.on('routeChangeComplete', () => HideLoader());
    Router.events.on('routeChangeError', () => HideLoader());

    return () => {
      Router.events.off('routeChangeStart', () => ShowLoader());
      Router.events.off('routeChangeComplete', () => HideLoader());
      Router.events.off('routeChangeError', () => HideLoader());
    };
  }, []);

  React.useEffect(() => {
    HideLoader();
  }, []);

  return (
    (loader.inHTML && (
      <div
        style={{
          transition: loader.isActive ? 'none' : 'all 0.5s',
        }}
        className={`
            ${loader.isActive ? 'visible opacity-100' : 'invisible opacity-0'}
            fixed left-0 top-0 !z-[999999] flex h-full w-full items-center justify-center bg-white
            `}
      >
        <img
          alt="Logo"
          src={Logo.src}
          className="aspect-square w-[100px] animate-pulse object-contain"
        />
      </div>
    )) ||
    null
  );
}

export default Loader;
