import Image from 'next/image';
import PageHeader from '@/components/PageHeader';

export default function ContactPage() {
  const contactMethods = [
    {
      title: "Our Secretariat",
      details: ["Isipathana College OBA", "Isipathana Mawatha", "Colombo 05, Sri Lanka"],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      color: "var(--primary-blue)"
    },
    {
      title: "Contact Numbers",
      details: ["+94 11 2 581 332", "+94 11 2 505 528"],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      color: "var(--accent-gold-dark)"
    },
    {
      title: "Email Addresses",
      details: ["info@iobauk.org", "secretary@iobauk.org"],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      color: "var(--primary-blue-light)"
    }
  ];

  return (
    <div className="bg-white">
      <PageHeader 
        title="Get In Touch" 
        breadcrumbs={[{ label: 'Contact Us' }]} 
      />

      {/* Info Cards */}
      <section className="relative -mt-16 z-10 pb-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map((method, idx) => (
              <div key={idx} className="bg-white p-10 rounded-[3rem] shadow-2xl border border-[var(--gray-100)] transform hover:-translate-y-2 transition-all group">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-colors" style={{ backgroundColor: `${method.color}15`, color: method.color }}>
                   {method.icon}
                </div>
                <h3 className="text-2xl font-black text-[var(--primary-blue)] mb-4">{method.title}</h3>
                <div className="space-y-2">
                  {method.details.map((line, i) => (
                    <p key={i} className="text-gray-500 font-bold break-words">{line}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-[var(--gray-50)]">
         <div className="container-custom">
            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row bg-white rounded-[4rem] shadow-2xl overflow-hidden border border-[var(--gray-200)]">
               
               {/* Contact Form */}
               <div className="lg:w-3/5 p-10 md:p-16">
                  <h2 className="text-4xl font-black text-[var(--primary-blue)] mb-2 uppercase tracking-tight">Send a Message</h2>
                  <p className="text-gray-500 font-bold mb-12">Submit your inquiry and our team will get back to you within 48 hours.</p>
                  
                  <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                       <label className="text-xs font-black uppercase tracking-widest text-gray-400">Full Name</label>
                       <input type="text" className="w-full px-6 py-4 bg-[var(--gray-50)] border-2 border-transparent rounded-2xl focus:border-[var(--primary-blue)] focus:bg-white outline-none transition-all font-bold" placeholder="E.g. John Doe" />
                    </div>
                    <div className="space-y-2">
                       <label className="text-xs font-black uppercase tracking-widest text-gray-400">Email Address</label>
                       <input type="email" className="w-full px-6 py-4 bg-[var(--gray-50)] border-2 border-transparent rounded-2xl focus:border-[var(--primary-blue)] focus:bg-white outline-none transition-all font-bold" placeholder="name@email.com" />
                    </div>
                    <div className="space-y-2 md:col-span-2">
                       <label className="text-xs font-black uppercase tracking-widest text-gray-400">Subject</label>
                       <select className="w-full px-6 py-4 bg-[var(--gray-50)] border-2 border-transparent rounded-2xl focus:border-[var(--primary-blue)] focus:bg-white outline-none transition-all font-bold appearance-none">
                          <option>General Inquiry</option>
                          <option>Membership Services</option>
                          <option>Sports Development</option>
                          <option>Donations & Projects</option>
                       </select>
                    </div>
                    <div className="space-y-2 md:col-span-2">
                       <label className="text-xs font-black uppercase tracking-widest text-gray-400">Message Details</label>
                       <textarea rows={5} className="w-full px-6 py-4 bg-[var(--gray-50)] border-2 border-transparent rounded-2xl focus:border-[var(--primary-blue)] focus:bg-white outline-none transition-all font-bold resize-none" placeholder="Tell us how we can help..."></textarea>
                    </div>
                    <div className="md:col-span-2 pt-4">
                       <button type="submit" className="w-full py-6 bg-[var(--primary-blue)] text-white text-xl font-black rounded-3xl hover:bg-[var(--primary-blue-dark)] shadow-xl shadow-[var(--primary-blue)]/20 transition-all transform hover:-translate-y-1">
                          SEND MESSAGE →
                       </button>
                    </div>
                  </form>
               </div>

               {/* Office Highlight */}
               <div className="lg:w-2/5 bg-[var(--primary-blue)] p-10 md:p-16 text-white relative">
                  <div className="absolute inset-0 opacity-10 pointer-events-none">
                     <Image src="/stone.jpg" alt="Background" fill className="object-cover" />
                  </div>
                  <div className="relative z-10 h-full flex flex-col">
                     <h3 className="text-3xl font-black mb-8 uppercase tracking-widest text-[var(--accent-gold)]">Our Office</h3>
                     <div className="space-y-10 flex-1">
                        <div>
                           <p className="text-gray-400 font-bold uppercase text-xs tracking-tighter mb-2">Primary Location</p>
                           <p className="text-xl font-medium leading-relaxed">Isipathana College premises,<br />Isipathana Mawatha,<br />Colombo 00500, Sri Lanka.</p>
                        </div>
                        <div>
                           <p className="text-gray-400 font-bold uppercase text-xs tracking-tighter mb-2">Operating Hours</p>
                           <p className="text-xl font-medium leading-relaxed">Mon - Fri: 09:00 AM - 05:00 PM<br />Sat: 09:00 AM - 01:00 PM</p>
                        </div>
                     </div>
                     <div className="mt-12 p-8 bg-white/5 rounded-3xl border border-white/10">
                        <p className="text-sm italic font-medium text-gray-300">"The OBA office is located near the main entrance of the college for easy access to all visiting alumni."</p>
                     </div>
                  </div>
               </div>

            </div>
         </div>
      </section>

      {/* Social Banner */}
      <section className="py-20 bg-white">
         <div className="container-custom text-center">
            <h2 className="text-2xl font-black text-[var(--primary-blue)] mb-8 uppercase tracking-widest">Connect Digitally</h2>
            <div className="flex justify-center gap-6">
               {['Facebook', 'Twitter', 'Instagram', 'LinkedIn'].map((platform, idx) => (
                  <a key={idx} href="#" className="px-8 py-4 bg-[var(--gray-50)] rounded-2xl font-black text-[var(--primary-blue)] border-2 border-transparent hover:border-[var(--accent-gold)] hover:bg-white transition-all shadow-sm">
                     {platform}
                  </a>
               ))}
            </div>
         </div>
      </section>
    </div>
  );
}
