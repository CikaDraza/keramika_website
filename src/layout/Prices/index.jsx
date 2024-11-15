import React from 'react';
import ReactDOMServer from 'react-dom/server';
import useMediaQuery from '../../components/useMediaQuery';
import CheckIcon from '../../components/Icons/CheckIcon';
import Link from 'next/link';
import PriceTables from '../../components/PricesTable';
import PriceCalculator from '../../components/PriceCalulator/PriceCalculator';

export default function Prices(props) {
  const { priceListProps, priceTableProps } = props;
  const match = useMediaQuery('(max-width: 768px)');

  const tekst = priceListProps.h1_p1;

    // Kreiranje JSX elementa za interni link
    const link = <Link href="#price-calc">kalkulatorom</Link>;

    // Zamena placeholdera u tekstu sa stvarnim linkom
    const izmenjeniTekst = tekst.replace('[LINK]', ReactDOMServer.renderToString(link));

  return (
    <section className="price-section">
      <div className="wrapper">
        <div className="price-section__title">
          <h1>{priceListProps.h1}</h1>
          <p dangerouslySetInnerHTML={{ __html: izmenjeniTekst }} />
          <p>{priceListProps.h1_p2}</p>
        </div>
        <div className="price-section__content">
          <section className="price">
            <div className="wrapper">
              <h2>{priceListProps.h2}</h2>
              <div className="price-row">
                <div className="price-column">
                <div className="description">
                  <p className="description__first-column">{priceListProps.p1}</p>
                  <p className="description__first-column">{priceListProps.p2}</p>
                </div>
                </div>          
                <div className="price-column">
                <div className="description">
                  <p className="description__second-column">{priceListProps.p3}</p>
                  <p className="description__second-column">{priceListProps.p4}</p>
                </div>
                </div>
              </div>
              <PriceTables {...priceTableProps}/>
              <h3 className="sub-heading">{priceListProps.subHeading}</h3>
              <div className="price-row">
                <div className="price-column">
                {
                  priceListProps.cards.map((card, index) => (
                    <div key={card.h3 + index} className="card">
                      <p>{card.uslugaJedinica}</p>
                      <div className="card__media">
                      <sup>{card.uslugaValuta}</sup>
                        {card.cenaUsluge}
                      </div>
                      <div className="card__header">
                        <h3>{card.h3}</h3>
                      </div>
                      <div className="card__content">
                      <ul className="price-list">
                        {
                          card.cenaRusenje && (<li className="price-list__items">
                          <div className="price-list__items__icon"><CheckIcon width={20} height={20} fill="#FF810D" /></div>
                          <div className="price-list__items__text">{card.cenaRusenje}</div>
                          </li>)
                        }    
                        {
                          card.cenaVodaKanalizacija && (<li className="price-list__items">
                          <div className="price-list__items__icon"><CheckIcon width={20} height={20} fill="#FF810D" /></div>
                          <div className="price-list__items__text">{card.cenaVodaKanalizacija}</div>
                          </li>
                          )
                        }                     
                        {
                          card.cenaSanitarije && (<li className="price-list__items">
                          <div className="price-list__items__icon"><CheckIcon width={20} height={20} fill="#FF810D" /></div>
                          <div className="price-list__items__text">{card.cenaSanitarije}</div>
                          </li>)
                        }          
                        {
                          card.cenaMalterisanje && (<li className="price-list__items">
                          <div className="price-list__items__icon"><CheckIcon width={20} height={20} fill="#FF810D" /></div>
                          <div className="price-list__items__text">{card.cenaMalterisanje}</div>
                          </li> )
                        }
                        {
                          card.cenaKosuljica && (<li className="price-list__items">
                          <div className="price-list__items__icon"><CheckIcon width={20} height={20} fill="#FF810D" /></div>
                          <div className="price-list__items__text">{card.cenaKosuljica}</div>
                          </li>
                          )
                        }  
                        {
                          card.cenaHidroizolacija && (<li className="price-list__items">
                          <div className="price-list__items__icon"><CheckIcon width={20} height={20} fill="#FF810D" /></div>
                          <div className="price-list__items__text">{card.cenaHidroizolacija}</div>
                          </li>
                          )
                        }    
                        {
                          card.cenaDekoKamen && (<li className="price-list__items">
                          <div className="price-list__items__icon"><CheckIcon width={20} height={20} fill="#FF810D" /></div>
                          <div className="price-list__items__text">{card.cenaDekoKamen}</div>
                          </li>)
                        }      
                        {
                          card.cenaKamenStaze && (<li className="price-list__items">
                          <div className="price-list__items__icon"><CheckIcon width={20} height={20} fill="#FF810D" /></div>
                          <div className="price-list__items__text">{card.cenaKamenStaze}</div>
                          </li>)
                        }    
                        {
                          card.cenaGerovanje && (<li className="price-list__items">
                          <div className="price-list__items__icon"><CheckIcon width={20} height={20} fill="#FF810D" /></div>
                          <div className="price-list__items__text">{card.cenaGerovanje}</div>
                          </li>)
                        }         
                        {
                          card.cenaDeponija && (<li className="price-list__items">
                          <div className="price-list__items__icon"><CheckIcon width={20} height={20} fill="#FF810D" /></div>
                          <div className="price-list__items__text">{card.cenaDeponija}</div>
                          </li>)
                        }
                        
                      </ul>
                      </div>
                    </div>
                  ))
                }
                </div>
              </div>
              <div className="price__action">
              <Link href="/kontakt" passHref>{priceListProps.actionBtn}</Link>
              </div>
            </div>      
          </section>
          <section id='price-calc' className='price'>
            <div className='wrapper'>
              <div className="price-section__title">
                <h2>Kalkulator cena</h2>
                <p>Kalkulator okvirno računa cene i dodaje stavke koje bi bilo poželjno uraditi za izabrane radove.</p>
              </div>
              <div className='price-row'>
                <div className='price-column'>
                  <div className="price-section__calculator">
                    <PriceCalculator />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  )
}