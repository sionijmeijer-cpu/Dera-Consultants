import { ArrowRight } from 'lucide-react';

interface ProgramTileProps {
  title: string;
  description: string;
  details: string;
  pricing?: string;
  buttonText: string;
  buttonLink?: string;
  imageSrc: string;
  imageAlt: string;
  imagePosition: 'left' | 'right';
  onButtonClick?: () => void;
}

export default function ProgramTile({
  title,
  description,
  details,
  pricing,
  buttonText,
  buttonLink,
  imageSrc,
  imageAlt,
  imagePosition,
  onButtonClick
}: ProgramTileProps) {
  const imageComponent = (
    <div className="w-full h-full min-h-[180px] lg:min-h-[200px]">
      <img
        src={imageSrc}
        alt={imageAlt}
        className="w-full h-full object-cover" style={{ filter: 'blur(2px)' }}
      />
    </div>
  );

  const contentComponent = (
    <div className="flex flex-col justify-center py-3 lg:py-4 px-3 lg:px-4">
      <h2 className="text-lg lg:text-xl font-bold text-gray-900 mb-2 leading-tight">
        {title}
      </h2>
      <p className="text-xs lg:text-sm text-gray-700 mb-2 leading-relaxed">
        {description}
      </p>
      <p className="text-xs text-gray-600 mb-3 leading-relaxed">
        {details}
      </p>
      {pricing && (
        <p className="text-xs lg:text-sm font-semibold text-gray-900 mb-3">
          {pricing}
        </p>
      )}
      {buttonLink ? (
        <a
          href={buttonLink}
          onClick={(e) => {
            if (buttonLink.includes('#')) {
              e.preventDefault();
              const [path, hash] = buttonLink.split('#');
              if (window.location.pathname !== path) {
                window.history.pushState({}, '', buttonLink);
                window.dispatchEvent(new PopStateEvent('popstate'));
                setTimeout(() => {
                  const el = document.getElementById(hash);
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }, 500);
              } else {
                const el = document.getElementById(hash);
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }
            } else {
              e.preventDefault();
              window.history.pushState({}, '', buttonLink);
              window.dispatchEvent(new PopStateEvent('popstate'));
            }
          }}
          className="w-fit px-4 py-1.5 bg-[#1a5f3f] text-white text-sm font-semibold rounded-lg
                     hover:bg-[#0f3f2a] transition-all duration-300 hover:shadow-lg
                     flex items-center gap-1.5 group"
        >
          {buttonText}
          <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
        </a>
      ) : (
        <button
          onClick={onButtonClick}
          className="w-fit px-4 py-1.5 bg-[#1a5f3f] text-white text-sm font-semibold rounded-lg
                     hover:bg-[#0f3f2a] transition-all duration-300 hover:shadow-lg
                     flex items-center gap-1.5 group"
        >
          {buttonText}
          <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
        </button>
      )}
    </div>
  );

  return (
    <section className="py-4 lg:py-6 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-4 items-center">
          {imagePosition === 'left' ? (
            <>
              {imageComponent}
              {contentComponent}
            </>
          ) : (
            <>
              {contentComponent}
              {imageComponent}
            </>
          )}
        </div>
      </div>
    </section>
  );
}
