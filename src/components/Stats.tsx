import CountUp from './CountUp';

export default function Stats() {
  const stats = [
    { label: 'Happy Clients', value: 500, suffix: '+' },
    { label: 'Projects Completed', value: 1200, suffix: '+' },
    { label: 'Years Experience', value: 15, suffix: '+' },
    { label: 'Satisfaction Rate', value: 99, suffix: '%' },
  ];

  return (
    <section className="bg-white py-16 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center justify-center text-center px-4 pt-8 md:pt-0 pb-8 last:pb-0 md:pb-0 first:pt-0 reveal"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="text-4xl sm:text-5xl font-serif text-slate-900 mb-2">
                <CountUp end={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
