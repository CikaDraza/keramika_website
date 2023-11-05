import React, { useState, useRef } from 'react';
import Head from 'next/head';
import Prices from '../src/layout/Prices';

export default function PricePage() {
  const priceProps = {
    priceListProps: priceList,
    priceTableProps: rows
  };
  const inputRef = useRef(null);
  const [query, setQuery] = useState({
    input: '',
    loading: false
  });
  const [values, setValues] = useState([]);

  return (
    <div>
    <Head>
      <meta name="robots" content="index, nofollow"/>
      <meta name="description" content="Cene keramičarskih radova, cene renoviranja kupatila. Izaberite planove cena koji vam odgovaraju. Ovde možete videti naše cene i izračunati okvirnu cenu u odnosu na vašu kvadraturu prostorije" />
      <title>Cene | Keramika Živojinov</title>
    </Head>
    <main className="contact-page">
      <Prices {...priceProps}/>
    </main>
  </div>
  )
}

const priceList = {
  h2: "",
  subHeading: "Planovi keramičarskih usluga",
  p1: "Izaberite planove cena koji vam odgovaraju.",
  p2: "Satnica keramičara se kreće od 10 do 50 evra po satu ili više u zavisnosti od posla, vremena i lokacije. Prema podacima o kretanju cena može da se menjaju troškovi iz dana u dan.",
  p3: " Usluge mogu uključivati čišćenje odvoda, zamenu ili ugradnju slavine i sanitarnog nameštaja.",
  p4: "Pogledajte cene ovde koje su okvirne ali smo loš materijal odmah isključili.",
  cards: [
    {h3: "Lepljenje pločica", cenaRusenje: "", cenaUsluge: "15", uslugaValuta: "€", uslugaJedinica: "po kvadratnom metru", cenaSanitarije: "Uklanjanje i postavljanje sanitarije 150€ okvirno", cenaKosuljica: "izrada košuljice 50€ okvirno", cenaHidroizolacija: "Hidroizolacija 50€ okvirno", cenaMalterisanje: "", uslugaJedinica: "po kvadratnom metru", cenaDeponija: "Iznošenje, i odvoženje šuta na deponiju 50€"},
    {h3: "Renoviranje kupatila", cenaUsluge: "60", uslugaJedinica: "po kvadratnom metru", uslugaValuta: "€", cenaRusenje: "Rušenje starih pločica 150€", cenaSanitarije: "", cenaVodaKanalizacija: "Vodoinstalaterski radovi gde spadaju voda i kanalizacija 300€ okvirno", cenaKosuljica: "izrada košuljice 50€ okvirno", cenaHidroizolacija: "Hidroizolacija 50€ okvirno", cenaMalterisanje: "", cenaKrpljenje: "Popunjavanje neravnina i rupa na zidovima 100€ okvirno", cenaDeponija: "Iznošenje, i odvoženje šuta na deponiju 50€"},
    {h3: "Ukrasni Kamen", cenaUsluge: "15", uslugaJedinica: "po kvadratnom metru", uslugaValuta: "€", cenaDekoKamen: "Postavljanje dekorativnog kamena 20€/m2",  cenaKamenStaze: "Postavljanje kamena za staze 10€/m2", cenaGerovanje: "Gerovanje ivica kamena 15€/m2 okvirno", cenaKrpljenje: "Popunjavanje neravnina i rupa na zidovima 100€ okvirno", cenaMalterisanje: "Ako je potrebno malterisanje i ravnajući sloj 150€ okvirno", cenaDeponija: "Iznošenje, i odvoženje šuta na deponiju 50€"}
  ],
  actionBtn: "Kontaktirajte nas" 
}

const rows = {
  title: [{service: 'keramičarske usluge'}, {cost: 'cene'}],
  prices: [
    {
      heading: 'Lepljenje keramike',
      price: 'od 15 €/m2'
    },
    {
      heading: 'Veliki formati keramike i mozaici',
      price: 'dogovor'
    },
    {
      heading: 'Renoviranje',
      price: 'dogovor'
    },
    {
      heading: 'Cokla',
      price: 'od 3 € po dužnom metru'
    },
    {
      heading: 'Stepeništa',
      price: 'od 15e po dužnom metru'
    },
    {
      heading: 'Kamen',
      price: 'od 15 €/m2'
    },
    {
      heading: 'Hidroizolacija',
      price: '50 €/m2'
    },
    {
      heading: 'Košuljica - ravnajući sloj',
      price: 'od 5 €/m2'
    },
    {
      heading: 'Voda i kanalizacija',
      price: 'od 300 €'
    },
    {
      heading: 'Montaža sanitarije',
      price: '100 €'
    },
    {
      heading: 'prepravka tuš kabine',
      price: 'dogovor'
    }
  ]
};