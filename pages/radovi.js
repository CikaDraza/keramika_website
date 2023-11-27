import Head from 'next/head';
import React from 'react';
import PortfolioLayout from '../src/layout/Portfolio/PortfolioLayout';
import useMediaQuery from '../src/components/useMediaQuery';

export default function Portfolio() {
  const match = useMediaQuery('(max-width: 768px)');
  const porfolioProps = {
    portfolioHeaderProps: portfolioHeader,
    portfolioFilterTabsProps: portfolioFilterTabs,
    portfolioImagesProps: portfolioImages,
    match
  };

  return (
    <div>
      <Head>
        <meta name="robots" content="noindex, nofollow"/>
        <meta name="keywords" content="slike radova renoviranja kupatila, kuhinja, dnevne sobe, hodnik, terase"/>
        <meta name="description" content="Pogledajte naše radove i kako mi to radimo" />
        <title>Rani Radovi | Keramika Živojinov</title>
      </Head>
      <main>
        <PortfolioLayout {...porfolioProps} />
      </main>      
    </div>
  )
}

const portfolioHeader = {
  h1: "Rani Radovi",
  p: "Pogledajte naše radove i uverite se u kvalitet!",

}

const portfolioFilterTabs = {
  tabs: ['sve', 'kupatila', 'kuhinje', 'sobe', 'stepeništa']
}

