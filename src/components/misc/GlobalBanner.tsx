import React from 'react';

type Props = {
  image: string;
  title: string;
  withPurpleDot?: boolean;
};

function GlobalBanner({ image, title, withPurpleDot }: Props) {
  return (
    <section className="relative m-0 flex min-h-[80vh] w-full items-end justify-center gap-0">
      <img
        src={image}
        alt={title}
        className="absolute top-0 left-0 z-[-1] h-full w-full object-cover object-center"
      />
      <section className="flex w-full max-w-xl items-end justify-start px-5 py-20 lg:max-w-theme">
        <h1 className="text-left text-5xl font-black text-white lg:text-8xl">
          {title}
          {withPurpleDot && <span className="text-[#5814AE]">.</span>}
        </h1>
      </section>
    </section>
  );
}

export default GlobalBanner;
