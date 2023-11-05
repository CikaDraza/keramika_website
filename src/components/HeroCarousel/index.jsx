import React, { useState, useRef, useEffect, useCallback } from 'react';
import Image from 'next/image';
import SliderPrevArrow from '../Icons/SliderPrevArrow';
import SliderNextArrow from '../Icons/SliderNextArrow';

function handleCarouselTransition(step, carouselLenght, imgWidth, transition) {
  return {
    marginLeft: `-${step * imgWidth}px`,
    transition: `${transition}`,
    width: `${imgWidth * carouselLenght}px`
  };
}

export default function HeroCarousel(props) {
  const { match, heroSectionProps } = props;
  const [step, setStep] = useState(() => ({
    slide: 1,
    transition: "all .5s ease-in-out"
  }));

  let itemsRef = useRef();
  const images = heroSectionProps.carouselImages;
  const newArrImages = [];
  const cloneImages = images.concat(images);
  cloneImages.unshift(cloneImages.pop());
  newArrImages.push(cloneImages);
  const maxStep = images.length;
  const carouselLenght = newArrImages[0].length;
  const desktopWidth = heroSectionProps.carouselDesktopWidth;
  const desktopHeight = heroSectionProps.carouselDesktopHeight;
  const mobileWidth = heroSectionProps.carouselMobileWidth;
  const mobileHeight = heroSectionProps.carouselMobileHeight;

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
          slide: (prevActiveStep.slide = 5),
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

 const carouselTransitionStyle = () => {
   return props.match ? handleCarouselTransition(step.slide, carouselLenght, mobileWidth, step.transition) : handleCarouselTransition(step.slide, carouselLenght, desktopWidth, step.transition);
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
      <div className="slider">
        <div className="slider__wrapper">
          <div
          onTouchMove={handleTouchMove}
          onTouchStart={handleTouchStart}
          className="slider__items"
          ref={itemsRef}
          style={carouselTransitionStyle()}  
          >
            {
              newArrImages && newArrImages[0].map((image, index) => (
              <div key={image + index} className="slider__block">
              {
                match &&
                <Image className="slider__item" src={image.imgPath} width={mobileWidth} height={mobileHeight} alt={image.imgTitle} priority />
              }
              <Image className="slider__item" src={image.imgPath} width={desktopWidth} height={desktopHeight} alt={image.imgTitle} priority />
              </div>             
              ))
            }
          </div>           
          <div className="slider__buttons">
            <div onClick={handleBack} className="button__prev">
              <span className="button__prev--white">
                <SliderPrevArrow width={20} height={20} />
              </span>
            </div>
            <div onClick={handleNext} className="button__next">
              <span className="button__next--orange">
                <SliderNextArrow width={20} height={20} />
              </span>
            </div>
          </div>
        </div>
      </div> 
  )
}
