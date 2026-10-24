import { useState } from 'react';
import Image from "next/image";
import "../public/styles.css";
import Link from 'next/link';
import type { AppProps } from 'next/app';
import Head from 'next/head';

export default function MyApp({ Component, pageProps }: AppProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Head>
        <link rel="icon" href="/Logo.png" />
      </Head>

      {/* Persistent Navigation Bar */}
      <header className="flex items-center justify-between px-6 py-4 border-b border-gray-200 sticky top-0 bg-white z-50">
        <div className="flex items-center justify-between w-full md:w-auto">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-12 h-12 rounded-sm flex items-center justify-center relative">
              <Image src="/Logo.png" alt="Logo" width={50} height={50} className="object-contain" />
            </div>
            <span className="font-bold text-xl tracking-tighter">Loong Star</span>
          </Link>
          
          {/* Mobile Menu Hamburger Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-black focus:outline-none"
            aria-label="Toggle Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                // Close Icon (X)
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                // Hamburger Icon
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        
        {/* Desktop Navigation (Hidden on mobile, visible on md and up) */}
        <nav className="hidden md:flex items-center space-x-6 text-sm text-gray-500">
          <Link href="/" className="hover:text-black font-medium">Home</Link>
          <Link href="/Catalog" className="hover:text-black">Products</Link>
          <Link href="/Services" className="hover:text-black">Services</Link>
          <span className="text-gray-900 font-medium">Contact us on Whatsapp! 0168264186</span>
        </nav>
      </header>

      {/* Mobile Menu Dropdown (Visible only when toggled open on mobile) */}
      {mobileMenuOpen && (
        <nav className="md:hidden flex flex-col px-6 py-4 space-y-4 bg-white border-b border-gray-200 text-sm text-gray-500 shadow-md sticky top-[73px] z-40">
          <Link 
            href="/" 
            onClick={() => setMobileMenuOpen(false)} 
            className="hover:text-black font-medium"
          >
            Home
          </Link>
          <Link 
            href="/Catalog" 
            onClick={() => setMobileMenuOpen(false)} 
            className="hover:text-black"
          >
            Products
          </Link>
          <Link 
            href="/Services" 
            onClick={() => setMobileMenuOpen(false)} 
            className="hover:text-black"
          >
            Services
          </Link>
          <span className="text-gray-900 font-medium pt-2 border-t border-gray-100">
            Contact us on Whatsapp! 0168264186
          </span>
        </nav>
      )}

      {/* Active Page Component */}
      <main className="flex-1">
        <Component {...pageProps} />
      </main>

      {/* Footer matching your exact layout design */}
      <footer className="bg-gray-900 text-gray-300 pt-16 pb-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-gray-800">
          {/* Column 4: Get In Touch */}
          <div>
            <h3 className="text-white font-bold tracking-wider mb-4 text-sm">GET IN TOUCH</h3>
            <div className="space-y-4 text-sm text-gray-400">
              <div className="flex items-start gap-3">
                <Link href="https://maps.app.goo.gl/uy6W6QN6TpAPBTBi7" className="hover:text-yellow-400 transition-colors">
                  Mile 6<br/>Lot 9 Ground Floor Block A2 Utama Place<br/> Jalan Labuk, 90000 Sandakan, Sabah
                </Link>
              </div>
              <div className="flex items-center gap-3">
                <span>Office<br/>089220186</span>
              </div>
              <div className="flex items-start gap-3">
                <span>Mon - Sat: 8:30am - 5:00pm<br /> Sun: Closed</span>
              </div>
              <Link href="/T&C" className="hover:text-yellow-400 transition-colors">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="max-w-7xl mx-auto px-8 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <div>
            Copyright © Loong Star Air-Conditioner & Electrical Services 2026 | All Rights Reserved | 
          </div>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-red-500 hover:text-red-400 transition-colors"></Link>
            <Link href="#" className="text-red-500 hover:text-red-400 transition-colors"></Link>
          </div>
        </div>
      </footer>
    </div>
  );
}