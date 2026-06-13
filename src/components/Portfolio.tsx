import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Global Supply Chain Optimization',
    category: 'Operations',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8ed7c8263e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Retail Bank Digital Transformation',
    category: 'Technology',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Sustainable Energy M&A',
    category: 'Strategy & Finance',
    image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Healthcare System Integration',
    category: 'Healthcare',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Automotive Restructuring',
    category: 'Turnaround',
    image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Consumer Goods Go-to-Market',
    category: 'Marketing Growth',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-xs font-bold text-slate-400 tracking-widest uppercase mb-2 reveal">Our Work</h2>
            <h3 className="text-3xl md:text-4xl font-serif text-slate-900 leading-tight reveal" style={{ transitionDelay: '100ms' }}>
              Impactful solutions for complex problems.
            </h3>
          </div>
          <a
            href="#"
            className="inline-flex items-center text-slate-600 hover:text-emerald-500 font-medium text-sm transition-colors focus:outline-none focus-visible:underline reveal"
            style={{ transitionDelay: '200ms' }}
            onClick={(e) => e.preventDefault()}
          >
            View all case studies
            <ExternalLink className="ml-2 w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group relative rounded-lg overflow-hidden bg-white border border-slate-200 transition-colors duration-300 reveal"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="aspect-[4/3] w-full overflow-hidden bg-slate-50 flex items-center justify-center border-b border-slate-200">
                <svg viewBox="0 0 100 100" className="w-1/2 h-1/2 text-slate-200" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 50 L80 50 M50 20 L50 80" />
                  <circle cx="50" cy="50" r={10 + (index % 4) * 10} strokeOpacity="0.5" />
                </svg>
              </div>
              
              <div className="p-4 text-left">
                 <p className="text-xs font-medium text-slate-500 uppercase tracking-widest mb-1">{project.category}</p>
                 <h4 className="text-sm font-medium text-slate-900 line-clamp-1">{project.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
