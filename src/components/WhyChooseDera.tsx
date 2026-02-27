import { useState, useEffect, useRef } from 'react';

function useInView(ref: React.RefObject<HTMLElement | null>, threshold = 0.2) {
  const [isInView, setIsInView] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref, threshold]);
  return isInView;
}

function AnimatedCounter({ target, suffix = '', duration = 2000, shouldAnimate }: { target: number; suffix?: string; duration?: number; shouldAnimate: boolean }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!shouldAnimate) return;

    const startTime = performance.now();
    let animationFrameId: number;

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      
      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [shouldAnimate, target, duration]);

  return <span ref={ref} className="inline-block">{count}{suffix}</span>;
}

export default function WhyChooseDera() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const sectionInView = useInView(sectionRef, 0.1);

  const reasons = [
    {
      title: 'Trusted Expertise',
      description: 'With in-depth knowledge of Caribbean Citizenship by Investment programs and Portuguese pathways, we offer comprehensive insights that enable informed decisions.',
      icon: '🎓'
    },
    {
      title: 'Personalized Support',
      description: 'We believe every client is unique. We take the time to understand your goals, preferences, and concerns, guiding you to the solutions that best fit your lifestyle and financial plans.',
      icon: '🤝'
    },
    {
      title: 'End-to-End Guidance',
      description: 'From initial consultation to final approval, we hold your hand, managing communications and coordinating with the right agencies to make your journey smooth and stress-free.',
      icon: '🛤️'
    },
    {
      title: 'Transparent & Honest',
      description: 'Our recommendations are based solely on your best interests. We prioritize transparency, providing clear information on costs, benefits, timelines, and legal requirements.',
      icon: '💎'
    }
  ];



  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Why Choose Dera Consultants?
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            We combine expertise, personalized service, and transparent guidance to make your citizenship journey seamless.
          </p>
        </div>

        {/* Four Pillars */}
        <div ref={sectionRef} className="grid md:grid-cols-2 gap-8 mb-16">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className={`p-8 bg-white dark:bg-slate-700 rounded-xl shadow-md hover:shadow-lg transition-all duration-700 border border-slate-200 dark:border-slate-600 ${
                sectionInView
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="text-4xl mb-4">{reason.icon}</div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                {reason.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>



        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
            Ready to explore your citizenship options?
          </p>
          <button
            onClick={() => {
              const event = new CustomEvent('openScheduleModal');
              window.dispatchEvent(event);
            }}
            className="px-8 py-4 bg-[#0a1f3d] text-white rounded-lg font-semibold hover:bg-[#0f2d5e] dark:bg-[#0f2d5e] dark:hover:bg-[#163a6e] transition-colors duration-200 shadow-md hover:shadow-lg"
          >
            Become a Client
          </button>
        </div>
      </div>
    </section>
  );
}