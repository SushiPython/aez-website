'use client';

import React from 'react';
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
     showArrows: _showArrows, visibleItems: _visibleItems, ...props }, ref) => {
    // The carousel moves continuously. Duplicate groups have identical widths,
    // so moving by half the track's width seamlessly returns to the first image.
    void _showArrows;
    void _visibleItems;
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
          <div className="aez-marquee-track">
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
      </section>
    );
  }
);

HorizontalScroller.displayName = 'HorizontalScroller';
export { HorizontalScroller };
