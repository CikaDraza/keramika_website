import React from "react";
import FilterTabs from "../Portfolio_Filter_Tabs";
import PortfolioHeader from "../Portfolio_Header";

export default function PortfolioLayout(props) {
  return (
    <div className="portfolio-section">
      <PortfolioHeader {...props} />
      <FilterTabs {...props} />
    </div>
  );
}
