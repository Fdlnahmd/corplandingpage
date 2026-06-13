import { CheckCircle2, ArrowRight } from 'lucide-react';

const reasons = [
  'Decades of industry-specific experience',
  'Data-driven insights and methodologies',
  'Global network of specialized experts',
  'Commitment to sustainable, long-term results'
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-slate-50 overflow-hidden border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          
          {/* Text Content */}
          <div className="mb-12 lg:mb-0 reveal-left">
            <h2 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Why Partner with Us?</h2>
            <h3 className="text-3xl md:text-4xl font-serif text-slate-900 mb-6 leading-tight" style={{ transitionDelay: '100ms' }}>
              We partner with leaders to shape the future.
            </h3>
            <p className="text-lg text-slate-500 mb-8 leading-relaxed" style={{ transitionDelay: '200ms' }}>
              For over 15 years, AstraCorp has been the trusted advisor to the world's leading businesses, governments, and institutions. Our unique approach combines deep industry expertise with cutting-edge analytics to deliver solutions that are both innovative and practical.
            </p>
            
            <ul className="space-y-3 mb-10" style={{ transitionDelay: '300ms' }}>
              {reasons.map((reason, index) => (
                <li key={index} className="flex items-center gap-3 text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                  <span>{reason}</span>
                </li>
              ))}
            </ul>
            
            <a
              href="#portfolio"
              className="inline-flex items-center text-slate-900 text-sm font-medium hover:text-emerald-500 transition-colors focus:outline-none"
              style={{ transitionDelay: '400ms' }}
            >
              Discover our work
              <ArrowRight className="ml-2 -mr-1 h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </a>
          </div>

          {/* Image Content */}
          <div className="relative reveal-right">
            <div className="relative rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white aspect-[4/5] flex items-center justify-center">
              <svg viewBox="0 0 400 500" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[80%] h-[80%] text-slate-200">
                <rect x="50" y="50" width="300" height="400" rx="40" stroke="currentColor" strokeWidth="2" strokeDasharray="8 8"/>
                <circle cx="200" cy="250" r="100" stroke="currentColor" strokeWidth="2"/>
                <circle cx="200" cy="250" r="40" fill="#10B981" fillOpacity="0.1" stroke="#10B981" strokeWidth="2"/>
              </svg>
            </div>
            
            <div className="absolute bottom-[-1.5rem] right-[-1.5rem] bg-white p-6 rounded-xl shadow-sm border border-slate-200 hidden md:block">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Trusted by</p>
              <p className="text-3xl font-serif text-slate-900 mt-1">Fortune 500</p>
              <p className="text-xs font-medium text-slate-500 mt-1">Companies worldwide</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
