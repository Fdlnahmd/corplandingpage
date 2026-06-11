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
    <section className="bg-blue-700 py-20 relative overflow-hidden reveal-scale">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-blue-600 rounded-full mix-blend-multiply opacity-50 filter blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply opacity-50 filter blur-3xl"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
        <h2 className="text-sm font-bold text-blue-200 uppercase tracking-widest mb-3">Get Started</h2>
        <h3 className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
          Ready to scale?
        </h3>
        <p className="text-blue-100 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
          Subscribe to our newsletter for exclusive insights, industry analysis, and operational best practices.
        </p>
        
        <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto relative z-10">
          <div className="flex flex-col sm:flex-row gap-2 bg-white/10 p-1 rounded-lg backdrop-blur-sm border border-white/20">
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
                className="w-full px-4 py-3 placeholder-slate-400 bg-white text-sm text-slate-900 rounded focus:outline-none disabled:bg-slate-100 disabled:cursor-not-allowed transition-all font-medium"
                placeholder="Business email"
              />
            </div>
            
            <button
              type="submit"
              disabled={status === 'loading' || status === 'success'}
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-sm font-bold rounded text-blue-700 bg-white hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-700 focus:ring-white shadow-sm disabled:bg-slate-200 disabled:text-slate-500 disabled:cursor-not-allowed transition-all active:scale-95"
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
          
          {/* Subtle success inline message instead of just button change */}
          <div className={`mt-3 text-sm text-blue-50 transition-all duration-300 ${status === 'success' ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}`}>
            Thank you! Please check your inbox to confirm.
          </div>
        </form>
      </div>
    </section>
  );
}
