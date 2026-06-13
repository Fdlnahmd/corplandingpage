import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-6 text-center lg:text-left mb-16 lg:mb-0">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-slate-900 leading-[1.1] mb-6 animate-fade-in-up">
              Transforming businesses with <span className="text-emerald-500">strategic clarity.</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-500 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed animate-fade-in-up" style={{ animationDelay: '100ms', animationFillMode: 'both' }}>
              We help ambitious organizations navigate complex challenges, optimize performance, and achieve sustainable growth in a rapidly changing world.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 animate-fade-in-up" style={{ animationDelay: '200ms', animationFillMode: 'both' }}>
              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 border border-transparent text-sm font-medium rounded-md text-white bg-emerald-500 hover:bg-emerald-600 transition-all duration-200 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
              >
                Get Started
                <ArrowRight className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
              </a>
              <a
                href="#services"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 border border-slate-200 text-sm font-medium rounded-md text-slate-700 bg-white hover:bg-slate-50 transition-all duration-200 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
              >
                Our Services
              </a>
            </div>
          </div>

          {/* Image Content */}
          <div className="lg:col-span-6 relative animate-fade-in-up" style={{ animationDelay: '300ms', animationFillMode: 'both' }}>
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-white aspect-[4/3] sm:aspect-[16/9] lg:aspect-[4/3] flex items-center justify-center">
              <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[80%] h-[80%] text-slate-200">
                <rect x="50" y="50" width="300" height="300" rx="40" stroke="currentColor" strokeWidth="2" strokeDasharray="8 8"/>
                <circle cx="200" cy="200" r="80" fill="currentColor" fillOpacity="0.3" stroke="currentColor" strokeWidth="2"/>
                <path d="M200 50 L200 350 M50 200 L350 200" stroke="currentColor" strokeWidth="2" strokeOpacity="0.5"/>
                <rect x="160" y="160" width="80" height="80" rx="20" fill="#10B981" />
              </svg>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
