import React from 'react';
import Link from 'next/link';
import TilesSkyBlue from '../../../components/Icons/TilesSkyBlue';
import TilesBlueHorizont from '../../../components/Icons/TilesBlueHorizont';
import PortfolioCarousel from '../../../components/PortfolioCarousel';

export default function Portfolio(props) {
  const { match, carouselPortfolioProps } = props;

  return (
   <section id="portfolio" className="portfolio">
    <div className="tiles-sky-blue">
      <TilesSkyBlue width={!match ? 250 : 100} height={!match ? 450 : 200} />
    </div>
    <div className="tiles-blue-horizont">
      <TilesBlueHorizont width={!match ? 256 : 100} height={!match ? 124 : 50} />
    </div>
    <div className="portfolio__heading">
      <h2>Rani Radovi</h2>
      <Link href="/radovi">Pogledaj sve</Link>
    </div>
    <div className="portfolio-carousel">
      <PortfolioCarousel match={match} carouselPortfolioProps={carouselPortfolioProps} />
    </div>
   </section>
  )
}
