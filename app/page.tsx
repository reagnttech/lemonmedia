"use client"

import type React from "react"

import Image from "next/image"
import { ChevronDown } from "lucide-react"
import { useRef } from "react"

export default function Home() {
  // References to sections
  const homeRef = useRef<HTMLDivElement>(null)
  const servicesRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)

  // Scroll to section function
  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop - 80, // Offset for header height
        behavior: "smooth",
      })
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Custom font styles */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Arial:wght@400;700&display=swap');
        
        .font-gilroy {
          font-family: 'Gilroy', sans-serif;
        }
        
        .font-arial {
          font-family: 'Arial', sans-serif;
        }
        
        .font-calibri {
          font-family: 'Calibri', 'Trebuchet MS', sans-serif;
        }
      `}</style>

      {/* Navigation - Matching the image exactly */}
      <header className="bg-[#0f1a2a] text-white sticky top-0 z-50">
        <div className="container mx-auto flex items-center py-4 px-4">
          <div className="flex items-center">
            <span className="text-[#FF0000] font-bold text-xl md:text-xl font-arial">LEMON</span>
            <span className="font-bold text-xl md:text-xl text-white font-arial"> MEDIA</span>
          </div>
          <nav className="flex ml-auto space-x-6 md:space-x-16">
            <button
              onClick={() => scrollToSection(homeRef)}
              className="text-xs md:text-base hover:text-gray-300 cursor-pointer font-arial"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection(servicesRef)}
              className="text-xs md:text-base hover:text-gray-300 cursor-pointer font-arial"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection(contactRef)}
              className="text-xs md:text-base hover:text-gray-300 cursor-pointer font-arial"
            >
              Contact Us
            </button>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section - Increase top padding significantly */}
        <section ref={homeRef} className="bg-white pt-16 md:pt-24 pb-0">
          <div className="container mx-auto px-4">
            {/* Mobile: Stacked layout with more spacing / Desktop: Side-by-side layout */}
            <div className="flex flex-col md:flex-row md:items-center">
              {/* Text content - Adjust width and spacing for mobile */}
              <div className="md:w-1/2 mb-8 md:mb-0 md:pr-4">
                <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-10 md:mb-8 font-gilroy">
                  Triple your revenue with
                  <br className="block md:block" />
                  <span className="text-[#FF0000] text-3xl md:text-4xl lg:text-5xl xl:text-6xl">Free of Cost</span>
                </h1>
                <div className="mt-8 md:mt-6">
                  <p className="text-4xl md:text-2xl lg:text-3xl font-normal mb-6 md:mb-6 font-arial">
                    500+<span className="text-sm md:text-base font-bold font-gilroy">Happy Clients</span>
                  </p>
                  <p className="mt-6 text-base md:text-lg mb-12 md:mb-16 font-gilroy font-medium">
                    Sky rocket your Billboard revenue with our
                    <br className="block sm:block" />
                    Domino effect <span className="text-[#FF0000] font-medium font-gilroy">Trivision Billboard</span>
                  </p>
                </div>
              </div>

              {/* Image - Adjust width */}
              <div className="md:w-1/2 md:-mr-4 lg:-mr-8 xl:-mr-16">
                <Image
                  src="/sprite-billboard-new.png"
                  alt="Sprite Billboard Advertisement with Fresh Yourself slogan"
                  width={1600}
                  height={1200}
                  className="w-full h-auto object-contain"
                  sizes="(max-width: 768px) 100vw, 60vw"
                  priority
                />
              </div>
            </div>
          </div>
          {/* "Why Choose Us" - Remove margin */}
          <div className="bg-gray-300 py-3 rounded-tl-[15px] rounded-tr-[15px] overflow-hidden"> 
            <div className="container mx-auto px-4">
              <h2 className="font-medium text-base md:text-xl text-center md:text-left uppercase font-calibri">WHY CHOOSE US</h2>
            </div>
          </div>
        </section>

        {/* Two-column section (dark blue + red) */}
        <div className="flex flex-col md:flex-row">
          {/* Dark blue section */}
          <section className="bg-[#0a1a2a] text-white py-10 md:py-16 w-full md:w-1/2">
            <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-20">
              <div className="max-w-xl">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6 md:mb-8 font-calibri">
                  You can unlock
                  <br />
                  the new revenue
                  <br />
                  from Billboards
                </h2>
                <div className="space-y-4 md:space-y-6 text-sm md:text-base text-gray-300 font-calibri font-light">
                  <p>We are joint venture advertising company.</p>
                  <p>
                    Our Moto is increasing your Existing
                    <br className="hidden sm:block" />
                    Billboard revenue at Free of Cost (Win-Win Situation).
                  </p>
                  <p>Our Winning metric is your prime locations</p>
                </div>
              </div>
            </div>
          </section>

          {/* Red section with billboard image */}
          <section className="bg-[#BF0021] py-10 md:py-16 w-full md:w-1/2 relative">
            <div className="container mx-auto px-4 flex justify-center items-center h-full">
              <div className="relative">
                {/* Billboard image with rounded border */}
                <div className="relative z-10">
                  <div>
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-X9OlMffpFU83jkIqWokd9o5GMKDqUX.png"
                      alt="Billboard Advertisement with Woman and UHK Product"
                      width={400}
                      height={400}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Stats Section */}
        <section className="py-10 md:py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="relative pt-8">
                <div className="absolute inset-x-0 top-0 flex justify-center opacity-10 text-3xl md:text-4xl font-bold italic font-calibri">
                  Projects
                </div>
                <p className="text-xl sm:text-2xl font-bold relative z-10 font-calibri">
                  1,219 <span className="text-[#FF0000] text-sm">+</span>
                </p>
                <p className="text-xs text-gray-500 font-calibri">Successful Project</p>
              </div>
              <div className="relative pt-8">
                <div className="absolute inset-x-0 top-0 flex justify-center opacity-10 text-3xl md:text-4xl font-bold italic font-calibri">
                  Years
                </div>
                <p className="text-xl sm:text-2xl font-bold relative z-10 font-calibri">
                  47 <span className="text-[#FF0000] text-sm">+</span>
                </p>
                <p className="text-xs text-gray-500 font-calibri">Years Experience</p>
              </div>
              <div className="relative pt-8">
                <div className="absolute inset-x-0 top-0 flex justify-center opacity-10 text-3xl md:text-4xl font-bold italic font-calibri">
                  Awards
                </div>
                <p className="text-xl sm:text-2xl font-bold relative z-10 font-calibri">
                  25 <span className="text-[#FF0000] text-sm">+</span>
                </p>
                <p className="text-xs text-gray-500 font-calibri">Winning Awards</p>
              </div>
              <div className="relative pt-8">
                <div className="absolute inset-x-0 top-0 flex justify-center opacity-10 text-3xl md:text-4xl font-bold italic font-calibri">
                  Clients
                </div>
                <p className="text-xl sm:text-2xl font-bold relative z-10 font-calibri">
                  481 <span className="text-[#FF0000] text-sm">+</span>
                </p>
                <p className="text-xs text-gray-500 font-calibri">Satisfied Clients</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section ref={servicesRef} className="py-10 md:py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-center mb-8 md:mb-10 font-calibri font-light">OUR SERVICES</h2>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              <div className="text-center mx-auto w-full">
                <div className="w-full relative mb-4 aspect-[4/3]">
                  <Image
                    src="/led-wall-billboard.png"
                    alt="LED Wall Billboard with orange background and model"
                    fill
                    style={{ objectFit: "cover" }}
                    className="object-cover object-top"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                    priority
                  />
                </div>
                <h3 className="font-medium uppercase font-calibri">LED WALL</h3>
              </div>
              <div className="text-center sm:hidden md:block">
                <div className="w-full relative mb-4 aspect-[4/3]">
                  <Image
                    src="/hoarding-billboard.png"
                    alt="Roadside hoarding billboard in urban setting"
                    fill
                    style={{ objectFit: "cover" }}
                    className="object-cover object-top"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                  />
                </div>
                <h3 className="font-medium uppercase font-calibri">HOARDING</h3>
              </div>
              <div className="text-center sm:hidden md:block">
                <div className="w-full relative mb-4 aspect-[4/3]">
                  <Image
                    src="/trivision-billboard.png"
                    alt="Trivision billboard display in urban entertainment district"
                    fill
                    style={{ objectFit: "cover" }}
                    className="object-cover object-top"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                  />
                </div>
                <h3 className="font-medium uppercase font-calibri">TRIVISION</h3>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section - Increase horizontal padding significantly for larger screens */}
        <section className="py-10 md:py-16 bg-gray-100 md:px-24 lg:px-48">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-1 font-calibri">Gallery</h2>
            <p className="text-sm text-gray-500 mb-4 md:mb-6 font-calibri font-light">Latest Add on</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
              {/* Top row - 3 images */}
              <div className="overflow-hidden rounded-lg group md:col-span-2">
                <Image
                  src="/gallery-billboard-1.png"
                  alt="Billboard with yellow elements and BULL BLAK BAK BEOOM text"
                  width={400}
                  height={250}
                  className="w-full h-[200px] sm:h-[250px] object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="overflow-hidden rounded-lg group md:col-span-1">
                <Image
                  src="/gallery-billboard-2.png"
                  alt="Black billboard with BOULONY MOIOKD text and product display"
                  width={400}
                  height={250}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="overflow-hidden rounded-lg group sm:col-span-2 md:col-span-2">
                <Image
                  src="/gallery-billboard-3.png"
                  alt="Large blank billboard in Times Square with city lights and traffic"
                  width={400}
                  height={250}
                  className="w-full h-[200px] sm:h-[250px] object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              {/* Bottom row - 2 images */}
              <div className="mt-4 sm:mt-0 overflow-hidden rounded-lg relative group sm:col-span-2 md:col-span-3">
                <Image
                  src="/gallery-billboard-4.png"
                  alt="Digital LED billboard with purple and teal graphics on corner building"
                  width={800}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="mt-4 sm:mt-0 overflow-hidden rounded-lg group md:col-span-2">
                <Image
                  src="/gallery-billboard-5.png"
                  alt="Night-time digital billboard with red and teal design showing NEOOEL and NOY CITTY text"
                  width={400}
                  height={250}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section ref={contactRef} className="py-10 md:py-16">
          <div className="container mx-auto px-4">
            <div className="bg-[#EBD163] rounded-3xl py-12 sm:py-16 md:py-28 relative overflow-hidden">
              {/* Replace SVG with Image component for bottom left spring */}
              <div className="absolute bottom-32 left-6 opacity-30 hidden sm:block">
                <Image 
                  src="/spring-graphic.png"
                  alt="Decorative spring graphic"
                  width={95}
                  height={120}
                  className="transform rotate-180"
                />
              </div>

              {/* Increase horizontal padding to this inner div */}
              <div className="md:flex md:space-x-8 items-start justify-between relative z-10 px-12 sm:px-16 md:px-32">
                {/* Form section */}
                <div className="md:w-1/2 mb-8 md:mb-0">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 md:mb-8 font-calibri">Get In Touch</h2>
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full p-3 sm:p-4 rounded-2xl bg-transparent border border-black focus:ring-0 focus:outline-none placeholder-black/70 text-sm font-calibri"
                      />
                      <input
                        type="email"
                        placeholder="Your Email"
                        className="w-full p-3 sm:p-4 rounded-2xl bg-transparent border border-black focus:ring-0 focus:outline-none placeholder-black/70 text-sm font-calibri"
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input
                        type="tel"
                        placeholder="Phone Number"
                        className="w-full p-3 sm:p-4 rounded-2xl bg-transparent border border-black focus:ring-0 focus:outline-none placeholder-black/70 text-sm font-calibri"
                      />
                      <div className="relative">
                        <select className="w-full p-3 sm:p-4 rounded-2xl bg-transparent border border-black appearance-none focus:ring-0 focus:outline-none placeholder-black/70 text-sm font-calibri pr-8">
                          <option>Choose A Option</option>
                          <option>LED Wall</option>
                          <option>Hoarding</option>
                          <option>Trivision</option>
                        </select>
                        <ChevronDown
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-black pointer-events-none"
                          size={14}
                        />
                      </div>
                    </div>
                    <div>
                      <textarea
                        placeholder="Message Here.."
                        rows={4}
                        className="w-full p-3 sm:p-4 rounded-2xl bg-transparent border border-black focus:ring-0 focus:outline-none placeholder-black/70 text-sm font-calibri"
                      ></textarea>
                    </div>
                    <div>
                      <button className="bg-black text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-medium flex items-center text-sm sm:text-base font-calibri">
                        Send Now <span className="ml-1">→</span>
                      </button>
                    </div>
                  </form>
                </div>

                {/* Image section with spring in top right */}
                <div className="md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0">
                  <div className="rounded-2xl overflow-hidden shadow-lg relative" style={{ maxWidth: "400px" }}>
                    <Image
                      src="/contact-billboard-new.png"
                      alt="Digital billboard with cityscape against orange sunset sky"
                      width={400}
                      height={280}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>

              {/* Spring div moved here, positioned relative to yellow container - Move even further right */}
              <div className="absolute top-16 right-4 md:right-8 opacity-100 z-10 hidden sm:block">
                <Image 
                  src="/spring-graphic.png"
                  alt="Decorative spring graphic"
                  width={95}
                  height={120}
                />
              </div>
            </div>

            {/* Stats section */}
            <div className="relative -mt-6 sm:-mt-8 md:-mt-12 z-20 max-w-5xl mx-auto">
              <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-md">
                <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-gray-200">
                  <div className="text-center p-2 md:p-4">
                    <p className="text-xl sm:text-2xl md:text-3xl font-bold">200+</p>
                    <p className="text-xs text-gray-500">Canvases</p>
                  </div>
                  <div className="text-center p-2 md:p-4">
                    <p className="text-xl sm:text-2xl md:text-3xl font-bold">12M+</p>
                    <p className="text-xs text-gray-500">Weekly Impressions</p>
                  </div>
                  <div className="text-center p-2 md:p-4">
                    <p className="text-xl sm:text-2xl md:text-3xl font-bold">200K+</p>
                    <p className="text-xs text-gray-500">Creatives</p>
                  </div>
                  <div className="text-center p-2 md:p-4">
                    <p className="text-xl sm:text-2xl md:text-3xl font-bold">500+</p>
                    <p className="text-xs text-gray-500">Clients</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 pb-32 bg-[#1a1a1a] text-white relative">
          {/* Custom border with CSS */}
          <div
            className="absolute left-0 right-0 top-0 bottom-0"
            style={{
              width: "90%", // Wider on mobile
              maxWidth: "1200px",
              margin: "0 auto",
              borderLeft: "1px solid rgba(107, 114, 128, 0.3)",
              borderRight: "1px solid rgba(107, 114, 128, 0.3)",
              borderBottom: "1px solid rgba(107, 114, 128, 0.3)",
              borderTop: "none",
              borderBottomLeftRadius: "100px",
              borderBottomRightRadius: "100px",
              height: "calc(100% - 60px)", // Make the border shorter than the section
              paddingTop: "20px", // Add padding inside the border
            }}
          ></div>

          <div className="container mx-auto px-6 sm:px-8 md:px-10 max-w-4xl relative z-10 pt-6 sm:pt-8 md:pt-10">
            <div className="text-center mb-6 px-4 sm:px-6 md:px-8">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-calibri">
                <span className="font-bold">Subscribe</span> <span className="font-light">Newsletter</span>
              </h2>
              <p className="text-gray-400 mt-4 text-xs sm:text-sm md:text-base max-w-2xl mx-auto px-2 font-calibri font-light">
                Business Consulting Services Can Range From Strategy Develo Financial Planning,
                <br className="hidden md:block" /> Marketing, Human Resources Management
              </p>
            </div>

            <div className="mt-6 sm:mt-8 mb-12 sm:mb-16 relative max-w-2xl mx-auto px-4 sm:px-6">
              <form className="flex rounded-full overflow-hidden border border-gray-700 bg-transparent relative pr-2 sm:pr-0">
                <input
                  type="email"
                  placeholder="Your E-Mail"
                  className="w-full py-3 sm:py-4 px-6 sm:px-8 bg-transparent text-white focus:outline-none text-sm sm:text-base font-calibri"
                />
                <button className="bg-[#f8d24b] text-black px-4 sm:px-8 py-2 sm:py-3 font-medium rounded-full absolute right-1 top-1 text-xs sm:text-base mr-2 sm:mr-0 font-calibri">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
