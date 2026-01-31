import Image from 'next/image';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';

export default function MembershipPage() {
  const documents = [
    { title: "Leaving Certificate", desc: "Original copy of the School Leaving Certificate." },
    { title: "NIC / Identification", desc: "Photocopy of the National Identity Card." },
    { title: "Character Certificates", desc: "Official character records received from school." },
    { title: "Membership Card Form", desc: "The dully filled official OBA data form." },
    { title: "Passport Photographs", desc: "2 recent photos (35mm x 45mm dimensions)." }
  ];

  const applicationSteps = [
    { title: "Prepare Documentation", desc: "Ensure all applications are filled in block capitals and in English only." },
    { title: "Submit Application", desc: "Forward the pack to the OBA office at Isipathana College in a sealed envelope." },
    { title: "Interview Phase", desc: "Attend a brief enrollment interview at the OBA office with your original documents." },
    { title: "Enrollment Complete", desc: "Receive your official OBA membership ID and welcome pack." }
  ];

  return (
    <div className="bg-white">
      <PageHeader 
        title="OBA Membership" 
        breadcrumbs={[{ label: 'Membership' }]} 
      />

      {/* Intro Warning */}
      <section className="relative -mt-16 z-10 pb-20">
        <div className="container-custom">
           <div className="bg-white p-12 rounded-[3.5rem] shadow-2xl border border-[var(--gray-100)] flex flex-col md:flex-row items-center gap-10">
              <div className="w-24 h-24 bg-[var(--primary-blue)]/5 rounded-full flex items-center justify-center text-4xl shadow-sm">⚠️</div>
              <div className="flex-1">
                 <h3 className="text-2xl font-black text-[var(--primary-blue)] uppercase italic mb-2 tracking-tight">Strict Eligibility Notice</h3>
                 <p className="text-lg text-gray-500 font-bold italic leading-relaxed">
                   Membership of the OBA is strictly reserved for the past students of Isipathana College ONLY. Verification of your academic record is mandatory for all new enrollments.
                 </p>
              </div>
           </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="section-padding overflow-hidden">
        <div className="container-custom">
           <div className="grid lg:grid-cols-2 gap-20 items-start">
              
              {/* Requirements List */}
              <div>
                 <h2 className="text-4xl md:text-6xl font-black text-[var(--primary-blue)] mb-8 uppercase tracking-tighter italic leading-tight">Verification <br/>Mandate</h2>
                 <p className="text-xl text-gray-500 font-bold leading-relaxed mb-12">
                   To maintain the integrity of our alumni network, the following documents are required for every new membership application.
                 </p>
                 <div className="space-y-6">
                    {documents.map((doc, idx) => (
                      <div key={idx} className="flex gap-6 items-center p-6 bg-[var(--gray-50)] rounded-[2.5rem] border border-transparent hover:border-[var(--accent-gold)] transition-all group">
                         <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center text-[var(--primary-blue)] font-black text-xs">{idx + 1}</div>
                         <div>
                            <h4 className="font-black text-[var(--primary-blue)] uppercase tracking-tight">{doc.title}</h4>
                            <p className="text-xs font-bold text-gray-400 uppercase tracking-tighter">{doc.desc}</p>
                         </div>
                      </div>
                    ))}
                 </div>
              </div>

              {/* Steps/Process */}
              <div className="bg-[var(--gray-50)] p-12 md:p-20 rounded-[4rem] border border-[var(--gray-200)] relative">
                 <div className="absolute top-0 right-0 w-40 h-40 bg-[var(--accent-gold)]/5 rounded-full -mr-20 -mt-20"></div>
                 <h3 className="text-3xl font-black text-[var(--primary-blue)] mb-12 uppercase italic tracking-tight">Enrollment Journey</h3>
                 <div className="space-y-12">
                    {applicationSteps.map((step, idx) => (
                      <div key={idx} className="flex gap-8 relative">
                         {idx !== applicationSteps.length - 1 && (
                            <div className="absolute top-10 left-5 w-0.5 h-16 bg-gradient-to-b from-[var(--primary-blue)] to-transparent opacity-20"></div>
                         )}
                         <div className="w-10 h-10 rounded-full bg-[var(--primary-blue)] flex items-center justify-center text-white font-black text-xs shadow-lg flex-shrink-0">{idx + 1}</div>
                         <div>
                            <h4 className="text-xl font-black text-[var(--primary-blue)] mb-2 uppercase tracking-tight italic">{step.title}</h4>
                            <p className="text-sm font-bold text-gray-400 leading-relaxed uppercase">{step.desc}</p>
                         </div>
                      </div>
                    ))}
                 </div>
              </div>

           </div>
        </div>
      </section>

      {/* Download Action Section */}
      <section className="section-padding bg-[var(--gray-50)] border-t border-[var(--gray-200)]">
         <div className="container-custom">
            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row bg-white rounded-[4rem] shadow-2xl overflow-hidden">
               
               {/* Left: Action */}
               <div className="lg:w-3/5 p-12 md:p-20">
                  <span className="text-6xl mb-8 block">📄</span>
                  <h2 className="text-4xl font-black text-[var(--primary-blue)] mb-6 uppercase tracking-tight">Application Forms</h2>
                  <p className="text-gray-500 font-bold mb-12 leading-relaxed">
                    Download the official membership application packet. Ensure you have read the notes regarding capital letter submission and document duplication.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                     <a 
                       href="https://isipathanaoba.lk/assets/MEMBERSHIP%20APPLICATION%20FORM%20NEW%20NEW%20_ICOBA.pdf" 
                       target="_blank" 
                       rel="noopener noreferrer"
                       className="p-8 bg-[var(--primary-blue)] text-white rounded-[2.5rem] hover:bg-[var(--primary-blue-dark)] transition-all group flex flex-col items-center text-center shadow-xl shadow-[var(--primary-blue)]/20"
                     >
                        <span className="text-xs font-black uppercase tracking-widest opacity-60 mb-4">Official Form</span>
                        <span className="text-2xl font-black uppercase italic tracking-tighter mb-4">OBA ENROLLMENT</span>
                        <span className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-white group-hover:text-[var(--primary-blue)]">↓</span>
                     </a>
                     
                     <Link 
                       href="/leaving" 
                       className="p-8 bg-white border-2 border-[var(--primary-blue)] text-[var(--primary-blue)] rounded-[2.5rem] hover:bg-[var(--primary-blue)] hover:text-white transition-all group flex flex-col items-center text-center"
                     >
                        <span className="text-xs font-black uppercase tracking-widest opacity-60 mb-4">Prerequisite</span>
                        <span className="text-2xl font-black uppercase italic tracking-tighter mb-4">LEAVING CERT</span>
                        <span className="w-10 h-10 bg-[var(--primary-blue)]/10 rounded-xl flex items-center justify-center group-hover:bg-white group-hover:text-[var(--primary-blue)]">→</span>
                     </Link>
                  </div>
               </div>

               {/* Right: Submission Info */}
               <div className="lg:w-2/5 bg-[var(--primary-blue)] p-12 md:p-20 text-white relative">
                  <div className="absolute inset-0 opacity-10 pointer-events-none">
                     <Image src="/stone.jpg" alt="Background" fill className="object-cover" />
                  </div>
                  <div className="relative z-10 flex flex-col h-full">
                     <h3 className="text-2xl font-black mb-10 uppercase text-[var(--accent-gold)] tracking-widest">Submission Desk</h3>
                     <div className="space-y-10 flex-1">
                        <div>
                           <p className="text-gray-400 font-black text-xs uppercase tracking-widest mb-2">Primary Address</p>
                           <p className="text-lg font-medium leading-relaxed">Joint Secretaries,<br />Isipathana College OBA,<br />Isipathana Mawatha,<br />Colombo 05, Sri Lanka.</p>
                        </div>
                        <div className="p-8 bg-white/5 rounded-3xl border border-white/10 italic font-medium text-sm text-gray-300">
                           "Applicants from abroad may submit digital copies for initial verification, however, the physical interview remains a mandatory step for final enrollment."
                        </div>
                     </div>
                  </div>
               </div>

            </div>
         </div>
      </section>
    </div>
  );
}
