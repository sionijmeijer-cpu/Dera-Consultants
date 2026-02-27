import WhyChooseDera from '../components/WhyChooseDera';

interface CompanyPageProps {
  onScheduleCall?: () => void;
}

export default function CompanyPage({ onScheduleCall }: CompanyPageProps) {
  const handleScheduleCall = () => {
    const event = new CustomEvent('openScheduleModal');
    window.dispatchEvent(event);
  };

  return (
    <div className="bg-white">
      {/* Hero Section with Video */}
      <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="https://i.imgur.com/50w2Me0.mp4" type="video/mp4" />
        </video>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Global Mobility, Structured Properly
          </h1>
          <p className="text-lg md:text-xl text-white/95 leading-relaxed max-w-3xl mx-auto">
            When investors, entrepreneurs, and internationally minded families seek greater mobility and optionality, they look for clear guidance and trusted coordination. We are a private immigration advisory focused on second citizenship and residency pathways. Our role is to help clients understand legitimate options, navigate complex processes, coordinate with licensed professionals, and secure additional residency or citizenship with confidence. Every case is approached individually, with discretion and clarity.
          </p>
        </div>
      </section>

      {/* Our Journey Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Journey</h2>
              <p className="text-[#1B7A4E] font-bold text-lg mb-6">Built on Practical Experience</p>
              
              <div className="space-y-4 text-gray-700">
                <p>
                  Our firm was founded on a simple observation: many capable, globally active individuals struggle to navigate residency and citizenship options efficiently.
                </p>
                
                <p>
                  The information is fragmented, the processes are complex, and clients often deal with multiple parties without clear coordination.
                </p>
                
                <p>
                  We created our advisory to simplify that journey.
                </p>
                
                <p>
                  Today, we support clients by acting as a structured point of guidance and a reliable connector to vetted legal and tax professionals.
                </p>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <p className="text-gray-900 font-bold text-lg mb-2">Not hype. Not shortcuts.</p>
                <p className="text-gray-900 font-bold text-lg">Just clear direction and proper coordination.</p>
              </div>
            </div>

            {/* Right Image */}
            <div className="flex justify-center">
              <img 
                src="https://i.imgur.com/moWaeQd.jpeg"
                alt="Dera Consultants Team Member"
                className="rounded-lg shadow-lg w-full max-w-md h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Dera Section */}
      <WhyChooseDera />
    </div>
  );
}