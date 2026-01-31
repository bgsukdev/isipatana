import Link from 'next/link';
import Image from 'next/image';
import PageHeader from '@/components/PageHeader';

export default function DownloadsPage() {
  const downloadItems = [
    {
      title: 'OBA Constitution',
      category: 'Governance',
      description: 'The latest amended constitution of the Isipathana College Old Boys\' Association.',
      href: 'https://isipathanaoba.lk/assets/amendment_approved_constitution_2014.pdf',
      type: 'PDF Document',
      icon: "📜"
    },
    {
      title: 'Membership Form',
      category: 'Member Services',
      description: 'Official application for new members looking to join the association.',
      href: '/membership',
      type: 'External Link',
      icon: "👥"
    },
    {
      title: 'Leaving Certificate',
      category: 'Academic Records',
      description: 'Application form to request your official school leaving certificate.',
      href: '/leaving',
      type: 'Internal Page',
      icon: "🎓"
    },
    {
      title: 'Nomination Forms',
      category: 'Elections',
      description: 'Executive committee nomination forms for the upcoming AGM.',
      href: '/nomination-forms',
      type: 'PDF Pack',
      icon: "✍️"
    },
    {
      title: 'Annual Report 2023',
      category: 'Finance',
      description: 'Comprehensive review of the association\'s activities and financial standing.',
      href: '/agm/reports',
      type: 'Digital Report',
      icon: "📊"
    },
    {
      title: 'Meeting Minutes',
      category: 'Governance',
      description: 'Official records from previous general meetings and resolutions.',
      href: '/agm/minutes',
      type: 'Record Archive',
      icon: "📝"
    }
  ];

  return (
    <div className="bg-white">
      <PageHeader 
        title="Document Hub" 
        breadcrumbs={[{ label: 'Downloads' }]} 
      />

      {/* Grid Section */}
      <section className="section-padding bg-[var(--gray-50)] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--accent-gold)]/5 rounded-full -mr-48 -mt-48 blur-3xl"></div>
        <div className="container-custom">
           <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-[var(--primary-blue)] uppercase tracking-tight italic">Official Archives</h2>
              <div className="w-24 h-1 bg-[var(--accent-gold)] mx-auto mt-6"></div>
           </div>

           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
             {downloadItems.map((item, idx) => (
                <div key={idx} className="group bg-white p-6 md:p-10 rounded-3xl shadow-sm hover:shadow-xl hover:border-[var(--accent-gold)] transition-all flex flex-col items-start relative overflow-hidden border border-gray-100">
                 <div className="absolute top-0 right-0 w-24 h-24 bg-[var(--gray-50)] rounded-full -mr-12 -mt-12 group-hover:bg-[var(--accent-gold)]/5 transition-colors"></div>
                 
                 <div className="text-5xl mb-8 transform group-hover:scale-110 transition-transform duration-500">
                   {item.icon}
                 </div>
                 
                 <span className="px-3 py-1 bg-[var(--primary-blue)]/5 text-[var(--primary-blue)] text-[10px] font-black rounded-lg uppercase tracking-widest mb-6 border border-[var(--primary-blue)]/10">
                   {item.category}
                 </span>
                 
                 <h3 className="text-2xl font-black text-[var(--primary-blue)] mb-4 uppercase tracking-tight leading-tight">{item.title}</h3>
                 <p className="text-gray-500 font-medium mb-10 flex-1 leading-relaxed text-sm">{item.description}</p>
                 
                 <div className="w-full pt-6 border-t border-[var(--gray-100)] flex items-center justify-between">
                    <Link 
                      href={item.href}
                      className="text-[var(--accent-gold-dark)] font-black text-[10px] uppercase tracking-widest hover:text-[var(--primary-blue)] transition-all flex items-center gap-2 group-link"
                    >
                      ACCESS FILE <span className="transform group-hover:translate-x-2 transition-transform">→</span>
                    </Link>
                    <span className="text-[9px] font-black text-gray-300 uppercase tracking-widest">{item.type}</span>
                 </div>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="max-w-6xl mx-auto bg-[var(--primary-blue)] rounded-[4rem] p-12 md:p-24 text-white flex flex-col lg:flex-row items-center gap-16 text-center lg:text-left shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 pointer-events-none">
               <Image src="/stone.jpg" alt="Texture" fill className="object-cover" />
            </div>
            <div className="flex-1 relative z-10">
               <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter uppercase italic leading-none">Administrative <br/>Assistance</h2>
               <p className="text-xl text-gray-300 font-bold uppercase italic leading-relaxed opacity-80">
                 Our secretariat is prepared to assist with any custom document requests or historical search mandates required for your professional or academic records.
               </p>
            </div>
            <Link href="/contact" className="px-14 py-7 bg-[var(--accent-gold)] text-[var(--primary-blue)] font-black rounded-3xl hover:bg-white transition-all shadow-xl text-xl uppercase tracking-tighter relative z-10">
               SEND REQUEST
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
