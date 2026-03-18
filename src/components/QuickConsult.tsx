export default function QuickConsult() {
  return (
    <section className="bg-[#0f3460] py-14">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
          Not sure which path fits your situation
        </h3>

        <p className="text-white/90 text-lg max-w-3xl mx-auto mb-8 leading-relaxed">
          Many clients come to us unsure whether Portugal residency or a second
          citizenship program is the right move. A short strategy call can help
          clarify the options and the next step.
        </p>

        <button
          onClick={() => {
            const event = new CustomEvent('openScheduleModal');
            window.dispatchEvent(event);
          }}
          className="px-8 py-4 bg-[#1B7A4E] text-white font-semibold rounded-xl hover:bg-[#156B3F] hover:shadow-xl hover:scale-105 transition-all duration-200 shadow-md"
        >
          Book a strategy call
        </button>
      </div>
    </section>
  );
}
