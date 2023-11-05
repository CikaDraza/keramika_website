import React from 'react';
import Image from 'next/image';

const shimmer = (w, h) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#D3D3D3" offset="20%" />
      <stop stop-color="#000" offset="50%" />
      <stop stop-color="#D3D3D3" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#D3D3D3" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`

const toBase64 = (str) =>
  typeof window === 'undefined' ? Buffer.from(str).toString('base64') : window.btoa(str);

export default function RenovationSection(props) {
  const { math, ceramicSectionProps } = props;

  return (
    <section id='renoviranje' className="ceramic">
      <div className="wrapper">
        <div className="ceramic__box">
          <h3>{ceramicSectionProps.ceramic_services.renovation.h3}</h3>
          <div className="row">
            <div className="column">
            <p>{ceramicSectionProps.ceramic_services.renovation.p1}</p>
            <p>{ceramicSectionProps.ceramic_services.renovation.p2}</p>
            </div>
          </div>
          <div className="second row">
            <div className="column">            
            <p>{ceramicSectionProps.ceramic_services.tiles.p3}</p>
            </div>
            <div className="img column">
              <div className="img row">
                <div className="column">
                {
                  ceramicSectionProps.ceramic_services.renovation.images.slice(0, 1).map(img => (
                    <Image key={img.id} src={img.imgPath} width={320} height={228} alt={img.alt} placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`} />
                  ))
                }
                </div>
                <div className="column">
                {
                  ceramicSectionProps.ceramic_services.renovation.images.slice(1, 2).map(img => (
                    <Image key={img.id} src={img.imgPath} width={320} height={228} alt={img.alt} placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`} />
                  ))
                }
                </div>
              </div>
            </div>
          </div>
          <div className="third row">
            <div className="column">
            {
              ceramicSectionProps.ceramic_services.renovation.images.slice(2, 3).map(img => (
                <Image key={img.id} src={img.imgPath} width={320} height={228} alt={img.alt} placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`} />
              ))
            }
            </div>
            <div className="column">
            {
              ceramicSectionProps.ceramic_services.renovation.images.slice(3, 4).map(img => (
                <Image key={img.id} src={img.imgPath} width={320} height={228} alt={img.alt} placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`} />
              ))
            }
            </div>
            <div className="column">
            {
              ceramicSectionProps.ceramic_services.renovation.images.slice(4, 5).map(img => (
                <Image key={img.id} src={img.imgPath} width={320} height={228} alt={img.alt} placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`} />
              ))
            }
            </div>
            <div className="column">
            {
              ceramicSectionProps.ceramic_services.renovation.images.slice(5, 6).map(img => (
                <Image key={img.id} src={img.imgPath} width={320} height={228} alt={img.alt} placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`} />
              ))
            }
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
