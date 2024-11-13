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
            <Link href="/" className='logo-link' passHref>
                <Image src='/logo/logo_lale.png' width={match ? logoProps.mobileWidth : logoProps.desktopWidth} height={match ? logoProps.mobileHeight : logoProps.desktopHeight} alt='Logo' className="nav__logo"/>
                <p>Keramičar Lale</p>
            </Link>
            <ul className="nav__list">
              <li className="nav__item">
                <Link href="/" passHref><span className={router.pathname == "/" ? "nav__link nav__link--active" : "nav__link"}>Naslovna</span></Link>
              </li>
              <li className="nav__item">
                <Link href="/cene" passHref><span className={router.pathname == "/cene" ? "nav__link nav__link--active" : "nav__link"}>Cene</span></Link>
              </li>
              <li className="nav__item">
                <Link href="/usluge" passHref><span className={router.pathname == "/usluge" ? "nav__link--active" : "nav__link"}>Usluge</span></Link>
              </li>
              <li className="nav__item">
                <Link href="/radovi" passHref><span className={router.pathname == "/radovi" ? "nav__link--active" : "nav__link"}>Rani Radovi</span></Link>
              </li>
              <li className="nav__item">
                <Link href="/kontakt" passHref><span className={router.pathname == "/kontakt" ? "nav__link--active" : "nav__link"}>Kontakt</span></Link>
              </li>
            </ul>
            <ul className="nav__list">
              <li className="nav__item">
                <Link href="https://www.facebook.com/profile.php?id=100063739952191" passHref>
                    <FacebookSvg className="nav__icon--facebook" width={20} height={20} />
                </Link>
              </li>
              <li className="nav__item">
                <Link href="https://instagram.com/panteleymon_obj704?igshid=OGQ5ZDc2ODk2ZA==" passHref>
                    <InstaSvg className="nav__icon--insta" width={20} height={20} />
                </Link>
              </li>
              <li className="nav__item">
                <Link href="https://www.youtube.com/channel/UC3u9C_wdhIn81JGnrmMzWrA" passHref>
                    <YouTubeSvg className="nav__icon--youtube" width={25} height={25} />
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
