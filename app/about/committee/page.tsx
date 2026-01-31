import Image from 'next/image';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';

export default function CommitteePage() {
  const officeBearers = [
    { title: " President", name: "Mr.Darshana Udawaththa (Principal)", image: "/Principal of the School.jpg" },
    { title: "Senior Vice President", name: "Mr. Lasantha Gunawardana", image: "" },
    { title: "Vice President - Finance", name: "Mr. Roshan Maddumage", image: "" },
    { title: "Vice President - Sports", name: "Mr. Anura Gunasinghe", image: "" },
    { title: "Vice President - Education", name: "Mr. Asiri Gamage", image: "" },
    { title: "Vice President - Affiliated Associations", name: "Mr. Chandra Sri Wickramasinghe", image: "" },
    { title: "Joint Secretary", name: "Mr. Dushan Wickramasinghe", image: "" },
    { title: "Joint Secretary", name: "Mr. Janithya Sampath", image: "" },
    { title: "Treasurer", name: "Mr. Gamini Fernando", image: "" },
    { title: "Assistant Treasurer", name: "Mr. Sagara Duminda", image: "" },
    { title: "Sports Secretary", name: "Mr. Madawa Perera", image: "" },
    { title: "Education Secretary", name: "Mr. Viranga Thalgaswatta", image: "" },
    { title: "Joint Social Secretary", name: "Mr. Surath Piyumanjula", image: "" },
    { title: "Joint Social Secretary", name: "Mr. MJM Nawshad", image: "" },
  ];

  const committeeMembers = [
    "Mr. Sadun Dharmasiri", "Mr. Chamila Mathanga Kannangara", "Mr. Anusha Suwandaratne", 
    "Mr. Praveen Meegoda", "Mr. Gasnaffer Jalaldeen", "Mr. Duminda Seneviratne",
    "Mr. Senaka Jayawardana", "Mr. Amodh Jayasinghe", "Mr. Hirantha Gomas",
    "Mr. Nishantha Wickramasinghe", "Mr. Praveen Jayasekara", "Mr. Chandana Wijesinghe",
    "Mr. Mahesh Kooragama", "Dr. Senarupa Jayawardana", "Mr. Tharinda Amarasinghe",
    "Mr. Wiranga De Silva", "Mr. Chamara Prasanna", "Mr. Aravinda Perera",
    "Mr. Malinda Nanayakkara", "Mr. Hisham Ally", "Mr. Ranjith Jayawardena",
    "Mr. Tuan Sherrad Samath"
  ];

  return (
    <div className="bg-white">
      <PageHeader 
        title="Executive Council" 
        breadcrumbs={[
          { label: 'About Us', href: '/about' },
          { label: 'Executive Council' }
        ]} 
      />

      {/* Office Bearers Grid */}
      <section className="section-padding overflow-hidden">
        <div className="container-custom">
           <div className="text-center mb-24">
              <h2 className="text-4xl md:text-6xl font-black text-[var(--primary-blue)] uppercase tracking-tighter italic">Foundational Leadership</h2>
              <div className="w-24 h-1 bg-[var(--accent-gold)] mx-auto mt-6"></div>
           </div>
           
           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
             {officeBearers.map((member, idx) => (
                <div key={idx} className="group bg-white rounded-[3.5rem] hover:border-[var(--accent-gold)] hover:shadow-2xl transition-all overflow-hidden flex flex-col">
                  <div className="aspect-square relative bg-[var(--gray-50)]">
                    {member.image ? (
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center text-[var(--primary-blue)]/5">
                        <svg className="w-48 h-48" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                        </svg>
                      </div>
                    )}
                    <div className="absolute top-8 left-8">
                       <span className="px-5 py-2 bg-white/90 backdrop-blur-md text-[var(--primary-blue)] text-[10px] font-black rounded-xl shadow-sm uppercase tracking-widest border border-white/50">
                         {member.title}
                       </span>
                    </div>
                  </div>
                  <div className="p-10 text-center flex-1 flex flex-col justify-center">
                     <h3 className="text-2xl font-black text-[var(--primary-blue)] uppercase italic tracking-tighter">{member.name}</h3>
                  </div>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* Executive Members List */}
      <section className="section-padding bg-[var(--gray-50)]">
         <div className="container-custom">
            <div className="max-w-6xl mx-auto bg-white rounded-[4rem] p-8 md:p-16 lg:p-24 shadow-2xl relative">
               {/* Decorative Circle with its own container to avoid cutting off card content */}
               <div className="absolute top-0 right-0 w-64 h-64 overflow-hidden rounded-tr-[4rem] pointer-events-none">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--accent-gold)]/5 rounded-full -mr-32 -mt-32"></div>
               </div>
               
               <div className="relative z-10">
                  <div className="text-center mb-16 md:mb-20">
                    <h2 className="text-4xl md:text-5xl font-black text-[var(--primary-blue)] uppercase tracking-tighter italic">Council Members</h2>
                    <div className="w-20 h-1 bg-[var(--accent-gold)] mx-auto mt-6"></div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4 md:gap-y-6">
                    {committeeMembers.map((name, idx) => (
                      <div key={idx} className="flex items-center gap-6 py-4 border-b border-[var(--gray-100)] group hover:translate-x-2 transition-all">
                        <span className="w-10 h-10 rounded-2xl bg-[var(--primary-blue)] text-white flex items-center justify-center text-xs font-black shadow-lg shadow-[var(--primary-blue)]/20 flex-shrink-0">
                          {String(idx + 1).padStart(2, '0')}
                        </span>
                        <span className="text-gray-500 font-bold uppercase text-sm tracking-tight group-hover:text-[var(--primary-blue)] transition-colors">{name}</span>
                      </div>
                    ))}
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Join CTA */}
      <section className="py-32 bg-[var(--primary-blue)] relative overflow-hidden" >
        <div className="absolute inset-0 opacity-10 pointer-events-none">
           <Image src="/stone.jpg" alt="Texture" fill className="object-cover" />
        </div>
        <div className="container-custom relative z-10 flex flex-col items-center text-center">
           <h2 className="text-4xl md:text-7xl font-black text-white italic uppercase tracking-tighter mb-8">Future Governance</h2>
           <p className="text-xl text-gray-300 font-medium max-w-3xl mx-auto leading-relaxed mb-12 text-center">
             Contributing to the association's leadership requires dedication and a passion for Greenlands. Learn about the nomination process for the upcoming term.
           </p>
          
        </div>
      </section>
    </div>
  );
}
