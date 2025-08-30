import React from 'react';
import Carousel, { CarouselProps, CarouselItem } from './index'; 
import cat1 from './img/1.cat.png';
import cat2 from './img/2.cat.png';
import cat3 from './img/3.cat.png';


const mockItems: CarouselItem[] = [
  { 
    id: '1', 
    content: <img 
      src={cat1} 
      alt="轮播图1" 
      style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
    /> 
  },
  { 
    id: '2', 
    content: <img 
      src={cat2}
      alt="轮播图2" 
      style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
    /> 
  },
  { 
    id: '3', 
    content: <img 
      src={cat3}
      alt="轮播图3" 
      style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
    /> 
  },
];


export default {
  title: 'Carousel', 
  component: Carousel,
  tags:["autodocs"]
} as { title: string; component: typeof Carousel };


export const HorizontalCarousel = {
  args: {
    items: mockItems,
    direction: 'horizontal',
    autoplay: true,
    interval: 3000,
    showIndicators: true,
  },
} as { args: CarouselProps };


export const VerticalCarousel = {
  args: {
    items: mockItems,
    direction: 'vertical',
    autoplay: true,
    interval: 3500,
    showIndicators: true,
  },
} as { args: CarouselProps };


export const NoAutoplayCarousel = {
  args: {
    items: mockItems,
    direction: 'horizontal',
    autoplay: false,
    showIndicators: true,
  },
} as { args: CarouselProps };