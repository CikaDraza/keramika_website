import React from 'react';
import CheckIcon from '../../../components/Icons/CheckIcon';
import TilesBlue from '../../../components/Icons/TilesBlue';
import TilesVerticIcon from '../../../components/Icons/TilesVerticIcon';

export default function SectionChooseUs(props) {
  const { match, chooseUsProps } = props;

  return (
    <section className="choose-us">
      <div className="cube">
        <TilesVerticIcon width={!match ? 150 : 50} height={!match ? 250 : 100} fill="#E2EEFF" viewBox="0 0 150 250" />
      </div>
      <div className="cube-two">
        <TilesBlue width={!match ? 150 : 100} height={!match ? 200 : 100} viewBox="0 0 150 200" />
      </div>
      <div className="wrapper">
        <h2>{chooseUsProps.h2}</h2>
        <div className="choose-us-row">
          <div className="choose-us-column">
            <div className="column-wrapp">
            {
              chooseUsProps.boxContent.slice(0, 2).map(box => (
                <div key={box.h3} className="box">
                  <div className="box__icon">
                    <CheckIcon width={20} height={20} fill="#FF810D" />
                  </div>
                  <div className="box__content">
                    <h3>{box.h3}</h3>
                    <p>{box.p}</p>
                  </div>
                </div>

              ))
            }
            </div>
          </div>
          <div className="choose-us-column">
            <div className="column-wrapp">
            {
              chooseUsProps.boxContent.slice(2, 4).map(box => (
                <div key={box.h3} className="box">
                  <div className="box__icon">
                    <CheckIcon width={20} height={20} fill="#FF810D" />
                  </div>
                  <div className="box__content">
                    <h3>{box.h3}</h3>
                    <p>{box.p}</p>
                  </div>
                </div>
              ))
            }
            </div>
          </div>
        </div>
      </div>      
    </section>
  )
}
