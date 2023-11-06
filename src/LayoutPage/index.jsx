import React from 'react'
import useMediaQuery from '../components/useMediaQuery';
import Footer from '../layout/Footer';
import Header from '../layout/Header';

export default function LayoutPage({ children }) {
  const match = useMediaQuery('(max-width: 768px)');
  const headerProps = {
    logoProps: logo,
    match
  };
  const footerProps = {
    widgetProps: widget,
    match
  };

  return (
    <div>
      <Header {...headerProps} />
        { children }
      <Footer {...footerProps} />
    </div>
  )
}

const logo = {
  desktopWidth: 72,
  desktopHeight: 72,
  mobileWidth: 72,
  mobileHeight: 72,
}

const widget = {
  h2: "Da li imate neki projekat?",
  subHeading: "ako ste zainteresovani hajde da počnemo!",
  actionBtn: "Start",
  
}
