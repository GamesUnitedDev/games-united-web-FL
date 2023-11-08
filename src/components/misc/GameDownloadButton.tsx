import React from 'react';

import GooglePlayImg from '@/public/assets/img/download-google-play.webp';
import AppStoreImg from '@/public/assets/img/download-app-store.webp';

type Props = {
  type: 'googleplay' | 'appstore';
  url: string;
  className?: string;
  imgClassName?: string;
};

function GameDownloadButton({
  type,
  url,
  className = '',
  imgClassName = '',
}: Props) {
  return (
    <a href={url} rel="noreferrer" target="_blank" className={className}>
      <img
        src={type === 'googleplay' ? GooglePlayImg.src : AppStoreImg.src}
        alt={type === 'googleplay' ? 'Google Play Badge' : 'App Store Badge'}
        className={imgClassName}
      />
    </a>
  );
}

export default GameDownloadButton;
