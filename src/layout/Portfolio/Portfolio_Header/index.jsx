import React from 'react';

export default function PortfolioHeader(props) {
  const { portfolioHeaderProps } = props;

  return (
    <div className="portfolio-section__header">
      <div className="wrapper">
        <h1>{portfolioHeaderProps.h1}</h1>
        <p>{portfolioHeaderProps.p}</p>
      </div>
    </div>
  )
}
