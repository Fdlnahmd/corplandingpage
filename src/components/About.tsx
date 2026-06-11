import { CheckCircle2, ArrowRight } from 'lucide-react';

const reasons = [
  'Decades of industry-specific experience',
  'Data-driven insights and methodologies',
  'Global network of specialized experts',
  'Commitment to sustainable, long-term results'
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-blue-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          
          {/* Text Content */}
          <div className="mb-12 lg:mb-0 reveal-left">
            <h2 className="text-sm font-bold text-blue-700 uppercase tracking-widest mb-1">Why Partner with Us?</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 leading-tight" style={{ transitionDelay: '100ms' }}>
              We partner with leaders to shape the future.
            </h3>
            <p className="text-lg text-slate-500 mb-8 leading-relaxed" style={{ transitionDelay: '200ms' }}>
              For over 15 years, AstraCorp has been the trusted advisor to the world's leading businesses, governments, and institutions. Our unique approach combines deep industry expertise with cutting-edge analytics to deliver solutions that are both innovative and practical.
            </p>
            
            <ul className="space-y-3 mb-10" style={{ transitionDelay: '300ms' }}>
              {reasons.map((reason, index) => (
                <li key={index} className="flex items-center gap-3 text-sm text-slate-700 font-medium">
                  <div className="w-5 h-5 rounded-full bg-blue-700 flex items-center justify-center text-white text-[10px] flex-shrink-0">✓</div>
                  <span>{reason}</span>
                </li>
              ))}
            </ul>
            
            <a
              href="#portfolio"
              className="inline-flex items-center text-blue-700 text-sm font-bold hover:underline focus:outline-none"
              style={{ transitionDelay: '400ms' }}
            >
              Discover our work
              <ArrowRight className="ml-2 -mr-1 h-4 w-4" aria-hidden="true" />
            </a>
          </div>

          {/* Image Content */}
          <div className="relative reveal-right">
            {/* Decorative pattern behind image */}
            <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-2xl opacity-70"></div>
            <div className="absolute -bottom-8 -left-4 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-2xl opacity-70"></div>
            
            <div className="relative rounded-2xl overflow-hidden shadow-xl ring-1 ring-slate-900/5 aspect-[4/5] object-cover">
              <img
                src="https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Business professionals collaborating in a bright modern office"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            
            <div className="absolute bottom-[-1.5rem] right-[-1.5rem] bg-white p-6 rounded-xl shadow-lg border border-slate-100 hidden md:block">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Trusted by</p>
              <p className="text-3xl font-extrabold text-slate-900 mt-1">Fortune 500</p>
              <p className="text-xs font-bold text-blue-700 mt-1">Companies worldwide</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
