import Image from 'next/image';

export default function NominationFormsPage() {
  const forms = [
    {
      title: "Schedule 4 - Nomination Form for Office Bearers",
      filename: "Schedule 4 - Nomination Form for Office Bearers.pdf",
      link: "https://isipathanaoba.lk/assets/Schedule%204%20-%20Nomination%20Form%20for%20Office%20Bearers.pdf"
    },
    {
      title: "Schedule 5 - Nomination Form for Committee Member",
      filename: "Schedule 5 - Nomination Form for Committee Member.pdf",
      link: "https://isipathanaoba.lk/assets/Schedule%205%20-%20Nomination%20Form%20for%20Committee%20Member.pdf"
    }
  ];

  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/stone.jpg"
            alt="Nomination Forms"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-[var(--primary-blue)]/80"></div>
        </div>
        <div className="relative container-custom text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Nomination Forms</h1>
          <nav className="text-sm font-medium text-gray-300">
            <ol className="flex space-x-2">
              <li>Home</li>
              <li>•</li>
              <li>Downloads</li>
              <li>•</li>
              <li className="text-white">Nomination Forms</li>
            </ol>
          </nav>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12 text-center md:text-left">
              <h2 className="text-3xl font-bold text-[var(--primary-blue)] mb-4">Download Nomination Forms</h2>
              <div className="w-20 h-1 bg-[var(--accent-gold)] mb-8 mx-auto md:mx-0"></div>
              <p className="text-gray-600 text-lg leading-relaxed">
                Official nomination forms for the Isipathana College Old Boys' Association. Please select the appropriate schedule based on the position you are nominating for.
              </p>
            </div>

            <div className="grid gap-6">
              {forms.map((form, idx) => (
                <div key={idx} className="bg-[var(--gray-50)] rounded-2xl p-8 border border-[var(--gray-200)] hover:border-[var(--primary-blue)] transition-all flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 bg-white rounded-xl shadow-sm flex items-center justify-center flex-shrink-0">
                      <svg className="w-10 h-10 text-[var(--primary-blue)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[var(--primary-blue)] mb-1">{form.title}</h3>
                      <p className="text-sm text-gray-400 font-medium italic">{form.filename}</p>
                    </div>
                  </div>
                  
                  <a 
                    href={form.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-8 py-3 bg-[var(--primary-blue)] text-white rounded-xl font-bold hover:bg-[var(--primary-blue-dark)] transition-all flex-shrink-0 group"
                  >
                    <svg className="w-5 h-5 group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    DOWNLOAD
                  </a>
                </div>
              ))}
            </div>

            <div className="mt-16 bg-[var(--primary-blue)] rounded-3xl p-10 text-white relative overflow-hidden">
              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="max-w-xl">
                  <h3 className="text-2xl font-bold mb-4">Submission Guidelines</h3>
                  <p className="text-gray-200 leading-relaxed">
                    Once downloaded and completed, nomination forms must be submitted to the OBA office according to the timeline specified for the Annual General Meeting. Ensure all fields are filled accurately and signed by the proposers and seconders as required.
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
