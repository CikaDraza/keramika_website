import React, { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import ArrowUp from '../../components/Icons/ArrowUp/indes';
import Messenger from '../../components/Icons/Messsenger';
import Phone from '../../components/Icons/Phone';
import Viber from '../../components/Icons/Viber';
import YouTube from '../../components/Icons/YouTube';
import Image from 'next/image';
import Link from 'next/link';
import Copyright from '../../components/Copyright';
import InstaSvg from '../../components/Icons/Insta';

export default function Footer(props) {
  const { match, widgetProps } = props;
  const router = useRouter();
  const [isVisible, setIsVisible] = useState('');
  
  function toggleVisibility() {
    const visibleBtn = window.scrollY;
    visibleBtn > 300 ? setIsVisible(prev => prev = true) : setIsVisible(prev => prev = false);
  }

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <footer className="footer">
      {
        router.pathname === '/kontakt' ? null :
        <div className="widget">
        <div className="wrapper">
          <div className="widget__row">
            <div className="widget__column transition">
              <div className="widget__column__box">
                <div className="widget__column__box__heading">
                  <h2>{widgetProps.h2}</h2>
                  <h4>{widgetProps.subHeading}</h4>
                </div>
                <div className="widget__column__box__action-button">
                  <button className="button-wrapp">
                    <span className="overlay"></span>
                    <Link href={'/kontakt'}>
                      <span className="button-text">{widgetProps.actionBtn}</span>
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      }
 
      <div className="footer-top">
        <div className="wrapper">
          <div className="footer-top__row">
            <div className="footer-top__column first">
              <div className="image-wrapper">
                <Image src="/logo/logo_lale.png" width={50} height={50} alt="logo keramičar Lale" />
              </div>
              <p>Keramičar Lale se bavi keramičarskim radovima više od 10 godina. Učinićemo i vaš dom lepšim mestom za stanovanje.</p>
            </div>
            <div className="footer-top__column">
              <h6>Kontakt</h6>
              <ul>
                <li>Stevana Sremca 4k, Sremska Mitrovica 22000, Srbija</li>
                <li>+381 {'(0)'} 62 201 787</li>
                <li>keramicar.lale@keramika.com</li>                
              </ul>
            </div>
            <div className="footer-top__column">
              <h6>Usluge</h6>
              <ul>
                <li><Link href="/usluge/#lepljenje-plocica">Lepljenje Pločica</Link></li>
                <li><Link href="/usluge/#renoviranje">Renoviranje Kupatila</Link></li>
                <li><Link href="/usluge/#kamen">Dekorativni Kamen</Link></li>
                <li><Link href="/usluge/#vodoinstalacija">Vodoinstalacija</Link></li>                
              </ul>
            </div>
            <div className="footer-top__column">
              <h6>Korisni Linkovi</h6>
                <ul>
                  <li><Link href="/usluge">Usluge</Link></li>
                  <li><Link href="/cenovnik">Cenovnik</Link></li>
                  <li><Link href="/galerija">Galerija</Link></li>
                  <li><Link href="/kontakt">Kontakt</Link></li>                
                </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="wrapper">
          <div className="footer-bottom__row">
            <div className="footer-bottom__column">
              <Copyright />
            </div>
            <div className="footer-bottom__column last">
            <div className="links privacy">
              <Link href="/politika_privatnosti">Pravila o privatnosti i uslovi koriščenja</Link>
            </div>
            </div>
          </div>
        </div>
      </div>
      {
        !match && 
        <div onClick={() => scrollToTop()} className={ isVisible ? "go-to-top" : "go-to-top--hide-btn"}>
        <div className="go-to-top__scroll"></div>
          <div className="go-to-top__btn">
            <div className="go-to-top__btn__arrow">
              <span className="go-to-top__btn__overlay"></span>
              <ArrowUp className="go-to-top__btn__arrow--grey" width={15} height={15} fill="grey" />
              <ArrowUp className="go-to-top__btn__arrow--white" width={15} height={15} fill="white" />
            </div>
          </div>
        </div>
      }
      {
        match && 
        <div className="footer-bottom-nav">
        <ul className="footer-bottom-nav-lists">
          <li className="footer-bottom-nav-lists__list">
            <a href="tel:062201787">
              <Phone width={25} fill="white" />
            </a>
          </li>
          <li>
          <a href="#" rel="noreferrer" target="_blank">
            <Messenger width={25} heigth={25} fill="white"/>
          </a>
          </li>
          <li>
            <a href="#" rel="noreferrer" target="_blank">
              <InstaSvg className="footer-mob-icon" width={25} height={25} />
            </a>
          </li>
          <li>
            <a href="https://youtu.be/8kKUTYxfA6s" rel="noreferrer" target="_blank">
              <YouTube width={25} height={25} fill="white"/>
            </a>
          </li>
        </ul>
        </div>
      }
    </footer>
  )
}
