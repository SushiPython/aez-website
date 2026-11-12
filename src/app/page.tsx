'use client';

import { Hero, InfoSection, CountersSection, AlumniDestinationsSection, HorizontalScroller } from '@/components/sections';
import { Button } from '@/components/ui';
import { statsCounters, slideshowImages } from '@/lib/constants';

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <Hero
        title="ALPHA EPSILON ZETA"
        subtitle="Berkeley's Premier Multidisciplinary Professional Fraternity"
        backgroundImage="/images/homepage/hero-active-brothers.jpg"
        backgroundPosition="center 42%"
        mobileBackgroundPosition="center center"
        height="full"
        className="[&_h1]:font-serif"
        actions={
          <>
            <Button
              href="/brothers"
              size="lg"
              className="bg-ink/95 backdrop-blur-sm text-white hover:bg-white hover:text-neutral-900 px-8 py-4 text-lg font-semibold rounded-none border border-white/20 shadow-lg"
              style={{color: '#ffffff !important', textShadow: '0 2px 4px rgba(0, 0, 0, 0.8)', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)'}}
            >
              Meet Our Brothers
            </Button>
            <Button
              href="https://airtable.com/app2wqIRjAIKb4nBD/pagzqgUqNe5oEKFy7/form"
              size="lg"
              className="bg-ink/95 backdrop-blur-sm text-white hover:bg-white hover:text-neutral-900 px-8 py-4 text-lg font-semibold rounded-none border border-white/20 shadow-lg"
              style={{color: '#ffffff !important', textShadow: '0 2px 4px rgba(0, 0, 0, 0.8)', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)'}}
            >
              Apply Now
            </Button>
          </>
        }
      />

      {/* Who We Are Section */}
      <InfoSection
        title="Who We Are"
        content={[
          "Alpha Epsilon Zeta (AEZ) is an undergraduate professional fraternity at the University of California, Berkeley. AEZ distinguishes itself from traditional professional fraternities by embracing a multidisciplinary focus. The brothers of AEZ come from a wide variety of majors, ranging from biology to business to engineering, and each brother strives to be well-versed in all aspects of every academic discipline. We are dedicated to promoting and fostering professionalism, brotherhood, unity, and tradition.",
          "Since its establishment in 2003, AEZ has grown substantially and currently has more than 200 active and alumni brothers. AEZ's alumni have leveraged the skills gained during their time as actives to excel at top firms such as Meta, Google, McKinsey, and Goldman Sachs and renowned graduate schools including Stanford Medical School and Harvard Business School."
        ]}
        image={{
          src: '/images/homepage/active-brothers-dinner.jpg',
          alt: 'AEZ active brothers gathering together in Berkeley',
          priority: true
        }}
        layout="right"
      />

      {/* Statistics Section */}
      <CountersSection
        counters={statsCounters}
        className="bg-neutral-50"
      />

      {/* Horizontal Scroller Section */}
      <HorizontalScroller
        title="Our Community"
        subtitle="Experience the brotherhood and lifelong connections of AEZ"
        items={slideshowImages}
        height="lg"
        itemWidth={350}
        gap={20}
        visibleItems={3}
        showArrows={true}
        className="bg-neutral-50"
      />

      {/* Alumni Destinations Section */}
      <AlumniDestinationsSection className="[&_.rounded-lg]:rounded-none" />

    </main>
  );
}
