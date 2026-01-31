import Image from 'next/image';
import Link from 'next/link';

export default function HandballPage() {
  const focuses = [
    { title: "Tactical Depth", description: "Emphasis on complex offensive patterns and impenetrable defensive synchronization." },
    { title: "Physical Power", description: "Conditioning programs designed for explosive movement and high-impact play." },
    { title: "Team Synergy", description: "Building an intuitive connection between players through rigorous drills." }
  ];

  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="relative py-32 md:py-48 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/Home Hero 2.jpg"
            alt="Isipathana Handball"
            fill
            className="object-cover scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary-blue)]/90 via-[var(--primary-blue)]/80 to-transparent"></div>
        </div>
        <div className="relative container-custom text-white">
          <div className="max-w-4xl">
            <span className="inline-block px-4 py-1 bg-[var(--accent-gold)] text-[var(--primary-blue)] text-xs font-black rounded-full mb-6 uppercase tracking-[0.2em]">Intensity & Rhythm</span>
            <h1 className="text-6xl md:text-9xl font-black mb-6 tracking-tighter uppercase italic leading-none">
              HANDBALL <br/>COURT
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed italic border-l-4 border-[var(--accent-gold)] pl-6 max-w-2xl">
              "A game of speed, strategy, and sheer determination. Pushing the limits of team coordination."
            </p>
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="relative -mt-12 z-10 pb-20">
        <div className="container-custom">
           <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
              {[
                { label: 'Intensity', value: 'High' },
                { label: 'Team Size', value: '07' },
                { label: 'Age Groups', value: '04' },
                { label: 'Status', value: 'Elite' }
              ].map((stat, idx) => (
                <div key={idx} className="bg-white p-8 rounded-[3rem] shadow-2xl text-center group hover:border-[var(--accent-gold)] transition-all">
                   <p className="text-4xl md:text-5xl font-black text-[var(--primary-blue)] mb-2 tracking-tighter italic">{stat.value}</p>
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
                    <Image src="/stone.jpg" alt="Artistry" fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary-blue)]/60 to-transparent"></div>
                    <div className="absolute bottom-10 left-10 p-10 bg-white/10 backdrop-blur-2xl rounded-[3rem] border border-white/20 text-white max-w-xs">
                       <p className="text-2xl font-black italic mb-2 tracking-tighter">Throwball & Handball</p>
                       <p className="text-sm font-bold uppercase tracking-widest text-[var(--accent-gold)]">The Pathanian Energy</p>
                    </div>
                 </div>
              </div>
              
              <div>
                 <h2 className="text-4xl md:text-6xl font-black text-[var(--primary-blue)] mb-8 uppercase tracking-tighter italic leading-tight">Mastering the Throw</h2>
                 <p className="text-xl text-gray-500 font-bold leading-relaxed mb-12">
                   Handball and Throwball at Isipathana are celebrated for their dynamic pace and physical demand. Our program is designed to create versatile athletes who can think on their feet while maintaining high-impact performance throughout the match.
                 </p>
                 <div className="space-y-6 mb-12">
                    {focuses.map((item, idx) => (
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
           <h2 className="text-4xl md:text-6xl font-black text-white italic uppercase tracking-tighter mb-8 text-center w-full">Unified Purpose</h2>
           <p className="text-xl text-gray-300 font-medium max-w-3xl mx-auto leading-relaxed mb-12 text-center">
             Beyond the physical game, our court sports instill a sense of absolute trust and collaboration among students, creating bonds that last a lifetime.
           </p>
           <div className="w-24 h-1 bg-[var(--accent-gold)] mx-auto rounded-full"></div>
        </div>
      </section>

      {/* Committee Placeholder */}
      <section className="section-padding bg-[var(--gray-50)]">
         <div className="container-custom">
            <div className="max-w-4xl mx-auto bg-white rounded-[4rem] p-12 md:p-24 text-center border border-[var(--gray-200)] shadow-sm">
               <span className="text-6xl mb-8 block">🤾</span>
               <h3 className="text-3xl md:text-5xl font-black text-[var(--primary-blue)] mb-6 tracking-tighter uppercase italic">Handball Committee</h3>
               <p className="text-xl text-gray-500 font-bold max-w-2xl mx-auto mb-12">
                 The official OBA oversight committee for handball is currently being organized for the 2024/2025 season. We welcome alumni support to enhance our court facilities.
               </p>
               <div className="flex justify-center gap-6">
                  <Link href="/contact" className="px-10 py-5 bg-[var(--primary-blue)] text-white font-black rounded-2xl hover:bg-[var(--primary-blue-dark)] transition-all shadow-xl">
                    SUPPORT THE PROGRAM
                  </Link>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
}
