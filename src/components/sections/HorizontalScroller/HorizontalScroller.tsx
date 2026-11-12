'use client';

import React, { useRef, useCallback } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { ComponentProps } from '@/types';

export interface ScrollerItem {
  src: string;
  alt: string;
  caption?: string;
}

export interface HorizontalScrollerProps extends ComponentProps {
  items: ScrollerItem[];
  title?: string;
  subtitle?: string;
  itemWidth?: number; // width of each item in pixels
  gap?: number; // gap between items in pixels
  showArrows?: boolean;
  visibleItems?: number; // number of items visible at once
}

const HorizontalScroller = React.forwardRef<HTMLElement, HorizontalScrollerProps>(
  ({ 
    className, 
    items, 
    title,
    subtitle,
    itemWidth = 300,
    gap = 16,
    showArrows = true,
    visibleItems = 3,
    ...props 
  }, ref) => {
    const scrollerRef = useRef<HTMLDivElement>(null);

    const scrollByItem = useCallback((direction: 1 | -1) => {
      const scroller = scrollerRef.current;
      if (!scroller) return;

      const firstItem = scroller.querySelector<HTMLElement>('[data-carousel-item]');
      const step = (firstItem?.offsetWidth ?? itemWidth) + gap;
      const atStart = scroller.scrollLeft <= 2;
      const atEnd = scroller.scrollLeft + scroller.clientWidth >= scroller.scrollWidth - 2;

      if (direction === 1 && atEnd) {
        scroller.scrollTo({ left: 0, behavior: 'smooth' });
        return;
      }

      if (direction === -1 && atStart) {
        scroller.scrollTo({ left: scroller.scrollWidth, behavior: 'smooth' });
        return;
      }

      scroller.scrollBy({ left: direction * step, behavior: 'smooth' });
    }, [gap, itemWidth]);

    const nextSlide = useCallback(() => scrollByItem(1), [scrollByItem]);
    const prevSlide = useCallback(() => scrollByItem(-1), [scrollByItem]);

    if (!items || items.length === 0) {
      return null;
    }

    return (
      <section
        ref={ref}
        className={cn(
          'relative w-full overflow-hidden py-16 bg-white',
          className
        )}
        {...props}
      >
        {/* Header */}
        {(title || subtitle) && (
          <div className="text-center mb-12 px-4 sm:px-6 lg:px-8">
            {title && (
              <h2 className="text-4xl font-merriweather font-bold text-neutral-900 mb-4">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        )}
        
        {/* Scroller Container */}
        <div className="relative w-full">
          <div className="relative w-full overflow-hidden">
            {/* Scrolling Items */}
            <div 
              ref={scrollerRef}
              className="flex items-center overflow-x-auto scroll-smooth snap-x snap-mandatory px-6 sm:px-8 lg:px-12 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              style={{
                gap: `${gap}px`
              }}
            >
              {items.map((item) => (
                <div
                  key={item.src}
                  data-carousel-item
                  className="relative flex-shrink-0 aspect-[4/3] snap-start overflow-hidden bg-neutral-100 shadow-lg hover:shadow-xl transition-shadow duration-300"
                  style={{ width: `min(${itemWidth}px, calc(100vw - 3rem))` }}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover"
                    sizes={`(max-width: 640px) calc(100vw - 3rem), ${itemWidth}px`}
                  />
                  {item.caption && (
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                      <p className="text-white text-sm font-medium">{item.caption}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          {showArrows && items.length > visibleItems && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10
                           bg-white/90 hover:bg-white text-gray-800 hover:text-gray-900
                           p-3 rounded-full transition-all duration-200 shadow-lg
                           focus:outline-none focus:ring-2 focus:ring-white/50
                           border border-gray-200"
                aria-label="Previous images"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10
                           bg-white/90 hover:bg-white text-gray-800 hover:text-gray-900
                           p-3 rounded-full transition-all duration-200 shadow-lg
                           focus:outline-none focus:ring-2 focus:ring-white/50
                           border border-gray-200"
                aria-label="Next images"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}
        </div>
      </section>
    );
  }
);

HorizontalScroller.displayName = 'HorizontalScroller';

export { HorizontalScroller };
