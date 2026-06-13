import { Linkedin, Twitter, Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react';

const navigation = {
  company: [
    { name: 'About Us', href: '#' },
    { name: 'Leadership', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'News & Media', href: '#' },
    { name: 'Sustainability', href: '#' },
  ],
  services: [
    { name: 'Strategy Consulting', href: '#' },
    { name: 'Digital Transformation', href: '#' },
    { name: 'Financial Advisory', href: '#' },
    { name: 'Operations', href: '#' },
    { name: 'M&A Support', href: '#' },
  ],
  resources: [
    { name: 'Insights & Research', href: '#' },
    { name: 'Case Studies', href: '#' },
    { name: 'Tools & Calculators', href: '#' },
    { name: 'Webinars', href: '#' },
    { name: 'Help Center', href: '#' },
  ],
  social: [
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'Facebook', icon: Facebook, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' },
  ],
};

export default function Footer() {
  return (
    <footer id="contact" className="bg-white text-slate-500 border-t border-slate-200 reveal" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
        <div className="xl:grid xl:grid-cols-4 xl:gap-12">
          
          {/* Brand & Contact */}
          <div className="space-y-8 xl:col-span-1 border-b border-slate-200 xl:border-b-0 pb-10 xl:pb-0 mb-10 xl:mb-0">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-slate-900 rounded-md flex items-center justify-center">
                <span className="text-white font-bold text-xl leading-none">A</span>
              </div>
              <span className="font-serif font-bold text-2xl text-slate-900 tracking-tight">AstraCorp</span>
            </div>
            <p className="text-sm leading-relaxed text-slate-500">
              Empowering organizations to navigate complexity and achieve sustainable, high-performance growth.
            </p>
            <div className="space-y-4 text-sm text-slate-500 font-medium">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-slate-400 shrink-0" />
                <span>100 Corporate Center Dr.<br/>Jakarta, 12920, ID</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-slate-400 shrink-0" />
                <span>+62 21 555 0198</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-slate-400 shrink-0" />
                <span>contact@astracorp.com</span>
              </div>
            </div>
            
            <div className="flex space-x-5 text-[9px] uppercase tracking-widest font-bold text-slate-400">
              {navigation.social.map((item) => {
                const Icon = item.icon;
                return (
                  <a key={item.name} href={item.href} className="text-slate-400 hover:text-slate-900 transition-colors" title={item.name}>
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
                <h3 className="text-xs font-bold text-slate-900 tracking-widest uppercase mb-4">Company</h3>
                <ul role="list" className="space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-1 md:gap-8">
              <div>
                <h3 className="text-xs font-bold text-slate-900 tracking-widest uppercase mb-4">Services</h3>
                <ul role="list" className="space-y-4">
                  {navigation.services.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-1 md:gap-8">
              <div>
                <h3 className="text-xs font-bold text-slate-900 tracking-widest uppercase mb-4">Resources</h3>
                <ul role="list" className="space-y-4">
                  {navigation.resources.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors">
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
        <div className="mt-16 sm:mt-20 border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500 font-medium uppercase tracking-wider text-center md:text-left">
            &copy; {new Date().getFullYear()} AstraCorp Global Partners. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs uppercase font-medium tracking-wider text-slate-500">
            <a href="#" className="hover:text-slate-900 transition-colors">Privacy</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Terms</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
