import { Linkedin } from 'lucide-react';

const team = [
  {
    name: 'Michael Chang',
    role: 'Managing Partner',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
  },
  {
    name: 'Jessica Walsh',
    role: 'Partner, Technology',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
  },
  {
    name: 'Robert Fox',
    role: 'Partner, Finance',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
  },
  {
    name: 'Aisha Patel',
    role: 'Head of Operations',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
  },
];

export default function Team() {
  return (
    <section className="py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-blue-700 uppercase tracking-widest mb-1 reveal">Our Leadership</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 reveal" style={{ transitionDelay: '100ms' }}>Expertise driven by exceptional people.</h3>
          <p className="text-lg text-slate-500 reveal" style={{ transitionDelay: '200ms' }}>
            Our global leadership brings decades of experience from top-tier academic institutions and leading global corporations.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div 
              key={index} 
              className="group flex flex-col items-center reveal"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative w-40 h-40 mb-5 overflow-hidden rounded-full border-4 border-white shadow-sm bg-slate-200">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-blue-700/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-2 bg-white rounded-lg text-blue-700 hover:bg-slate-50 transition-colors shadow-sm"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-1">{member.name}</h4>
              <p className="text-[10px] uppercase tracking-wider font-bold text-slate-400">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
