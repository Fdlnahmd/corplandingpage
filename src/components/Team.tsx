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
    <section className="py-24 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 reveal">Our Leadership</h2>
          <h3 className="text-3xl md:text-4xl font-serif text-slate-900 mb-6 reveal" style={{ transitionDelay: '100ms' }}>Expertise driven by exceptional people.</h3>
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
              <div className="relative w-32 h-32 mb-5 overflow-hidden rounded-xl border border-slate-200 bg-slate-50 flex items-center justify-center transition-colors group-hover:bg-slate-100">
                <span className="text-4xl font-serif text-slate-400">{member.name.split(' ').map(n => n[0]).join('')}</span>
              </div>
              <h4 className="text-lg font-medium text-slate-900 mb-1 flex items-center gap-2">
                {member.name}
                <a href="#" className="text-slate-400 hover:text-emerald-500 transition-colors" aria-label={`LinkedIn for ${member.name}`}>
                  <Linkedin className="w-3 h-3" />
                </a>
              </h4>
              <p className="text-[10px] uppercase tracking-wider font-medium text-slate-400">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
