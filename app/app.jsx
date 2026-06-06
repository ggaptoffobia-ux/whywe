import React, { useState, useEffect } from 'react';
import { ChevronDown, TrendingUp, Music, Users, Mail, Send, Menu, X } from 'lucide-react';

export default function WhyWeWebsite() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden" style={{ fontFamily: 'Poppins, system-ui, sans-serif', scrollBehavior: 'smooth' }}>
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-black"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-600/40 rounded-full blur-3xl animate-pulse" style={{ animation: 'float 6s ease-in-out infinite' }}></div>
        <div className="absolute top-20 right-10 w-96 h-96 bg-pink-600/40 rounded-full blur-3xl" style={{ animation: 'float 8s ease-in-out infinite 1s' }}></div>
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-yellow-500/30 rounded-full blur-3xl" style={{ animation: 'float 7s ease-in-out infinite 2s' }}></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-red-600/30 rounded-full blur-3xl" style={{ animation: 'float 9s ease-in-out infinite 1.5s' }}></div>
        <div className="absolute top-1/3 right-1/3 w-72 h-72 bg-orange-500/25 rounded-full blur-3xl" style={{ animation: 'float 10s ease-in-out infinite 0.5s' }}></div>
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-pink-500/25 rounded-full blur-3xl" style={{ animation: 'float 8s ease-in-out infinite 2.5s' }}></div>
      </div>

      <style>{`
        html {
          scroll-behavior: smooth;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          33% { transform: translateY(-20px) translateX(10px); }
          66% { transform: translateY(20px) translateX(-10px); }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(236, 72, 153, 0.5); }
          50% { box-shadow: 0 0 40px rgba(236, 72, 153, 0.8); }
        }
        @keyframes pulse-glow {
          0%, 100% { 
            box-shadow: 0 0 20px rgba(236, 72, 153, 0.4), 0 0 40px rgba(251, 146, 60, 0.2);
            transform: scale(1);
          }
          50% { 
            box-shadow: 0 0 40px rgba(236, 72, 153, 0.7), 0 0 60px rgba(251, 146, 60, 0.4);
            transform: scale(1.05);
          }
        }
        @keyframes rotate-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes shimmer {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        .glow-effect {
          animation: glow 3s ease-in-out infinite;
        }
        .pulse-glow-effect {
          animation: pulse-glow 2.5s ease-in-out infinite;
        }
        .rotate-effect {
          animation: rotate-slow 20s linear infinite;
        }
        .shimmer-effect {
          animation: shimmer 2s ease-in-out infinite;
        }
        .bounce-effect {
          animation: bounce-slow 3s ease-in-out infinite;
        }
        .slide-in-effect {
          animation: slide-in-right 0.8s ease-out forwards;
        }
      `}</style>
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/95 backdrop-blur py-3' : 'bg-transparent py-6'}`}>
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <div className="text-2xl font-bold">
            <span className="bg-gradient-to-r from-pink-400 via-yellow-300 to-orange-400 bg-clip-text text-transparent">WHY WE</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 text-sm">
            <button 
              onClick={() => {
                const section = document.getElementById('who-we-are');
                if (section) section.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              className="hover:text-pink-300 transition cursor-pointer bg-none border-none text-white">
              Who We Are
            </button>
            <button 
              onClick={() => {
                const section = document.getElementById('why-music-matters');
                if (section) section.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              className="hover:text-pink-300 transition cursor-pointer bg-none border-none text-white">
              Why Music Matters
            </button>
            <button 
              onClick={() => {
                const section = document.getElementById('solutions');
                if (section) section.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              className="hover:text-pink-300 transition cursor-pointer bg-none border-none text-white">
              The Solution
            </button>
            <button 
              onClick={() => {
                const section = document.getElementById('pricing');
                if (section) section.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              className="hover:text-pink-300 transition cursor-pointer bg-none border-none text-white">
              Pricing
            </button>
            <button 
              onClick={() => {
                const section = document.getElementById('how-it-works');
                if (section) section.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              className="hover:text-pink-300 transition cursor-pointer bg-none border-none text-white">
              How It Works
            </button>
            <button 
              onClick={() => {
                const section = document.getElementById('social-proof');
                if (section) section.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              className="hover:text-pink-300 transition cursor-pointer bg-none border-none text-white">
              Our Clients
            </button>
            <button 
              onClick={() => {
                const section = document.getElementById('cta');
                if (section) section.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              className="hover:text-pink-300 transition cursor-pointer bg-none border-none text-white">
              Contact
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden bg-none border-none text-white cursor-pointer">
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-950/95 backdrop-blur border-t border-pink-400/20 py-4">
            <div className="max-w-6xl mx-auto px-6 flex flex-col gap-4">
              <button 
                onClick={() => {
                  const section = document.getElementById('who-we-are');
                  if (section) section.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  setMobileMenuOpen(false);
                }}
                className="text-left hover:text-pink-300 transition cursor-pointer bg-none border-none text-white">
                Who We Are
              </button>
              <button 
                onClick={() => {
                  const section = document.getElementById('why-music-matters');
                  if (section) section.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  setMobileMenuOpen(false);
                }}
                className="text-left hover:text-pink-300 transition cursor-pointer bg-none border-none text-white">
                Why Music Matters
              </button>
              <button 
                onClick={() => {
                  const section = document.getElementById('solutions');
                  if (section) section.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  setMobileMenuOpen(false);
                }}
                className="text-left hover:text-pink-300 transition cursor-pointer bg-none border-none text-white">
                The Solution
              </button>
              <button 
                onClick={() => {
                  const section = document.getElementById('pricing');
                  if (section) section.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  setMobileMenuOpen(false);
                }}
                className="text-left hover:text-pink-300 transition cursor-pointer bg-none border-none text-white">
                Pricing
              </button>
              <button 
                onClick={() => {
                  const section = document.getElementById('how-it-works');
                  if (section) section.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  setMobileMenuOpen(false);
                }}
                className="text-left hover:text-pink-300 transition cursor-pointer bg-none border-none text-white">
                How It Works
              </button>
              <button 
                onClick={() => {
                  const section = document.getElementById('social-proof');
                  if (section) section.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  setMobileMenuOpen(false);
                }}
                className="text-left hover:text-pink-300 transition cursor-pointer bg-none border-none text-white">
                Our Clients
              </button>
              <button 
                onClick={() => {
                  const section = document.getElementById('cta');
                  if (section) section.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  setMobileMenuOpen(false);
                }}
                className="text-left hover:text-pink-300 transition cursor-pointer bg-none border-none text-white">
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-pink-500/20 via-yellow-400/10 to-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-br from-red-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-6xl md:text-7xl font-bold leading-tight" style={{ fontWeight: '600', letterSpacing: '-0.02em' }}>
            <span className="block mb-6">WHY WE</span>
            <span className="text-transparent bg-gradient-to-r from-pink-300 via-yellow-300 to-orange-400 bg-clip-text block text-5xl md:text-6xl leading-relaxed" style={{ fontWeight: '700' }}>
              Music<br />That's Legal,<br />Curated & Atmospheric
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto leading-relaxed" style={{ fontWeight: '400' }}>
            The right soundtrack increases average check by up to <span className="bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent font-semibold">23%</span>.
            <br />Make sure your venue has it.
          </p>

          <button 
            onClick={() => {
              const ctaSection = document.getElementById('cta');
              if (ctaSection) {
                ctaSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}
            className="mt-8 px-8 py-4 bg-gradient-to-r from-pink-500 via-yellow-400 to-orange-500 text-white font-bold rounded-3xl hover:shadow-2xl hover:shadow-pink-500/50 transition-all transform hover:scale-105 cursor-pointer pulse-glow-effect" style={{ fontWeight: '600' }}>
            Get Your Free Audit →
          </button>

          <div className="pt-8 animate-bounce">
            <ChevronDown className="w-6 h-6 mx-auto text-yellow-300" />
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section id="who-we-are" className="py-24 px-6 bg-gradient-to-b from-transparent to-gradient-to-r from-pink-950/20 to-orange-950/20">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-4xl font-bold" style={{ fontWeight: '600' }}>Who We Are</h2>
          <p className="text-lg text-slate-300" style={{ fontWeight: '400' }}>Professional musicians, DJs, and music selectors.</p>
          <p className="text-xl font-semibold text-transparent bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text" style={{ fontWeight: '600' }}>We curate sound that delivers results.</p>
        </div>
      </section>

      {/* Why Music Matters */}
      <section id="why-music-matters" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center" style={{ fontWeight: '600' }}>Why Music Matters</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: TrendingUp, color: 'pink', title: 'The Business Case', desc: 'Music is not just atmosphere — it\'s a direct profit lever.', highlight: 'Right music = +23% average check' },
              { icon: Music, color: 'yellow', title: 'Guest Experience', desc: 'Great music creates the right mood. People feel it. When it\'s right, they feel at home.', highlight: '' },
              { icon: Users, color: 'orange', title: 'Staff Factor', desc: 'Your staff is your most valuable asset. The right music keeps them engaged.', highlight: '' }
            ].map((item, idx) => {
              const Icon = item.icon;
              const colorClasses = {
                pink: 'from-pink-950/40 to-pink-900/20 border-pink-500/30 hover:border-pink-400/60',
                yellow: 'from-yellow-950/40 to-yellow-900/20 border-yellow-500/30 hover:border-yellow-400/60',
                orange: 'from-orange-950/40 to-orange-900/20 border-orange-500/30 hover:border-orange-400/60'
              };
              const iconColor = {
                pink: 'text-pink-400',
                yellow: 'text-yellow-400',
                orange: 'text-orange-400'
              };
              const textColor = {
                pink: 'text-pink-300',
                yellow: 'text-yellow-300',
                orange: 'text-orange-300'
              };
              return (
                <div 
                  key={idx}
                  className={`p-8 rounded-3xl bg-gradient-to-br ${colorClasses[item.color]} transition backdrop-blur hover:scale-105 transform duration-300`}
                  style={{ animation: `fadeInUp 0.6s ease-out ${idx * 0.15}s both` }}
                >
                  <Icon className={`w-12 h-12 ${iconColor[item.color]} mb-4`} />
                  <h3 className="text-2xl font-bold mb-4" style={{ fontWeight: '600' }}>{item.title}</h3>
                  <p className="text-slate-300 mb-4" style={{ fontWeight: '400' }}>{item.desc}</p>
                  {item.highlight && <p className={`${textColor[item.color]} font-semibold`}>{item.highlight}</p>}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section id="solutions" className="py-24 px-6 bg-gradient-to-b from-transparent to-pink-950/10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center" style={{ fontWeight: '600' }}>The Solution</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-gradient-to-br from-slate-800/40 to-slate-900/40 border border-white/10 hover:border-pink-400/50 transition backdrop-blur">
              <h3 className="text-2xl font-bold mb-4 text-pink-400" style={{ fontWeight: '600' }}>Curated</h3>
              <p className="text-slate-300" style={{ fontWeight: '400' }}>Professional music selection. Every track reflects your venue's identity.</p>
              <p className="text-pink-400 font-semibold text-sm mt-4" style={{ fontWeight: '600' }}>Zero repetition. Maximum impact.</p>
            </div>

            <div className="p-8 rounded-3xl bg-gradient-to-br from-slate-800/40 to-slate-900/40 border border-white/10 hover:border-yellow-400/50 transition backdrop-blur">
              <h3 className="text-2xl font-bold mb-4 text-yellow-400" style={{ fontWeight: '600' }}>Atmospheric</h3>
              <p className="text-slate-300" style={{ fontWeight: '400' }}>Different music for different hours. Morning, lunch, dinner — each with its own vibe.</p>
              <p className="text-yellow-400 font-semibold text-sm mt-4" style={{ fontWeight: '600' }}>Guests stay longer. Check increases.</p>
            </div>

            <div className="p-8 rounded-3xl bg-gradient-to-br from-slate-800/40 to-slate-900/40 border border-white/10 hover:border-orange-400/50 transition backdrop-blur">
              <h3 className="text-2xl font-bold mb-4 text-orange-400" style={{ fontWeight: '600' }}>Legal</h3>
              <p className="text-slate-300" style={{ fontWeight: '400' }}>Full EMRA compliance. No fines. No risk. Your business is protected.</p>
              <p className="text-orange-400 font-semibold text-sm mt-4" style={{ fontWeight: '600' }}>Complete peace of mind.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center" style={{ fontWeight: '600' }}>Choose Your Level</h2>
          <p className="text-center text-slate-400 mb-16" style={{ fontWeight: '400' }}>One-time setup + ongoing monthly costs</p>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="p-8 rounded-3xl bg-gradient-to-br from-slate-800/60 to-slate-900/40 border border-slate-600/50 hover:border-pink-400/50 transition backdrop-blur">
              <h3 className="text-2xl font-bold mb-2" style={{ fontWeight: '600' }}>Basic</h3>
              <p className="text-4xl font-bold text-pink-400 mb-6" style={{ fontWeight: '700' }}>$500</p>
              <p className="text-slate-300" style={{ fontWeight: '400' }}>One playlist. Repeats daily.</p>
            </div>

            <div className="p-8 rounded-3xl bg-gradient-to-br from-slate-800/60 to-slate-900/40 border border-slate-600/50 hover:border-yellow-400/50 transition backdrop-blur">
              <h3 className="text-2xl font-bold mb-2" style={{ fontWeight: '600' }}>Medium</h3>
              <p className="text-4xl font-bold text-yellow-400 mb-6" style={{ fontWeight: '700' }}>$750</p>
              <p className="text-slate-300" style={{ fontWeight: '400' }}>Three playlists. Three days of music.</p>
            </div>

            <div className="p-8 rounded-3xl bg-gradient-to-br from-slate-800/60 to-slate-900/40 border border-slate-600/50 hover:border-orange-400/50 transition backdrop-blur">
              <h3 className="text-2xl font-bold mb-2" style={{ fontWeight: '600' }}>Premium</h3>
              <p className="text-4xl font-bold text-orange-400 mb-6" style={{ fontWeight: '700' }}>$1,000</p>
              <p className="text-slate-300" style={{ fontWeight: '400' }}>Seven playlists. Seven days. Zero repeats.</p>
            </div>
          </div>

          {/* Monthly Costs */}
          <div className="max-w-2xl mx-auto p-8 rounded-3xl bg-gradient-to-br from-pink-500/10 to-orange-500/10 border border-pink-400/30 backdrop-blur">
            <h3 className="text-2xl font-bold mb-6 text-center" style={{ fontWeight: '600' }}>Monthly Costs</h3>
            <div className="space-y-4 text-slate-300" style={{ fontWeight: '400' }}>
              <div className="flex justify-between">
                <span>Streaming + Licensing (via Soundtrack Your Brand)</span>
                <span className="font-semibold text-pink-400" style={{ fontWeight: '600' }}>$44/mo</span>
              </div>
              <div className="flex justify-between">
                <span>Optional: Manual Playlist Updates</span>
                <span className="font-semibold text-yellow-400" style={{ fontWeight: '600' }}>$100/mo</span>
              </div>
              <div className="border-t border-pink-400/30 pt-4 flex justify-between text-lg font-bold" style={{ fontWeight: '600' }}>
                <span>Total Monthly</span>
                <span className="text-transparent bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text">$44/mo <span className="text-slate-400 font-normal" style={{ fontWeight: '400' }}>(or $144/mo with updates)</span></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24 px-6 bg-gradient-to-b from-transparent to-orange-950/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center" style={{ fontWeight: '600' }}>How It Works</h2>
          <div className="space-y-8">
            {[
              { num: '01', title: 'Assessment', desc: 'We audit your place — your hours, peak days, demographics.' },
              { num: '02', title: 'Strategy', desc: 'We build a music strategy aligned with your brand.' },
              { num: '03', title: 'Track Selection', desc: 'We curate tracks that keep guests engaged.' },
              { num: '04', title: 'Integration', desc: 'We integrate into your infrastructure.' },
              { num: '05', title: 'Ongoing Support', desc: '24/7 support. Regular updates. Adjustments based on feedback.' }
            ].map((step, idx) => (
              <div key={idx} className="flex gap-6 items-start slide-in-effect" style={{ animationDelay: `${idx * 0.1}s` }}>
                <div className="text-4xl font-bold text-transparent bg-gradient-to-r from-pink-400 via-yellow-400 to-orange-400 bg-clip-text shimmer-effect" style={{ fontWeight: '700' }}>{step.num}</div>
                <div>
                  <h3 className="text-2xl font-bold mb-2" style={{ fontWeight: '600' }}>{step.title}</h3>
                  <p className="text-slate-300" style={{ fontWeight: '400' }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section id="social-proof" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center" style={{ fontWeight: '600' }}>Already Working With Us</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['Hookah Place Marina', 'Hookah Place DIFC', 'Hookah Place Downtown', 'Hookah Place ADY'].map((venue, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/30 border border-pink-400/30 text-center hover:border-pink-300/70 transition backdrop-blur">
                <p className="font-semibold" style={{ fontWeight: '600' }}>{venue}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="py-24 px-6 bg-gradient-to-b from-pink-950/20 to-orange-950/20">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-4xl font-bold" style={{ fontWeight: '600' }}>Ready to Increase Your Check Average?</h2>
          <p className="text-lg text-slate-300" style={{ fontWeight: '400' }}>We'll conduct a free audit of your venue.<br />No cost. No commitment.</p>
          <a 
            href="https://t.me/wermur"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 bg-gradient-to-r from-pink-500 via-yellow-400 to-orange-500 text-white font-bold rounded-3xl hover:shadow-2xl hover:shadow-pink-500/50 transition cursor-pointer pulse-glow-effect" style={{ fontWeight: '600', textDecoration: 'none' }}>
            Schedule Your Free Audit
          </a>
          <div className="flex flex-col sm:flex-row justify-center gap-6 text-slate-300 mt-12" style={{ fontWeight: '400' }}>
            <a href="mailto:whywemusic@yahoo.com" className="flex items-center gap-2 hover:text-pink-300 transition">
              <Mail className="w-5 h-5" />
              whywemusic@yahoo.com
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-pink-400/20 text-center text-slate-500 text-sm" style={{ fontWeight: '400' }}>
        <p>© 2025 WHY WE. Music That's Legal, Curated & Atmospheric.</p>
      </footer>
    </div>
  );
}
