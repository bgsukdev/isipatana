import Image from 'next/image';
import Link from 'next/link';

export default function MeetingMinutesPage() {
  const years = [
    { year: "2023/2024", date: "April 2024", status: "Published" },
    { year: "2022/2023", date: "March 2023", status: "Archived" },
    { year: "2021/2022", date: "May 2022", status: "Archived" },
  ];

  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/stone.jpg"
            alt="Meeting Minutes"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-[var(--primary-blue)]/80"></div>
        </div>
        <div className="relative container-custom text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Meeting Minutes</h1>
          <p className="text-xl text-gray-200">Official records of our association's proceedings</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-[var(--primary-blue)] mb-4">AGM & Committee Meeting Records</h2>
              <div className="w-20 h-1 bg-[var(--accent-gold)] mb-8"></div>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                The minutes of the Annual General Meetings and Executive Committee meetings are maintained to ensure transparency and accountability within the association.
              </p>
              <div className="bg-[var(--gray-50)] p-6 rounded-xl border-l-4 border-[var(--primary-blue)]">
                <p className="text-[var(--primary-blue)] font-semibold uppercase tracking-wider text-sm mb-2">Notice for Members</p>
                <p className="text-gray-700">Detailed meeting minutes are accessible to verified members of the Isipathana College OBA. If you require a specific set of minutes, please visit the OBA office or contact the Joint Secretaries.</p>
              </div>
            </div>

            <div className="grid gap-6">
              {years.map((item, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-6 border border-[var(--gray-200)] flex items-center justify-between group hover:border-[var(--primary-blue)] transition-all">
                  <div className="flex items-center gap-6">
                    <div className="w-14 h-14 bg-[var(--gray-50)] rounded-xl flex items-center justify-center text-[var(--primary-blue)] group-hover:bg-[var(--primary-blue)] group-hover:text-white transition-colors">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[var(--primary-blue)] leading-tight">AGM Minutes {item.year}</h3>
                      <p className="text-gray-500 text-sm mt-1">{item.date} • {item.status}</p>
                    </div>
                  </div>
                  <button className="px-6 py-2 border-2 border-[var(--primary-blue)] text-[var(--primary-blue)] font-bold rounded-lg hover:bg-[var(--primary-blue)] hover:text-white transition-all">
                    REQUEST ACCESS
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-[var(--gray-50)]">
        <div className="container-custom text-center">
          <h3 className="text-2xl font-bold text-[var(--primary-blue)] mb-4">Inquiries regarding records?</h3>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">Our secretariat team is here to assist you with any questions regarding historical or recent meeting records.</p>
          <Link href="/contact" className="btn-primary">
            Contact Secretariat
          </Link>
        </div>
      </section>
    </div>
  );
}
