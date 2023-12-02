import Head from 'next/head';
import Renovation from '../src/components/Icons/renovation';
import Stone from '../src/components/Icons/stone';
import Tiles from '../src/components/Icons/tiles';
import Pipes from '../src/components/Icons/pipes';
import useMediaQuery from '../src/components/useMediaQuery';
import HomeLayout from '../src/layout/Home/HomeLayout';
import axios from 'axios';

const YOUTUBE_PLAYLIST = process.env.YOUTUBE_PLAYLIST;
const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY2;

export async function getServerSideProps() {
  const { data } = await axios.get(`${YOUTUBE_PLAYLIST}?part=snippet&playlistId=PLss-O45xpb4ePG5XbxL5uOAyqyvBk52Tl&key=${YOUTUBE_API_KEY}`);
  return {
    props: {
      data,
    }
  };
}

export default function Home({ data }) {
  const match = useMediaQuery('(max-width: 768px)');
  const homeProps = {
    heroSectionProps: heroSection,
    serviceProps: services,
    chooseUsProps: sectionChooseUs,
    carouselPortfolioProps: carouselPortfolio,
    priceListProps: priceList,
    match,
    data
  };

  return (
    <div>
      <Head>
        <meta name="robots" content="index, follow"/>
        <meta name="keywords" content="keramičar, renoviranje kupatila, cene renoviranja"/>
        <meta name="description" content="Potrebn vam je keramičar? Tu smo za vas da renoviranje kuće ili stana ne bude vaša noćna mora!" />
        <title>Keramičar Lale | Keramikačarske Usluge</title>
      </Head>
      <main>
        <HomeLayout {...homeProps} />
      </main>      
    </div>
  )
  
}

const fill = "#ff810d"

const heroSection = {
  h1: "Keramičar za vaš",
  h1Span: "dom!",
  p: "Vreme je da tražite keramičara? Često zna da bude naporno i stresno. Svi će vam reći koliko je teško naći dobrog i poštenog keramičara. Zato što nemaju dobru preporuku, nisu potražili pomoć kod nas. Da, mi radimo sve keramičarske radove koje možete da zamislite!",
  carouselDesktopWidth: 640,
  carouselDesktopHeight: 450,
  carouselMobileWidth: 350,
  carouselMobileHeight: 220,
  carouselImages: [
    {
      imgPath: '/images/hero-carousell/kupatilo-tamne-svetle-mermerne-plocice.jpg', imgTitle: 'kupatilo u kombinaciji sa tamno svetlim mermernim plocicama'
    },
    {
      imgPath: '/images/hero-carousell/kuhinja-sudopera-plocice.jpg', imgTitle: 'kuhinjski radni deo sa luksuznim plocicama'
    },
    {
      imgPath: '/images/hero-carousell/moderan-slivnik-tus-kabina.jpg', imgTitle: 'moderna tus kabina pogodna za ljude sa otezanom pokretljivoscu'
    },
    {
      imgPath: '/images/hero-carousell/tihi_dom.jpg', imgTitle: 'osvetljena dnevna soba'
    },
    {
      imgPath: '/images/hero-carousell/bela_kada.jpg', imgTitle: 'ovalna kada u kupatilu'
    },
    {
      imgPath: '/images/hero-carousell/devojka_kada.jpg', imgTitle: 'devojka u kadi'
    },
    {
      imgPath: '/images/hero-carousell/mermerni_zid_kupatilo.jpg', imgTitle: 'mermerno kupatilo'
    },
    {
      imgPath: '/images/hero-carousell/bronzana_kada.jpg', imgTitle: 'bronzana kada'
    }
  ]
}

const services = {
  h2: "Naše Usluge",
  cardsDimension: {height: '350px', width: '270px', borderRadius: '10px', padding: '50px 25px', cursor: 'pointer'},
  subHeading: "Radimo sve vrste keramičarskih radova, od kupatila do spoljašnjih radova za vašu kuću. Lepljenje keramičkih pločica i renoviranja kupatila. Zamena i ugradnja sve vrste keramike, ukrasnog kamena i vodoinstalacije.",
  cardsParagraph: {height: '100px'},
  servicesCards: [
    {h3: "01.Lepljenje pločica", p: "Lepljenje svih vrsta keramičkih pločica na zidove i na podove.", icon: <Tiles width={50} height={50} fill="#FF810D" />, path: "//#lepljenje-plocica"},
    {h3: "02.Renoviranje Kupatila", p: "Prema Vašoj želji obnovićemo kupatilo, učiniti ga praktičnim i udobnim.", icon: <Renovation width={50} height={50} fill="#ff810d" />, path: "//#renoviranje"},
    {h3: "03.Ukrasni Kamen", p: "Ugradnja ukrasnog kamena na unutrašnje i spoljašnje površine.", icon: <Stone width={50} height={50} pathFill={fill} />, path: "//#renoviranje"},
    {h3: "04.Vodointalacija", p: "Stručno i kvalitetno postavljamo vodovodne i kanalizacione instalacije.", icon: <Pipes width={50} height={50} fill="#FF810D" />, path: "//#vodoinstalcija"},    
  ]
}

