import Image from 'next/image';
import Link from 'next/link';

export default function PastCommitteesPage() {
  const decades = [
    {
      period: "2010 - 2020",
      description: "A decade marked by unprecedented infrastructure development and sports dominance. Key highlights include the major renovation of the college gymnasium and the establishment of the smart-classroom initiative.",
      notableLeaders: ["Mr. Jagath Alwis (Past President)", "Mr. Sanjeewa Wickramasinghe (Past Secretary)"],
      icon: "🏢"
    },
    {
      period: "2000 - 2010",
      description: "Focused on global connectivity and the modernization of the OBA's administrative framework. This era saw the formation of several international alumni branches in the UK, Australia, and the Middle East.",
      notableLeaders: ["Mr. Ranjan Perera (Past President)", "Mr. Bandula Warnapura (Honorary Member)"],
      icon: "🌍"
    },
    {
      period: "1992 - 2000",
      description: "The foundational years. Visionary leaders established the core values of the association and secured the school's heritage as one of the premier educational institutions in Colombo.",
      notableLeaders: ["Founding Committee Members", "Early Presidents & Patrons"],
      icon: "🏛️"
    }
  ];

  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/stone.jpg"
            alt="Isipathana OBA History"
            fill
            className="object-cover scale-110"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary-blue)] to-[var(--primary-blue-dark)] opacity-95"></div>
        </div>
        <div className="relative container-custom text-white text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tighter uppercase italic">Legacy of Service</h1>
            <p className="text-xl md:text-2xl text-gray-300 font-medium tracking-wide">
              HONORING THREE DECADES OF VOLUNTARY LEADERSHIP AND DEDICATION
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-[var(--gray-50)]">
        <div className="container-custom">
          <div className="grid lg:grid-cols-12 gap-16">
            
            {/* Intro Text */}
            <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit">
              <h2 className="text-4xl font-black text-[var(--primary-blue)] mb-8 uppercase tracking-tighter">Our Executive Heritage</h2>
              <div className="w-20 h-2 bg-[var(--accent-gold)] mb-8"></div>
              <p className="text-xl text-gray-500 font-bold leading-relaxed mb-8">
                Since 1992, the Isipathana College OBA has been driven by the selfless contributions of our alumni. Every building, every trophy, and every scholarship is a testament to the leadership that came before us.
              </p>
              <div className="p-8 bg-white rounded-3xl border border-[var(--gray-200)] shadow-sm">
                 <p className="text-gray-400 font-black text-xs uppercase tracking-widest mb-2">Total Service Years</p>
                 <p className="text-5xl font-black text-[var(--primary-blue)]">34<span className="text-[var(--accent-gold)] tracking-tight">+</span></p>
                 <p className="text-sm font-bold text-gray-500 mt-2">Years of Continuous Operation</p>
              </div>
            </div>

            {/* Timeline */}
            <div className="lg:col-span-8 space-y-12">
              {decades.map((decade, idx) => (
                <div key={idx} className="bg-white rounded-[3.5rem] p-10 md:p-16 border border-[var(--gray-200)] hover:border-[var(--accent-gold)] hover:shadow-2xl transition-all group relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-[var(--gray-50)] rounded-full -mr-20 -mt-20 group-hover:bg-[var(--accent-gold)]/5 transition-colors"></div>
                  
                  <div className="flex flex-col md:flex-row gap-10">
                    <div className="flex-shrink-0">
                      <div className="text-5xl mb-4 group-hover:scale-125 transition-transform">{decade.icon}</div>
                      <div className="text-4xl font-black text-[var(--primary-blue)] tracking-tighter italic">{decade.period}</div>
                    </div>
                    
                    <div className="flex-1">
                      <p className="text-xl text-gray-500 font-bold leading-relaxed italic mb-8 border-l-2 border-[var(--gray-100)] pl-6 group-hover:border-[var(--accent-gold)] transition-colors">
                        "{decade.description}"
                      </p>
                      
                      <div>
                        <h4 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-6 flex items-center gap-3">
                          <span className="w-8 h-[1px] bg-gray-200"></span>
                          Notable Leaders
                        </h4>
                        <div className="flex flex-wrap gap-4">
                          {decade.notableLeaders.map((leader, lIdx) => (
                            <div key={lIdx} className="px-6 py-4 bg-[var(--gray-50)] rounded-2xl border border-transparent group-hover:border-[var(--gray-200)] group-hover:bg-white text-[var(--primary-blue)] font-black text-sm uppercase tracking-tight shadow-sm transition-all transform hover:-translate-y-1">
                              {leader}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Archival Call */}
      <section className="section-padding bg-white">
        <div className="container-custom">
           <div className="relative bg-[var(--primary-blue)] rounded-[4rem] p-12 md:p-24 text-center text-white overflow-hidden shadow-2xl">
              <div className="absolute inset-0 opacity-10 pointer-events-none">
                 <Image src="/stone.jpg" alt="Archives" fill className="object-cover" />
              </div>
              <div className="relative z-10 max-w-4xl mx-auto">
                 <h3 className="text-4xl md:text-5xl font-black mb-8 italic">"To live in hearts we leave behind is not to die."</h3>
                 <p className="text-xl text-gray-300 font-medium max-w-2xl mx-auto mb-12">
                   We are currently archiving the full list of committee members from 1992 to 2026. If you possess historical records, meeting minutes, or photographs, please assist our archiving committee.
                 </p>
                 <div className="flex flex-wrap justify-center gap-6">
                    <a href="mailto:archives@isipathanaoba.lk" className="px-10 py-5 bg-[var(--accent-gold)] text-[var(--primary-blue)] font-black rounded-3xl hover:bg-white transition-all shadow-xl">
                       CONTRIBUTE TO ARCHIVES
                    </a>
                    <Link href="/contact" className="px-10 py-5 bg-white/10 border border-white/20 text-white font-black rounded-3xl hover:bg-white/20 transition-all">
                       CONTACT OBA OFFICE
                    </Link>
                 </div>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
}
