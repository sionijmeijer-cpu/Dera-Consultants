import { MapPin, Award, Globe } from 'lucide-react';
import CounselSeal from '../components/CounselSeal';

interface CompanyPageProps {
  onScheduleCall?: () => void;
}

const pillars = [
  {
    num: '01',
    title: 'Current knowledge',
    body: 'The world of global mobility changes constantly. Laws shift, programmes evolve, and geopolitical factors play an outsized role. We stay on top of legislative changes and policy nuances so our clients do not have to.',
  },
  {
    num: '02',
    title: 'Unbiased programme matching',
    body: 'We do not push a single programme because it is our specialty or offers the highest margin. We listen to your needs, goals, and risk tolerance, then recommend what genuinely fits. Sometimes that means telling you a programme is not right for you.',
  },
  {
    num: '03',
    title: 'Full process coordination',
    body: 'We manage the process end to end, coordinating with licensed local lawyers, tax advisors, and government-approved intermediaries so you are never chasing paperwork yourself or dealing with multiple parties without a clear point of contact.',
  },
  {
    num: '04',
    title: 'Transparent from day one',
    body: 'We provide a clear, itemised breakdown of all costs upfront including government fees, legal fees, due diligence costs, and ancillary expenses. We set realistic timelines and keep you informed at every stage.',
  },
];

const processSteps = [
  {
    num: '01',
    title: 'A free first call',
    body: 'We talk for thirty minutes. You tell me what you actually want: a passport, a residency permit, tax options, a backup for your family. I tell you which programmes fit, which ones do not, and what the realistic timelines look like.',
  },
  {
    num: '02',
    title: 'A written strategy',
    body: 'If we are a fit, I send you a written plan. It lists the programme, the full cost breakdown including government fees, legal fees, due diligence costs, and our advisory fee, and a realistic timeline. No verbal promises, no fee surprises later.',
  },
  {
    num: '03',
    title: 'Filing with vetted partners',
    body: 'Once you decide to move forward, we file your case. The legal work is handled by licensed local lawyers in Portugal or the Caribbean country you choose. I stay your single point of contact through the whole file. You never chase three parties for an update.',
  },
  {
    num: '04',
    title: 'Aftercare',
    body: 'The work does not stop the day your residency or citizenship is approved. We help with renewals, tax registration, banking introductions, and the next step if your goal is citizenship after residency. Once you are a client, you stay one.',
  },
];

const CONTAINER = "w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-10";

