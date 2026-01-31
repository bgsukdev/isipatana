import Image from 'next/image';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';

export default function NewsPage() {
  const latestNews = [
    {
      title: 'Admission of New Advanced Level Students (2025/2027)',
      date: 'July 20, 2025',
      category: 'Admission',
      excerpt: 'Invitation for new students to join Science, Mathematics, Technology, Commerce, and Arts streams for the academic years 2025/2027.',
      icon: '🎓',
      link: 'https://forms.cloud.microsoft/r/YZ3sqGG7Rs',
      isFeatured: true
    },
    {
      title: 'AGM 2026 - Nominations Open',
      date: 'January 15, 2026',
      category: 'Announcement',
      excerpt: 'Nominations are now open for the Executive Committee positions for the year 2026. Download the nomination forms from our Downloads section.',
      icon: '📢',
      link: '/agm'
    },
    {
      title: 'Education Night Camp Series Success',
      date: 'December 12, 2025',
      category: 'Education',
      excerpt: 'Successfully conducted Night Camp Series for O/L students, including Maths, Science, and Sinhala camps with prominent tutors.',
      icon: '📚'
    },
    {
      title: 'Battle of the Brothers 2026 Schedule',
      date: 'January 28, 2026',
      category: 'Sports',
      excerpt: 'The much-awaited annual big match schedule has been released. Get ready for the 63rd Battle of the Brothers.',
      icon: '🏏'
    }
  ];

  const upcomingEvents = [
    {
      title: 'Annual General Meeting 2026',
      date: 'TBA',
      time: 'TBA',
      venue: 'College Main Hall',
      description: 'Join us for the AGM where we will review the year\'s activities and elect new office bearers.'
    },
    {
      title: 'OBA Career Guidance Seminar',
      date: 'Feb 15, 2026',
      time: '9:00 AM',
      venue: 'School Auditorium',
      description: 'A special session for A/L students to explore career paths and higher education opportunities.'
    }
  ];

  return (
    <div className="bg-white">
      <PageHeader 
        title="News & Events" 
        breadcrumbs={[{ label: 'News & Events' }]} 
      />

      {/* Featured Admission News */}
      <section className="section-padding overflow-hidden">
        <div className="container-custom">
          <div className="relative bg-white rounded-[3rem] shadow-2xl flex flex-col lg:flex-row overflow-hidden group min-h-[500px]">
            {/* Colored Accent Bar */}
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[var(--accent-gold)] to-[var(--primary-blue)]"></div>
            
            <div className="lg:w-2/5 relative min-h-[400px] lg:min-h-full overflow-hidden">
               <Image 
                 src="/education/iw3.jpg" 
                 alt="A/L Admission" 
                 fill 
                 className="object-cover group-hover:scale-105 transition-transform duration-700" 
               />
               <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary-blue)]/60 to-transparent"></div>
               <div className="absolute bottom-10 left-10 p-8 bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 text-white">
                  <p className="text-4xl font-black italic uppercase tracking-tighter">Academic</p>
                  <p className="text-sm font-bold uppercase tracking-widest text-[var(--accent-gold)]">Enrollment active</p>
               </div>
            </div>
            
            <div className="lg:w-3/5 p-12 lg:p-20 bg-white relative flex flex-col justify-center">
              <span className="inline-block px-4 py-1 bg-[var(--primary-blue)]/5 text-[var(--primary-blue)] rounded-full text-xs font-black mb-8 self-start uppercase tracking-widest border border-[var(--primary-blue)]/10">
                 Featured Update
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-[var(--primary-blue)] mb-6 uppercase tracking-tight italic">A/L Admission 2025/2027</h2>
              <p className="text-xl text-gray-500 font-bold mb-10 leading-relaxed">
                 Begin your journey towards academic excellence. Applications for Science, Mathematics, Technology, and Commerce streams are now active.
              </p>
              
              <div className="flex flex-wrap gap-6 mt-4">
                 <a 
                   href="https://forms.cloud.microsoft/r/YZ3sqGG7Rs" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="px-10 py-5 bg-[var(--primary-blue)] text-white font-black rounded-2xl hover:bg-[var(--primary-blue-dark)] transform hover:-translate-y-1 transition-all shadow-xl shadow-[var(--primary-blue)]/20 text-center"
                 >
                   ACCESS APPLICATION FORM
                 </a>
                 <div className="px-8 py-5 bg-[var(--gray-50)] rounded-2xl border border-gray-200 flex flex-col justify-center">
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest leading-none mb-2">Closing Date</p>
                    <p className="text-xl font-black text-[var(--primary-blue)] italic leading-none">July 21, 2025</p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Updates Grid */}
      <section className="section-padding bg-[var(--gray-50)]">
        <div className="container-custom">
          <div className="mb-16 flex flex-col md:flex-row justify-between items-end gap-6">
            <div>
              <h2 className="text-4xl md:text-6xl font-black text-[var(--primary-blue)]">Latest Updates</h2>
              <div className="w-24 h-2 bg-[var(--accent-gold)] rounded-full mt-4"></div>
            </div>
            <p className="text-gray-500 font-bold max-w-md">Stay updated with the most recent announcements and news articles from the OBA.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestNews.slice(1).map((news, index) => (
              <article key={index} className="bg-white rounded-[3rem] overflow-hidden border border-transparent hover:border-[var(--accent-gold)] hover:shadow-2xl transition-all duration-300 flex flex-col group">
                <div className="relative aspect-video bg-[var(--primary-blue)] overflow-hidden">
                  <Image 
                    src={`/education/pro${index + 12}.jpg`} 
                    alt={news.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  <div className="absolute top-6 left-6 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-xl font-black text-[var(--primary-blue)] shadow-sm text-[10px] uppercase tracking-widest">
                    {news.category}
                  </div>
                </div>
                <div className="p-10 flex-1 flex flex-col">
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-sm font-bold text-gray-400">{news.date}</span>
                  </div>
                  <h3 className="text-2xl font-black mb-4 text-[var(--primary-blue)] leading-tight line-clamp-2">
                    {news.title}
                  </h3>
                  <p className="text-gray-500 mb-8 line-clamp-3 font-medium">
                    {news.excerpt}
                  </p>
                  <div className="mt-auto">
                    {news.link ? (
                      <Link href={news.link} className="inline-flex items-center gap-2 text-[var(--primary-blue)] font-black hover:gap-4 transition-all">
                        READ FULL UPDATE <span className="text-[var(--accent-gold)]">→</span>
                      </Link>
                    ) : (
                      <span className="text-gray-300 font-black cursor-not-allowed uppercase text-xs tracking-widest">Article Pending</span>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events Timeline */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-black text-[var(--primary-blue)] mb-4 uppercase tracking-tighter italic">Mark Your Calendars</h2>
              <div className="w-20 h-1 bg-[var(--accent-gold)] mx-auto"></div>
            </div>

            <div className="space-y-12">
              {upcomingEvents.map((event, index) => (
                <div key={index} className="flex gap-8 relative group">
                  {/* Timeline Divider */}
                  {index !== upcomingEvents.length - 1 && (
                    <div className="absolute top-16 left-8 w-1 h-full bg-[var(--gray-100)] -z-10"></div>
                  )}
                  
                  <div className="flex-shrink-0 w-16 h-16 bg-[var(--primary-blue)] rounded-2xl flex items-center justify-center text-white font-black text-xl shadow-lg transform group-hover:rotate-12 transition-transform">
                    {index + 1}
                  </div>
                  
                  <div className="flex-1 bg-[var(--gray-50)] p-10 rounded-[3rem] border border-transparent hover:border-[var(--primary-blue)] hover:bg-white transition-all shadow-sm">
                    <div className="flex flex-wrap items-center gap-4 mb-6">
                       <span className="flex items-center gap-2 text-sm font-black text-[var(--primary-blue)] bg-white px-4 py-2 rounded-xl shadow-xs">
                          <svg className="w-4 h-4 text-[var(--accent-gold)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                          {event.date}
                       </span>
                       <span className="flex items-center gap-2 text-sm font-black text-gray-500">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /></svg>
                          {event.venue}
                       </span>
                    </div>
                    <h3 className="text-3xl font-black text-[var(--primary-blue)] mb-4">{event.title}</h3>
                    <p className="text-gray-600 leading-relaxed font-medium">
                      {event.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Subscription CTA */}
      <section className="section-padding bg-[var(--primary-blue)] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
           <Image src="/stone.jpg" alt="Background" fill className="object-cover" />
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-2xl p-12 md:p-20 rounded-[4rem] border border-white/20 text-center">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter">Stay Notified</h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto italic font-medium">
              Join our newsletter to receive monthly updates on OBA projects, events, and alumni achievements directly to your inbox.
            </p>
            <form className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-8 py-5 rounded-2xl bg-white border-none text-[var(--primary-blue)] font-bold focus:ring-4 focus:ring-[var(--accent-gold)] placeholder:text-gray-400 outline-none"
              />
              <button type="submit" className="px-10 py-5 bg-[var(--accent-gold)] text-[var(--primary-blue)] font-black rounded-2xl hover:scale-105 transition-transform shadow-xl">
                SUBSCRIBE NOW
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
