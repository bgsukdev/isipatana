import Image from 'next/image';
import PageHeader from '@/components/PageHeader';

export default function PrincipalsMessagePage() {
  return (
    <div className="bg-white">
      <PageHeader 
        title="Principal's Message" 
        breadcrumbs={[
          { label: 'About Us', href: '/about' },
          { label: "Principal's Message" }
        ]} 
      />

      {/* Message Content */}
      <section className="section-padding overflow-hidden">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-5 gap-16 items-start">
              
              {/* Profile Side */}
              <div className="lg:col-span-2 sticky top-32">
                <div className="relative aspect-[4/5] rounded-[3.5rem] overflow-hidden shadow-2xl group">
                  <Image
                    src="/Principal of the School.jpg"
                    alt="Mr. Oshara Panditharathna - Principal"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary-blue)]/60 to-transparent"></div>
                  <div className="absolute bottom-10 left-10 right-10 text-white">
                    <h3 className="text-3xl font-black mb-1">Mr. Oshara Panditharathna</h3>
                    <p className="text-[var(--accent-gold)] font-bold uppercase tracking-widest text-sm text-balance">Principal, Isipathana College</p>
                  </div>
                </div>
                
                <div className="mt-12 p-8 bg-[var(--gray-50)] rounded-3xl border border-[var(--gray-200)] flex items-center gap-6">
                   <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-3xl shadow-sm">⏳</div>
                   <div>
                      <p className="text-xs font-black text-gray-400 uppercase tracking-widest">In Office Since</p>
                      <p className="text-xl font-bold text-[var(--primary-blue)]">June 2021</p>
                   </div>
                </div>
              </div>

              {/* Message Side */}
              <div className="lg:col-span-3">
                <div className="prose prose-2xl max-w-none text-gray-700 leading-relaxed italic space-y-10">
                  <div className="relative">
                    <span className="absolute -top-10 -left-10 text-9xl text-[var(--accent-gold)] opacity-50 select-none">“</span>
                    <p className="relative z-10 text-2xl font-medium pt-4">
                      It is with immense pride and pleasure that I share this message through the official website of the Isipathana College Old Boys' Association. Our school, since its inception in 1952, has been a cradle of excellence, and the OBA has been an unwavering pillar in sustaining this legacy.
                    </p>
                  </div>
                  
                  <p className="text-2xl font-medium">
                    The bond between the school and its past students is the heartbeat of our development. The OBA's continuous support in infrastructure, sports, and education management has significantly enhanced the learning environment for our current students. Together, we strive to nurture citizens who are not only academically proficient but also ethically grounded and socially responsible.
                  </p>

                  <p className="text-2xl font-medium">
                    As we navigate through modern challenges, our focus remains on technological advancements—from smart classrooms to well-equipped gymnasiums. The alumni play a crucial role in these transformations.
                  </p>

                  <p className="text-2xl font-medium">
                    I invite all our old boys to stay connected, contribute to your alma mater, and continue to uphold the values of 'Strive with Determination'. Let us work hand in hand to take Isipathana College to even greater heights.
                  </p>

                  <div className="mt-20 not-italic pt-12 border-t border-[var(--gray-200)]">
                    <div className="flex items-center gap-6">
                       <div className="w-12 h-1 bg-[var(--accent-gold)] rounded-full"></div>
                       <div>
                          <p className="text-gray-500 font-bold uppercase text-xs tracking-widest mb-1">Official Endorsement</p>
                          <p className="text-2xl font-black text-[var(--primary-blue)] uppercase tracking-tight">Principal</p>
                          <p className="text-lg font-bold text-gray-400">Isipathana College, Colombo 05</p>
                       </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Motto CTA */}
      <section className="py-20 bg-[var(--primary-blue)]">
         <div className="container-custom text-center">
            <h2 className="text-4xl md:text-6xl font-black text-white italic opacity-20 uppercase tracking-[1em] mb-4">Determination</h2>
            <p className="text-xl text-[var(--accent-gold)] font-black uppercase tracking-widest">Strive with Determination</p>
         </div>
      </section>
    </div>
  );
}