const sectionChooseUs = {
  h2: "Zašto izabrati nas?",
  boxContent: [
    {
      h3: "Predlažemo rešenje", p: "Radimo sa Vama kako biste doneli najbolju odluku nakon razmatranja Vaših potreba."
    },
    {
      h3: "Planiramo", p: "Zajedno analiziramo ideje i na kraju biramo onu koja vam najviše odgovara."
    },
    {
      h3: "Gradimo", p: "Kada je planiranje završeno, počinjemo sa radom, uzimamo najbolje materijale lake za održavanje, koji ispunjavaju uslove dizajna."
    },
    {
      h3: "Finiš", p: "Nakon ugradnje nameštaja i sanitarija čistimo sve za sobom da bi vaš prostor zablistao."
    },
    
  ]
}

const carouselPortfolio = {
  carouselDesktopWidth: 450,
  carouselDesktopHeight: 550,
  carouselMobileWidth: 300,
  carouselMobileHeight: 400,
  carouselImages: [
    {
      imgPath: '/images/services/bathroom/kupatilo-kombinacija-tri-vrste-plocica.jpg', alt: 'kupatilo sa tri vrste plocica', header: 'Renoviranje Kupatila', link: ''
    },
    {
      imgPath: '/images/portfolio-carousell/kuhinja-posle.jpg', alt: 'kuhinja keramicke plocice', header: 'Kuhinje', link: ''
    },
    {
      imgPath: '/images/portfolio-carousell/dnevna-soba-plocice-pod.jpg', alt: 'plocice u dnevnoj sobi su sada hit', header: 'Dnevna Soba', link: ''
    },
    {
      imgPath: '/images/portfolio-carousell/stepeniste4.jpg', alt: 'Stepeniste u kamenu', header: 'Hodnik i Stepenište', link: ''
    }
  ]
}

const priceList = {
  h2: "Cene Keramičarskih Radova",
  subHeading: "Troškovi Izgradnje i Renoviranja",
  p1: "Cene se mogu značajno razlikovati od projekta do projekta, u velikoj meri zaviseći od vašeg budžeta. Kada nas kontaktirate reći ćemo vam koje će ideje uspeti, a koje neće.",
  p2: "Keramičarski radovi, renoviranje, radovi od nule mogu biti prilično velika odluka kao i stres pa i udar na budžet, ali je to jedino kako da dobijete upravo ono šta želite.",
  p3: "Teško je proceniti troškove sa toliko faktora koje treba uzeti u obzir. U zavisnosti od kvadrature, građevinskog materijala i ličnih zahteva, cene variraju. Pozovite nas da razgovaramo o vašem projektu i napravimo neku cenu koja bi vam odgovarala.",
  p4: "Pogledajte cene ovde koje su okvirne ali smo loš materijal odmah isključili.",
  cards: [
    {h3: "Lepljenje pločica", cenaRusenje: "", cenaUsluge: "15", uslugaValuta: "€", uslugaJedinica: "po kvadratnom metru", cenaSanitarije: "Uklanjanje i postavljanje sanitarije 150€ okvirno", cenaKosuljica: "izrada košuljice 50€ okvirno", cenaHidroizolacija: "Hidroizolacija 50€ okvirno", cenaMalterisanje: "", uslugaJedinica: "po kvadratnom metru", cenaDeponija: "Iznošenje, i odvoženje šuta na deponiju 50€"},
    {h3: "Renoviranje kupatila", cenaUsluge: "60", uslugaJedinica: "po kvadratnom metru", uslugaValuta: "€", cenaRusenje: "Rušenje starih pločica 150€", cenaSanitarije: "", cenaVodaKanalizacija: "Vodoinstalaterski radovi gde spadaju voda i kanalizacija 300€ okvirno", cenaKosuljica: "izrada košuljice 50€ okvirno", cenaHidroizolacija: "Hidroizolacija 50€ okvirno", cenaMalterisanje: "", cenaKrpljenje: "Popunjavanje neravnina i rupa na zidovima 100€ okvirno", cenaDeponija: "Iznošenje, i odvoženje šuta na deponiju 50€"},
    {h3: "Ukrasni Kamen", cenaUsluge: "15", uslugaJedinica: "po kvadratnom metru", uslugaValuta: "€", cenaDekoKamen: "Postavljanje dekorativnog kamena 20€/m2",  cenaKamenStaze: "Postavljanje kamena za staze 10€/m2", cenaGerovanje: "Gerovanje ivica kamena 15€/m2 okvirno", cenaKrpljenje: "Popunjavanje neravnina i rupa na zidovima 100€ okvirno", cenaMalterisanje: "Ako je potrebno malterisanje i ravnajući sloj 150€ okvirno", cenaDeponija: "Iznošenje, i odvoženje šuta na deponiju 50€"}
  ],
  actionBtn: "Pogledaj Cene" 
}