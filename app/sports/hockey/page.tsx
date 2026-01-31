import Image from 'next/image';
import Link from 'next/link';

export default function HockeyPage() {
  const highlights = [
    { title: "Technical Skill", description: "Emphasis on precision stick-work and ball control from the early developmental stages." },
    { title: "Team Strategy", description: "Sophisticated play patterns and spatial awareness tactical training." },
    { title: "Global Network", description: "Strong alumni base providing mentorship and infrastructure support for the team." }
  ];

  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="relative py-32 md:py-48 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/Home Hero 2.jpg"
            alt="Isipathana Hockey"
            fill
            className="object-cover scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary-blue)]/90 via-[var(--primary-blue)]/80 to-transparent"></div>
        </div>
        <div className="relative container-custom text-white">
          <div className="max-w-4xl">
            <span className="inline-block px-4 py-1 bg-[var(--accent-gold)] text-[var(--primary-blue)] text-xs font-black rounded-full mb-6 uppercase tracking-[0.2em]">Precision & Speed</span>
            <h1 className="text-6xl md:text-9xl font-black mb-6 tracking-tighter uppercase italic leading-none">
              HOCKEY <br/>TURF
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed italic border-l-4 border-[var(--accent-gold)] pl-6 max-w-2xl">
              "Tactical mastery on the field. A sport of heritage and high-intensity coordination."
            </p>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="relative -mt-12 z-10 pb-20">
        <div className="container-custom">
           <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
              {[
                { label: 'Active Age Groups', value: '04' },
                { label: 'Specialized Coaches', value: '02' },
                { label: 'Annual Fixtures', value: '15+' }
              ].map((stat, idx) => (
                <div key={idx} className="bg-white p-10 rounded-[3rem] shadow-2xl text-center group hover:border-[var(--accent-gold)] transition-all">
                   <p className="text-5xl md:text-6xl font-black text-[var(--primary-blue)] mb-2 tracking-tighter italic">{stat.value}</p>
                   <p className="text-xs font-black text-gray-400 uppercase tracking-widest">{stat.label}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="section-padding overflow-hidden">
        <div className="container-custom">
           <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div className="relative">
                 <div className="aspect-[4/5] relative rounded-[4rem] overflow-hidden shadow-2xl">
                    <Image src="/stone.jpg" alt="Hockey Action" fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary-blue)]/60 to-transparent"></div>
                    <div className="absolute bottom-10 left-10 p-10 bg-white/10 backdrop-blur-2xl rounded-[3rem] border border-white/20 text-white max-w-xs">
                       <p className="text-2xl font-black italic mb-2 tracking-tighter">Strategic Excellence</p>
                       <p className="text-sm font-bold uppercase tracking-widest text-[var(--accent-gold)]">The Pathanian Turf Legacy</p>
                    </div>
                 </div>
              </div>
              
              <div>
                 <h2 className="text-4xl md:text-6xl font-black text-[var(--primary-blue)] mb-8 uppercase tracking-tighter italic leading-tight">Mastering the Field</h2>
                 <p className="text-xl text-gray-500 font-bold leading-relaxed mb-12">
                   Hockey at Isipathana College is defined by technical brilliance. Our program focuses on developing high-speed ball control and synchronized tactical movement, ensuring every player excels in the modern game.
                 </p>
                 <div className="space-y-12 mb-12">
                    {highlights.map((item, idx) => (
                      <div key={idx} className="flex gap-6 group">
                        <div className="w-12 h-12 bg-[var(--primary-blue)]/5 rounded-2xl flex items-center justify-center text-2xl group-hover:bg-[var(--primary-blue)] group-hover:text-white transition-all shadow-sm">
                           {idx + 1}
                        </div>
                        <div>
                           <h4 className="text-xl font-black text-[var(--primary-blue)] mb-2 uppercase italic">{item.title}</h4>
                           <p className="text-gray-500 font-bold leading-relaxed uppercase text-sm tracking-tight">{item.description}</p>
                        </div>
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
        <div className="container-custom relative z-10 text-center">
           <h2 className="text-4xl md:text-6xl font-black text-white italic uppercase tracking-tighter mb-8">Nurturing Future Olympians</h2>
           <p className="text-xl text-gray-300 font-medium max-w-3xl mx-auto leading-relaxed mb-12">
             Our hockey alumni work closely with the school to provide international-standard equipment and specialized training camps for our budding stars.
           </p>
           <div className="w-24 h-1 bg-[var(--accent-gold)] mx-auto rounded-full"></div>
        </div>
      </section>

      {/* Committee Section */}
      <section className="section-padding bg-[var(--gray-50)]">
         <div className="container-custom">
            <div className="max-w-4xl mx-auto bg-white rounded-[4rem] p-12 md:p-24 text-center border border-[var(--gray-200)] shadow-sm">
               <span className="text-6xl mb-8 block">🏑</span>
               <h3 className="text-3xl md:text-5xl font-black text-[var(--primary-blue)] mb-6 tracking-tighter uppercase italic">Hockey Committee</h3>
               <p className="text-xl text-gray-500 font-bold max-w-2xl mx-auto mb-12">
                 The management committee is currently reviewing the infrastructure requirements for the next season. For sponsorship or support inquiries, please contact our secretariat.
               </p>
               <div className="flex justify-center gap-6">
                  <Link href="/contact" className="px-10 py-5 bg-[var(--primary-blue)] text-white font-black rounded-2xl hover:bg-[var(--primary-blue-dark)] transition-all shadow-xl">
                    INQUIRE NOW
                  </Link>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
}
