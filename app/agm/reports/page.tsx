import Image from 'next/image';
import Link from 'next/link';

export default function AnnualReportsPage() {
  const reports = [
    { year: "2026", title: "Annual General Report (Notice)", size: "0.1 MB", type: "IMAGE", link: "/WhatsApp%20Image%202026-01-31%20at%2011.37.25%20PM.jpeg" },
    { year: "2023/2024", title: "Annual General Report", size: "2.4 MB", type: "PDF", link: "#" },
    { year: "2022/2023", title: "Annual General Report", size: "3.1 MB", type: "PDF", link: "#" },
  ];

  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/stone.jpg"
            alt="Annual Reports"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-[var(--primary-blue)]/80"></div>
        </div>
        <div className="relative container-custom text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Annual Reports</h1>
          <p className="text-xl text-gray-200">Comprehensive overview of association performance and finances</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-[var(--primary-blue)] mb-4">Accountability & Transparency</h2>
              <div className="w-20 h-1 bg-[var(--accent-gold)] mb-8"></div>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                The Annual Report provides a detailed account of the OBA's activities, financial standing, and project progress throughout the fiscal year. These reports are presented annually at the AGM for member review and approval.
              </p>
            </div>

            <div className="grid gap-8">
              {reports.map((report, idx) => (
                <div key={idx} className="bg-white group rounded-3xl p-8 border border-[var(--gray-200)] shadow-sm hover:shadow-xl transition-all flex flex-col md:flex-row items-center gap-8">
                  <div className="w-20 h-20 bg-[var(--primary-blue)]/5 text-[var(--primary-blue)] rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--primary-blue)] group-hover:text-white transition-colors">
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-2">
                       <h3 className="text-2xl font-bold text-[var(--primary-blue)]">{report.year}</h3>
                       <span className="px-3 py-1 bg-[var(--accent-gold)]/20 text-[var(--primary-blue)] text-xs font-bold rounded-full uppercase self-center md:self-auto">
                         {report.type}
                       </span>
                    </div>
                    <p className="text-gray-600 mb-0 font-medium">{report.title}</p>
                    <p className="text-gray-400 text-sm italic">File Size: {report.size}</p>
                  </div>
                  <Link 
                    href={report.link}
                    className="flex items-center gap-2 px-8 py-3 bg-[var(--primary-blue)] text-white rounded-xl font-bold hover:bg-[var(--primary-blue-dark)] transition-all shadow-lg group-hover:scale-105"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    {report.type === "IMAGE" ? "VIEW" : "DOWNLOAD"}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-[var(--gray-50)]">
        <div className="container-custom text-center">
            <h3 className="text-2xl font-bold text-[var(--primary-blue)] mb-4">Financial Transparency</h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              All financial statements included in these reports are audited by qualified independent auditors to ensure the highest standards of financial governance.
            </p>
            <div className="flex justify-center gap-4">
               <Link href="/about/committee" className="text-[var(--primary-blue)] font-bold decoration-[var(--accent-gold)] underline-offset-4 hover:underline">
                 Meet the Finance Team →
               </Link>
            </div>
        </div>
      </section>
    </div>
  );
}
