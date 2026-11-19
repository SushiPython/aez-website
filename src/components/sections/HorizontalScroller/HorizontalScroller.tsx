'use client';

import React, { useRef } from 'react';
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
  itemWidth?: number;
  gap?: number;
  showArrows?: boolean;
  visibleItems?: number;
}

const HorizontalScroller = React.forwardRef<HTMLElement, HorizontalScrollerProps>(
  ({ className, items, title, subtitle, itemWidth = 400, gap = 20,
     showArrows = true, visibleItems: _visibleItems, ...props }, ref) => {
    // The carousel moves continuously. Duplicate groups have identical widths,
    // so moving by half the track's width seamlessly returns to the first image.
    void _visibleItems;
    const trackRef = useRef<HTMLDivElement>(null);
    // Move the existing seamless animation by one tile; no visible reset.
    const step = (direction: -1 | 1) => {
      const animation = trackRef.current?.getAnimations().find(a => a.effect);
      if (!animation || !items.length) return;
      const duration = animation.effect?.getTiming().duration;
      if (typeof duration !== 'number' || duration <= 0) return;
      const now = typeof animation.currentTime === 'number' ? animation.currentTime : 0;
      const jump = duration / items.length;
      animation.currentTime = ((now + direction * jump) % duration + duration) % duration;
    };

    if (!items?.length) return null;

    return (
      <section ref={ref} className={cn('relative w-full overflow-hidden bg-neutral-50 py-16', className)} {...props}>
        {(title || subtitle) && (
          <div className="mb-12 px-4 text-center sm:px-6 lg:px-8">
            {title && <h2 className="mb-4 font-merriweather text-4xl font-bold text-neutral-900">{title}</h2>}
            {subtitle && <p className="mx-auto max-w-3xl text-xl text-gray-600">{subtitle}</p>}
          </div>
        )}
        <div className="aez-marquee-viewport" role="region" aria-label="AEZ community photo gallery">
          <div className="aez-marquee-track" ref={trackRef}>
            {[0, 1].map(copy => (
              <div className="aez-marquee-group" key={copy} aria-hidden={copy === 1} style={{ gap, paddingRight: gap }}>
                {items.map((item, index) => (
                  <div
                    key={`${copy}-${index}`}
                    className="aez-marquee-tile"
                    style={{ width: `min(82vw, ${itemWidth}px)` }}
                  >
                    <Image
                      src={item.src}
                      alt={copy === 0 ? item.alt : ''}
                      fill
                      className="object-cover"
                      sizes={`(max-width: 640px) 82vw, ${itemWidth}px`}
                      priority={copy === 0 && index < 3}
                    />
                    {item.caption && (
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                        <p className="text-sm font-medium text-white">{item.caption}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
        {showArrows && items.length > 1 && (
          <>
            <button type="button" onClick={() => step(-1)} aria-label="Previous photo"
              className="absolute left-3 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/95 p-3 text-neutral-900 shadow-lg hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700">
              <svg aria-hidden="true" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="m15 18-6-6 6-6" /></svg>
            </button>
            <button type="button" onClick={() => step(1)} aria-label="Next photo"
              className="absolute right-3 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/95 p-3 text-neutral-900 shadow-lg hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700">
              <svg aria-hidden="true" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="m9 18 6-6-6-6" /></svg>
            </button>
          </>
        )}
      </section>
    );
  }
);

HorizontalScroller.displayName = 'HorizontalScroller';
export { HorizontalScroller };
