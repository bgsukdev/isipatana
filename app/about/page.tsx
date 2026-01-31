import Link from 'next/link';
import Image from 'next/image';
import PageHeader from '@/components/PageHeader';

export default function AboutPage() {
  const executiveMembers = [
    { name: "Mr. Oshara Panditharatne", role: "Executive President", image: "/Principal of the School.jpg" },
    { name: "Mr. Lasantha Gunawardana", role: "Senior Vice President", image: "" },
    { name: "Mr. Dushan Wickramasinghe", role: "Joint Secretary", image: "" },
    { name: "Mr. Gamini Fernando", role: "Treasurer", image: "" },
  ];

  return (
    <div>
      <PageHeader 
        title="About OBA" 
        breadcrumbs={[{ label: 'About Us' }]} 
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-7">
              <h2 className="text-4xl font-bold mb-6 text-[var(--primary-blue)]">Our Legacy</h2>
              <div className="w-20 h-1 bg-[var(--accent-gold)] mb-8"></div>
              
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
                <p>
                  Isipathana College, originally known as Greenlands College, was founded in January 1952 with an intake of approximately 400 boys. The college was established on Greenlands Road in Havelock Town, which was later renamed to Isipathana Mawatha, and the school followed suit, becoming Isipathana Maha Vidyalaya in 1961.
                </p>
                
                <p>
                  The Old Boys Association (OBA) was established in 1992, marking the start of a dedicated partnership between the school and its alumni. For over three decades, the OBA has been a vital pillar of support, instrumental in shaping the growth and development of the college.
                </p>

                <p>
                  The college crest, featuring a lighted lamp and an open book with the motto "Strive with Determination," reflects our core values. Even our colors—dark and light green—pay homage to our heritage as Greenlands College.
                </p>
                
                <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-inner mt-12 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-[var(--primary-blue)]/5 rounded-bl-[100px]"></div>
                  <h3 className="text-2xl font-bold mb-6 text-[var(--primary-blue)] relative z-10">Key Milestones</h3>
                  <ul className="space-y-4 text-base relative z-10">
                    <li className="flex items-start gap-4">
                      <span className="font-bold text-[var(--primary-blue)] min-w-[60px]">1952</span>
                      <span className="text-gray-700">Founded as Greenlands College</span>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="font-bold text-[var(--primary-blue)] min-w-[60px]">1961</span>
                      <span className="text-gray-700">Renamed to Isipathana Maha Vidyalaya</span>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="font-bold text-[var(--primary-blue)] min-w-[60px]">1992</span>
                      <span className="text-gray-700">Formation of the Old Boys Association</span>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="font-bold text-[var(--primary-blue)] min-w-[60px]">1960s</span>
                      <span className="text-gray-700">Emergence as a powerhouse in Schools Rugby</span>
                    </li>
                  </ul>
                </div>

                <p className="pt-4">
                  Today, the OBA continues to fund infrastructure projects, provide scholarships, and mentor the next generation of leaders, ensuring the legacy of excellence continues.
                </p>
              </div>
            </div>
            <div className="lg:col-span-5 space-y-16">
              <div className="relative h-[550px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/ChatGPT Image Jan 31, 2026, 01_48_04 PM.png"
                  alt="Isipathana College Landmark"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-8">
                 
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-[var(--gray-50)] relative overflow-hidden">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
            <div className="bg-white p-10 rounded-2xl shadow-xl border border-gray-100 flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-[var(--primary-blue)] rounded-2xl rotate-3 flex items-center justify-center mb-8 shadow-lg">
                <svg className="w-10 h-10 text-white -rotate-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold mb-6 text-[var(--primary-blue)]">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed text-lg max-w-sm">
                To be the leading Old Boys' Association in Sri Lanka, fostering excellence in education, sports, and character development while maintaining the proud traditions of Isipathana College.
              </p>
            </div>
            
            <div className="bg-white p-10 rounded-2xl shadow-xl border border-gray-100 flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-[var(--accent-gold)] rounded-2xl -rotate-3 flex items-center justify-center mb-8 shadow-lg">
                <svg className="w-10 h-10 text-[var(--primary-blue)] rotate-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold mb-6 text-[var(--primary-blue)]">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed text-lg max-w-sm">
                To support and enhance the educational, sporting, and cultural development of Isipathana College through active engagement, resource mobilization, and strategic partnerships with all stakeholders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Committee Preview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-[var(--primary-blue)]">Executive Committee</h2>
            <div className="w-20 h-1 bg-[var(--accent-gold)] mx-auto mb-6"></div>
            <p className="text-xl text-gray-600">Meet our dedicated leadership team</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {executiveMembers.map((member, index) => (
              <div key={index} className="bg-[var(--gray-50)] rounded-xl overflow-hidden shadow-md card-hover">
                <div className="aspect-square bg-gradient-to-br from-[var(--primary-blue)] to-[var(--primary-blue-light)] flex items-center justify-center">
                  <svg className="w-24 h-24 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-2 text-[var(--primary-blue)]">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-24">
            <br />
            <Link href="/about/committee" className="btn-primary">
              View Full Committee
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-[var(--primary-blue)] via-[var(--primary-blue-dark)] to-[var(--primary-blue)] text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[var(--accent-gold)]/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        </div>
        <div className="container-custom relative z-10 flex flex-col items-center text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">Become Part of Our Legacy</h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto text-gray-200 leading-relaxed">
            Join thousands of old boys who continue to support and shape the future of Isipathana College
          </p>
          <Link href="/membership" className="btn-primary scale-110 hover:scale-115 transition-all bg-[var(--accent-gold)] text-[var(--primary-blue)] border-[var(--accent-gold)] hover:bg-white hover:text-[var(--primary-blue)] hover:border-white shadow-2xl">
            Join Our Community
          </Link>
        </div>
      </section>
    </div>
  );
}
