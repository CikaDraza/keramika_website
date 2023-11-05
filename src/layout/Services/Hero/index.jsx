import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const shimmer = (w, h) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#FFDF53" offset="20%" />
      <stop stop-color="#FCDA20" offset="50%" />
      <stop stop-color="#FFDF53" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#FFDF53" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`

const toBase64 = (str) =>
  typeof window === 'undefined' ? Buffer.from(str).toString('base64') : window.btoa(str);

export default function ServicesHero(props) {
  const { heroSectionProps, match } = props;
  return (
    <section id="services-hero" className="services-hero">
      <div className="wrapper">
        <div className="services-hero__image">
          <Image width={match ? 320 : 1280} height={match ? 400 : 744} src={heroSectionProps.heroImages[0].imgPath} alt={heroSectionProps.heroImages[0].imgTitle} placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`} />
        </div>
        <div className="services-hero__content">
          <div className="services-hero__title">
            <h1>{heroSectionProps.h1}</h1>
          </div>
          <div className="services-hero__tape">
            <Image width={match ? 250 : 310} height={match ? 10 : 20} src={heroSectionProps.tapeImage.imgPath} alt={heroSectionProps.tapeImage.alt} />
          </div>
          <div className="services-hero__btn">
            <button className="btn--white">
              <Link href="/cene">
                {heroSectionProps.heroBtn.text}
              </Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
