import React from 'react';
import Link from 'next/link';
import Wait from '@/common/utils/Wait.util';
import { useTranslation } from 'next-i18next';
import { BsXLg } from 'react-icons/bs';

const storageKey = 'gamesunited-cookie-accepted';

const getCookieStatusFromLocalStorage = (key: string) => {
  if (typeof window === 'undefined') return false;
  const cookieStatus = localStorage.getItem(key);
  return cookieStatus !== '[]' && cookieStatus;
};

const setCookieStatusToLocalStorage = (key: string, value: string) => {
  localStorage.setItem(key, value);
};

function ManageBox({
  manageBoxSt,
  setManageBoxSt,
}: {
  manageBoxSt: {
    inHTML: boolean;
    isActive: boolean;
  };
  setManageBoxSt: React.Dispatch<
    React.SetStateAction<{
      inHTML: boolean;
      isActive: boolean;
    }>
  >;
}): JSX.Element | null {
  const { t } = useTranslation();

  const deactivateManageBox = async () => {
    setManageBoxSt({
      inHTML: true,
      isActive: false,
    });
    await Wait(500);
    setManageBoxSt({
      inHTML: false,
      isActive: false,
    });
  };

  const onCheckboxChange = (checked: boolean, type: string) => {
    const cookieStatus = JSON.parse(
      getCookieStatusFromLocalStorage(storageKey) || '[]'
    );

    if (checked && !cookieStatus.includes(type)) {
      cookieStatus.push(type);
    } else {
      cookieStatus.splice(cookieStatus.indexOf(type), 1);
    }

    setCookieStatusToLocalStorage(storageKey, JSON.stringify(cookieStatus));
  };

  const acceptAllClose = () => {
    setCookieStatusToLocalStorage(
      storageKey,
      JSON.stringify(['strictly', 'performance', 'targeting'])
    );
    deactivateManageBox();
  };

  const declineAllClose = () => {
    setCookieStatusToLocalStorage(storageKey, JSON.stringify(['strictly']));
    deactivateManageBox();
  };

  return manageBoxSt.inHTML ? (
    <div
      className={`fixed z-[9999] flex h-full w-full items-center justify-center bg-black/70 p-5 transition-all duration-300
      ${manageBoxSt.isActive ? '!opacity-100' : '!opacity-0'}
          `}
    >
      <div className="h-auto max-h-[90vh] w-full max-w-2xl overflow-auto rounded-2xl bg-white p-0 shadow-xl">
        <div className="sticky top-0 flex w-full flex-row items-center justify-between border-b-2 border-b-zinc-200 bg-white p-5">
          <h2 className="text-left text-lg font-normal text-primary-purple">
            {t('cookie-popup.manage-box.title')}
          </h2>
          <button
            type="button"
            className="flex items-center justify-center"
            onClick={deactivateManageBox}
          >
            <BsXLg className="h-5 w-5 text-primary-purple" />
          </button>
        </div>
        <div className="flex min-h-full w-full flex-col items-start justify-start gap-7 p-5">
          <div className="flex w-full flex-row items-center justify-between gap-4">
            <div className="flex w-full flex-col items-stretch justify-start gap-1">
              <h3 className="text-left text-base font-semibold text-primary-purple">
                {t('cookie-popup.manage-box.options.0.title')}
              </h3>
              <p className="text-left text-sm font-normal text-zinc-700">
                {t('cookie-popup.manage-box.options.0.description')}
              </p>
            </div>
            <div className="flex items-center justify-center">
              <input
                checked
                disabled
                type="checkbox"
                className="form-checkbox h-5 w-5 cursor-pointer rounded text-primary-purple transition-all duration-200"
              />
            </div>
          </div>
          <div className="flex w-full flex-row items-center justify-between gap-4">
            <div className="flex w-full flex-col items-stretch justify-start gap-1">
              <h3 className="text-left text-base font-semibold text-primary-purple">
                {t('cookie-popup.manage-box.options.1.title')}
              </h3>
              <p className="text-left text-sm font-normal text-zinc-700">
                {t('cookie-popup.manage-box.options.1.description')}
              </p>
            </div>
            <div className="flex items-center justify-center">
              <input
                defaultChecked={JSON.parse(
                  getCookieStatusFromLocalStorage(storageKey) || '[]'
                )?.includes('performance')}
                onChange={(e) => {
                  onCheckboxChange(e.target.checked, 'performance');
                  return e.target.checked;
                }}
                type="checkbox"
                className="form-checkbox h-5 w-5 cursor-pointer rounded text-primary-purple transition-all duration-200"
              />
            </div>
          </div>
          <div className="flex w-full flex-row items-center justify-between gap-4">
            <div className="flex w-full flex-col items-stretch justify-start gap-1">
              <h3 className="text-left text-base font-semibold text-primary-purple">
                {t('cookie-popup.manage-box.options.2.title')}
              </h3>
              <p className="text-left text-sm font-normal text-zinc-700">
                {t('cookie-popup.manage-box.options.2.description')}
              </p>
            </div>
            <div className="flex items-center justify-center">
              <input
                defaultChecked={JSON.parse(
                  getCookieStatusFromLocalStorage(storageKey) || '[]'
                )?.includes('targeting')}
                onChange={(e) => {
                  onCheckboxChange(e.target.checked, 'targeting');
                  return e.target.checked;
                }}
                type="checkbox"
                className="form-checkbox h-5 w-5 cursor-pointer rounded text-primary-purple transition-all duration-200"
              />
            </div>
          </div>
        </div>
        <div className="sticky bottom-0 flex w-full flex-row flex-wrap items-center justify-center gap-3 border-t-2 border-b-zinc-200 bg-white p-5">
          <button
            type="button"
            onClick={acceptAllClose}
            className="flex items-center rounded-xl border-2 border-primary-purple px-5 py-2 text-sm font-semibold text-primary-purple transition-all duration-200 hover:bg-primary-purple/20"
          >
            {t('cookie-popup.manage-box.accept-all-close')}
          </button>
          <button
            type="button"
            onClick={declineAllClose}
            className="flex items-center rounded-xl border-2 border-primary-purple px-5 py-2 text-sm font-semibold text-primary-purple transition-all duration-200 hover:bg-primary-purple/20"
          >
            {t('cookie-popup.manage-box.decline-all-close')}
          </button>
          <button
            type="button"
            onClick={deactivateManageBox}
            className="mx-5 flex items-center rounded-xl border-2 border-primary-purple bg-primary-purple px-5 py-2 text-sm font-semibold text-white transition-all duration-200 hover:bg-purple-800"
          >
            {t('cookie-popup.manage-box.save-close')}
          </button>
        </div>
      </div>
    </div>
  ) : null;
}

