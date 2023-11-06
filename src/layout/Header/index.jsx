import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/dist/client/router';
import FacebookSvg from '../../components/Icons/Facebook';
import Viber from '../../components/Icons/Viber';
import InstaSvg from '../../components/Icons/Insta';
import YouTubeSvg from '../../components/Icons/YouTube';
import Drawer from '../../components/Drawer';
import DrawerBtn from '../../components/Drawer/DrawerBtn';

export default function Header(props) {
  const { match, logoProps } = props;
  const router = useRouter();  
  const [openDrawer, setOpenDrawer] = useState(false);

  function handleOpenDrawer() {
    setOpenDrawer((prev) => !prev);
  }

  return (
    <header className="header">
      <div className="wrapper">
        <div className="header__container">
          <nav className="nav">
            <Link href="/">
              <a className='logo-link'>
                <Image src='/logo/logo_lale.png' width={match ? logoProps.mobileWidth : logoProps.desktopWidth} height={match ? logoProps.mobileHeight : logoProps.desktopHeight} alt='Logo' className="nav__logo"/>
                <p>Keramičar Lale</p>
              </a>
            </Link>
            <ul className="nav__list">
              <li className="nav__item">
                <Link href="/"><a className={router.pathname == "/" ? "nav__link nav__link--active" : "nav__link"}>Naslovna</a></Link>
              </li>
              <li className="nav__item">
                <Link href="/cene"><a className={router.pathname == "/cene" ? "nav__link nav__link--active" : "nav__link"}>Cene</a></Link>
              </li>
              <li className="nav__item">
                <Link href="/usluge"><a className={router.pathname == "/usluge" ? "nav__link--active" : "nav__link"}>Usluge</a></Link>
              </li>
              <li className="nav__item">
                <Link href="/radovi"><a className={router.pathname == "/radovi" ? "nav__link--active" : "nav__link"}>Rani Radovi</a></Link>
              </li>
              <li className="nav__item">
                <Link href="/kontakt"><a className={router.pathname == "/kontakt" ? "nav__link--active" : "nav__link"}>Kontakt</a></Link>
              </li>
            </ul>
            <ul className="nav__list">
              <li className="nav__item">
                <Link href="https://www.facebook.com/profile.php?id=100063739952191" passHref>
                  <a target="_blank" >
                    <FacebookSvg className="nav__icon--facebook" width={20} height={20} />                 
                  </a>
                </Link>
              </li>
              <li className="nav__item">
                <Link href="https://www.instagram.com/keramikazivojinov/" passHref>
                  <a target="_blank">
                    <InstaSvg className="nav__icon--insta" width={20} height={20} />
                  </a>
                </Link>
              </li>
              <li className="nav__item">
                <Link href="https://www.youtube.com/channel/UC3u9C_wdhIn81JGnrmMzWrA" passHref>
                  <a target="_blank">
                    <YouTubeSvg className="nav__icon--youtube" width={25} height={25} />
                  </a> 
                </Link>
              </li>
            </ul>
            <DrawerBtn open={openDrawer} handleOpenDrawer={handleOpenDrawer} />
          </nav>
        </div>
      </div>
      <Drawer open={openDrawer} handleOpenDrawer={handleOpenDrawer} />
    </header>
  )
}
