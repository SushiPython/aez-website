import Image from 'next/image';

export interface AlumniDestinationsSectionProps {
  className?: string;
}

export const AlumniDestinationsSection = ({ className = '' }: AlumniDestinationsSectionProps) => {
  return (
    <section className={`py-16 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-merriweather font-bold text-center mb-12">Alumni Destinations</h2>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          Our brothers have gone on to excel worldwide—in Silicon Valley tech, Wall Street finance, top graduate programs, and innovative startups.
        </p>
        <div className="max-w-6xl mx-auto">
          <Image
            src="/images/alumni/alumni-destinations-logos.png"
            alt="Companies and universities where AEZ alumni have studied and worked"
            width={2028}
            height={880}
            className="w-full h-auto"
            priority
          />
        </div>
      </div>
    </section>
  );
};
