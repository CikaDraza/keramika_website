import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/dist/client/router';

export default function Drawer( { handleOpenDrawer, open }) {
  const router = useRouter();

  return (
    <nav className={!open ? "nav-drawer" : "nav-drawer nav-drawer--active"}>
      <ul className="nav-drawer__list">
        <li className={router.pathname == "/" ? "nav-drawer__link nav-drawer__link--active nav-drawer__item" : "nav-drawer__link nav-drawer__item"}> onClick={handleOpenDrawer}>
          <Link href="/"></Link>Naslovna</Link>
        </li>
        <li className={router.pathname == "/cene" ? "nav-drawer__link nav-drawer__link--active nav-drawer__item" : "nav-drawer__link nav-drawer__item"} onClick={handleOpenDrawer}>
          <Link href="/cene">Cene</Link>
        </li>
        <li className={router.pathname == "/usluge" ? "nav-drawer__link nav-drawer__link--active nav-drawer__item" : "nav-drawer__link nav-drawer__item"} onClick={handleOpenDrawer}>
          <Link href="/usluge">Usluge</Link>
        </li>
        <li className={router.pathname == "/radovi" ? "nav-drawer__link nav-drawer__link--active nav-drawer__item" : "nav-drawer__link nav-drawer__item"} onClick={handleOpenDrawer}>
          <Link href="/radovi">Rani Radovi</Link>
        </li>
        <li className={router.pathname == "/kontakt" ? "nav-drawer__link nav-drawer__link--active nav-drawer__item" : "nav-drawer__link nav-drawer__item"} onClick={handleOpenDrawer}>
          <Link href="/kontakt">Kontakt</Link>
        </li>
      </ul>
    </nav>
  )
}
