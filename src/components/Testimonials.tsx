import { Star } from 'lucide-react';

const testimonials = [
  {
    quote: "AstraCorp's strategic intervention completely transformed our operations model. We saw a 30% reduction in costs within the first two quarters.",
    name: 'Sarah Chen',
    role: 'Chief Operations Officer',
    company: 'Global Retail Partners',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    rating: 5,
  },
  {
    quote: "Their team brought unparalleled industry expertise and rigorous analytical capability to our M&A process. Truly a world-class partnership.",
    name: 'David Reynolds',
    role: 'Managing Director',
    company: 'Capital Horizon Group',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    rating: 5,
  },
  {
    quote: "Working with AstraCorp helped us navigate a complex digital transformation. Their consultants were professional, insightful, and essential to our success.",
    name: 'Elena Rodriguez',
    role: 'VP of Technology',
    company: 'Innovate Health Systems',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 reveal">Client Perspectives</h2>
          <h3 className="text-3xl md:text-4xl font-serif text-slate-900 reveal" style={{ transitionDelay: '100ms' }}>
            Trusted by industry leaders.
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl border border-slate-200 flex flex-col items-start cursor-default reveal-right"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <blockquote className="flex-1 mb-6">
                <p className="text-sm italic text-slate-600 leading-tight border-l-2 border-slate-200 pl-4 py-1">"{t.quote}"</p>
              </blockquote>
              <div className="flex items-center gap-3 mt-auto border-t border-slate-100 pt-4 w-full">
                <div className="w-10 h-10 rounded-full border border-slate-200 bg-slate-50 flex items-center justify-center text-slate-500 text-xs font-medium uppercase">
                  {t.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">{t.name}</div>
                  <div className="text-[10px] uppercase font-bold tracking-wider text-slate-400 mt-0.5">{t.role}, {t.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
