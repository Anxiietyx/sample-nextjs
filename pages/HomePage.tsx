import Link from 'next/link';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';


export default function HomePage() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate height: starts at 60vh and shrinks or grows based on scroll position
  // Clamping ensures it doesn't shrink or grow past certain limits
  const heroHeight = Math.max(200, Math.min(800, 400 + scrollY * 0.5));

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <section 
        className="relative w-full bg-gray-900 flex items-center justify-center text-center px-4 overflow-hidden transition-all duration-75 ease-out"
        style={{ height: `${heroHeight}px` }}
      >
        {/* Background Image */}
        <Image 
          src="/Storefront.jpeg" 
          alt="Hero Car Background" 
          fill
          priority
          className="object-cover object-center z-0" 
        />
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50 z-10" />
        
        {/* Hero Title */}
        <div className="relative z-20 max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold text-white tracking-wide">
            The Loong Star Tean : What We&apos;re About
          </h1>
        </div>
      </section>
      
      {/* Main Container for Content Sections */}
      <main className="max-w-6xl mx-auto px-6 py-16 flex flex-col gap-24">
        
        {/* About Us Section */}
        <section className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/2 flex flex-col gap-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">About Us</h2>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              We&apos;re currently a team of two passionate and hard working individuals that strive to produce the best results and experience to our customers.
            </p>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              We do our best to answer every call, reply to every message, and give our undivided attention to every customer that trusts us with their vehicle. Sometimes we&apos;ll miss a call or take a little longer to respond, but everyday we get better.
            </p>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              Loong Star started back in 2011 after I (Hon Vun) quit my last job. Fast forward 20 years later the company is still doing good.
            </p>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              My wife and I are committed to growing Loong Star into a company that customers truly believe and support. We&apos;re looking 10 years down the road of where we want to be and that can only be possible by doing things the right way.
            </p>
            <div className="mt-2">
              <h3 className="font-bold text-gray-900 mb-1">Loong Star Mission Statement:</h3>
              <p className="text-gray-600 text-sm md:text-base">
                We want you to work or rest in an environment free of problems. Our goal is to deliver the best results with a hassle-free experience from start to finish.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <Image
              src="../public/OscarDetailing.jpeg"
              alt="Oscar Detailing"
              width={500}
              height={400}
              className="w-full h-auto object-cover rounded-lg border border-gray-300 shadow-sm"
              />
          </div>
        </section>

        {/* Oscar Section */}
        <section className="flex flex-col md:flex-row-reverse gap-12 items-center">
          <div className="w-full md:w-1/2 flex flex-col gap-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Mr Loong, The Guy That Does Everything On the field</h2>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              Mr Loong started his business like many others; he wanted to take care of his house appliances.
            </p>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              He spent many hours learning and practicing on his craft. Once he felt confident enough, he decided to jump into starting his own business.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <Image
              src="../public/OscarDetailing.jpeg"
              alt="Oscar Detailing"
              width={500}
              height={400}
              className="w-full h-auto object-cover rounded-lg border border-gray-300 shadow-sm"
              />
          </div>
        </section>

        {/* Lex Section */}
        <section className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/2 flex flex-col gap-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Ms Yong, The Girl that does everything in the office.</h2>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              Ms Yong has always been a good student since when she was in high school. She&apos;d hang out with friends to eat, have fun, exercise.
            </p>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              Ms Yong is Director of Operations where her main focus is to make sure the customers are happy and the operations are moving smoothly.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <Image
              src="../public/OscarDetailing.jpeg"
              alt="Oscar Detailing"
              width={500}
              height={400}
              className="w-full h-auto object-cover rounded-lg border border-gray-300 shadow-sm"
              />
          </div>
        </section>

        {/* Exceptional Results Section */}
        <section className="flex flex-col gap-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Exceptional Results. Every Time.</h2>
          <p className="text-gray-600 leading-relaxed text-sm md:text-base">
            One of the best things about the industry is the reactions we get from customers after we&apos;ve thoroughly repair and install their appliances.
          </p>
          <p className="text-gray-600 leading-relaxed text-sm md:text-base">
            A lot of times customers think there&apos;s noooo way we&apos;re able to make something look better. Then a few hours later, they&apos;re amazed by what we&apos;re able to deliver.
          </p>
          <p className="text-gray-600 leading-relaxed text-sm md:text-base">
            We have that goal for each customer we interact with. Whether it&apos;s just a basic install or something much more intensive, we want to offer amazing results and an amazing experience.
          </p>
        </section>

      </main>

      {/* Navigation Link to Catalog */}
      <div className="text-center pb-20">
        <Link 
          href="/Products" 
          className="inline-block bg-black text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
        >
          View Product Catalog →
        </Link>
      </div>
    </div>
  );
}