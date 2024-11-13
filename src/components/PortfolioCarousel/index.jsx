import React, { useEffect, useState, useRef, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ArrowLeft from '../Icons/ArrowLeft';

function handleCarouselTransition(step, index, imgWidth, carouselLenght, transition) {
  return {
    marginLeft: `-${step * index * imgWidth}px`,
    transition: `${transition}`,
    width: `${imgWidth * 1.2 * carouselLenght}px`
  };
}

export default function PortfolioCarousel({ match, carouselPortfolioProps }) {
  const images = carouselPortfolioProps.carouselImages;
  const newArrImages = [];
  const cloneImages = images.concat(images);
  cloneImages.unshift(cloneImages.pop());
  newArrImages.push(cloneImages);
  const [step, setStep] = useState(() => ({
    slide: 1,
    transition: "all .5s ease-in-out"
  }));

  let itemsRef = useRef();
  const carouselLenght = newArrImages[0].length;
  const maxStep = images.length;
  const mobIndex = 1.228;
  const deskIndex = 1.22;
  const desktopWidth = carouselPortfolioProps.carouselDesktopWidth;
  const desktopHeight = carouselPortfolioProps.carouselDesktopHeight;
  const mobileWidth = carouselPortfolioProps.carouselMobileWidth;
  const mobileHeight = carouselPortfolioProps.carouselMobileHeight;

  const carouselTransitionStyle = () => {
    return match ? handleCarouselTransition(step.slide, mobIndex, mobileWidth, carouselLenght, step.transition) : handleCarouselTransition(step.slide, deskIndex, desktopWidth, carouselLenght, step.transition);
  };

  const handleDot = (index) => {
    if(step.slide === maxStep && index === 0) {
      setStep((prevActiveStep) => ({
        ...prevActiveStep,
        slide: (prevActiveStep.slide = index = maxStep),
        transition: "all .5s ease-in-out"
      }));
      setTimeout(() => {
        setStep((prevActiveStep) => ({
          ...prevActiveStep,
          slide: (prevActiveStep.slide = 1),
          transition: "all .0s linear"
        }));
      }, 600);
    }
    if(step.slide === 1 && index === 3) {
      setTimeout(() => {
        setStep((prevActiveStep) => ({
          ...prevActiveStep,
          slide: (prevActiveStep.slide = index = 0),
          transition: "all .5s ease-in-out"
        }));
      }, 0);
      setTimeout(() => {
        setStep((prevActiveStep) => ({
          ...prevActiveStep,
          slide: (prevActiveStep.slide = index = maxStep),
          transition: "all .0s linear"
        }));
      }, 600);
      clearTimeout();
    }
    setStep((prevActiveStep) => ({
      ...prevActiveStep,
      slide: (prevActiveStep.slide = index + 1),
      transition: "all .5s ease-in-out"
    }));
  };

  const handleNext = () => {    
    if (step.slide === maxStep) {
      setTimeout(function () {
        setStep((prevActiveStep) => ({       
          slide: (prevActiveStep.slide = 1),
          transition: (prevActiveStep.transition = "none")
        }));
      }, 600);
      clearTimeout();
    }
    setStep((prevActiveStep) => ({     
      slide: prevActiveStep.slide + 1,
      transition: "all .5s ease-in-out"
    }));
  };

  const handleBack = () => {    
    if (step.slide === 1) {
      setTimeout(function () {
        setStep((prevActiveStep) => ({
          slide: (prevActiveStep.slide = 4),
          transition: (prevActiveStep.transition = "none")
        }));
      }, 600);
      clearTimeout();
    }
    setStep((prevActiveStep) => ({
      slide: prevActiveStep.slide - 1,
      transition: "all .5s ease-in-out"
    }));
  };

  /** Swipe hero carousell */
 let moveDownX = null;
 let moveDownY = null;

 function getTouches(e) {
  return e.touches; // browser API
}

const handleTouchStart = useCallback((e) => {
  const firstTouch = getTouches(e)[0];
    moveDownX = firstTouch.clientX;
    moveDownY = firstTouch.clientY;
},
  [getTouches]
);

const handleTouchMove = useCallback((event) => {
    if (!moveDownX || !moveDownY) return;
    let moveUpX = event.touches[0].clientX;
    let moveUpY = event.touches[0].clientY;

    let DiffX = moveDownX - moveUpX;
    let DiffY = moveDownY - moveUpY;

    if(Math.abs(DiffX) > Math.abs(DiffY)) {
      if ( DiffX > 0 ) {
        handleNext();
      } else {
        handleBack();
      }
    }
    /* reset values */
    moveDownX = null;
    moveDownY = null;
  },
  [handleNext, handleBack]
);

 useEffect(() => {
   const sliderImg = itemsRef.current;
   sliderImg.addEventListener('touchstart', handleTouchStart, false);        
   sliderImg.addEventListener('touchmove', handleTouchMove, false);
   return () => {
    sliderImg.removeEventListener('touchstart', handleTouchStart, false);        
   sliderImg.removeEventListener('touchmove', handleTouchMove, false);
   };
 }, [handleTouchMove, handleTouchStart]);

  return (
    <div className="carousel-container">
      <div
        ref={itemsRef}
        onTouchMove={handleTouchMove}
        onTouchStart={handleTouchStart}
        style={carouselTransitionStyle()}
        className="carousel-items">
      {
        newArrImages && newArrImages[0].map((img, index) => (            
          <div key={img + index} className="carousel__item">
              <Image className={`carousel__images images__${index}`} src={img.imgPath} width={match ? mobileWidth : desktopWidth} height={match ? mobileHeight : desktopHeight} alt={img.alt} priority />
              <div className="carousel-card">
                <h3 className="card__header">{img.header}</h3>
                <div data-id={index} className="card__action">
                  <Link href={`/radovi`} passHref>detaljnije...<span><ArrowLeft width={20} height={20} fill="#1D3557" /></span></Link>
                </div>
              </div>
          </div>
        ))
      }
      </div>
      <div className="carousel-controls">
        <div className="carousel-dots">
        {
          images.map((dot, index) => (
            <div
              onClick={() => handleDot(index)}
              key={dot + index}
              className={
                step.slide === index + 1
                ? "carousel__dot selected"
                : "carousel__dot"
              }
              >
              </div>
          ))
        } 
        </div>
      </div>
    </div>
  )
}