export default function CompanyPage({ onScheduleCall }: CompanyPageProps) {
  const handleScheduleCall = () => {
    window.dispatchEvent(new CustomEvent('openScheduleModal'));
  };

  return (
    <div className="min-h-screen bg-white">

      {/* HERO VIDEO */}
      <section className="relative min-h-[620px] flex items-center justify-center overflow-hidden">
        <video autoPlay muted loop playsInline
          className="absolute inset-0 w-full h-full object-cover">
          <source src="https://i.imgur.com/50w2Me0.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[#0f3460]/70" />

        <div className={`${CONTAINER} relative z-10 py-24`}>
          <div className="max-w-3xl">
            <p className="text-[11px] font-black uppercase tracking-[0.25em] text-[#4ade80] mb-5"
              style={{ fontFamily: "'Inter', sans-serif" }}>
              Dera Consultants
            </p>
            <h1 className="text-[36px] sm:text-[48px] lg:text-[58px] font-black text-white leading-[1.08] tracking-tight mb-6"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
              Global Mobility, Structured Properly
            </h1>
            <p className="text-[17px] text-white/80 mb-10 max-w-2xl leading-relaxed"
              style={{ fontFamily: "'Source Serif 4', Georgia, serif" }}>
              A private advisory for investors, entrepreneurs, and families navigating second citizenship and residency pathways. Every case is approached individually, with discretion and clarity.
            </p>
            <button onClick={handleScheduleCall}
              className="inline-flex items-center gap-2 bg-[#1B7A4E] text-white px-8 py-4 font-black uppercase tracking-widest text-[12px] hover:bg-[#156B3F] transition-all duration-200 shadow-lg hover:scale-105"
              style={{ fontFamily: "'Inter', sans-serif" }}>
              Book a free consultation
            </button>
          </div>
        </div>
      </section>

      {/* SYLVIA SECTION */}
      <section className="py-20 bg-white">
        <div className={CONTAINER}>
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Photo */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative">
                <img
                  src="https://i.imgur.com/moWaeQd.jpeg"
                  alt="Sylvia Awoudu, Founder of Dera Consultants"
                  className="w-full max-w-md object-cover"
                  style={{ borderTop: '4px solid #1B7A4E' }}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-white/95 px-6 py-4"
                  style={{ borderTop: '1px solid #e5e7eb' }}>
                  <p className="font-black text-gray-900 text-[17px]"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                    Sylvia Awoudu
                  </p>
                  <p className="text-[12px] text-[#1B7A4E] font-black uppercase tracking-widest mt-0.5"
                    style={{ fontFamily: "'Inter', sans-serif" }}>
                    Founder, Dera Consultants
                  </p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#1B7A4E] mb-3"
                style={{ fontFamily: "'Inter', sans-serif" }}>
                Our story
              </p>
              <h2 className="text-[30px] sm:text-[38px] font-black text-gray-900 mb-6 leading-tight"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                Built on practical experience
              </h2>

              <div className="space-y-4 text-gray-700 mb-8"
                style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontSize: '17px', lineHeight: '1.8' }}>
                <p>
                  Our firm was founded on a simple observation: many capable, globally active individuals struggle to navigate residency and citizenship options efficiently.
                </p>
                <p>
                  The information is fragmented, the processes are complex, and clients often deal with multiple parties without clear coordination or a single point of accountability.
                </p>
                <p>
                  We created this advisory to simplify that journey. Today we support clients by acting as a structured point of guidance and a reliable connector to vetted legal and tax professionals across Portugal and the Caribbean.
                </p>
              </div>

              <div className="border-t border-gray-200 pt-8 mb-8">
                <p className="text-gray-900 font-black text-[18px] mb-1"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                  Not hype. Not shortcuts.
                </p>
                <p className="text-gray-900 font-black text-[18px]"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                  Just clear direction and proper coordination.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 border border-gray-200"
                  style={{ borderTop: '3px solid #1B7A4E' }}>
                  <div className="flex items-center justify-center gap-1 mb-1">
                    <Award size={14} className="text-[#1B7A4E]" />
                    <span className="text-[26px] font-black text-gray-900"
                      style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>5+</span>
                  </div>
                  <p className="text-[10px] text-gray-500 uppercase tracking-widest font-semibold"
                    style={{ fontFamily: "'Inter', sans-serif" }}>Years</p>
                </div>
                <div className="text-center p-4 border border-gray-200"
                  style={{ borderTop: '3px solid #1B7A4E' }}>
                  <div className="flex items-center justify-center gap-1 mb-1">
                    <Globe size={14} className="text-[#1B7A4E]" />
                    <span className="text-[26px] font-black text-gray-900"
                      style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>6+</span>
                  </div>
                  <p className="text-[10px] text-gray-500 uppercase tracking-widest font-semibold"
                    style={{ fontFamily: "'Inter', sans-serif" }}>Countries</p>
                </div>
                <div className="text-center p-4 border border-gray-200"
                  style={{ borderTop: '3px solid #1B7A4E' }}>
                  <div className="flex items-center justify-center gap-1 mb-1">
                    <MapPin size={14} className="text-[#1B7A4E]" />
                    <span className="text-[26px] font-black text-gray-900"
                      style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>15+</span>
                  </div>
                  <p className="text-[10px] text-gray-500 uppercase tracking-widest font-semibold"
                    style={{ fontFamily: "'Inter', sans-serif" }}>Programmes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY DERA */}
      <section className="py-20 bg-gray-50">
        <div className={CONTAINER}>
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#1B7A4E] mb-3"
            style={{ fontFamily: "'Inter', sans-serif" }}>
            Why Dera
          </p>
          <h2 className="text-[30px] sm:text-[38px] font-black text-gray-900 mb-3 leading-tight"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            What we actually do differently
          </h2>
          <p className="text-gray-500 text-[16px] mb-12 max-w-2xl"
            style={{ fontFamily: "'Source Serif 4', Georgia, serif" }}>
            Not marketing language. The practical things that make a real difference when you are navigating a complex, high-stakes process.
          </p>

          <div className="grid sm:grid-cols-2 gap-6">
            {pillars.map(p => (
              <div key={p.num} className="p-8 bg-white border border-gray-200"
                style={{ borderTop: '3px solid #1B7A4E' }}>
                <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-3"
                  style={{ fontFamily: "'Inter', sans-serif" }}>
                  {p.num}
                </p>
                <h3 className="text-[20px] font-black text-gray-900 mb-3"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                  {p.title}
                </h3>
                <p className="text-gray-600 text-[15px] leading-relaxed"
                  style={{ fontFamily: "'Source Serif 4', Georgia, serif" }}>
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="py-20 bg-white">
        <div className={CONTAINER}>
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#1B7A4E] mb-3"
            style={{ fontFamily: "'Inter', sans-serif" }}>
            How we work
          </p>
          <h2 className="text-[30px] sm:text-[38px] font-black text-gray-900 mb-3 leading-tight"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            Four steps. No mystery. No surprise fees.
          </h2>
          <p className="text-gray-500 text-[16px] mb-12 max-w-2xl"
            style={{ fontFamily: "'Source Serif 4', Georgia, serif" }}>
            This is what working with us actually looks like, from the first conversation to long after your approval.
          </p>

          <div className="grid sm:grid-cols-2 gap-6">
            {processSteps.map(s => (
              <div key={s.num} className="p-8 bg-gray-50 border border-gray-200"
                style={{ borderTop: '3px solid #1B7A4E' }}>
                <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-3"
                  style={{ fontFamily: "'Inter', sans-serif" }}>
                  Step {s.num}
                </p>
                <h3 className="text-[20px] font-black text-gray-900 mb-3"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                  {s.title}
                </h3>
                <p className="text-gray-600 text-[15px] leading-relaxed"
                  style={{ fontFamily: "'Source Serif 4', Georgia, serif" }}>
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUSTED LEGAL PARTNER */}
      <section className="py-20 bg-gray-50">
        <div className={CONTAINER}>
          <div className="grid lg:grid-cols-12 gap-12 items-start">

            <div className="lg:col-span-5">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#1B7A4E] mb-3"
                style={{ fontFamily: "'Inter', sans-serif" }}>
                Trusted legal partner
              </p>
              <h2 className="text-[30px] sm:text-[38px] font-black text-gray-900 mb-6 leading-tight"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                Qualified legal representation for every client
              </h2>

              <div className="mt-2">
                <CounselSeal size="lg" />
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="space-y-5 text-gray-700"
                style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontSize: '17px', lineHeight: '1.8' }}>
                <p>
                  Dera Consultants works alongside licensed Portuguese immigration lawyers to ensure every client has qualified legal representation throughout their process.
                </p>
                <p>
                  Our trusted legal partner in Portugal is <span className="font-bold text-gray-900">Inês Horta Salvo of IH Salvo</span>, a boutique law firm specialising in immigration, real estate, and corporate law for international clients.
                </p>
              </div>

              <div className="mt-8 p-6 bg-white border border-gray-200"
                style={{ borderTop: '3px solid #1B7A4E' }}>
                <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2"
                  style={{ fontFamily: "'Inter', sans-serif" }}>
                  Legal partner
                </p>
                <p className="text-gray-900 font-black text-[18px] mb-1"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                  Inês Horta Salvo
                </p>
                <p className="text-gray-600 text-[14px]"
                  style={{ fontFamily: "'Source Serif 4', Georgia, serif" }}>
                  IH Salvo · Immigration, Real Estate, and Corporate Law
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BASED IN PORTUGAL */}
      <section className="py-20 bg-gray-900 text-white">
        <div className={CONTAINER}>
          <div className="max-w-3xl">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#4ade80] mb-3"
              style={{ fontFamily: "'Inter', sans-serif" }}>
              On the ground
            </p>
            <h2 className="text-[30px] sm:text-[38px] font-black text-white mb-6 leading-tight"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
              We live inside the systems we advise on
            </h2>
            <p className="text-gray-300 text-[17px] leading-relaxed mb-8"
              style={{ fontFamily: "'Source Serif 4', Georgia, serif" }}>
              Sylvia Awoudu, our founder, is based in Portugal. She navigates the same immigration systems, the same AIMA appointments, and the same legislative changes that her clients face. That is a fundamentally different level of knowledge than advising from a distance.
            </p>
            <p className="text-gray-300 text-[17px] leading-relaxed mb-10"
              style={{ fontFamily: "'Source Serif 4', Georgia, serif" }}>
              When a law changes, we know about it immediately. When AIMA changes its processing approach, we see it first-hand. That real-time, on-the-ground knowledge is what we bring to every client engagement.
            </p>
            <button onClick={handleScheduleCall}
              className="inline-flex items-center gap-2 bg-[#1B7A4E] text-white px-8 py-4 font-black uppercase tracking-widest text-[12px] hover:bg-[#156B3F] transition-all duration-200 shadow-lg hover:scale-105"
              style={{ fontFamily: "'Inter', sans-serif" }}>
              Book a free consultation
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
