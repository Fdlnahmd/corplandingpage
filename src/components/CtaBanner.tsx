import { useState, FormEvent } from 'react';
import { Send, CheckCircle2, Loader2 } from 'lucide-react';

export default function CtaBanner() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
       // native browser validation will catch invalid email, but for generic empty catching:
       if(!email) return; 
    }
    
    setStatus('loading');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setEmail('');
      
      // Reset after 3 seconds
      setTimeout(() => {
        setStatus('idle');
      }, 3000);
    }, 1200);
  };

  return (
    <section className="bg-white py-24 relative overflow-hidden reveal-scale border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          
          {/* Text + Form */}
          <div className="mb-12 lg:mb-0 text-center lg:text-left">
            <h2 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Get Started</h2>
            <h3 className="text-3xl md:text-5xl font-serif text-slate-900 mb-6 tracking-tight">
              Ready to scale?
            </h3>
            <p className="text-slate-500 text-lg md:text-xl mb-10 max-w-lg mx-auto lg:mx-0">
              Subscribe to our newsletter for exclusive insights, industry analysis, and operational best practices.
            </p>
            
            <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto lg:mx-0 relative z-10">
              <div className="flex flex-col sm:flex-row gap-2 bg-white p-1 rounded-md border border-slate-200 shadow-sm relative">
                <div className="relative flex-grow">
                  <label htmlFor="email-address" className="sr-only">Email address</label>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    disabled={status === 'loading' || status === 'success'}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 placeholder-slate-400 bg-slate-50 text-sm text-slate-900 rounded focus:outline-none focus:bg-white focus:ring-2 focus:ring-inset focus:ring-emerald-500 disabled:bg-slate-100 disabled:cursor-not-allowed transition-colors font-medium border border-transparent"
                    placeholder="Business email"
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={status === 'loading' || status === 'success'}
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-sm font-medium rounded text-white bg-emerald-500 hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 shadow-sm disabled:bg-slate-200 disabled:text-slate-500 disabled:cursor-not-allowed transition-all active:scale-95"
                >
                  {status === 'idle' && (
                    <>
                      Join <Send className="ml-2 w-4 h-4" />
                    </>
                  )}
                  {status === 'loading' && (
                    <>
                      Processing <Loader2 className="ml-2 w-4 h-4 animate-spin" />
                    </>
                  )}
                  {status === 'success' && (
                    <>
                      Subscribed <CheckCircle2 className="ml-2 w-4 h-4 text-green-500" />
                    </>
                  )}
                </button>
              </div>
              
              {/* Subtle success inline message */}
              <div className={`mt-3 text-sm text-slate-500 transition-all duration-300 ${status === 'success' ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}`}>
                Thank you! Please check your inbox to confirm.
              </div>
            </form>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-lg ring-1 ring-slate-900/5 aspect-[4/3]">
              <img
                src="/cta-banner.png"
                alt="Professional corporate team collaborating in a modern office"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
