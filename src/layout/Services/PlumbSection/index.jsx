import React from 'react';
import Image from 'next/image';

const shimmer = (w, h) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#1499ff" offset="20%" />
      <stop stop-color="FF810D" offset="50%" />
      <stop stop-color="#1499ff" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#D3D3D3" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`

const toBase64 = (str) =>
  typeof window === 'undefined' ? Buffer.from(str).toString('base64') : window.btoa(str);

export default function PlumbSection(props) {
  const { math, plumbingSectionProps } = props;

  return (
    <section id='vodoinstalacija' className="ceramic">
      <div className="wrapper">
        <h2>{plumbingSectionProps.plumbing_services.h2}</h2>
        <div className="ceramic__box">
          <h3>{plumbingSectionProps.plumbing_services.plumb.h3}</h3>
          <div className="row">
            <div className="column">
            <p>{plumbingSectionProps.plumbing_services.plumb.p1}</p>
            </div>
          </div>
          <div className="second row">
            <div className="column">
            <p>{plumbingSectionProps.plumbing_services.plumb.p2}</p>
            </div>
            <div className="img column">
              <div className="img row">
                <div className="column">
                {
                  plumbingSectionProps.plumbing_services.plumb.images.slice(0, 1).map(img => (
                    <Image key={img.id} src={img.imgPath} width={640} height={360} alt={img.alt} placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`} />
                  ))
                }
                </div>
                <div className="column">
                {
                  plumbingSectionProps.plumbing_services.plumb.images.slice(1, 2).map(img => (
                    <Image key={img.id} src={img.imgPath} width={640} height={360} alt={img.alt} placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`} />
                  ))
                }
                </div>
              </div>
            </div>
          </div>
          <div className="third row">
            <div className="column">
            {
              plumbingSectionProps.plumbing_services.plumb.images.slice(2, 3).map(img => (
                <Image key={img.id} src={img.imgPath} width={640} height={360} alt={img.alt} placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`} />
              ))
            }
            </div>
            <div className="column">
            {
              plumbingSectionProps.plumbing_services.plumb.images.slice(3, 4).map(img => (
                <Image key={img.id} src={img.imgPath} width={640} height={360} alt={img.alt} placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`} />
              ))
            }
            </div>
            <div className="column">
            {
              plumbingSectionProps.plumbing_services.plumb.images.slice(4, 5).map(img => (
                <Image key={img.id} src={img.imgPath} width={640} height={360} alt={img.alt} placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`} />
              ))
            }
            </div>
            <div className="column">
            {
              plumbingSectionProps.plumbing_services.plumb.images.slice(5, 6).map(img => (
                <Image key={img.id} src={img.imgPath} width={640} height={360} alt={img.alt} placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`} />
              ))
            }
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}