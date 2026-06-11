import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Global Supply Chain Optimization',
    category: 'Operations',
    image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
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
            <h2 className="text-sm font-bold text-blue-700 tracking-widest uppercase mb-1 reveal">Our Work</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight reveal" style={{ transitionDelay: '100ms' }}>
              Impactful solutions for complex problems.
            </h3>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center text-slate-600 hover:text-blue-700 font-bold text-sm transition-colors focus:outline-none focus-visible:underline reveal"
            style={{ transitionDelay: '200ms' }}
          >
            View all case studies
            <ExternalLink className="ml-2 w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <a 
              key={index} 
              href="#contact"
              className="group relative rounded-lg overflow-hidden bg-slate-200 shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300 reveal focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 block"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              
              {/* Overlay for hover state */}
              <div className="absolute inset-0 bg-blue-700/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                <span 
                  className="text-[10px] text-white font-bold tracking-widest uppercase transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
                >
                  View Project
                </span>
              </div>

              {/* Permanent clear desc bar at bottom */}
              <div className="absolute bottom-0 inset-x-0 bg-white p-4 border-t border-slate-100 transform translate-y-0 text-left">
                 <p className="text-[10px] font-bold text-blue-700 uppercase tracking-widest mb-1">{project.category}</p>
                 <h4 className="text-sm font-bold text-slate-900 line-clamp-1">{project.title}</h4>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
