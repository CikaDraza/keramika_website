import React from 'react';
import Image from 'next/image';

export default function IntroSection(props) {
  const { match, introSectionProps } = props;
  
  return (
    <section className="intro">
      <div className="wrapper">
        <div className="row">
          <div className="column">
            <div className="intro_exp-badge">
              <div className="intro_exp-badge_number">
              {introSectionProps.tenYearsExp.number}
              </div>
              <div className="intro_exp-badge_sub-text">
              {introSectionProps.tenYearsExp.subText}
              </div>
            </div>
          </div>
          <div className="column">
            <div className="intro_heading">
              <div className="intro_heading_title-box">
                <h2>{introSectionProps.h2}</h2>
              </div>
              <div className="intro_heading_fuga">
                <Image src={introSectionProps.fuga.imgPath} alt={introSectionProps.fuga.alt} width={200} height={150} />
              </div>
            </div>
          </div>
        </div>
        <div className="intro_process">
          <h3>{introSectionProps.process.h3}</h3>
          <p>{introSectionProps.process.p}</p>
        </div>
        <div className="intro_price-question">
          <h3>{introSectionProps.price_question.h3}</h3>
          <p>{introSectionProps.price_question.p1}</p>
          <p>{introSectionProps.price_question.p2}</p>
        </div>
      </div>
    </section>
  )
}
