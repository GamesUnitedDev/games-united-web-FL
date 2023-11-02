import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

function LanguageSelector() {
  const { asPath } = useRouter();
  const {
    i18n: { language },
  } = useTranslation();

  return (
    <div className="m-0 flex items-stretch justify-center gap-0 overflow-hidden rounded-[5px] bg-[#45015B] p-0 transition-all duration-200 hover:!bg-[#6d309b]">
      <Link
        href={asPath}
        locale="en"
        className={`${
          language === 'en'
            ? '!bg-[#8F47C6] !opacity-100'
            : 'hover:!opacity-100'
        } rounded-[5px] px-3 py-2 text-sm font-bold uppercase text-white opacity-70 transition-all duration-200`}
      >
        EN
      </Link>
      <Link
        href={asPath}
        locale="tr"
        className={`${
          language === 'tr'
            ? '!bg-[#8F47C6] !opacity-100'
            : 'hover:!opacity-100'
        } rounded-[5px] px-3 py-2 text-sm font-bold uppercase text-white opacity-70 transition-all duration-200`}
      >
        Tr
      </Link>
    </div>
  );
}

export default LanguageSelector;
