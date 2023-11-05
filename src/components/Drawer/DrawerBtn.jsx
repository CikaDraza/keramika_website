import React from 'react';

export default function DrawerBtn({ handleOpenDrawer, open }) {
  
  return (
    <button className={open ? "nav-drawer__burger toggle" : "nav-drawer__burger"} onClick={handleOpenDrawer}>
      <div className="container">
        <div className="line--1"></div>
        <div className="line--2"></div>
        <div className="line--3"></div>
      </div>
    </button>
  )
}
