import Link from 'next/link';
import React from 'react';
import TilesBlack from '../../../components/Icons/TilesBlack';
import TilesGrey from '../../../components/Icons/TilesGrey';

export default function SectionServices(props) {
  const { match, serviceProps } = props;
  return (
    <section className="services">
      <div className="wrapper">
        <div className="cube">
          <TilesGrey width={!match ? 124 : 80} height={!match ? 67 : 40} />
        </div>
        <div className="cube-two">
          <TilesBlack width={!match ? 124 : 80} height={!match ? 67 : 40} />
        </div>
        <h2 className="heading">{serviceProps.h2}</h2>
        <p className="sub-heading">{serviceProps.subHeading}</p>
        <div className="services-row">
          <div className="services-column">
          {
            // first column
            serviceProps.servicesCards.slice(0, 2).map(card => (
              <a href={`/usluge/${card.path}`} key={card.path} className="card" style={serviceProps.cardsDimension}>
                <div className="card__media">
                  {card.icon}
                </div>
                <div className="card__header">
                  <h3>{card.h3}</h3>
                </div>
                <div className="card__content">
                  <p style={serviceProps.cardsParagraph}>
                  {card.p}
                  </p>
                </div>
                <div className="card__action">
                  detaljnije...
                </div>
              </a>

            ))
          }
          </div>
          <div className="services-column">
          {
            // second column
            serviceProps.servicesCards.slice(2, 4).map(card => (
              <a href={`/usluge/${card.path}`} key={card.path} className="card" style={serviceProps.cardsDimension}>
                <div className="card__media">
                  {card.icon}
                </div>
                <div className="card__header">
                  <h3>{card.h3}</h3>
                </div>
                <div className="card__content">
                  <p style={serviceProps.cardsParagraph}>
                  {card.p}
                  </p>
                </div>
                <div className="card__action">
                  detaljnije...
                </div>
              </a>

            ))
          }
          </div>
        </div>
      </div>      
    </section>
  )
}
