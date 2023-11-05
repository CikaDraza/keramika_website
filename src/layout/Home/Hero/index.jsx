import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import HeroCarousel from "../../../components/HeroCarousel";
import PlayButton from '../../../components/Icons/PlayButton';
import Phone from '../../../components/Icons/Phone';
import VideoModal from '../../../components/VideoModal';

export default function HeroSection({ match, heroSectionProps, data }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if(isOpen === true) {
      document.body.style.overflow = 'hidden';
      window.scrollTo({
        top: 0,
      });
    }
    return () => {
      document.body.style.overflow = 'visible';
    };
  }, [isOpen]);

  return (
    <section className="hero">
        <div className="wrapper">
          <div className="hero__row">
            <div className="hero__column--left">
              <div className="hero__content">
                <h1>{heroSectionProps.h1} <span>{heroSectionProps.h1Span}</span></h1>
                {
                  match && 
                  <HeroCarousel match={match} heroSectionProps={heroSectionProps} />
                }
                <p className="description">
                  {heroSectionProps.p}
                </p>
                <div className="buttons">
                  <button onClick={() => setIsOpen(true)} className="buttons__action action--orange">
                    <PlayButton width={25} fill="white" />
                    <span>Pogledaj video</span>
                  </button>
                  {
                    !match && (
                      <button className="buttons__action action--blue">
                        <Link href="tel:+381605354777">
                          <a>
                            <Phone width={25} fill="white" />
                            <span>Pozovite</span>
                          </a>
                        </Link>
                      </button>
                    )
                  }
                </div>
              </div>
            </div>
            {
              !match &&
              <div className="hero__column--right">
                <HeroCarousel heroSectionProps={heroSectionProps} />
              </div>
            }
          </div>
          <VideoModal match={match} data={data && data} open={isOpen} close={() => setIsOpen(false)} />
        </div>
      </section>
  )
}
