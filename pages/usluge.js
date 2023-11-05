import Head from 'next/head';
import React from 'react';
import ServicesLayout from '../src/layout/Services/ServicesLayout';
import useMediaQuery from '../src/components/useMediaQuery';

export default function Services() {
  const match = useMediaQuery('(max-width: 768px)');
  const servicesProps = {
    heroSectionProps: heroSection,
    introSectionProps: introSection,
    ceramicSectionProps: ceramicSection,
    plumbingSectionProps: plumbingSection,
    match
  };
  const link = '//#portfolio';
  return (
    <div>
      <Head>
        <meta name="robots" content="index, follow"/>
        <meta name="keywords" content="keramičarske usluge, renoviranje kupatila, kuhinja, dnevna soba, hodnik, terasa"/>
        <meta name="description" content="Pogledajte naše keramičarske usluge, lepljenje pločica, renoviranje kupatila i vodoinstalaterski radovi. Ovako mi to radimo" />
        <title>Keramičarske Usluge | Keramika Živojinov</title>
      </Head>

      <main>
        <ServicesLayout {...servicesProps} />
      </main>      
    </div>
  )
}

const heroSection = {
  h1: "Pouzdane usluge keramičara.",
  p: "Vreme je da tražite keramičara? Često zna da bude naporno i stresno. Svi će vam reći koliko je teško naći dobrog i poštenog keramičara. Zato što nemaju dobru preporuku, nisu potražili pomoć kod nas. Da, mi radimo sve keramičarske radove koje možete da zamislite!",
  heroImages: [
    {
      imgPath: '/images/services/hero-image/usluge_hero.png', imgTitle: 'keramicar sa alatom'
    }
  ],
  tapeImage: {imgPath: '/images/services/deco/traka_radovi.png', alt: 'zuta traka za radove'},
  heroBtn: {path: '/cene', text: 'Isplanirajte cene'}

}

const introSection = {
  tenYearsExp: {number: '10+', subText: 'godina iskustva'},
  fuga: {imgPath: '/images/services/deco/perdasica.png', alt: 'perdasica za fugovanje plocica'},
  h2: 'Nudimo sve na jednom mestu za sve vaše kućne prostorije!',
  process: {
    h3: 'Naš jednostavan proces', p: 'Izvođenje velikog projekta preuređenja ili početak od nule može biti prilično velika odluka, ali to može biti najbolji način da dobijete upravo dom koji želite. Teško je proceniti troškove dodatka vaše sobe sa toliko faktora koje treba uzeti u obzir. U zavisnosti od kvadrature, građevinskog materijala i ličnih preferencija, možda će nam trebati pomoć arhitekte. Pozovite nas da razgovaramo o vašem projektu i približnom budžetu.'
  },
  price_question: {
    h3: 'Mislite da je sve u ceni?', p1: 'Nekad i od skupljeg keramicara mozete dobiti nekvalitetnu uslugu. Kod nas dobijate uvek vrhunski kvalitet bez obzira na koje radove se odlucite. Da li je to samo lepljenje plocica ili su zahtevniji radovi kao renoviranje kupatila.', p2: 'Profesionalno radim već sad više od 10 godina. Imam veliko iskustvo gde sam se susretao sa svim izazovima i zahtevima klijenata. Od mene ćete dobiti kvalitet, odgovornost i pravo na reklamaciju. Tu sam za sve savete ako ste u nedoumici oko bilo kojih keramicarskih radova.'
  }
}

