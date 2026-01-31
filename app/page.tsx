"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      title: "Isipathana College Old Boys' Association UK",
      subtitle: "Strive with Determination",
      description:
        "Building a legacy of excellence through 62 years of dedicated service to education and community development",
      cta: "Discover Our Story",
      ctaLink: "/about",
      image: "/ChatGPT Image Jan 31, 2026, 12_54_26 PM.png",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const coreValues = [
    {
      icon: (
        <svg
          className="w-14 h-14"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
      title: "Integrity",
      description:
        "Upholding the highest standards of honesty and ethical conduct in all our endeavors",
    },
    {
      icon: (
        <svg
          className="w-14 h-14"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
      title: "Partnership",
      description:
        "Collaborating with stakeholders to achieve common goals for the betterment of our community",
    },
    {
      icon: (
        <svg
          className="w-14 h-14"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
          />
        </svg>
      ),
      title: "Excellence",
      description:
        "Striving for the highest quality in education, sports, and personal development",
    },
    {
      icon: (
        <svg
          className="w-14 h-14"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      ),
      title: "Innovation",
      description:
        "Embracing new ideas and approaches to continuously improve and evolve",
    },
  ];

  const serviceAreas = [
    {
      title: "Education Development",
      description:
        "Working closely with School Academic staff in developing areas of Education and bringing external support, knowledge for the betterment of the students",
      icon: (
        <svg
          className="w-16 h-16"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>
      ),
      link: "/education",
    },
    {
      title: "Sports Management & Development",
      description:
        "Managing and developing the number of sports currently active and continuously work towards introducing new sports in the International arena to School level",
      icon: (
        <svg
          className="w-16 h-16"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      link: "/sports",
    },
    {
      title: "Affiliated Associations",
      description:
        "Working closely with the Old Boys' across yearly groups, Sports groups and across the globe to partner for excellence & School development",
      icon: (
        <svg
          className="w-16 h-16"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
          />
        </svg>
      ),
      link: "/affiliated",
    },
  ];

  const stats = [
    { number: "34", label: "Years of Excellence", suffix: "+" },
    { number: "1000", label: "Active Members", suffix: "+" },
    { number: "150", label: "Projects Completed", suffix: "+" },
    { number: "50", label: "Affiliated Groups", suffix: "+" },
  ];

  return (
    <div>
      {/* Hero Section with Modern Slider */}
      <section className="relative h-[650px] md:h-[750px] overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="absolute inset-0">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </div>
            <div className="relative h-full container-custom flex items-center justify-center">
              <div className="w-full text-white text-center flex flex-col items-center">
                <div className="bg-white/20 backdrop-blur-md px-6 py-8 rounded-sm shadow-2xl animate-slide-up max-w-4xl mx-auto">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-[#094a24] leading-tight tracking-tighter uppercase italic text-center mb-6 drop-shadow-sm">
                    {slide.title}
                  </h1>
                  <p className="text-lg md:text-xl text-black font-bold leading-relaxed text-center drop-shadow-sm">
                    {slide.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Modern Slider Indicators */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex gap-3 z-10">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`transition-all ${
                index === currentSlide
                  ? "bg-[var(--accent-gold)] w-12 h-2 rounded-full"
                  : "bg-white/50 w-2 h-2 rounded-full hover:bg-white/75"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* About Section - Modern Card Design */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="order-2 lg:order-1 animate-slide-in-left">
              <div className="badge badge-primary mb-4">About Us</div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[var(--primary-blue)]">
                Isipathana College Old Boys' Association
              </h2>
              <div className="divider mb-6"></div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
               
The Old Boys Association (OBA) of Isipathana College, established in 1992, 
plays a crucial role in the school's growth and development. Through fundraising, 
the OBA supports infrastructure projects, scholarships, and extracurricular activities. 
It has funded new buildings, renovations, and sports amenities. 
The OBA also provides mentorship, networking, and cultural promotion, significantly 
enhancing the educational experience and development of the college. Its dedication and efforts are vital in 
shaping the future of Isipathana College and its students.The Old Boys Association (OBA) of Isipathana College,
 established in 1992, plays a crucial role in the school's growth and development. 
 Through fundraising, the OBA supports infrastructure projects, scholarships, and extracurricular activities. 
 It has funded new buildings, renovations, and sports amenities. The OBA also provides mentorship, networking, and cultural promotion, significantly 
 enhancing the educational experience and development of the college. Its dedication and efforts are vital in 
 shaping the future of Isipathana College and its students.
              </p>
              <Link href="/about/history" className="btn-primary">
                Discover Our Legacy
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Link>
            </div>
            <div className="order-1 lg:order-2 relative animate-slide-in-right">
              <div className="flex flex-col overflow-hidden rounded-[2.5rem] shadow-2xl bg-black w-full">
                <div className="relative h-[500px] md:h-[650px] overflow-hidden">
                  <Image
                    src="/8ca8a646-64fd-4e63-a450-1046d9b621c8.png"
                    alt="Isipathana College Crest"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="p-12 text-white bg-gradient-to-br from-[var(--primary-blue)] to-[var(--primary-blue-dark)] flex flex-col items-center text-center">
                  <div className="text-7xl font-bold mb-3">34</div>
                  <div className="text-2xl font-semibold mb-2">
                    Years of Excellence
                  </div>
                  <div className="text-lg text-gray-300">
                    Strive with Determination
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-gradient-to-br from-[var(--accent-gold)] to-[var(--accent-gold-dark)] rounded-2xl -z-10 opacity-20"></div>
              <div className="absolute -top-8 -left-8 w-32 h-32 bg-gradient-to-br from-[var(--primary-blue)] to-[var(--primary-blue-dark)] rounded-2xl -z-10 opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values - Modern Grid */}
      <section className="section-padding bg-pattern bg-[var(--background-secondary)]">
        <div className="container-custom">
          <div className="text-center mb-16 flex flex-col items-center">
            <div className="badge badge-primary mb-4 mx-auto">Our Values</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[var(--primary-blue)] text-center">
              Guided by Our Core Values
            </h2>
            <div className="divider mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center">
              The principles that guide our mission and vision for excellence
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <div key={index} className="card card-hover text-center group">
                <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-[var(--primary-blue)] to-[var(--primary-blue-dark)] text-white rounded-2xl mb-6 mx-auto group-hover:scale-110 transition-transform">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-[var(--primary-blue)]">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas - Modern Cards */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16 flex flex-col items-center">
            <div className="badge badge-primary mb-4 mx-auto">What We Do</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[var(--primary-blue)] text-center">
              Our Service Areas
            </h2>
            <div className="divider mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center">
              Our commitment to excellence across multiple domains
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {serviceAreas.map((service, index) => (
              <div
                key={index}
                className="card card-hover group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[var(--accent-gold)]/10 to-transparent rounded-bl-[100px]"></div>
                <div className="relative">
                  <div className="mb-6 text-[var(--primary-blue)] group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-[var(--primary-blue)]">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <Link
                    href={service.link}
                    className="inline-flex items-center text-[var(--accent-gold)] font-semibold hover:gap-3 transition-all group"
                  >
                    Learn More
                    <svg
                      className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics - Modern Design */}
      <section className="section-padding bg-gradient-to-br from-[var(--primary-blue)] via-[var(--primary-blue-dark)] to-[var(--primary-blue)] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[var(--accent-gold)] rounded-full blur-3xl"></div>
        </div>
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-6xl md:text-7xl font-bold text-[var(--accent-gold)] mb-3 group-hover:scale-110 transition-transform">
                  {stat.number}
                  {stat.suffix}
                </div>
                <div className="text-lg md:text-xl text-gray-200 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Modern Gradient */}
      <section className="section-padding bg-gradient-to-r from-[var(--accent-gold)] via-[var(--accent-gold-dark)] to-[var(--accent-gold)] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="container-custom relative z-10 flex flex-col items-center text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[var(--primary-blue)] text-center w-full">
            Join Our Community Today
          </h2>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-[var(--primary-blue-dark)] text-center">
            Be part of a legacy that continues to shape the future of Isipathana
            College
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/membership"
              className="btn-primary bg-[var(--primary-blue)] hover:bg-[var(--primary-blue-dark)] shadow-xl"
            >
              Become a Member
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>
            <Link
              href="/contact"
              className="btn-secondary border-[var(--primary-blue)] text-[var(--primary-blue)] hover:bg-[var(--primary-blue)] hover:text-white shadow-lg"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
