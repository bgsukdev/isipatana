import Image from 'next/image';
import Link from 'next/link';

export default function LeavingCertificatePage() {
  const steps = [
    { title: "Download Form", description: "Download the official application form for the School Leaving Certificate.", icon: "📥" },
    { title: "Complete Details", description: "Fill in all required information accurately in English block capitals.", icon: "✍️" },
    { title: "Attach Documents", description: "Attach NIC copy and any other requested documentation.", icon: "📎" },
    { title: "Submit to School", description: "Submit the sealed envelope to the school office or security counter.", icon: "🏫" }
  ];

  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="relative py-32 md:py-48 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/Home Hero 2.jpg"
            alt="Leaving Certificate Application"
            fill
            className="object-cover scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary-blue)] to-[var(--primary-blue-dark)] opacity-95"></div>
        </div>
        <div className="relative container-custom text-white">
          <div className="max-w-4xl">
            <span className="inline-block px-4 py-1 bg-[var(--accent-gold)] text-[var(--primary-blue)] text-xs font-black rounded-full mb-6 uppercase tracking-[0.2em]">Official Records</span>
            <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter uppercase italic leading-none">
              LEAVING <br/>CERTIFICATE
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed italic border-l-4 border-[var(--accent-gold)] pl-6 max-w-2xl">
              "The formal bridge to your post-academic journey. Apply for your official school records with precision."
            </p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-[var(--gray-50)] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-[var(--accent-gold)]/5 rounded-full -ml-32 -mt-32"></div>
        <div className="container-custom">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-black text-[var(--primary-blue)] uppercase tracking-tight italic">The Protocol</h2>
            <div className="w-24 h-1 bg-[var(--accent-gold)] mx-auto mt-6"></div>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, idx) => (
              <div key={idx} className="bg-white p-12 rounded-[3.5rem] shadow-xl border border-[var(--gray-100)] relative group hover:-translate-y-2 transition-all">
                <div className="text-6xl mb-8 group-hover:scale-110 transition-transform duration-500">{step.icon}</div>
                <h3 className="text-2xl font-black text-[var(--primary-blue)] mb-4 uppercase italic tracking-tighter">{step.title}</h3>
                <p className="text-gray-500 font-bold text-sm leading-relaxed uppercase">{step.description}</p>
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-[var(--primary-blue)] text-white rounded-2xl flex items-center justify-center font-black text-xl shadow-lg transform rotate-6 italic">
                  {idx + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              
              <div className="space-y-12">
                <div>
                   <h3 className="text-4xl font-black text-[var(--primary-blue)] mb-8 uppercase tracking-tighter italic">Mandatory Notice</h3>
                   <div className="space-y-8">
                      <div className="flex gap-6 p-8 bg-[var(--gray-50)] rounded-[2.5rem] border border-[var(--gray-100)] group hover:border-[var(--accent-gold)] transition-all">
                        <div className="w-4 h-4 rounded-full bg-[var(--accent-gold)] mt-2 flex-shrink-0 animate-pulse"></div>
                        <p className="text-lg text-gray-500 font-bold italic leading-relaxed">This application is strictly for past students requiring their official school records for OBA membership or legal purposes.</p>
                      </div>
                      <div className="flex gap-6 p-8 bg-[var(--gray-50)] rounded-[2.5rem] border border-[var(--gray-100)] group hover:border-[var(--primary-blue)] transition-all">
                        <div className="w-4 h-4 rounded-full bg-[var(--primary-blue)] mt-2 flex-shrink-0"></div>
                        <p className="text-lg text-gray-500 font-bold italic leading-relaxed">Processing time usually takes 7-14 working days depending on the availability of historical school records.</p>
                      </div>
                   </div>
                </div>

                <div className="flex flex-wrap gap-4">
                   <Link href="/membership" className="px-10 py-5 bg-[var(--primary-blue)] text-white font-black rounded-3xl hover:bg-[var(--primary-blue-dark)] transition-all shadow-xl">
                      GO TO MEMBERSHIP →
                   </Link>
                   <Link href="/contact" className="px-10 py-5 bg-white border-2 border-[var(--gray-200)] text-gray-400 font-black rounded-3xl hover:border-[var(--primary-blue)] hover:text-[var(--primary-blue)] transition-all">
                      CONTACT OFFICE
                   </Link>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -inset-8 bg-[var(--accent-gold)]/5 rounded-[5rem] -z-10 rotate-6 blur-2xl"></div>
                <div className="bg-white p-12 md:p-20 rounded-[4rem] shadow-[0_50px_100px_rgba(0,0,0,0.1)] border border-[var(--gray-200)] text-center relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--gray-50)] rounded-full -mr-16 -mt-16 group-hover:bg-[var(--accent-gold)]/5 transition-colors"></div>
                  
                  <div className="w-24 h-24 bg-[var(--primary-blue)] rounded-3xl shadow-xl flex items-center justify-center mx-auto mb-10 -rotate-6">
                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <span className="text-xs font-black text-gray-400 uppercase tracking-[0.4em] mb-4 block">Document Retrieval</span>
                  <h2 className="text-4xl font-black text-[var(--primary-blue)] mb-8 uppercase italic tracking-tighter">Download Portal</h2>
                  
                  <a 
                    href="https://isipathanaoba.lk/assets/Leaving%20Certificate%20Form.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-4 py-6 bg-[var(--accent-gold)] text-[var(--primary-blue)] text-xl font-black rounded-[2rem] hover:scale-105 transition-all shadow-2xl group"
                  >
                    <svg className="w-8 h-8 group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    DOWNLOAD PDF PACK
                  </a>
                  <p className="mt-8 text-[10px] font-black text-gray-400 tracking-[0.3em] uppercase opacity-60">ID: Leaving_Certificate_Form_2024.pdf</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Warning Section */}
      <section className="py-12 bg-gray-900 border-y border-white/5">
        <div className="container-custom flex flex-col md:flex-row items-center justify-center gap-6 text-white/40 font-black uppercase tracking-widest text-xs text-center">
           <div className="flex items-center gap-3 text-[var(--accent-gold)]">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                 <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              <span>Authenticity Verification Required</span>
           </div>
           <span className="hidden md:block opacity-20">•</span>
           <span>Fraudulent applications are subject to legal action by Isipathana College Administration</span>
        </div>
      </section>
    </div>
  );
}
