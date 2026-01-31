import Link from 'next/link';
import Image from 'next/image';
import PageHeader from '@/components/PageHeader';

export default function AGMPage() {
  return (
    <div className="bg-white">
      <PageHeader 
        title="AGM 2026" 
        breadcrumbs={[{ label: 'AGM 2026' }]} 
      />

      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-[2rem] shadow-2xl overflow-hidden border border-gray-100">
              <div className="relative aspect-[3/4] md:aspect-video w-full cursor-zoom-in group bg-gray-50">
                <Image
                  src="/WhatsApp Image 2026-01-31 at 11.37.25 PM.jpeg"
                  alt="AGM 2026 Notice"
                  fill
                  className="object-contain group-hover:scale-[1.02] transition-transform duration-500"
                  priority
                />
              </div>
              <div className="px-12 py-14 md:px-20 md:py-16 bg-[var(--primary-blue)] flex flex-col md:flex-row items-center justify-between gap-10">
                <div className="text-center md:text-left flex-1">
                  <h2 className="text-3xl font-black text-white uppercase italic leading-tight mb-2">Official AGM 2026 Notice</h2>
                  <p className="text-gray-100 font-bold opacity-90">Download the full notice for your records</p>
                </div>
                <a 
                  href="/WhatsApp Image 2026-01-31 at 11.37.25 PM.jpeg" 
                  download="AGM_2026_Notice.jpeg"
                  className="w-full md:w-auto px-10 py-5 bg-[var(--accent-gold)] text-[var(--primary-blue)] font-black rounded-2xl hover:bg-white hover:scale-105 transition-all shadow-xl flex items-center justify-center gap-3 text-center min-w-[200px]"
                >
                  <svg className="w-6 h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  <span>DOWNLOAD NOTICE</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-24 bg-[var(--gray-50)] border-t border-[var(--gray-200)] text-center">
         <div className="container-custom">
            <h2 className="text-3xl md:text-5xl font-black text-[var(--primary-blue)] mb-6 tracking-tighter italic uppercase">"Strive with Determination"</h2>
            <p className="text-gray-400 font-bold max-w-xl mx-auto mb-12">Building a future where every Pathanian contributes to the legacy of our great institution.</p>
            <div className="flex justify-center flex-wrap gap-4">
               <Link href="/membership" className="px-10 py-5 bg-[var(--primary-blue)] text-white font-black rounded-3xl hover:bg-[var(--primary-blue-dark)] transition-all shadow-xl">
                  RENEW MEMBERSHIP
               </Link>
               <Link href="/contact" className="px-10 py-5 bg-white text-[var(--primary-blue)] font-black rounded-3xl hover:bg-[var(--gray-50)] transition-all">
                  INQUIRY DESK
               </Link>
            </div>
            <br />
         </div>
      
      </section>
    </div>
  );
}