const portfolioImages = {
    images: [
    { 
      all: [
        {
          imgPath: '/images/portfolio-carousell/toalet.jpg', alt: 'kupatilo renoviranje', id:123, height: 640, width: 480
        },
        {
          imgPath: '/images/services/bathroom/kupatilo1.jpg', alt: 'kupatilo lepljenje plocica', id:321, height: 640, width: 480
        },
        {
          imgPath: '/images/services/bathroom/kupatilo2.2.jpg', alt: 'kupatilo tus kabina', id:312, height: 288, width: 480
        },
        {
          imgPath: '/images/services/kitchen/kuhinja2.1.jpg', alt: 'kuhinja lepljenje plicica bez fuge', id:4312, height: 450, width: 640
        },
        {
          imgPath: '/images/services/bathroom/kupatilo2.jpg', alt: 'kupatilo lux', id:2213, height: 640, width: 480
        },
        {
          imgPath: '/images/services/bathroom/kupatilo22.jpg', alt: 'tus kabina moderna', id:2231, height: 288, width: 640
        },
        {
          imgPath: '/images/services/bathroom/kupatilo2.4.jpg', alt: 'tus kabina kupatilo', id:2132, height: 960, width: 480
        },
        {
          imgPath: '/images/services/bathroom/kupatilo-kombinacija-tri-vrste-plocica.jpg', alt: 'postavljanje plocica', id:3231, height: 640, width: 480
        },
        {
          imgPath: '/images/services/kitchen/kuhinja-radni-deo-plocice.jpg', alt: 'kuhinja lepljena porcelan plocica', id:3312, height: 640, width: 480
        },
        {
          imgPath: '/images/services/hallway/laminat-plocice-dijagonalno-lepljenje.jpg', alt: 'određivanje velicina fuge krsticem', id:4132, height: 480, width: 480
        },
        {
          imgPath: '/images/services/renovation/adaptacija4.jpg', alt: 'renoviranje kupatila', id:5123, height: 640, width: 480
        },
        {
          imgPath: '/images/services/bathroom/kupatilo2.3.jpg', alt: 'tus kabina kupatilo', id:3123, height: 960, width: 480
        },
        {
          imgPath: '/images/services/stone/stone4.jpg', alt: 'kamin u zidu od kamena', id:5312, height: 960, width: 720
        },
        {
          imgPath: '/images/services/stone/kameni-bar2.2.jpg', alt: 'kameni sank', id:5321, height: 480, width: 640
        },
      ]
    },
    {
      bathroom: [
        {
          imgPath: '/images/services/bathroom/kupatilo2.jpg', alt: 'wc keramika', id:111, height: 640, width: 480
        },
        {
          imgPath: '/images/services/bathroom/kupatilo4.jpg', alt: 'plavo bele plocice kupatilo', id:112, height: 360, width: 480
        },
        {
          imgPath: '/images/services/renovation/adaptacija2.2.jpg', alt: 'adapttacija kupatila', id:113, height: 640, width: 480
        },
        {
          imgPath: '/images/services/renovation/adaptacija2.3.jpg', alt: 'adapttacija kupatila', id:114, height: 640, width: 480
        },
        {
          imgPath: '/images/services/renovation/adaptacija3.7.jpg', alt: 'adapttacija kupatila', id:115, height: 360, width: 640
        },
        {
          imgPath: '/images/services/renovation/adaptacija4.5.jpg', alt: 'adapttacija kupatila', id:116, height: 360, width: 640
        },
        {
          imgPath: '/images/services/renovation/adaptacija4.jpg', alt: 'adapttacija kupatila', id:117, height: 640, width: 480
        },
        {
          imgPath: '/images/services/renovation/adaptacija5.jpg', alt: 'adapttacija kupatila', id:118, height: 640, width: 480
        },
        {
          imgPath: '/images/services/renovation/adaptacija6.jpg', alt: 'adapttacija kupatila', id:119, height: 480, width: 640
        },
        {
          imgPath: '/images/services/bathroom/kupatilo9.jpg', alt: 'renoviranje kupatila i tus kabine', id:911, height: 640, width: 480
        },
        {
          imgPath: '/images/services/bathroom/kupatilo10.jpg', alt: 'kupatilo keramicke plocice', id:912, height: 1440, width: 2560
        },
        {
          imgPath: '/images/services/bathroom/kupatilo3.4.jpg', alt: 'kupatilo mozaik', id:913, height: 960, width: 480
        },
        {
          imgPath: '/images/services/bathroom/kupatilo5.jpg', alt: 'tus kabina', id:914, height: 480, width: 640
        },
        {
          imgPath: '/images/services/bathroom/kupatilo3.5.jpg', alt: 'kupatilo mozaik', id:915, height: 360, width: 640
        },
        {
          imgPath: '/images/services/bathroom/kupatilo44.jpg', alt: 'kupatilo plocice', id:916, height: 360, width: 640
        },
        {
          imgPath: '/images/services/bathroom/kupatilo7.jpg', alt: 'kupatilo plocice crvene', id:917, height: 480, width: 480
        },
        {
          imgPath: '/images/services/bathroom/kupatilo8.jpg', alt: 'renoviranje kupatila', id:918, height: 640, width: 480
        },
        {
          imgPath: '/images/services/bathroom/kupatilo6.jpg', alt: 'renoviranje tus kabine', id:919, height: 640, width: 480
        },
        {
          imgPath: '/images/services/bathroom/kupatilo1.1.jpg', alt: 'renoviranje tus kabine', id:920, height: 360, width: 640
        },
        {
          imgPath: '/images/services/bathroom/kupatilo2.1.jpg', alt: 'renoviranje tus kabine', id:921, height: 780, width: 480
        },
        {
          imgPath: '/images/services/bathroom/kupatilo-kombinacija-tamne-svetle-plocice.jpg', alt: 'renoviranje tus kabine', id:923, height: 640, width: 480
        },
        {
          imgPath: '/images/services/bathroom/kupatilo2.4.jpg', alt: 'renoviranje tus kabine', id:680, height: 960, width: 640
        },
        {
          imgPath: '/images/services/bathroom/kupatilo3.1.jpg', alt: 'renoviranje tus kabine', id:681, height: 960, width: 480
        },
        {
          imgPath: '/images/services/bathroom/kupatilo3.2.jpg', alt: 'renoviranje tus kabine', id:682, height: 960, width: 480
        },
        {
          imgPath: '/images/services/bathroom/kupatilo3.3.jpg', alt: 'renoviranje tus kabine', id:683, height: 360, width: 640
        },
        {
          imgPath: '/images/services/bathroom/kupatilo3.5.jpg', alt: 'renoviranje tus kabine', id:684, height: 360, width: 640
        },
        {
          imgPath: '/images/services/bathroom/kupatilo3.4.jpg', alt: 'renoviranje tus kabine', id:685, height: 960, width: 640
        },
        {
          imgPath: '/images/portfolio-carousell/toalet.jpg', alt: 'renoviranje tus kabine', id:686, height: 640, width: 480
        }
      ]
    },
    {
      kitchen: [
        {
          imgPath: '/images/portfolio-carousell/kuhinja-radni-deo-plocice.jpg', alt: 'kuhinja dijagonalno lepljene plocice', id:123, height: 640, width: 480
        },
        {
          imgPath: '/images/services/kitchen/kuhinja-sudopera-plocice.jpg', alt: 'mozaik u kuhinji', id:321, height: 480, width: 640
        },
        {
          imgPath: '/images/services/kitchen/kuhinja1.jpg', alt: 'kuhinja', id:400, height: 360, width: 480
        },
        {
          imgPath: '/images/services/kitchen/kuhinja2.1.jpg', alt: 'imitacija cigle u kuhinji', id:401, height: 480, width: 640
        },
        {
          imgPath: '/images/services/kitchen/kuhinja1.1.jpg', alt: 'kuhinja plocice', id:101, height: 360, width: 640
        },
        {
          imgPath: '/images/services/kitchen/kuhinja-posle.jpg', alt: 'kuhinja plocice', id:101, height: 720, width: 480
        }
      ]
    },
    {
      rooms: [
        {
          imgPath: '/images/services/rooms/soba1.jpg', alt: 'lepljenje plocica u dnevnoj sobi', id:123, height: 720, width: 480
        },
        {
          imgPath: '/images/services/stone/ukras-zid-kamen.jpg', alt: 'mozaik na zidu kamen', id:132, height: 720, width: 480
        },
        {
          imgPath: '/images/services/stone/kameni-bar2.2.jpg', alt: 'kameni bar', id:132, height: 480, width: 640
        },
        {
          imgPath: '/images/services/stone/kameni-bar2.1.jpg', alt: 'mozaik u dnevnoj sobi', id:321, height: 480, width: 640
        },
        {
          imgPath: '/images/services/rooms/soba4.jpg', alt: 'kameni zid u sobi', id:312, height: 640, width: 480
        },
        {
          imgPath: '/images/services/stone/kamin_kamen.jpg', alt: 'kameni zid u sobi, potkrovlje', id:1231, height: 480, width: 640
        },
        {
          imgPath: '/images/services/stone/stone4.jpg', alt: 'kameni zid i kamin', id:1231, height: 720, width: 480
        },
        {
          imgPath: '/images/services/stone/zid-prirodni-kamen.jpg', alt: 'kameni zid u sobi', id:1231, height: 720, width: 480
        },
        {
          imgPath: '/images/services/stone/stone2.jpg', alt: 'kameni zid u sobi', id:1231, height: 480, width: 640
        }
      ]
    },
    {
      stairs: [
        {
          imgPath: '/images/services/terrace/terasa1.jpg', alt: 'terasa kombinacija plocica velike i male, dve boje', id:111, height: 640, width: 480
        },
        {
          imgPath: '/images/services/terrace/terasa2.jpg', alt: 'terasa kombinacija plocica velike i male, dve boje', id:111, height: 480, width: 480
        },
        {
          imgPath: '/images/services/stair/stepeniste-mermer.jpg', alt: 'terasa kombinacija plocica', id:222, height: 720, width: 480
        },
        {
          imgPath: '/images/services/stair/stepeniste3.jpg', alt: 'stepeniste ulaz u kucu', id:33, height: 480, width: 640
        },
        {
          imgPath: '/images/services/stair/stepeniste4.jpg', alt: 'stepeniste dekoracija od kamena', id:44, height: 780, width: 480
        },
        {
          imgPath: '/images/services/stair/stepeniste_plocice1.jpg', alt: 'terasa kombinacija plocica', id:222, height: 480, width: 640
        },
        {
          imgPath: '/images/services/stair/stepeniste_plocice2.jpg', alt: 'terasa kombinacija plocica', id:222, height: 480, width: 640
        },
        {
          imgPath: '/images/services/hallway/laminat-plocice-dijagonalno-lepljenje.jpg', alt: 'hodnik plocice', id:222, height: 480, width: 480
        },
        {
          imgPath: '/images/services/hallway/postavljanje-laminat-plocica.jpg', alt: 'hodnik postavljanje plocica', id:222, height: 640, width: 480
        },
        {
          imgPath: '/images/services/hallway/predsoblje-plocice.jpg', alt: 'hodnik', id:222, height: 640, width: 480
        },
        {
          imgPath: '/images/services/terrace/stone6.jpg', alt: 'hodnik', id:222, height: 360, width: 480
        },
        {
          imgPath: '/images/services/stair/stone5.jpg', alt: 'stepeniste u kamenu', id:55, height: 720, width: 480
        }
      ]
    }
  ]  
}