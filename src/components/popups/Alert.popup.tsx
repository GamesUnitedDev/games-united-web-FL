import React from 'react';
import Icon from '@/components/misc/Icon';
import { useTranslation } from 'next-i18next';
import { usePopup } from '@/contexts/Popup.context';

function AlertPopup(): JSX.Element | null {
  const { t } = useTranslation();
  const { alertPopup, deactivateAlertPopup } = usePopup();

  const containerClass = alertPopup?.isActive
    ? 'visible opacity-100'
    : 'invisible opacity-0';

  const popupClass = alertPopup?.isActive
    ? 'visible translate-y-0 opacity-100 delay-300'
    : 'invisible translate-y-10 opacity-0 delay-100';

  return (alertPopup?.inHTML && (
    <div
      className={`${containerClass} fixed left-0 top-0 z-[9998] flex h-full w-full items-center justify-center overflow-hidden bg-black/70 p-5 font-theme transition-all delay-200 duration-300`}
    >
      <div
        className={`${popupClass} grid max-h-fit w-full max-w-md grid-cols-1 place-content-start place-items-center gap-10 rounded-xl border border-zinc-500 bg-white p-5 shadow-xl transition-all duration-300`}
      >
        <span key={alertPopup.status} className="default-fade-in">
          <Icon iconName={alertPopup.status} />
        </span>
        <p
          key={alertPopup.text}
          className="default-zoom-in text-center text-sm text-black"
        >
          {alertPopup.text}
        </p>
        <button
          disabled={alertPopup?.status === 'loading'}
          className="min-w-[90px] rounded-lg bg-primary-purple px-6 py-2 text-center text-sm text-white transition-all duration-150 hover:bg-purple-900 disabled:pointer-events-none disabled:opacity-50"
          type="button"
          onClick={alertPopup.onConfirm || deactivateAlertPopup}
        >
          {t('popups.okay')}
        </button>
      </div>
    </div>
  )) as JSX.Element | null;
}

export default AlertPopup;
