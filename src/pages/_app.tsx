/* eslint-disable react/no-unknown-property */
import AOS from 'aos';
import React from 'react';
import type { AppProps } from 'next/app';
import localFont from '@next/font/local';
import Loader from '@/components/layout/Loader';
import { appWithTranslation } from 'next-i18next';
import PopupWrapper from '@/contexts/Popup.context';
import AlertPopup from '@/components/popups/Alert.popup';
import CookiePopup from '@/components/popups/Cookie.popup';
import ConfirmPopup from '@/components/popups/Confirm.popup';

// ? Global styles
import 'aos/dist/aos.css';
import '@/styles/globals.css';

// * Local font implementation with @next/font/local - #1
//

const Avenir = localFont({
  src: [
    {
      path: '/../../public/assets/fonts/avenir/Avenir-Black.ttf',
      weight: '900',
    },
    {
      path: '/../../public/assets/fonts/avenir/Avenir-Book.ttf',
      weight: '400',
    },
    {
      path: '/../../public/assets/fonts/avenir/Avenir-Heavy.ttf',
      weight: '800',
    },
    {
      path: '/../../public/assets/fonts/avenir/Avenir-Light.ttf',
      weight: '300',
    },
    {
      path: '/../../public/assets/fonts/avenir/Avenir-Regular.ttf',
      weight: 'normal',
    },
  ],
  variable: '--font-avenir',
  fallback: ['Avenir', 'Helvetica', 'Arial', 'sans-serif'],
});

function App({ Component, pageProps }: AppProps) {
  React.useEffect(() => {
    AOS.init({
      once: true,
      easing: 'ease-in-out',
      anchorPlacement: 'top-center',
    });
  }, []);
  return (
    <>
      <style jsx global>
        {`
          :root {
            --font-avenir: ${Avenir.style.fontFamily};
          }
        `}
      </style>
      <PopupWrapper>
        <Loader />
        <AlertPopup />
        <CookiePopup />
        <ConfirmPopup />
        <Component {...pageProps} />
      </PopupWrapper>
    </>
  );
}
export default appWithTranslation(App);
