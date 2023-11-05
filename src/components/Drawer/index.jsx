import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/dist/client/router';

export default function Drawer( { handleOpenDrawer, open }) {
  const router = useRouter();

  return (
    <nav className={!open ? "nav-drawer" : "nav-drawer nav-drawer--active"}>
      <ul className="nav-drawer__list">
        <li className="nav-drawer__item" onClick={handleOpenDrawer}>
          <Link href="/"><a className={router.pathname == "/" ? "nav-drawer__link nav-drawer__link--active" : "nav-drawer__link"}>Naslovna</a></Link>
        </li>
        <li className="nav-drawer__item" onClick={handleOpenDrawer}>
          <Link href="/cene"><a className={router.pathname == "/cene" ? "nav-drawer__link nav-drawer__link--active" : "nav-drawer__link"}>Cene</a></Link>
        </li>
        <li className="nav-drawer__item" onClick={handleOpenDrawer}>
          <Link href="/usluge"><a className={router.pathname == "/usluge" ? "nav-drawer__link nav-drawer__link--active" : "nav-drawer__link"}>Usluge</a></Link>
        </li>
        <li className="nav-drawer__item" onClick={handleOpenDrawer}>
          <Link href="/radovi"><a className={router.pathname == "/radovi" ? "nav-drawer__link nav-drawer__link--active" : "nav-drawer__link"}>Rani Radovi</a></Link>
        </li>
        <li className="nav-drawer__item" onClick={handleOpenDrawer}>
          <Link href="/kontakt"><a className={router.pathname == "/kontakt" ? "nav-drawer__link nav-drawer__link--active" : "nav-drawer__link"}>Kontakt</a></Link>
        </li>
      </ul>
    </nav>
  )
}
