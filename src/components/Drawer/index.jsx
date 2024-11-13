import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/dist/client/router';

export default function Drawer( { handleOpenDrawer, open }) {
  const router = useRouter();

  return (
     <nav className={!open ? "nav-drawer" : "nav-drawer nav-drawer--active"}>
      <ul className="nav-drawer__list">
        <li className="nav-drawer__item" onClick={handleOpenDrawer}>
          <Link href="/" passHref><span className={router.pathname == "/" ? "nav-drawer__link nav-drawer__link--active" : "nav-drawer__link"}>Naslovna</span></Link>
        </li>
        <li className="nav-drawer__item" onClick={handleOpenDrawer}>
          <Link href="/cene" passHref><span className={router.pathname == "/cene" ? "nav-drawer__link nav-drawer__link--active" : "nav-drawer__link"}>Cene</span></Link>
        </li>
        <li className="nav-drawer__item" onClick={handleOpenDrawer}>
          <Link href="/usluge" passHref><span className={router.pathname == "/usluge" ? "nav-drawer__link nav-drawer__link--active" : "nav-drawer__link"}>Usluge</span></Link>
        </li>
        <li className={router.pathname == "/radovi" ? "nav-drawer__link nav-drawer__link--active nav-drawer__item" : "nav-drawer__link nav-drawer__item"} onClick={handleOpenDrawer}>
          <Link href="/radovi">Rani Radovi</Link>
        </li>
        <li className="nav-drawer__item" onClick={handleOpenDrawer}>
          <Link href="/kontakt" passHref><span className={router.pathname == "/kontakt" ? "nav-drawer__link nav-drawer__link--active" : "nav-drawer__link"}>Kontakt</span></Link>
        </li>
      </ul>
    </nav>
  )
}
