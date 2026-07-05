'use client';

import { useState } from 'react';
import { Coffee, UtensilsCrossed, Clock, MapPin, Star, Phone, ChevronRight } from 'lucide-react';

const menuItems = [
  { name: 'Espresso Classico', price: '$4.50', desc: 'Rich double-shot espresso with a golden crema', category: 'coffee' },
  { name: 'Lavender Oat Latte', price: '$6.00', desc: 'Smooth oat milk with house-made lavender syrup', category: 'coffee' },
  { name: 'Matcha Ceremony', price: '$5.50', desc: 'Ceremonial grade matcha whisked to perfection', category: 'coffee' },
  { name: 'Truffle Eggs Benedict', price: '$16.00', desc: 'Poached eggs, truffle hollandaise, sourdough', category: 'food' },
  { name: 'Avocado Garden Toast', price: '$14.00', desc: 'Smashed avo, pomegranate, microgreens, feta', category: 'food' },
  { name: 'Açaí Power Bowl', price: '$13.00', desc: 'Organic açaí, granola, fresh berries, honey drizzle', category: 'food' },
];

const reviews = [
  { name: 'Sarah M.', text: 'Absolutely stunning atmosphere! The lavender latte changed my life.', stars: 5 },
  { name: 'James K.', text: 'Best brunch spot in the city. The truffle eggs are unreal.', stars: 5 },
  { name: 'Priya R.', text: 'Beautiful interior, amazing coffee, friendly staff. 10/10!', stars: 5 },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState<'all' | 'coffee' | 'food'>('all');
  const filtered = activeTab === 'all' ? menuItems : menuItems.filter(i => i.category === activeTab);

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#1a0f0a] to-[#0d0d0d] text-white">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-black/30 border-b border-amber-900/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
            ☕ Café Lumière
          </h1>
          <div className="hidden md:flex gap-8 text-sm text-gray-300">
            <a href="#menu" className="hover:text-amber-400 transition-colors">Menu</a>
            <a href="#about" className="hover:text-amber-400 transition-colors">About</a>
            <a href="#reviews" className="hover:text-amber-400 transition-colors">Reviews</a>
            <a href="#contact" className="hover:text-amber-400 transition-colors">Visit Us</a>
          </div>
          <button className="bg-gradient-to-r from-amber-500 to-orange-600 px-5 py-2 rounded-full text-sm font-semibold hover:scale-105 transition-transform">
            Reserve Table
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-900/20 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 rounded-full px-4 py-1.5 text-amber-400 text-sm mb-6">
              <Star className="w-4 h-4 fill-amber-400" /> Rated #1 Café in the City
            </div>
            <h2 className="text-6xl md:text-8xl font-black leading-[0.9] tracking-tight mb-6">
              Where Every
              <span className="block bg-gradient-to-r from-amber-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
                Sip Tells
              </span>
              A Story
            </h2>
            <p className="text-xl text-gray-400 max-w-xl mb-8 leading-relaxed">
              Artisan coffee, seasonal brunch, and a warm ambience — crafted for those who savor the extraordinary.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#menu" className="group bg-gradient-to-r from-amber-500 to-orange-600 px-8 py-3.5 rounded-full font-semibold text-lg hover:shadow-lg hover:shadow-amber-500/25 transition-all flex items-center gap-2">
                Explore Menu <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#contact" className="border border-gray-700 px-8 py-3.5 rounded-full font-semibold text-lg hover:bg-white/5 transition-colors">
                Find Us
              </a>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-3 gap-6 max-w-md">
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-400">12+</div>
              <div className="text-xs text-gray-500 mt-1">Years Open</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-400">50k+</div>
              <div className="text-xs text-gray-500 mt-1">Happy Guests</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-400">4.9</div>
              <div className="text-xs text-gray-500 mt-1">Google Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu */}
      <section id="menu" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-4xl font-bold mb-2">Our Menu</h3>
          <p className="text-gray-500 mb-8">Crafted with love, served with passion</p>
          <div className="flex gap-3 mb-10">
            {(['all', 'coffee', 'food'] as const).map(tab => (
              <button key={tab} onClick={() => setActiveTab(tab)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${activeTab === tab ? 'bg-amber-500 text-black' : 'bg-white/5 text-gray-400 hover:bg-white/10'}`}>
                {tab === 'all' ? 'All' : tab === 'coffee' ? '☕ Coffee' : '🍽️ Food'}
              </button>
            ))}
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((item, i) => (
              <div key={i} className="group bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 hover:bg-white/[0.06] hover:border-amber-500/30 hover:scale-[1.02] transition-all duration-300">
                <div className="flex justify-between items-start mb-3">
                  <h4 className="text-lg font-semibold group-hover:text-amber-400 transition-colors">{item.name}</h4>
                  <span className="text-amber-400 font-bold">{item.price}</span>
                </div>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 px-6 bg-gradient-to-b from-transparent via-amber-950/10 to-transparent">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            { icon: Coffee, title: 'Single Origin Beans', desc: 'Ethically sourced from Colombia, Ethiopia, and Guatemala. Roasted in-house weekly.' },
            { icon: UtensilsCrossed, title: 'Farm to Table', desc: 'Seasonal ingredients from local farms. Our menu changes with the harvest.' },
            { icon: Clock, title: 'Open Daily', desc: 'Mon–Fri 7am–9pm • Sat–Sun 8am–10pm. Brunch served until 3pm.' },
          ].map((card, i) => (
            <div key={i} className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-8 hover:border-amber-500/30 transition-all duration-300">
              <card.icon className="w-10 h-10 text-amber-400 mb-4" />
              <h4 className="text-xl font-bold mb-2">{card.title}</h4>
              <p className="text-gray-500 leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-4xl font-bold mb-10">What Our Guests Say</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <div key={i} className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6">
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: r.stars }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">&ldquo;{r.text}&rdquo;</p>
                <p className="text-sm text-amber-400 font-semibold">— {r.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 px-6 bg-gradient-to-t from-amber-950/20 to-transparent">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-4xl font-bold mb-6">Visit Us</h3>
            <div className="space-y-4 text-gray-400">
              <p className="flex items-center gap-3"><MapPin className="w-5 h-5 text-amber-400" /> 42 Artisan Lane, Downtown District</p>
              <p className="flex items-center gap-3"><Phone className="w-5 h-5 text-amber-400" /> (555) 123-4567</p>
              <p className="flex items-center gap-3"><Clock className="w-5 h-5 text-amber-400" /> Mon–Fri 7am–9pm • Weekends 8am–10pm</p>
            </div>
          </div>
          <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-8">
            <h4 className="text-xl font-bold mb-4">Reserve a Table</h4>
            <form className="space-y-4" onSubmit={e => e.preventDefault()}>
              <input type="text" placeholder="Your Name" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:border-amber-500 focus:outline-none transition-colors" />
              <input type="email" placeholder="Email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:border-amber-500 focus:outline-none transition-colors" />
              <input type="date" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-amber-500 focus:outline-none transition-colors" />
              <button type="submit" className="w-full bg-gradient-to-r from-amber-500 to-orange-600 py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-amber-500/25 transition-all">
                Book Now
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/[0.06] py-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-gray-600 text-sm">
          <p>© 2025 Café Lumière. All rights reserved.</p>
          <p>Built with ☕ & <span className="text-amber-400">Heaven AI Engine</span></p>
        </div>
      </footer>
    </main>
  );
}
