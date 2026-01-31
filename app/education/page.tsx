import Link from 'next/link';
import Image from 'next/image';
import PageHeader from '@/components/PageHeader';

export default function EducationPage() {
  const educationProjects = [
    {
      title: "New Year Card (2024)",
      description: "Handed over a beautiful New Year card to the teachers. (05.02.2024)",
      images: ["/education/pro21.jpg", "/education/pro22.jpg", "/education/pro23.jpg"]
    },
    {
      title: "Discussion on O/L Educational Development",
      description: "Held a discussion with the teachers of the 2023 O/L students regarding their educational development.",
      images: ["/education/pro17.jpg"]
    },
    {
      title: "Night Camp Series for the 2023 O/L students",
      description: "Conducted a Night Camp Series for the 2023 O/L students, beginning with the Maths Night Camp, followed by Science and Sinhala Night Camps. The camps were conducted in Sinhala, Tamil, and English by prominent tutors. Additionally, provided dinner, breakfast, and a snack for every student who participated, with financial contributions from the OBA.",
      images: ["/education/pro16.jpg", "/education/pro16_2.jpg", "/education/pro16_3.jpg", "/education/pro16_4.jpg"]
    },
    {
      title: "Thurstan-Isipathana Big Debate (2024)",
      description: "Participated in the Thurstan-Isipathana Big Debate, held concurrently with the Thurstan-Isipathana Big Match. Provided financial support for securing a coach for the English Medium Debate team. The debate took place at Thurstan College premises on 3rd April 2024 with Isipathana College winning the English Medium Debate and Thurstan College winning the Sinhala Debate.",
      images: ["/education/pro15 (1).jpg", "/education/pro15 (2).jpg", "/education/pro15 (3).jpg"]
    }
  ];

  const milestones = [
    { year: "1992", event: "OBA Education fund established" },
    { year: "1998", event: "First major laboratory donation" },
    { year: "2015", event: "Digital Classroom pilot launched" },
    { year: "2024", event: "Advanced Science Complex completion" }
  ];

  return (
    <div className="bg-white">
      <PageHeader 
        title="Education Development" 
        breadcrumbs={[
          { label: 'Service Areas' },
          { label: 'Education Development' }
        ]} 
      />

      {/* Intro Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
           <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                 <h2 className="text-4xl md:text-5xl font-black text-[var(--primary-blue)] mb-8 uppercase tracking-tighter">Academic Excellence</h2>
                 <p className="text-xl text-gray-500 font-bold leading-relaxed mb-8">
                    The Education Management division of the Isipathana OBA works tirelessly to ensure that our school remains at the forefront of national education. We bridge the gap between curriculum requirements and real-world resources.
                 </p>
                 <div className="grid grid-cols-2 gap-8">
                    {milestones.map((m, i) => (
                      <div key={i} className="p-6 bg-[var(--gray-50)] rounded-2xl">
                         <p className="text-[var(--accent-gold-dark)] font-black text-xl mb-1">{m.year}</p>
                         <p className="text-sm font-bold text-[var(--primary-blue)] leading-snug">{m.event}</p>
                      </div>
                    ))}
                 </div>
              </div>
              <div className="relative">
                 <div className="aspect-video relative rounded-[3rem] overflow-hidden shadow-2xl">
                    <Image src="/education/iw3.jpg" alt="Legacy" fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary-blue)]/60 to-transparent"></div>
                    <div className="absolute bottom-10 left-10 p-8 bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 text-white">
                       <p className="text-4xl font-black italic">60+ Years</p>
                       <p className="text-sm font-bold uppercase tracking-widest text-[var(--accent-gold)]">of Scholarly Support</p>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding bg-[var(--gray-50)]">
        <div className="container-custom">
           <div className="text-center mb-20">
              <h2 className="text-4xl md:text-6xl font-black text-[var(--primary-blue)] italic uppercase">Current Initiatives</h2>
              <div className="w-24 h-2 bg-[var(--accent-gold)] mx-auto mt-6 rounded-full"></div>
           </div>

           <div className="space-y-20">
              {educationProjects.map((project, idx) => (
                <div key={idx} className="bg-white rounded-[3.5rem] p-8 md:p-12 shadow-sm hover:shadow-xl transition-all group">
                   <div className="mb-10">
                      <h3 className="text-2xl md:text-3xl font-black text-[#0D5C2F] mb-2 uppercase tracking-tight">{project.title}</h3>
                      <p className="text-gray-500 font-bold text-lg">{project.description}</p>
                   </div>
                   <div className={`grid gap-6 ${
                     project.images.length === 1 ? 'grid-cols-1 max-w-2xl' : 
                     project.images.length === 2 ? 'md:grid-cols-2' :
                     project.images.length === 4 ? 'grid-cols-2 lg:grid-cols-4' :
                     'grid-cols-1 md:grid-cols-3'
                   }`}>
                      {project.images.map((img, imgIdx) => (
                        <div key={imgIdx} className="aspect-[4/3] relative rounded-2xl overflow-hidden shadow-md group/img">
                           <Image 
                             src={img} 
                             alt={`${project.title} image ${imgIdx + 1}`} 
                             fill 
                             className="object-cover group-hover/img:scale-110 transition-transform duration-700"
                           />
                        </div>
                      ))}
                   </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Committee & Governance */}
      <section className="section-padding bg-white">
        <div className="container-custom">
           <div className="max-w-4xl mx-auto">
              
              {/* Education Committee Table */}
              <div className="mb-20">
                 <h2 className="text-2xl font-black text-[var(--primary-blue)] mb-10 text-center uppercase tracking-tight">Education Committee</h2>
                 <div className="overflow-hidden rounded-sm border border-[#C5E1A5]">
                    <div className="grid grid-cols-[1fr_2fr] border-b border-[#C5E1A5]">
                       <div className="p-4 bg-[#DCEDC8] font-bold text-[#2E7D32] border-r border-[#C5E1A5]">Chairman</div>
                       <div className="p-4 bg-white font-bold text-[#33691E]">Mr. Chaminda Meegoda</div>
                    </div>
                    <div className="grid grid-cols-[1fr_2fr]">
                       <div className="p-4 bg-[#DCEDC8] font-bold text-[#2E7D32] border-r border-[#C5E1A5]">Secretary</div>
                       <div className="p-4 bg-[#DCEDC8] font-bold text-[#33691E]">Mr. M. T. M Faizer</div>
                    </div>
                 </div>
              </div>

              {/* Advisory Board Table */}
              <div>
                 <h2 className="text-2xl font-black text-[var(--primary-blue)] mb-10 text-center uppercase tracking-tight">Advisory Board</h2>
                 <div className="overflow-hidden rounded-sm border border-[#C5E1A5]">
                    {[
                      "Dr. Chithraka Wikramarachchi",
                      "Dr. Sanjeewa Dharmawardhana",
                      "Dr. Prasad Perera",
                      "Mr. Sanjeewa Wikramasinghe",
                      "Mr. P.M.G. Pasindu Chamara",
                      "Mr. Maneesha Senevirathne",
                      "Mr. Wajira Hewage"
                    ].map((name, i) => (
                      <div key={i} className={`grid grid-cols-[50px_1fr] border-b last:border-0 border-[#C5E1A5] ${i % 2 !== 0 ? 'bg-[#DCEDC8]' : 'bg-white'}`}>
                         <div className="border-r border-[#C5E1A5]"></div>
                         <div className="p-4 font-bold text-[#33691E]">{name}</div>
                      </div>
                    ))}
                 </div>
              </div>

           </div>
        </div>
      </section>

      {/* Donation Banner */}
      <section className="py-24 bg-[var(--primary-blue)] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
           <Image src="/education/pro16_4.jpg" alt="Background" fill className="object-cover" />
        </div>
        <div className="container-custom relative z-10 text-center">
           <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter uppercase italic">Fuel the Future</h2>
              <p className="text-xl text-gray-300 font-medium mb-12">
                 The Education Fund is a restricted endowment used exclusively for academic resource management and infrastructure. Contribute today to help us maintain our competitive edge.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                 <button className="px-10 py-5 bg-[var(--accent-gold)] text-[var(--primary-blue)] font-black rounded-3xl hover:scale-105 transition-transform shadow-xl">
                    DONATE TO EDUCATION FUND
                 </button>
                 <button className="px-10 py-5 bg-white/10 border border-white/20 text-white font-black rounded-3xl hover:bg-white/20 transition-all">
                    VIEW SCHOLARSHIP RECORDS
                 </button>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
}
