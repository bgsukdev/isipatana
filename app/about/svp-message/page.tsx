import Image from 'next/image';
import PageHeader from '@/components/PageHeader';

export default function SVPMessagePage() {
  return (
    <div className="bg-white">
      <PageHeader 
        title="Senior Vice President's Message" 
        breadcrumbs={[
          { label: 'About Us', href: '/about' },
          { label: "SVP Message" }
        ]} 
      />

      {/* Message Content */}
      <section className="section-padding overflow-hidden">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-5 gap-16 items-start">
              
              {/* Profile Side */}
              <div className="lg:col-span-2 lg:sticky lg:top-32">
                <div className="relative aspect-[4/5] rounded-[3.5rem] overflow-hidden shadow-2xl group bg-[var(--gray-200)] flex items-center justify-center">
                  <div className="absolute inset-0 flex items-center justify-center text-[var(--primary-blue)]/10">
                    <svg className="w-64 h-64" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary-blue)]/80 to-transparent"></div>
                  <div className="absolute bottom-10 left-10 right-10 text-white">
                    <h3 className="text-3xl font-black mb-1">Mr. Lasantha Gunawardana</h3>
                    <p className="text-[var(--accent-gold)] font-bold uppercase tracking-widest text-sm">Senior Vice President, OBA</p>
                  </div>
                </div>
                
                <div className="mt-12 p-8 bg-[var(--gray-50)] rounded-3xl border border-[var(--gray-200)] space-y-4">
                   <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center">🤝</div>
                      <p className="text-gray-500 font-bold text-sm">Alumni Engagement Lead</p>
                   </div>
                   <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center">🏫</div>
                      <p className="text-gray-500 font-bold text-sm">Infrastructure Project Oversight</p>
                   </div>
                </div>
              </div>

              {/* Message Side */}
              <div className="lg:col-span-3">
                <div className="prose prose-2xl max-w-none text-gray-700 leading-relaxed italic space-y-10">
                  <div className="relative">
                    <span className="absolute -top-10 -left-10 text-9xl text-[var(--accent-gold)] opacity-30 select-none">“</span>
                    <p className="relative z-10 text-2xl font-medium pt-4">
                      Greetings to all members of our vibrant alumni community. As the Senior Vice President of the Old Boys' Association, it is my privilege to lead this organization towards our collective goal of supporting our alma mater.
                    </p>
                  </div>
                  
                  <p className="text-2xl font-medium">
                    The association remains committed to being a bridge between our glorious past and the promising future of Isipathana College. We have initiated several key projects this year, ranging from infrastructure upgrades to specialized education support programs, all aimed at providing our students with a world-class environment.
                  </p>

                  <p className="text-2xl font-medium">
                    In an ever-evolving world, our OBA continues to adapt, ensuring that the 'Green Machine' remains a dominant force in both academics and sports. Our global network of affiliate groups is a testament to the strength of the Pathanian bond.
                  </p>

                  <p className="text-2xl font-medium">
                    Our strength lies in our unity. I encourage every old boy to re-engage with the association, share your expertise, and join us in our various committees. Together, we can ensure that Isipathana continues to be a beacon of excellence in the Sri Lankan educational landscape.
                  </p>

                  <div className="mt-20 not-italic pt-12 border-t border-[var(--gray-200)]">
                    <div className="flex items-center gap-6">
                       <div className="w-12 h-1 bg-[var(--accent-gold)] rounded-full"></div>
                       <div>
                          <p className="text-gray-500 font-bold uppercase text-xs tracking-widest mb-1">General Secretariat</p>
                          <p className="text-2xl font-black text-[var(--primary-blue)] uppercase tracking-tight">Lasantha Gunawardana</p>
                          <p className="text-lg font-bold text-gray-400">Senior Vice President, Isipathana OBA</p>
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
      <section className="py-20 bg-[var(--gray-50)] text-center relative overflow-hidden">
         <div className="absolute top-0 left-0 w-32 h-32 bg-[var(--accent-gold)]/10 rounded-full -ml-16 -mt-16"></div>
         <p className="text-xl text-gray-400 font-black uppercase tracking-[0.5em] mb-4">Integrity • Excellence • Innovation</p>
         <div className="w-24 h-1 bg-[var(--primary-blue)] mx-auto opacity-20"></div>
      </section>
    </div>
  );
}
