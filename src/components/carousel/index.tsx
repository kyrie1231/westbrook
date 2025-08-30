import React, { useState, useEffect, useRef, CSSProperties } from 'react';
import classNames from 'classnames';
import './index.css';


const defaultProps: Partial<CarouselProps> = {
  autoplay: true,
  interval: 3000,
  direction: 'horizontal',
  showIndicators: true,
};

const Carousel: React.FC<CarouselProps> = (props) => {
  const {
    items,
    autoplay,
    interval,
    direction,
    showIndicators,
  } = { ...defaultProps, ...props };

  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHover, setIsHover] = useState(false);
  
 
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const slidesRef = useRef<HTMLDivElement>(null);

  
  const goToIndex = (index: number) => {
    if (items.length === 0) return;
    let newIndex = index;
    if (newIndex < 0) newIndex = items.length - 1;
    if (newIndex >= items.length) newIndex = 0;
    setCurrentIndex(newIndex);
  };


  const goToNext = () => goToIndex(currentIndex + 1);

  
  useEffect(() => {
    if (!autoplay || isHover || items.length <= 1) return;

    const startTimer = () => {
      timerRef.current = setTimeout(goToNext, interval);
    };
    startTimer();

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [autoplay, isHover, interval, currentIndex, items.length]);

 
  useEffect(() => {
    if (!autoplay || items.length <= 1) return;

    
    if (!isHover && timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = setTimeout(goToNext, interval);
    }
  }, [isHover, autoplay, interval]);

 
  if (items.length === 0) return null;

 
  const slideStyle: CSSProperties = {
    transform: direction === 'horizontal'
      ? `translateX(-${currentIndex * 100}%)`
      : `translateY(-${currentIndex * 100}%)`,
    flexDirection: direction === 'horizontal' ? 'row' : 'column',
  };

  
  const containerClass = classNames('carousel-container');

  const slidesClass = classNames('carousel-slides');
  
  const indicatorsClass = classNames('carousel-indicators');

  const getIndicatorClass = (index: number) => 
    classNames('carousel-indicator', { active: index === currentIndex });
 
  const slideItemClass = classNames('carousel-slide');

  return (
    <div 
      className={containerClass}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      data-direction={direction}
    >
  
      <div className="carousel-slides-wrapper" ref={slidesRef}>
        <div className={slidesClass} style={slideStyle}>
          {items.map((item) => (
            <div key={item.id} className={slideItemClass}>
              {item.content}
            </div>
          ))}
        </div>
      </div>

      {showIndicators && items.length > 1 && (
        <div className={indicatorsClass} data-direction={direction}>
          {items.map((_, index) => (
            <button
              key={index}
              className={getIndicatorClass(index)} 
              onClick={() => goToIndex(index)}
              aria-label={`切换到第 ${index + 1} 项`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Carousel;


export interface CarouselItem {
  id: string;
  content: React.ReactNode; 
}


type CarouselDirection = 'horizontal' | 'vertical';


export interface CarouselProps {
  items: CarouselItem[];
  autoplay?: boolean; 
  interval?: number; 
  direction?: CarouselDirection;
  showIndicators?: boolean; 
}