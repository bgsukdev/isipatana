import Link from 'next/link';
import Image from 'next/image';
import PageHeader from '@/components/PageHeader';

export default function SportsPage() {
  const sports = [
    { name: "Cricket", icon: "🏏", description: "The gentleman's game, built on heritage.", href: "/sports/cricket", color: "#FFD700" },
    { name: "Rugby", icon: "🏉", description: "The Green Machine's legacy of power.", href: "/sports/rugby", color: "#0D5C2F" },
    { name: "Athletics", icon: "🏃", description: "Speed, agility, and provincial dominance.", href: "/sports/athletics", color: "#4CAF50" },
    { name: "Badminton", icon: "🏸", description: "Precision and lightning-fast reflexes.", href: "/sports/badminton", color: "#2E7D32" },
    { name: "Basketball", icon: "🏀", description: "Tactical teamwork and elite coordination.", href: "/sports/basketball", color: "#1B5E20" },
    { name: "Gymnastics", icon: "🤸", description: "Grace and clinical physical strength.", href: "/sports/gymnastics", color: "#81C784" },
    { name: "Hockey", icon: "🏑", description: "Technical mastery on the Pathanian turf.", href: "/sports/hockey", color: "#388E3C" },
    { name: "Table Tennis", icon: "🏓", description: "Unmatched focus and split-second speed.", href: "/sports/table-tennis", color: "#66BB6A" },
  ];

  return (
    <div className="bg-white">
      <PageHeader 
        title="Sports Development" 
        breadcrumbs={[{ label: 'Sports' }]} 
      />

      {/* Intro Stats */}
      <section className="relative mt-20 z-10 pb-20">
        <div className="container-custom">
           <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
              {[
                { label: 'Olympic Sports', value: '12+' },
                { label: 'Gold Medals', value: '150+' },
                { label: 'Active Athletes', value: '2500' },
                { label: 'Coaching Staff', value: '25' }
              ].map((stat, idx) => (
                <div key={idx} className="bg-white p-8 md:p-12 rounded-[3.5rem] shadow-2xl border border-[var(--gray-100)] text-center group hover:border-[var(--accent-gold)] transition-all">
                   <p className="text-4xl md:text-6xl font-black text-[var(--primary-blue)] mb-2 tracking-tighter italic">{stat.value}</p>
                   <p className="text-xs font-black text-gray-400 uppercase tracking-widest">{stat.label}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Sports Grid */}
      <section className="section-padding overflow-hidden bg-[var(--gray-50)]">
        <div className="container-custom">
           <div className="text-center mb-24">
              <h2 className="text-4xl md:text-6xl font-black text-[var(--primary-blue)] uppercase tracking-tighter italic">Our Disciplines</h2>
              <div className="w-24 h-1 bg-[var(--accent-gold)] mx-auto mt-6"></div>
           </div>
           
           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
             {sports.map((sport, index) => (
               <Link 
                 key={index} 
                 href={sport.href}
                 className="group bg-white rounded-[3.5rem] p-10 hover:shadow-2xl hover:border-[var(--accent-gold)] transition-all flex flex-col items-center text-center relative overflow-hidden"
               >
                 <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--gray-50)] rounded-full -mr-16 -mt-16 group-hover:bg-[var(--accent-gold)]/5 transition-colors"></div>
                 <div className="text-7xl mb-8 group-hover:scale-110 transition-transform duration-500">{sport.icon}</div>
                 <h3 className="text-2xl font-black text-[var(--primary-blue)] mb-4 italic uppercase">{sport.name}</h3>
                 <p className="text-gray-500 font-bold text-sm leading-relaxed mb-8 flex-1">{sport.description}</p>
                 <div className="text-[var(--accent-gold-dark)] font-black text-xs uppercase tracking-widest group-hover:translate-x-2 transition-transform">
                   Explored Field →
                 </div>
               </Link>
             ))}
           </div>
        </div>
      </section>

      {/* Facilities Highlight */}
      <section className="section-padding bg-white">
        <div className="container-custom">
           <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div>
                 <h2 className="text-4xl md:text-6xl font-black text-[var(--primary-blue)] mb-8 uppercase tracking-tighter italic leading-tight">World-Class <br/>Infrastructure</h2>
                 <p className="text-xl text-gray-500 font-bold leading-relaxed mb-12">
                   The OBA specializes in the management and development of school sports facilities, continuously upgrading existing infrastructure to meet international standards.
                 </p>
                  <div className="space-y-12">
                    {[
                      { title: "Modern Sports Complex", desc: "State-of-the-art indoor and outdoor multi-sport facilities." },
                      { title: "Professional Coaching", desc: "Access to national-level trainers for all age categories." },
                      { title: "Elite Equipment", desc: "Regular procurement of high-grade athletic and safety gear." }
                    ].map((item, i) => (
                      <div key={i} className="flex gap-6 p-6 rounded-[2.5rem] border border-[var(--gray-100)] bg-[var(--gray-50)]">
                         <div className="w-12 h-12 bg-[var(--primary-blue)] rounded-2xl flex items-center justify-center text-white font-black">{i+1}</div>
                         <div>
                            <h4 className="font-black text-[var(--primary-blue)] uppercase text-lg italic">{item.title}</h4>
                            <p className="text-sm font-bold text-gray-400">{item.desc}</p>
                         </div>
                      </div>
                    ))}
                  </div>
              </div>
              <div className="relative">
                 <div className="aspect-square relative rounded-[4rem] overflow-hidden shadow-2xl">
                    <Image src="/stone.jpg" alt="Training" fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary-blue)]/60 to-transparent flex items-end p-16">
                       <p className="text-white text-3xl font-black italic uppercase leading-none border-l-4 border-[var(--accent-gold)] pl-8">
                         Building <br/>Tomorrow's <br/>Champions
                       </p>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Support CTA */}
      <section className="py-32 bg-[var(--primary-blue)] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
           <Image src="/stone.jpg" alt="Texture" fill className="object-cover" />
        </div>
        <div className="container-custom relative z-10 text-center flex flex-col items-center">
           <h2 className="text-4xl md:text-7xl font-black text-white italic uppercase tracking-tighter mb-8 text-center w-full">Fuel the Ambition</h2>
           <p className="text-xl text-gray-300 font-medium max-w-3xl mx-auto leading-relaxed mb-12 text-center">
             Contributing to the Sports Development Fund directly impacts the health, discipline, and future success of our students.
           </p>
           <div className="flex justify-center gap-6">
              <Link href="/membership" className="px-12 py-6 bg-[var(--accent-gold)] text-[var(--primary-blue)] font-black rounded-[2rem] hover:scale-105 transition-transform shadow-2xl text-xl uppercase tracking-tighter">
                CONTRIBUTE TO SPORTS
              </Link>
           </div>
        </div>
      </section>
    </div>
  );
}
