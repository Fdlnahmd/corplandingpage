import { Linkedin, Twitter, Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react';

const navigation = {
  company: [
    { name: 'About Us', href: '#about' },
    { name: 'Leadership', href: '#about' },
    { name: 'Careers', href: '#contact' },
    { name: 'News & Media', href: '#contact' },
    { name: 'Sustainability', href: '#about' },
  ],
  services: [
    { name: 'Strategy Consulting', href: '#services' },
    { name: 'Digital Transformation', href: '#services' },
    { name: 'Financial Advisory', href: '#services' },
    { name: 'Operations', href: '#services' },
    { name: 'M&A Support', href: '#services' },
  ],
  resources: [
    { name: 'Insights & Research', href: '#portfolio' },
    { name: 'Case Studies', href: '#portfolio' },
    { name: 'Tools & Calculators', href: '#contact' },
    { name: 'Webinars', href: '#contact' },
    { name: 'Help Center', href: '#contact' },
  ],
  social: [
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com' },
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com' },
  ],
};

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#0B1120] text-slate-300 reveal" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
        <div className="xl:grid xl:grid-cols-4 xl:gap-12">
          
          {/* Brand & Contact */}
          <div className="space-y-8 xl:col-span-1 border-b border-slate-800/50 xl:border-b-0 pb-10 xl:pb-0 mb-10 xl:mb-0">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl leading-none">A</span>
              </div>
              <span className="font-extrabold text-2xl text-white tracking-tight">AstraCorp</span>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              Empowering organizations to navigate complexity and achieve sustainable, high-performance growth.
            </p>
            <div className="space-y-4 text-sm text-slate-400 font-medium">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-blue-500 shrink-0" />
                <span>100 Corporate Center Dr.<br/>Jakarta, 12920, ID</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-blue-500 shrink-0" />
                <span>+62 21 555 0198</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-blue-500 shrink-0" />
                <span>contact@astracorp.com</span>
              </div>
            </div>
            
            <div className="flex space-x-5 text-[9px] uppercase tracking-widest font-bold text-blue-200">
              {navigation.social.map((item) => {
                const Icon = item.icon;
                return (
                  <a 
                    key={item.name} 
                    href={item.href} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-slate-500 hover:text-white transition-colors" 
                    title={item.name}
                  >
                    <span className="sr-only">{item.name}</span>
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links */}
          <div className="mt-12 grid grid-cols-1 gap-8 xl:mt-0 xl:col-span-3 sm:grid-cols-3">
            <div className="md:grid md:grid-cols-1 md:gap-8">
              <div>
                <h3 className="text-[10px] font-bold text-white tracking-widest uppercase mb-4">Company</h3>
                <ul role="list" className="space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-sm font-medium text-slate-400 hover:text-white transition-colors">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-1 md:gap-8">
              <div>
                <h3 className="text-[10px] font-bold text-white tracking-widest uppercase mb-4">Services</h3>
                <ul role="list" className="space-y-4">
                  {navigation.services.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-sm font-medium text-slate-400 hover:text-white transition-colors">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-1 md:gap-8">
              <div>
                <h3 className="text-[10px] font-bold text-white tracking-widest uppercase mb-4">Resources</h3>
                <ul role="list" className="space-y-4">
                  {navigation.resources.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-sm font-medium text-slate-400 hover:text-white transition-colors">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          
        </div>
        
        {/* Bottom Bar */}
        <div className="mt-16 sm:mt-20 border-t border-slate-800/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider text-center md:text-left">
            &copy; {new Date().getFullYear()} AstraCorp Global Partners. All rights reserved.
          </p>
          <div className="flex gap-6 text-[10px] uppercase font-bold tracking-wider text-slate-500">
            <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-white transition-colors">Privacy</a>
            <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-white transition-colors">Terms</a>
            <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
