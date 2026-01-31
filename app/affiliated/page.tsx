import Image from 'next/image';
import Link from 'next/link';

export default function AffiliatedPage() {
  const yearlyGroups = [
    { name: "Junior Old Boys Union", years: "1-13" },
    { name: "Group of 1963/73", years: "1963-1973" },
    { name: "Group of 86/87/88", years: "1986-1988" },
    { name: "Group of 89", years: "1989" },
    { name: "Group of 91", years: "1991" },
    { name: "Group of 92", years: "1992" },
    { name: "Group of 93/94", years: "1993-1994" },
    { name: "Group of 95", years: "1995" },
    { name: "Group of 96", years: "1996" },
    { name: "Group of 97", years: "1997" },
    { name: "Group of 98", years: "1998" },
    { name: "Group of 99", years: "1999" },
    { name: "Group of 2000", years: "2000" },
    { name: "Group of 2001", years: "2001" },
    { name: "Group of 2002", years: "2002" },
    { name: "Group of 2006", years: "2006" },
    { name: "Group of 2008", years: "2008" },
  ];

  const foreignGroups = [
    { name: "UK Affiliate Group", region: "United Kingdom", icon: "🇬🇧" },
    { name: "Canada Affiliate Group", region: "Canada", icon: "🇨🇦" },
    { name: "USA Affiliate Group", region: "United States", icon: "🇺🇸" },
    { name: "New Zealand Affiliate Group", region: "New Zealand", icon: "🇳🇿" },
    { name: "Australia Affiliate Group", region: "Australia", icon: "🇦🇺" },
    { name: "Middle East Group", region: "GCC", icon: "📍" },
  ];

  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="relative py-32 md:py-48 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/stone.jpg"
            alt="Affiliated Associations"
            fill
            className="object-cover scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary-blue)] to-[var(--primary-blue-dark)] opacity-95"></div>
        </div>
        <div className="relative container-custom text-white">
          <div className="max-w-4xl">
            <span className="inline-block px-4 py-1 bg-[var(--accent-gold)] text-[var(--primary-blue)] text-xs font-black rounded-full mb-6 uppercase tracking-[0.2em]">Global Brotherhood</span>
            <h1 className="text-6xl md:text-9xl font-black mb-6 tracking-tighter uppercase italic leading-none">
              AFFILIATED <br/>GROUPS
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed italic border-l-4 border-[var(--accent-gold)] pl-6 max-w-2xl">
              "A global network of excellence. Strengthening the bridge between our heritage and the future Pathanians."
            </p>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="relative -mt-16 z-10">
        <div className="container-custom">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { label: 'Yearly Batches', value: '25+', icon: '🎓' },
                { label: 'Global Branches', value: '06+', icon: '🌍' },
                { label: 'Active Alumni', value: '10k+', icon: '🤝' }
              ].map((stat, idx) => (
                <div key={idx} className="bg-white p-10 rounded-[3.5rem] shadow-2xl border border-[var(--gray-100)] flex items-center gap-8 group hover:border-[var(--accent-gold)] transition-all">
                   <div className="text-5xl group-hover:scale-110 transition-transform">{stat.icon}</div>
                   <div>
                      <p className="text-4xl font-black text-[var(--primary-blue)] italic">{stat.value}</p>
                      <p className="text-xs font-black text-gray-400 uppercase tracking-widest">{stat.label}</p>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Local Groups */}
      <section className="section-padding overflow-hidden">
        <div className="container-custom">
           <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
              <div className="max-w-2xl">
                 <h2 className="text-4xl md:text-6xl font-black text-[var(--primary-blue)] mb-8 uppercase tracking-tighter italic">Local Batch Groups</h2>
                 <p className="text-xl text-gray-500 font-bold leading-relaxed">
                   Our yearly groups form the foundation of our association. Find your cohort and re-engage with the legacy of Greenlands.
                 </p>
              </div>
              <Link href="/membership" className="px-12 py-6 bg-[var(--primary-blue)] text-white font-black rounded-3xl hover:bg-[var(--primary-blue-dark)] transition-all shadow-2xl uppercase tracking-tighter">
                 REGISTER YOUR BATCH
              </Link>
           </div>
           
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
             {yearlyGroups.map((group, index) => (
               <div key={index} className="group bg-white p-10 rounded-[3.5rem] border border-[var(--gray-200)] hover:border-[var(--accent-gold)] hover:shadow-[0_40px_80px_rgba(0,0,0,0.05)] transition-all relative overflow-hidden text-center">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--gray-50)] rounded-full -mr-16 -mt-16 group-hover:bg-[var(--accent-gold)]/5 transition-colors"></div>
                 <h3 className="text-2xl font-black text-[var(--primary-blue)] mb-2 italic uppercase tracking-tighter relative z-10">{group.name}</h3>
                 <p className="text-[var(--accent-gold-dark)] font-black text-xs tracking-[0.2em] relative z-10 uppercase">Class of {group.years}</p>
                 <div className="mt-10 pt-6 border-t border-[var(--gray-100)] flex items-center justify-center gap-2 text-[var(--primary-blue)] font-black text-[10px] uppercase tracking-widest opacity-40 group-hover:opacity-100 transition-all">
                   VIEW RECORDS <span className="transform group-hover:translate-x-2 transition-transform">→</span>
                 </div>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* Global Impact Banner */}
      <section className="py-32 bg-[var(--primary-blue)] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
           <Image src="/stone.jpg" alt="Texture" fill className="object-cover" />
        </div>
        <div className="container-custom relative z-10 text-center">
           <h2 className="text-4xl md:text-7xl font-black text-white italic uppercase tracking-tighter mb-8">OBA World Map</h2>
           <p className="text-xl text-gray-300 font-medium max-w-3xl mx-auto leading-relaxed mb-12">
             The Pathanian identity transcends borders. Wherever you are, there is a branch dedicated to your professional and personal growth through the OBA network.
           </p>
           <div className="w-24 h-1 bg-[var(--accent-gold)] mx-auto rounded-full"></div>
        </div>
      </section>

      {/* Foreign Branches */}
      <section className="section-padding bg-[var(--gray-50)]">
        <div className="container-custom">
           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
             {foreignGroups.map((group, index) => (
               <div key={index} className="bg-white p-12 rounded-[4rem] border border-[var(--gray-200)] hover:border-[var(--accent-gold)] hover:shadow-2xl transition-all group flex flex-col items-center text-center">
                 <div className="text-7xl mb-8 transform group-hover:scale-110 transition-transform duration-500">{group.icon}</div>
                 <h3 className="text-3xl font-black text-[var(--primary-blue)] mb-2 italic uppercase tracking-tighter">{group.name}</h3>
                 <p className="text-gray-400 font-bold uppercase text-xs tracking-widest mb-10">{group.region}</p>
                 <div className="flex gap-4">
                    <button className="px-8 py-3 bg-[var(--primary-blue)] text-white text-[10px] font-black uppercase tracking-widest rounded-2xl hover:bg-[var(--primary-blue-dark)] transition-colors">
                       CONTACT BRANCH
                    </button>
                 </div>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* Universal Footer */}
      <section className="py-24 bg-white text-center">
         <div className="container-custom">
            <h2 className="text-3xl md:text-5xl font-black text-[var(--primary-blue)] mb-8 tracking-tighter uppercase italic">"Once a Pathanian, Always a Pathanian"</h2>
            <p className="text-xl text-gray-500 font-bold max-w-2xl mx-auto mb-12 leading-relaxed">
              Missing your batch or region? Assist us in expanding our global footprint by registering your affiliate group with the Central OBA Office.
            </p>
            <Link href="/contact" className="px-12 py-6 bg-[var(--accent-gold)] text-[var(--primary-blue)] font-black rounded-3xl hover:scale-105 transition-transform shadow-2xl uppercase tracking-tighter">
               INITIATE NEW AFFILIATE
            </Link>
         </div>
      </section>
    </div>
  );
}
