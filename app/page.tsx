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
      {/* Navigation - Matching the image exactly */}
      <header className="bg-[#0f1a2a] text-white sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center py-4 px-4">
          <div className="flex items-center">
            <span className="text-[#FF0000] font-bold text-lg md:text-xl">LEMON</span>
            <span className="font-bold text-lg md:text-xl text-white"> MEDIA</span>
          </div>
          <nav className="flex space-x-4 md:space-x-12">
            <button
              onClick={() => scrollToSection(homeRef)}
              className="text-xs sm:text-sm hover:text-gray-300 cursor-pointer"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection(servicesRef)}
              className="text-xs sm:text-sm hover:text-gray-300 cursor-pointer"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection(contactRef)}
              className="text-xs sm:text-sm hover:text-gray-300 cursor-pointer"
            >
              Contact Us
            </button>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section - Responsive layout that matches the provided design */}
        <section ref={homeRef} className="bg-white pt-10 md:pt-16 pb-0">
          <div className="container mx-auto px-4">
            {/* Mobile: Stacked layout (current) / Desktop: Side-by-side layout (new) */}
            <div className="flex flex-col md:flex-row md:items-center">
              {/* Text content - Left side on desktop, top on mobile */}
              <div className="md:w-2/5 mb-8 md:mb-0 md:pr-4">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                  Triple your revenue <br />
                  with <span className="text-[#FF0000]">Free of Cost</span>
                </h1>
                <div className="mt-4 md:mt-6">
                  <p className="text-lg md:text-xl lg:text-2xl font-bold">
                    500+ <span className="text-sm md:text-base font-normal">Happy Clients</span>
                  </p>
                  <p className="mt-2 text-base md:text-lg">
                    Sky rocket your Billboard revenue with our
                    <br className="hidden sm:block" />
                    Domino effect <span className="text-[#FF0000] font-medium">Trivision Billboard</span>
                  </p>
                </div>
              </div>

              {/* Image - Right side on desktop, bottom on mobile - BIGGER */}
              <div className="md:w-3/5 md:-mr-4 lg:-mr-8 xl:-mr-16">
                <Image
                  src="/sprite-billboard-new.png"
                  alt="Sprite Billboard Advertisement with Fresh Yourself slogan"
                  width={1600}
                  height={1200}
                  className="w-full h-auto object-contain transform md:scale-110 lg:scale-115"
                  sizes="(max-width: 768px) 100vw, 60vw"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="bg-gray-300 py-4">
          <div className="container mx-auto px-4">
            <h2 className="text-center font-bold text-xl uppercase">WHY CHOOSE US</h2>
          </div>
        </section>

        {/* Two-column section (dark blue + red) */}
        <div className="flex flex-col md:flex-row">
          {/* Dark blue section */}
          <section className="bg-[#0a1a2a] text-white py-10 md:py-16 w-full md:w-1/2">
            <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-20">
              <div className="max-w-xl">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6 md:mb-8">
                  You can unlock
                  <br />
                  the new revenue
                  <br />
                  from Billboards
                </h2>
                <div className="space-y-4 md:space-y-6 text-sm md:text-base text-gray-300">
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
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="relative pt-8">
                <div className="absolute inset-x-0 top-0 flex justify-center opacity-10 text-3xl md:text-4xl font-bold italic">
                  Projects
                </div>
                <p className="text-xl sm:text-2xl font-bold relative z-10">
                  1,219 <span className="text-[#FF0000] text-sm">+</span>
                </p>
                <p className="text-xs text-gray-500">Successful Projects</p>
              </div>
              <div className="relative pt-8">
                <div className="absolute inset-x-0 top-0 flex justify-center opacity-10 text-3xl md:text-4xl font-bold italic">
                  Years
                </div>
                <p className="text-xl sm:text-2xl font-bold relative z-10">
                  47 <span className="text-[#FF0000] text-sm">+</span>
                </p>
                <p className="text-xs text-gray-500">Cities Covered</p>
              </div>
              <div className="relative pt-8">
                <div className="absolute inset-x-0 top-0 flex justify-center opacity-10 text-3xl md:text-4xl font-bold italic">
                  Awards
                </div>
                <p className="text-xl sm:text-2xl font-bold relative z-10">
                  25 <span className="text-[#FF0000] text-sm">+</span>
                </p>
                <p className="text-xs text-gray-500">Years in Business</p>
              </div>
              <div className="relative pt-8">
                <div className="absolute inset-x-0 top-0 flex justify-center opacity-10 text-3xl md:text-4xl font-bold italic">
                  Clients
                </div>
                <p className="text-xl sm:text-2xl font-bold relative z-10">
                  481 <span className="text-[#FF0000] text-sm">+</span>
                </p>
                <p className="text-xs text-gray-500">Happy Clients</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section ref={servicesRef} className="py-10 md:py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-center mb-8 md:mb-10">OUR SERVICES</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
              <div className="text-center">
                <div className="overflow-hidden rounded-lg mb-4 shadow-sm">
                  <div className="w-full" style={{ position: "relative", height: "250px", maxHeight: "350px" }}>
                    <Image
                      src="/led-wall-billboard.png"
                      alt="LED Wall Billboard with orange background and model"
                      fill
                      style={{ objectFit: "cover" }}
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                      priority
                    />
                  </div>
                </div>
                <h3 className="font-medium uppercase">LED WALL</h3>
              </div>
              <div className="text-center">
                <div className="overflow-hidden rounded-lg mb-4 shadow-sm">
                  <div className="w-full" style={{ position: "relative", height: "250px", maxHeight: "350px" }}>
                    <Image
                      src="/hoarding-billboard.png"
                      alt="Roadside hoarding billboard in urban setting"
                      fill
                      style={{ objectFit: "cover" }}
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                    />
                  </div>
                </div>
                <h3 className="font-medium uppercase">HOARDING</h3>
              </div>
              <div className="text-center sm:col-span-2 md:col-span-1">
                <div className="overflow-hidden rounded-lg mb-4 shadow-sm">
                  <div className="w-full" style={{ position: "relative", height: "250px", maxHeight: "350px" }}>
                    <Image
                      src="/trivision-billboard.png"
                      alt="Trivision billboard display in urban entertainment district"
                      fill
                      style={{ objectFit: "cover" }}
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                    />
                  </div>
                </div>
                <h3 className="font-medium uppercase">TRIVISION</h3>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-10 md:py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-1">Gallery</h2>
            <p className="text-sm text-gray-500 mb-4 md:mb-6">Latest Add on</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {/* Top row - 3 images */}
              <div className="overflow-hidden rounded-lg group">
                <Image
                  src="/gallery-billboard-1.png"
                  alt="Billboard with yellow elements and BULL BLAK BAK BEOOM text"
                  width={400}
                  height={250}
                  className="w-full h-[200px] sm:h-[250px] object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="overflow-hidden rounded-lg group">
                <Image
                  src="/gallery-billboard-2.png"
                  alt="Black billboard with BOULONY MOIOKD text and product display"
                  width={400}
                  height={250}
                  className="w-full h-[200px] sm:h-[250px] object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="overflow-hidden rounded-lg group sm:col-span-2 md:col-span-1">
                <Image
                  src="/gallery-billboard-3.png"
                  alt="Large blank billboard in Times Square with city lights and traffic"
                  width={400}
                  height={250}
                  className="w-full h-[200px] sm:h-[250px] object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              {/* Bottom row - 2 images */}
              <div className="mt-4 sm:mt-0 overflow-hidden rounded-lg relative group sm:col-span-2">
                <Image
                  src="/gallery-billboard-4.png"
                  alt="Digital LED billboard with purple and teal graphics on corner building"
                  width={800}
                  height={400}
                  className="w-full h-[200px] sm:h-[250px] object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-[#ffcc33] p-3 sm:p-4 md:p-6">
                  <p className="font-bold text-base sm:text-lg md:text-xl">Transform Billboard</p>
                  <p className="text-xs sm:text-sm md:text-base">Outdoor The Most Advertising</p>
                </div>
              </div>
              <div className="mt-4 sm:mt-0 overflow-hidden rounded-lg group">
                <Image
                  src="/gallery-billboard-5.png"
                  alt="Night-time digital billboard with red and teal design showing NEOOEL and NOY CITTY text"
                  width={400}
                  height={250}
                  className="w-full h-[200px] sm:h-[250px] object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section ref={contactRef} className="py-10 md:py-16">
          <div className="container mx-auto px-4">
            <div className="bg-[#f8d24b] rounded-3xl p-6 sm:p-8 md:p-16 relative overflow-hidden">
              {/* Decorative spring bottom left */}
              <div className="absolute bottom-32 left-6 opacity-30 hidden sm:block">
                <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M10,20 C40,20 0,40 30,60 C60,80 20,100 50,120"
                    stroke="#666"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              <div className="md:flex md:space-x-8 items-start justify-between relative z-10">
                {/* Form section */}
                <div className="md:w-1/2 mb-8 md:mb-0">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 md:mb-8">Get In Touch</h2>
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full p-3 sm:p-4 rounded-xl bg-transparent border border-gray-800/20 focus:ring-0 focus:outline-none placeholder-black/70"
                      />
                      <input
                        type="email"
                        placeholder="Your Email"
                        className="w-full p-3 sm:p-4 rounded-xl bg-transparent border border-gray-800/20 focus:ring-0 focus:outline-none placeholder-black/70"
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input
                        type="tel"
                        placeholder="Phone Number"
                        className="w-full p-3 sm:p-4 rounded-xl bg-transparent border border-gray-800/20 focus:ring-0 focus:outline-none placeholder-black/70"
                      />
                      <div className="relative">
                        <select className="w-full p-3 sm:p-4 rounded-xl bg-transparent border border-gray-800/20 appearance-none focus:ring-0 focus:outline-none placeholder-black/70">
                          <option>Choose A Option</option>
                          <option>LED Wall</option>
                          <option>Hoarding</option>
                          <option>Trivision</option>
                        </select>
                        <ChevronDown
                          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500"
                          size={16}
                        />
                      </div>
                    </div>
                    <div>
                      <textarea
                        placeholder="Message Here.."
                        rows={4}
                        className="w-full p-3 sm:p-4 rounded-xl bg-transparent border border-gray-800/20 focus:ring-0 focus:outline-none placeholder-black/70"
                      ></textarea>
                    </div>
                    <div>
                      <button className="bg-black text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-medium flex items-center text-sm sm:text-base">
                        Send Now <span className="ml-1">→</span>
                      </button>
                    </div>
                  </form>
                </div>

                {/* Image section with spring in top right */}
                <div className="md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0">
                  <div className="rounded-2xl overflow-hidden shadow-lg relative" style={{ maxWidth: "400px" }}>
                    {/* Spring in top right of image */}
                    <div className="absolute top-2 -right-8 opacity-30 z-10 hidden sm:block">
                      <svg
                        width="100"
                        height="100"
                        viewBox="0 0 100 100"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M60,10 C90,10 30,30 60,50 C90,70 30,90 60,110"
                          stroke="#666"
                          strokeWidth="2"
                          fill="none"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
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
              <h2 className="text-3xl sm:text-4xl md:text-5xl">
                <span className="font-bold">Subscribe</span> <span className="font-light">Newsletter</span>
              </h2>
              <p className="text-gray-400 mt-4 text-xs sm:text-sm md:text-base max-w-2xl mx-auto px-2">
                Business Consulting Services Can Range From Strategy Develo Financial Planning,
                <br className="hidden md:block" /> Marketing, Human Resources Management
              </p>
            </div>

            <div className="mt-6 sm:mt-8 mb-12 sm:mb-16 relative max-w-2xl mx-auto px-4 sm:px-6">
              <form className="flex rounded-full overflow-hidden border border-gray-700 bg-transparent relative pr-2 sm:pr-0">
                <input
                  type="email"
                  placeholder="Your E-Mail"
                  className="w-full py-3 sm:py-4 px-6 sm:px-8 bg-transparent text-white focus:outline-none text-sm sm:text-base"
                />
                <button className="bg-[#f8d24b] text-black px-4 sm:px-8 py-2 sm:py-3 font-medium rounded-full absolute right-1 top-1 text-xs sm:text-base mr-2 sm:mr-0">
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
