import Link from 'next/link';
import Image from 'next/image';
import PageHeader from '@/components/PageHeader';

export default function HistoryPage() {
  return (
    <div>
      <PageHeader 
        title="History of the OBA" 
        breadcrumbs={[
          { label: 'About Us', href: '/about' },
          { label: 'History of the OBA' }
        ]} 
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-[var(--primary-blue)]">History of the OBA</h2>
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed shadow-sm p-8 bg-gray-50 rounded-2xl border border-gray-100">
              <p>
                The Old Boys Association (OBA) of Isipathana College, established in 1992, serves as the official alumni organization for the school's past students. Since its inception, the association has played a significant role in fostering the growth and development of the college. 
              </p>
              <p>
                The OBA often engages in fundraising activities to generate financial resources that are directed towards various development projects within the school. This financial support can cover a wide range of needs, including infrastructure development, scholarships for students, and funding for extracurricular activities.
              </p>
              <p>
                The association has been instrumental in funding and overseeing numerous infrastructure projects. These projects may include the construction of new buildings, renovation of existing facilities, and improvement of sports and recreational amenities.
              </p>
              <p>
                Overall, the Old Boys Association of Isipathana College is a vital pillar of support for the school. Its contributions span financial assistance, mentorship, networking, and cultural promotion, all aimed at enhancing the educational experience and overall development of the college. The OBA's dedication and continuous efforts play a crucial role in shaping the future of Isipathana College and its students.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Legacy Image Section */}
      <section className="pb-24 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/ChatGPT Image Jan 31, 2026, 01_48_04 PM.png"
                alt="Isipathana College Landmark"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                <p className="text-white text-xl font-bold">Foundation of Excellence</p>
              </div>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/about-old.jpg"
                alt="Vintage Isipathana"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                <p className="text-white text-xl font-bold">Years of Tradition</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-[var(--primary-blue)] via-[var(--primary-blue-dark)] to-[var(--primary-blue)] text-white relative overflow-hidden">
        <div className="container-custom text-center relative z-10">
          <h2 className="text-4xl font-bold mb-6">Want to Contribute to Our History?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join the OBA today and help us write the next chapter of Isipathana College's legacy.
          </p>
          <Link href="/membership" className="btn-primary bg-[var(--accent-gold)] text-[var(--primary-blue)] border-[var(--accent-gold)] hover:bg-white hover:text-[var(--primary-blue)]">
            Join the OBA
          </Link>
        </div>
      </section>
    </div>
  );
}
