import Image from 'next/image';

export default function AthleticsPage() {
  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/Home Hero 2.jpg"
            alt="Athletics at Isipathana"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-[var(--primary-blue)]/80"></div>
        </div>
        <div className="relative container-custom text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Athletics</h1>
          <p className="text-xl text-gray-200">Developing speed, agility, and endurance at Isipathana College</p>
        </div>
      </section>

      {/* Committee Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold mb-6 text-[var(--primary-blue)]">Athletics Committee</h2>
            <div className="w-20 h-1 bg-[var(--accent-gold)] mx-auto mb-12"></div>
            
            <div className="bg-[var(--gray-50)] rounded-3xl p-12 border-2 border-dashed border-[var(--gray-300)] flex flex-col items-center justify-center min-h-[400px]">
              <div className="w-24 h-24 bg-[var(--primary-blue)]/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-12 h-12 text-[var(--primary-blue)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[var(--primary-blue)] mb-2">Committee Photo Coming Soon</h3>
              <p className="text-gray-600 max-w-md mx-auto">
                We are currently updating our sports committee records. Please check back soon for the official committee group photograph and member details.
              </p>
            </div>
          </div>

          <div className="prose prose-xl max-w-4xl mx-auto text-gray-700 leading-relaxed text-center">
            <p>
              Athletics remains a cornerstone of Isipathana College's sporting success. Our athletes consistently perform at the highest levels in inter-school and national meets, bringing glory to the green and white through their dedication and discipline.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-[var(--gray-50)]">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6 text-[var(--primary-blue)]">Get Involved</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-600">
            Support our athletic programs and help us maintain our legacy of excellence in track and field.
          </p>
          <button className="btn-primary">
            Contact Sports Secretary
          </button>
        </div>
      </section>
    </div>
  );
}
