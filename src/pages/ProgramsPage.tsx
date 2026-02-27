import { useState } from 'react';
import ProgramCard from '../components/ProgramCard';
import ProgramTile from '../components/ProgramTile';
import DownloadModal from '../components/DownloadModal';
import { Download } from 'lucide-react';

interface ProgramsPageProps {
  onScheduleCall?: () => void;
}

export default function ProgramsPage({ onScheduleCall }: ProgramsPageProps) {
  const [downloadModal, setDownloadModal] = useState<{ isOpen: boolean; title: string; id: string }>({ isOpen: false, title: '', id: '' });

  const handleScheduleCall = () => {
    const event = new CustomEvent('openScheduleModal');
    window.dispatchEvent(event);
  };

  const programTiles = [
    {
      title: 'DERA STRATEGIC MOBILITY PLAN',
      description: 'Our flagship advisory engagement is designed for investors and entrepreneurs seeking a structured pathway to second residency or citizenship.',
      details: 'Through a private consultation process, we assess your mobility goals, family considerations, and long-term plans to create a clear, tailored action plan aligned with your profile. You work directly with our advisory team, while we coordinate with vetted immigration lawyers and other licensed professionals where required to execute the chosen pathway efficiently. This engagement is best suited for established entrepreneurs and investors who are serious about securing long-term international flexibility and are prepared to proceed with qualifying investment programs.',
      buttonText: 'BECOME A CLIENT',
      buttonLink: '/portugal-europe-residency',
      imageSrc: 'https://i.imgur.com/RZD4L0u.jpeg',
      imageAlt: 'Dera Strategic Mobility Plan',
      imagePosition: 'left' as const,
      pricing: undefined
    },
    {
      title: 'DERA CONSULTANTS CARIBBEAN CITIZENSHIP PROGRAM',
      description: 'Our Caribbean Citizenship by Investment advisory helps qualified investors secure a reputable second passport through government-approved contribution or real estate programs.',
      details: 'We guide you through program selection, coordinate with licensed local agents, and support you from initial assessment to final approval. Designed for internationally minded individuals seeking greater global mobility and long-term optionality through a structured investment pathway.',
      buttonText: 'APPLY FOR ADVISORY ACCESS',
      buttonLink: '/caribbean-citizenship-by-investment',
      imageSrc: 'https://i.imgur.com/Zz9Hn8A.png',
      imageAlt: 'Caribbean Citizenship Program',
      imagePosition: 'right' as const,
      pricing: undefined
    },
    {
      title: 'DERA CONSULTANTS PROGRAM GUIDES',
      description: 'Comprehensive guides covering Golden Visa, D7 Visa, D8 Digital Nomad, and Caribbean Citizenship programs. Written by immigration consultants with real-world experience.',
      details: 'Stop guessing. Start moving. Our structured guides walk you through every step of the residency and citizenship process — from documentation requirements to timeline expectations. No fluff, just actionable information.',
      buttonText: 'EXPLORE THE GUIDES',
      buttonLink: '/guides',
      imageSrc: 'https://i.imgur.com/YLORbw7.jpeg',
      imageAlt: 'Dera Consultants Program Guides',
      imagePosition: 'left' as const,
      pricing: undefined
    }
  ];

  const freeGuides = [
    {
      id: 1,
      title: 'Portugal Relocation Checklist',
      description: 'A simple order of operations: NIF, bank account, housing, and the typical next steps.',
      icon: '📋'
    },
    {
      id: 2,
      title: 'Caribbean Passport Comparison',
      description: 'A quick guide to the three most commonly used Caribbean second-passport programs, and which one fits which situation.',
      icon: '🌴'
    }
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
        .animate-fade-in-up-delay-2 {
          animation: fadeInUp 1s ease-out 0.6s forwards;
          opacity: 0;
        }
      `}</style>

      {/* Hero Section - Video Background */}
      <section className="relative min-h-[600px] sm:min-h-[650px] lg:min-h-[700px] flex items-center justify-center overflow-hidden">
        {/* Background Video */}
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

        {/* Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-[#0f3460]/60" />

        {/* Centered Content */}
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

      {/* Free Guides Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-5">
              Free Guides
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Get practical, step-by-step resources to help you plan with clarity, before you speak to an advisor.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-3xl mx-auto">
            {freeGuides.map((guide) => (
              <div
                key={guide.id}
                className="bg-white border border-gray-200 rounded-lg p-6 sm:p-8 hover:shadow-lg transition-all duration-300 hover:border-[#1B7A4E] flex flex-col h-full"
              >
                <div className="text-4xl mb-4">{guide.icon}</div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#0f3460] mb-3">
                  {guide.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base mb-6 flex-grow leading-relaxed">
                  {guide.description}
                </p>
                <button
                  onClick={() => setDownloadModal({ isOpen: true, title: guide.title, id: guide.id === 1 ? 'portugal-checklist' : 'caribbean-comparison' })}
                  className="flex items-center justify-center gap-2 w-full py-2.5 sm:py-3 px-4 bg-[#1B7A4E] text-white font-semibold rounded-lg hover:bg-[#156a3d] transition-all duration-200 hover:scale-105 hover:shadow-md text-sm sm:text-base"
                >
                  <Download className="w-4 h-4 sm:w-5 sm:h-5" />
                  Download Free Guide
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Modal */}
      <DownloadModal
        isOpen={downloadModal.isOpen}
        onClose={() => setDownloadModal({ isOpen: false, title: '', id: '' })}
        guideTitle={downloadModal.title}
        guideId={downloadModal.id}
      />
    </div>
  );
}
