import ProgramTile from '../components/ProgramTile';

interface ProgramsPageProps {
  onScheduleCall?: () => void;
}

export default function ProgramsPage({ onScheduleCall }: ProgramsPageProps) {
  const handleScheduleCall = () => {
    if (onScheduleCall) {
      onScheduleCall();
      return;
    }

    const event = new CustomEvent('openScheduleModal');
    window.dispatchEvent(event);
  };

  const programTiles = [
    {
      title: 'DERA STRATEGIC MOBILITY PLAN',
      description:
        'Our flagship advisory engagement is designed for investors and entrepreneurs seeking a structured pathway to second residency or citizenship.',
      details:
        'Through a private consultation process, we assess your mobility goals, family considerations, and long-term plans to create a clear, tailored action plan aligned with your profile. You work directly with our advisory team, while we coordinate with vetted immigration lawyers and other licensed professionals where required to execute the chosen pathway efficiently. This engagement is best suited for established entrepreneurs and investors who are serious about securing long-term international flexibility and are prepared to proceed with qualifying investment programs.',
      buttonText: 'BECOME A CLIENT',
      buttonLink: '/portugal-europe-residency',
      imageSrc: 'https://i.imgur.com/RZD4L0u.jpeg',
      imageAlt: 'Dera Strategic Mobility Plan',
      imagePosition: 'left' as const,
      pricing: undefined,
    },
    {
      title: 'DERA CONSULTANTS CARIBBEAN CITIZENSHIP PROGRAM',
      description:
        'Our Caribbean Citizenship by Investment advisory helps qualified investors secure a reputable second passport through government-approved contribution or real estate programs.',
      details:
        'We guide you through program selection, coordinate with licensed local agents, and support you from initial assessment to final approval. Designed for internationally minded individuals seeking greater global mobility and long-term optionality through a structured investment pathway.',
      buttonText: 'APPLY FOR ADVISORY ACCESS',
      buttonLink: '/caribbean-citizenship-by-investment',
      imageSrc: 'https://i.imgur.com/Zz9Hn8A.png',
      imageAlt: 'Caribbean Citizenship Program',
      imagePosition: 'right' as const,
      pricing: undefined,
    },
    {
      title: 'DERA CONSULTANTS PROGRAM GUIDES',
      description:
        'Comprehensive guides covering Golden Visa, D7 Visa, D8 Digital Nomad, and Caribbean Citizenship programs. Written by immigration consultants with real-world experience.',
      details:
        'Stop guessing. Start moving. Our structured guides walk you through every step of the residency and citizenship process — from documentation requirements to timeline expectations. No fluff, just actionable information.',
      buttonText: 'EXPLORE THE GUIDES',
      buttonLink: '/guides',
      imageSrc: 'https://i.imgur.com/YLORbw7.jpeg',
      imageAlt: 'Dera Consultants Program Guides',
      imagePosition: 'left' as const,
      pricing: undefined,
    },
  ];

  return (
    <div className="bg-white">
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 1s ease-out forwards;
        }
        .animate-fade-in-up-delay-1 {
          animation: fadeInUp 1s ease-out 0.3s forwards;
          opacity: 0;
        }
      `}</style>

      {/* Hero Section */}
      <section className="relative min-h-[600px] sm:min-h-[650px] lg:min-h-[700px] flex items-center justify-center overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover scale-110"
          style={{ filter: 'blur(4px)' }}
        >
          <source src="https://i.imgur.com/6G8GSgo.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-[#0f3460]/60" />

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-fade-in-up">
            Programs we offer
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-white/80 mb-6 max-w-3xl mx-auto leading-relaxed animate-fade-in-up-delay-1">
            Structured pathways for investors, entrepreneurs, and internationally minded families seeking greater global mobility.
          </p>
          <p className="text-sm sm:text-base md:text-lg text-white/80 mb-10 max-w-3xl mx-auto leading-relaxed animate-fade-in-up-delay-1">
            We provide clear guidance on vetted residency and citizenship options and coordinate with licensed professionals to ensure a smooth and compliant process.
          </p>
        </div>
      </section>

      {/* Program Tiles Section */}
      <div>
        {programTiles.map((tile, index) => (
          <ProgramTile
            key={index}
            title={tile.title}
            description={tile.description}
            details={tile.details}
            pricing={tile.pricing}
            buttonText={tile.buttonText}
            buttonLink={tile.buttonLink}
            imageSrc={tile.imageSrc}
            imageAlt={tile.imageAlt}
            imagePosition={tile.imagePosition}
            onButtonClick={handleScheduleCall}
          />
        ))}
      </div>
    </div>
  );
}
