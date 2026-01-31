import Link from 'next/link';
import Image from 'next/image';
import PageHeader from '@/components/PageHeader';

export default function RugbyPage() {
  const achievements = [
    { title: "League Champions", years: "1982, 1983, 1985, 1986, 1992, 1993, 1994, 1995, 1996, 1997, 1999, 2012, 2014, 2016, 2022" },
    { title: "Knockout Champions", years: "1985, 1986, 1996, 1997, 1998, 1999, 2012, 2014, 2016, 2022" },
    { title: "Sevens Champions", years: "Multiple Titles (Record Holders)" }
  ];

  return (
    <div className="bg-white">
      <PageHeader 
        title="Rugby Heritage" 
        breadcrumbs={[
          { label: 'Sports', href: '/sports' },
          { label: 'Rugby Heritage' }
        ]} 
      />

      {/* Stats Quick View */}
      <section className="relative -mt-12 z-10 pb-20">
        <div className="container-custom">
           <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
              {[
                { label: 'League Titles', value: '15' },
                { label: 'Knockout Cups', value: '10' },
                { label: 'SL Caps', value: '100+' },
                { label: 'Triple Crowns', value: '05' }
              ].map((stat, idx) => (
                <div key={idx} className="bg-white p-8 rounded-[3rem] shadow-2xl text-center group hover:border-[var(--accent-gold)] transition-all">
                   <p className="text-4xl md:text-6xl font-black text-[var(--primary-blue)] mb-2 tracking-tighter italic">{stat.value}</p>
                   <p className="text-xs font-black text-gray-400 uppercase tracking-widest">{stat.label}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Legacy Section */}
      <section className="section-padding overflow-hidden">
        <div className="container-custom">
           <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div className="relative">
                 <div className="aspect-[4/5] relative rounded-[4rem] overflow-hidden shadow-2xl">
                    <Image src="/stone.jpg" alt="Legacy" fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary-blue)]/60 to-transparent"></div>
                    <div className="absolute bottom-10 left-10 p-10 bg-white/10 backdrop-blur-2xl rounded-[3rem] border border-white/20 text-white max-w-xs">
                       <p className="text-5xl font-black italic mb-2 tracking-tighter">1952</p>
                       <p className="text-sm font-bold uppercase tracking-widest text-[var(--accent-gold)]">The inception of a powerhouse</p>
                    </div>
                 </div>
                 <div className="absolute -top-10 -right-10 w-40 h-40 bg-[var(--accent-gold)] rounded-full -z-10 opacity-20 blur-2xl"></div>
              </div>
              
              <div>
                 <h2 className="text-4xl md:text-6xl font-black text-[var(--primary-blue)] mb-8 uppercase tracking-tighter italic leading-tight">The Green Machine <br/>Phenomenon</h2>
                 <p className="text-xl text-gray-500 font-bold leading-relaxed mb-8">
                   Isipathana Rugby is not just a sport; it is the heartbeat of the college. Known globally as the "Green Machine," our tactical brilliance and explosive speed have set the benchmark for schools rugby in Asia.
                 </p>
                 <div className="space-y-6 mb-12">
                    {achievements.map((item, idx) => (
                      <div key={idx} className="p-8 bg-[var(--gray-50)] rounded-3xl border border-transparent hover:border-[var(--accent-gold)] hover:bg-white transition-all">
                        <h4 className="text-xl font-black text-[var(--primary-blue)] mb-2 italic uppercase">{item.title}</h4>
                        <p className="text-sm font-bold text-gray-400 leading-relaxed uppercase tracking-tighter">{item.years}</p>
                      </div>
                    ))}
                 </div>
                 <Link href="/membership" className="inline-flex items-center gap-4 px-10 py-5 bg-[var(--primary-blue)] text-white font-black rounded-3xl hover:bg-[var(--primary-blue-dark)] transition-all shadow-xl group">
                    SUPPORT THE GREEN MACHINE
                    <span className="text-[var(--accent-gold)] group-hover:translate-x-2 transition-transform">→</span>
                 </Link>
              </div>
           </div>
        </div>
      </section>

      {/* Full Width Impact Section */}
      <section className="py-32 bg-[var(--primary-blue)] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
           <Image src="/stone.jpg" alt="Texture" fill className="object-cover" />
        </div>
        <div className="container-custom relative z-10 text-center">
           <h2 className="text-4xl md:text-7xl font-black text-white italic uppercase tracking-tighter mb-8">Unmatched Supremacy</h2>
           <p className="text-xl md:text-2xl text-gray-300 font-medium max-w-4xl mx-auto leading-relaxed mb-12">
             From the historic Longdon Place battles to the modern era championships, Isipathana has consistently produced legends of the game, holding the record for the most number of triple crowns in schools rugby history.
           </p>
           <div className="w-24 h-1 bg-[var(--accent-gold)] mx-auto rounded-full"></div>
        </div>
      </section>

      {/* Committee Placeholder */}
      <section className="section-padding bg-[var(--gray-50)]">
         <div className="container-custom">
            <div className="bg-white rounded-[4rem] p-12 md:p-24 text-center border border-[var(--gray-200)] shadow-sm">
               <span className="text-6xl mb-8 block">🏉</span>
               <h3 className="text-3xl md:text-5xl font-black text-[var(--primary-blue)] mb-6 tracking-tighter uppercase italic">Rugby Committee 2024/2025</h3>
               <p className="text-xl text-gray-500 font-bold max-w-2xl mx-auto mb-12">
                 The official committee oversight for the current season is currently being finalized. The OBA remains committed to providing the best infrastructure for our players.
               </p>
               <div className="flex justify-center gap-6">
                  <Link href="/contact" className="px-10 py-5 bg-white border-2 border-[var(--primary-blue)] text-[var(--primary-blue)] font-black rounded-3xl hover:bg-[var(--primary-blue)] hover:text-white transition-all shadow-sm">
                    CONTACT COMMITTEE
                  </Link>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
}
