import { LineChart, BarChart3, Briefcase, Lightbulb, Users, Globe2, ArrowRight } from 'lucide-react';

const services = [
  {
    title: 'Strategy Consulting',
    description: 'We help you define clear, actionable strategies to outpace the competition and drive long-term growth.',
    icon: Lightbulb,
  },
  {
    title: 'Digital Transformation',
    description: 'Modernize your operations with cutting-edge technology to improve efficiency and customer experience.',
    icon: Globe2,
  },
  {
    title: 'Financial Advisory',
    description: 'Expert financial planning, risk management, and capital structuring to maximize shareholder value.',
    icon: BarChart3,
  },
  {
    title: 'Operations Optimization',
    description: 'Streamline your operations to reduce costs, increase agility, and boost overall productivity.',
    icon: LineChart,
  },
  {
    title: 'Human Capital',
    description: 'Attract, retain, and develop top talent while building a high-performance organizational culture.',
    icon: Users,
  },
  {
    title: 'Mergers & Acquisitions',
    description: 'End-to-end M&A support, from initial target identification through to post-merger integration.',
    icon: Briefcase,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-blue-700 tracking-widest uppercase mb-1 reveal">Our Expertise</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 reveal" style={{ transitionDelay: '100ms' }}>Comprehensive services for modern businesses.</h3>
          <p className="text-lg text-slate-500 reveal" style={{ transitionDelay: '200ms' }}>
            We deliver tailored solutions across the business spectrum, combining deep industry knowledge with rigorous analysis.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index}
                className="group p-6 rounded-xl bg-white border border-slate-100 transition-shadow duration-300 hover:shadow-md cursor-default reveal"
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">{service.title}</h4>
                <p className="text-sm text-slate-500 leading-relaxed mb-4">
                  {service.description}
                </p>
                <a 
                  href="#contact" 
                  className="inline-flex items-center text-blue-700 font-medium hover:text-blue-800 focus:outline-none focus-visible:underline"
                >
                  Learn more 
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
