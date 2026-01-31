import Link from 'next/link';
import Image from 'next/image';
import PageHeader from '@/components/PageHeader';

export default function AthleticsPage() {
  const categories = [
    { title: "Track Events", description: "Sprints, hurdles, and relays driven by explosive Pathanian speed." },
    { title: "Field Events", description: "Precision in jumps and throws, mastering technique and power." },
    { title: "Cross Country", description: "Testing the endurance and mental grit of our elite runners." }
  ];

  return (
    <div className="bg-white">
      <PageHeader 
        title="Athletics Excellence" 
        breadcrumbs={[
          { label: 'Sports', href: '/sports' },
          { label: 'Athletics Excellence' }
        ]} 
      />

      {/* Stats Quick View */}
      <section className="relative -mt-12 z-10 pb-20">
        <div className="container-custom">
           <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
              {[
                { label: 'Gold Medals', value: '150+' },
                { label: 'National Reps', value: '25+' },
                { label: 'Events', value: '18' },
                { label: 'Age Groups', value: '05' }
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
                 <div className="aspect-square relative rounded-[4rem] overflow-hidden shadow-2xl">
                    <Image src="/stone.jpg" alt="Track" fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary-blue)]/60 to-transparent"></div>
                    <div className="absolute bottom-10 left-10 p-10 bg-white/10 backdrop-blur-2xl rounded-[3rem] border border-white/20 text-white max-w-xs">
                       <p className="text-2xl font-black italic mb-2 tracking-tighter">Velocity</p>
                       <p className="text-sm font-bold uppercase tracking-widest text-[var(--accent-gold)]">Dominating the track</p>
                    </div>
                 </div>
              </div>
              
              <div>
                 <h2 className="text-4xl md:text-6xl font-black text-[var(--primary-blue)] mb-8 uppercase tracking-tighter italic leading-tight">Future <br/>Olympians</h2>
                 <p className="text-xl text-gray-500 font-bold leading-relaxed mb-12">
                   Athletics is the cornerstone of physical development at Isipathana. We focus on specialized coaching for sprints, middle-distance running, and field events, nurturing talent from junior school level to national podiums.
                 </p>
                 <div className="space-y-6 mb-12">
                    {categories.map((item, idx) => (
                      <div key={idx} className="p-8 bg-[var(--gray-50)] rounded-3xl border border-transparent hover:border-[var(--accent-gold)] hover:bg-white transition-all group">
                        <h4 className="text-xl font-black text-[var(--primary-blue)] mb-2 italic uppercase">{item.title}</h4>
                        <p className="text-sm font-bold text-gray-500 leading-relaxed uppercase tracking-tight">{item.description}</p>
                      </div>
                    ))}
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Banner */}
      <section className="py-32 bg-[var(--primary-blue)] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
           <Image src="/stone.jpg" alt="Texture" fill className="object-cover" />
        </div>
        <div className="container-custom relative z-10 text-center flex flex-col items-center">
           <h2 className="text-4xl md:text-6xl font-black text-white italic uppercase tracking-tighter mb-8 text-center">Pushing Every Limit</h2>
           <p className="text-xl text-gray-300 font-medium max-w-3xl mx-auto leading-relaxed mb-12 text-center uppercase tracking-tight">
             Our athletes utilize world-class facilities at the Sugathadasa Stadium and our own college grounds, backed by an OBA that prioritizes physical excellence.
           </p>
           <div className="w-24 h-1 bg-[var(--accent-gold)] mx-auto rounded-full"></div>
        </div>
      </section>

      {/* Committee Placeholder */}
      <section className="section-padding bg-[var(--gray-50)]">
         <div className="container-custom">
            <div className="max-w-4xl mx-auto bg-white rounded-[4rem] p-12 md:p-24 text-center border border-[var(--gray-200)] shadow-sm">
               <span className="text-6xl mb-8 block">🏃</span>
               <h3 className="text-3xl md:text-5xl font-black text-[var(--primary-blue)] mb-6 tracking-tighter uppercase italic">Athletics Board</h3>
               <p className="text-xl text-gray-500 font-bold max-w-2xl mx-auto mb-12">
                 Join our training squads and compete for glory. Contact the sports secretariat for the upcoming trials schedule.
               </p>
               <div className="flex justify-center gap-6">
                  <Link href="/contact" className="px-10 py-5 bg-[var(--primary-blue)] text-white font-black rounded-2xl hover:bg-[var(--primary-blue-dark)] transition-all shadow-xl uppercase tracking-tighter">
                    TRIAL INFORMATION
                  </Link>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
}
