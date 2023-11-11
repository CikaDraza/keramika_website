import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/dist/client/router';

export default function Drawer( { handleOpenDrawer, open }) {
  const router = useRouter();

  return (
    <nav className={!open ? "nav-drawer" : "nav-drawer nav-drawer--active"}>
      <ul className="nav-drawer__list">
        <li className="nav-drawer__item" onClick={handleOpenDrawer}>
          <Link href="/" className={router.pathname == "/" ? "nav-drawer__link nav-drawer__link--active" : "nav-drawer__link"}>Naslovna</Link>
        </li>
        <li className="nav-drawer__item" onClick={handleOpenDrawer}>
          <Link href="/cene" className={router.pathname == "/cene" ? "nav-drawer__link nav-drawer__link--active" : "nav-drawer__link"}>Cene</Link>
        </li>
        <li className="nav-drawer__item" onClick={handleOpenDrawer}>
          <Link href="/usluge" className={router.pathname == "/usluge" ? "nav-drawer__link nav-drawer__link--active" : "nav-drawer__link"}>Usluge</Link>
        </li>
        <li className="nav-drawer__item" onClick={handleOpenDrawer}>
          
        </li>
        <li className="nav-drawer__item" onClick={handleOpenDrawer}>
          <Link href="/kontakt" className={router.pathname == "/kontakt" ? "nav-drawer__link nav-drawer__link--active" : "nav-drawer__link"}>Kontakt</Link>
        </li>
      </ul>
    </nav>
  )
}
