import Link from 'next/link';
import Image from 'next/image';
import PageHeader from '@/components/PageHeader';

export default function CricketPage() {
  const achievements = [
    { title: "Western Province Champions", year: "2023", category: "U-19" },
    { title: "Big Match Winners", year: "2022", category: "U-19" },
    { title: "T20 School Champions", year: "2021", category: "U-19" },
    { title: "Limited Overs Runners-up", year: "2023", category: "U-17" }
  ];

  const legends = [
    { name: "Asanka Gurusinha", role: "World Cup Winner 1996" },
    { name: "Nuwan Zoysa", role: "Former National Player" },
    { name: "Suresh Perera", role: "Former National Player" },
    { name: "S. Jayantha", role: "Former National Player" }
  ];

  return (
    <div className="bg-white">
      <PageHeader 
        title="Cricket Legacy" 
        breadcrumbs={[
          { label: 'Sports', href: '/sports' },
          { label: 'Cricket Legacy' }
        ]} 
      />

      {/* Stats Quick View */}
      <section className="relative -mt-12 z-10 pb-20">
        <div className="container-custom">
           <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
              {[
                { label: 'WP Titles', value: '12' },
                { label: 'Big Matches', value: '61' },
                { label: 'SL Caps', value: '10+' },
                { label: 'Elite Teams', value: '06' }
              ].map((stat, idx) => (
                <div key={idx} className="bg-white p-8 rounded-[3rem] shadow-2xl text-center group hover:border-[var(--accent-gold)] transition-all">
                   <p className="text-4xl md:text-6xl font-black text-[var(--primary-blue)] mb-2 tracking-tighter italic">{stat.value}</p>
                   <p className="text-xs font-black text-gray-400 uppercase tracking-widest">{stat.label}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="section-padding overflow-hidden">
        <div className="container-custom">
           <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div className="relative">
                 <div className="aspect-[4/5] relative rounded-[4rem] overflow-hidden shadow-2xl">
                    <Image src="/stone.jpg" alt="Impact" fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary-blue)]/60 to-transparent"></div>
                    <div className="absolute bottom-10 left-10 p-10 bg-white/10 backdrop-blur-2xl rounded-[3rem] border border-white/20 text-white max-w-xs">
                       <p className="text-5xl font-black italic mb-2 tracking-tighter">1952</p>
                       <p className="text-sm font-bold uppercase tracking-widest text-[var(--accent-gold)]">Established Excellence</p>
                    </div>
                 </div>
              </div>
              
              <div>
                 <h2 className="text-4xl md:text-6xl font-black text-[var(--primary-blue)] mb-8 uppercase tracking-tighter italic leading-tight">The Pathanian <br/>Cricketing Spirit</h2>
                 <p className="text-xl text-gray-500 font-bold leading-relaxed mb-8">
                   Cricket at Isipathana College is a tradition of excellence. Known for our aggressive style and unwavering sportsmanship, our cricketers have consistently dominated the school arena, producing legends who have graced the international stage.
                 </p>
                 <div className="space-y-6 mb-12">
                    {achievements.map((item, idx) => (
                      <div key={idx} className="p-8 bg-[var(--gray-50)] rounded-3xl border border-transparent hover:border-[var(--accent-gold)] hover:bg-white transition-all group">
                        <div className="flex justify-between items-start">
                           <h4 className="text-xl font-black text-[var(--primary-blue)] mb-2 italic uppercase">{item.title}</h4>
                           <span className="text-[var(--accent-gold)] font-black italic">{item.year}</span>
                        </div>
                        <p className="text-sm font-bold text-gray-400 leading-relaxed uppercase tracking-tighter">{item.category}</p>
                      </div>
                    ))}
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Legends Grid */}
      <section className="section-padding bg-[var(--gray-50)]">
         <div className="container-custom">
            <div className="text-center mb-24">
               <h2 className="text-4xl md:text-6xl font-black text-[var(--primary-blue)] uppercase tracking-tighter italic">Lions of Greenlands</h2>
               <div className="w-24 h-1 bg-[var(--accent-gold)] mx-auto mt-6"></div>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8">
               {legends.map((legend, idx) => (
                 <div key={idx} className="bg-white p-12 rounded-[3.5rem] border border-[var(--gray-200)] hover:border-[var(--accent-gold)] hover:shadow-2xl transition-all text-center group">
                    <div className="w-24 h-24 bg-[var(--primary-blue)]/5 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:bg-[var(--primary-blue)] group-hover:text-white transition-colors duration-500">
                       <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                       </svg>
                    </div>
                    <h3 className="text-2xl font-black text-[var(--primary-blue)] mb-2 italic uppercase tracking-tighter">{legend.name}</h3>
                    <p className="text-xs font-black text-[var(--accent-gold-dark)] uppercase tracking-widest">{legend.role}</p>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* Committee Placeholder */}
      <section className="section-padding">
         <div className="container-custom">
            <div className="max-w-4xl mx-auto bg-[var(--primary-blue)] rounded-[4rem] p-12 md:p-24 text-center border border-[var(--gray-800)] shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>
               <span className="text-6xl mb-8 block relative z-10">🏏</span>
               <h3 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tighter uppercase italic relative z-10 text-center">Cricket Committee</h3>
               <p className="text-xl text-gray-300 font-bold max-w-2xl mx-auto mb-12 relative z-10 leading-relaxed uppercase text-center">
                 Our coaching staff and team management for the current season are dedicated to bringing back the championship trophies to Greenlands.
               </p>
               <div className="flex justify-center gap-6 relative z-10">
                  <Link href="/contact" className="px-10 py-5 bg-[var(--accent-gold)] text-[var(--primary-blue)] font-black rounded-2xl hover:bg-white transition-all shadow-xl uppercase tracking-tighter">
                    JOIN THE EFFORT
                  </Link>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
}