const ceramicSection = {
  ceramic_services: {
    h2: 'Keramičarkse Usluge',
    tiles: {
        h3: 'Lepljenje Pločica', p1: 'Da, znamo koliko je teško odabrati pločice. Savet oko dezena bi prepustili vama ali što se tiče kvaliteta pločica tu vam savetujemo samo prvu klasu. To su najkvalitetnije pločice po izradi. Pravlinog su oblika, kad se ugrade igledaju onako kako treba. Fugne su pravilne i lepe. Tako dobijate 100% ono kako ste zamišljali. Ako niste sigurni da li vam prodavac nudi prvu klasu obratite se nama. Dakle vrsta pločice i ravna površina je šta utiče na krajnji rezultat. Ako vam nije dobro izravnata površina na koju hoćete da lepite pločice, nema brige, uradićemo to za vas. O stručnosti lepljenja pločica sa naše strane govore radovi i slike koje možete pogledati.' , p2: 'Samo prvu klasu pločica, kupatilo se radi jednom, eventualno dvaput u zivotu.', p3: 'Dakle vrsta pločice i ravna površina je šta utiče na krajnji rezultat. Ako vam nije dobro izravnata površina na koju hoćete da lepite pločice, nema brige, uradićemo to za vas. O stručnosti lepljenja pločica sa naše strane govore radovi i slike koje možete pogledati.',
        images: [
          {
            imgPath: '/images/services/bathroom/kupatilo1.1.jpg', alt: 'lepljenje plocica u kupatilu gde su ostavljene rupe za instalaciju vode', id:123
          },
          {
            imgPath: '/images/services/bathroom/kupatilo2.2.jpg', alt: 'postavljene plocice i sanitarija', id:321
          },
          {
            imgPath: '/images/services/bathroom/kupatilo3.5.jpg', alt: 'keramicarske plocice prva klasa', id:312
          },
          {
            imgPath: '/images/services/tiles/fuga_krstic.png', alt: 'određivanje velicina fuge krsticem', id:132
          },
          {
            imgPath: '/images/services/tiles/nanosenje_lepka.jpg', alt: 'nanosenje lepka za plocice', id:213
          },
          {
            imgPath: '/images/services/bathroom/kupatilo5.jpg', alt: 'lepljenje plocica u tus kabini', id:231
          },
          
        ]
    },
    renovation: {h3: 'Renoviranje kupatila', p1: 'Da li vam je dosadilo da se ujutru probudite i uđete u svoje staro kupatilo? Kad se tuširate, curi sa plafona sobe na spratu iznad? Ili je vaša tuš kabina tako mala, da se jedva okrenete? Ako je na bilo koje od ovih pitanja potvrdno, vreme je da svoje staro, zastarelo, gadno kupatilo pretvorite u toplu, privlačnu, luksuznu banju.' , p2: 'Imajte na umu da je ovo prostor gde započinjete dan i završavate dan. Ako razmišljate o renoviranju kupatila to je uglavnom i preuređivanje kupatila, ili adaptaciji kupatila. Razmislite o uklanjanju kade kako biste uradili tuš kabinu. Koliko puta godišnje koristite kadu? Ugradni vodokotlić, sakrivanje instalacija, isto tako i veš mašine. To su sada trendovi modernog kupatila.', p3: 'Renoviranje kupatila je najzahtevniji poduhvat. Cena takođe varira u zavisnosti od veličine, kvaliteta materijala, kompleksnosti dizajna. Tu spada uglavnom: zamena pločica, stare sanitarije, kade ili tuš kabine, zamena vodovodne i kanalizacione instalacije, podne i zidne izolacije pa i elektroinstalacije tj. rasvete.',
        images: [
          {
            imgPath: '/images/services/renovation/renoviranje1.jpg', alt: 'hidroizolacija kupatila', id:123
          },
          {
            imgPath: '/images/services/bathroom/nanosenje_lepka_na_zidove.jpg', alt: 'ravnanje i hidroizolacija, nanosenje lepka i priprema za lepljenje plocica', id:321
          },
          {
            imgPath: '/images/services/renovation/adaptacija1.2.jpg', alt: 'vodokotlic se ugradjuje u zid radi estetike i prostora', id:312
          },
          {
            imgPath: '/images/services/renovation/adaptacija3.7.jpg', alt: 'tus kabina', id:132
          },
          {
            imgPath: '/images/services/renovation/kupatilo4.jpg', alt: 'skidanje stare tus kabine', id:213
          },
          {
            imgPath: '/images/services/renovation/adaptacija6.jpg', alt: 'zidanje nove tus kabine', id:231
          },
          
        ]
    },
    stone: {h3: 'Postavljanje ukrasnog kamena', p1: 'Ako vam je cilj da skroz promenite izgled vaših prostorija u domu onda je to ukrasni kamen. On može biti veštački ili tzv. dekorativni kamen i prirodni. Ugradnja ukrasnog kamenog zida može biti korak u pravom smeru u uređenju enterijera ili eksterijera. Kameni zidovi kao dekor su vrlo efikasni.' , p2: 'Kamen može da se postavlja na sve površine i može biti raznih oblika. U obliku štanglica, raznih dužina, visina i debljina, bunja i krajc gde su dimenzije po izboru. Dobija se sečenjem, klesanjem ili lomljenjem.',
        images: [
          {
            imgPath: '/images/services/stone/stone1.jpg', alt: 'kamene stanglice u dnevnoj sobi', id:123
          },
          {
            imgPath: '/images/services/stone/stone2.jpg', alt: 'zid od kamena dnevna soba', id:321
          },
          {
            imgPath: '/images/services/stone/stone3.jpg', alt: 'dekorativni kamen', id:312
          },
          {
            imgPath: '/images/services/stone/kamin_priprema.jpg', alt: 'priprema za kamin u zidu od kamena', id:132
          },
          {
            imgPath: '/images/services/stone/kamin_kamen.jpg', alt: 'zid od kamena sa kaminom od kamena', id:213
          },
          {
            imgPath: '/images/services/stone/kameni-bar2.1.jpg', alt: 'bar od kamena sa akvarijumom', id:231
          },
          
        ]
    }
  }  
}