function CookiePopup() {
  const { t } = useTranslation();

  const [manageBoxSt, setManageBoxSt] = React.useState({
    inHTML: false,
    isActive: false,
  });

  const [cookiePopupSt, setCookiePopupSt] = React.useState({
    inHTML: false,
    isActive: false,
  });

  const activateCookiePopup = async () => {
    setCookiePopupSt({
      inHTML: true,
      isActive: false,
    });

    await Wait(50);

    setCookiePopupSt({
      inHTML: true,
      isActive: true,
    });
  };

  const deactivateCookiePopup = async () => {
    setCookieStatusToLocalStorage(storageKey, JSON.stringify(['strictly']));
    setCookiePopupSt({
      inHTML: true,
      isActive: false,
    });

    await Wait(500);

    setCookiePopupSt({
      inHTML: false,
      isActive: false,
    });
  };

  const acceptCookie = React.useCallback(async () => {
    setCookieStatusToLocalStorage(storageKey, JSON.stringify(['strictly']));
    deactivateCookiePopup();
  }, []);

  React.useEffect(() => {
    (async () => {
      const cookieStatus = getCookieStatusFromLocalStorage(storageKey);

      if (!cookieStatus) {
        await Wait(1000);
        activateCookiePopup();
      }
    })();
  }, []);

  const handleManageBtnClick = async () => {
    setManageBoxSt({
      inHTML: true,
      isActive: false,
    });
    await Wait(50);
    setManageBoxSt({
      inHTML: true,
      isActive: true,
    });
    deactivateCookiePopup();
  };

  return (
    <>
      <ManageBox manageBoxSt={manageBoxSt} setManageBoxSt={setManageBoxSt} />
      {cookiePopupSt.inHTML && (
        <section
          className={`fixed bottom-0 left-0 z-[99] flex w-full items-center justify-center bg-white/70 shadow-2xl shadow-black backdrop-blur-xl transition-all duration-300
        ${cookiePopupSt.isActive ? 'translate-y-0' : 'translate-y-full'}`}
        >
          <section className="flex w-full max-w-theme flex-wrap items-center justify-center gap-5 p-5 lg:flex-nowrap lg:justify-between">
            <p className="text-center text-sm font-normal text-primary-purple lg:text-left">
              {t('cookie-popup.description')}{' '}
              <Link className="hover:underline" href="/legal/cookie-policy">
                {t('cookie-popup.policy-link')}
              </Link>
            </p>
            <section className="flex w-fit flex-wrap items-center justify-center gap-3 lg:flex-nowrap lg:justify-end">
              <button
                type="button"
                onClick={handleManageBtnClick}
                className="m-0 min-w-fit p-0 text-sm font-normal text-primary-purple underline"
              >
                {t('cookie-popup.manage-button')}
              </button>
              <button
                type="button"
                onClick={acceptCookie}
                className="min-w-fit rounded-xl bg-primary-purple px-5 py-2 text-sm font-normal text-white"
              >
                {t('cookie-popup.accept-button')}
              </button>
            </section>
          </section>
        </section>
      )}
    </>
  );
}

export default CookiePopup;