const plumbingSection = {

  plumbing_services: {
    h2: 'Vodoinstalaterske Usluge',
    plumb: {
      h3: 'Zašto je ova vrsta usluge izuzetno neophodna?', p1: 'Većina vlasnika pokušava to sami da poprave, ali nije često uspešno. Dakle, očigledno je neophodno angažovati neke profesionalne i iskusne vodoinstalatere. Može da vam se učini da su problemi toliko jednostavni, mogu biti ozbiljni i možda će ih biti teže popraviti. Šteta za vaš dom može biti neverovatno velika.' , p2: 'Mi vam nudimo kompletne vodoinstalaterske usluge od vodovodne mreže u kupatilu do kanalizacije. U slučaju neispravnog bojlera ili zamena, napuknute vodovodne cevi, zamena dodrajale instalacije, ventili i slavine, WC šolje, totrajale kanalizacione mreže, izlivanje kanalizacije. Mi imamo iskustvo znanje i alat da to uradimo po poslednjim standardima.',
        images: [
          {
            imgPath: '/images/services/plumb/ugradnja_ventila.png', alt: 'ugradnja ventila i vodovodna instalacija', id:123
          },
          {
            imgPath: '/images/services/plumb/vodovod_bojler.png', alt: 'postavljanje vodovodne instalacije za bojler', id:321
          },
          {
            imgPath: '/images/services/plumb/vodovodne_cevi.png', alt: 'urezivanje navoja na plasticne vodovodne cevi', id:312
          },
          {
            imgPath: '/images/services/plumb/izolacija_cevi.png', alt: 'zvucna izolacija vodovodnih cevi', id:132
          },
          {
            imgPath: '/images/services/renovation/adaptacija1.2.jpg', alt: 'hidroizolacija kupatila', id:213
          },
          {
            imgPath: '/images/services/plumb/kanalizacione_cevi.png', alt: 'kanaliyacione cevi na plafonu', id:231
          },
          
        ]
    }
  }
}