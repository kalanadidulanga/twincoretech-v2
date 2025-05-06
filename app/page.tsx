import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation Bar */}
      <nav className="sticky top-0 z-10 bg-white shadow-md dark:bg-gray-900">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center">
            <Image
              src="/TwinCoreTechLogo.png"
              alt="TwinCoreTech Logo"
              width={180}
              height={60}
              className="h-12 w-auto"
              priority
            />
          </div>
          <div className="hidden md:flex space-x-8">
            <Link href="/#products" className="text-[color:var(--color-tct-blue)] hover:text-[color:var(--color-tct-orange)] font-medium">
              Products
            </Link>
            <Link href="/#services" className="text-[color:var(--color-tct-blue)] hover:text-[color:var(--color-tct-orange)] font-medium">
              Services
            </Link>
            <Link href="/#team" className="text-[color:var(--color-tct-blue)] hover:text-[color:var(--color-tct-orange)] font-medium">
              Team
            </Link>
            <Link href="/#investors" className="text-[color:var(--color-tct-blue)] hover:text-[color:var(--color-tct-orange)] font-medium">
              Investors
            </Link>
            <Link href="/#contact" className="text-[color:var(--color-tct-blue)] hover:text-[color:var(--color-tct-orange)] font-medium">
              Contact
            </Link>
          </div>
          <div className="md:hidden">
            <button className="text-[color:var(--color-tct-blue)]">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[color:var(--color-tct-teal)]/10 to-[color:var(--color-tct-blue)]/10 py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="md:w-1/2">
              <h1 className="text-4xl md:text-5xl font-[var(--font-arial-rounded)] text-[color:var(--color-tct-blue)] mb-6">
                Specialist Support for <span className="text-[color:var(--color-tct-orange)]">Digital Transformation</span>
              </h1>
              <p className="text-lg mb-8">
                At TwinCoreTech, we provide specialist support for digital transformation, operational design, and programme delivery—helping organisations streamline processes, unlock efficiencies, and prepare for the future.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/#services" 
                  className="bg-[color:var(--color-tct-blue)] hover:bg-[color:var(--color-tct-orange)] text-white font-bold py-3 px-6 rounded-full transition-colors">
                  Our Services
                </Link>
                <Link href="/#products"
                  className="border-2 border-[color:var(--color-tct-blue)] text-[color:var(--color-tct-blue)] hover:bg-[color:var(--color-tct-blue)] hover:text-white font-bold py-3 px-6 rounded-full transition-colors">
                  Products
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-full max-w-md h-80 md:h-96 bg-gradient-to-br from-[color:var(--color-tct-teal)] to-[color:var(--color-tct-blue)] rounded-lg shadow-xl flex items-center justify-center overflow-hidden">
                <Image
                  src="/TwinCoreTechLogo.svg"
                  alt="TwinCoreTech Brand"
                  width={300}
                  height={300}
                  className="w-3/4 h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Section */}
      <section id="products" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-[var(--font-arial-rounded)] text-[color:var(--color-tct-blue)] mb-2 text-center">Our Product</h2>
          <h3 className="text-2xl text-[color:var(--color-tct-green)] font-medium mb-8 text-center">Omadeas Product Suite</h3>
          <p className="text-lg mb-8 max-w-3xl mx-auto text-center">
            The Omadeas Suite is born from real-world experience delivering complex digital transformation programmes
            across the UK and European financial services, insurance, and pensions sectors.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md border-t-4 border-[color:var(--color-tct-orange)]">
              <h4 className="text-[color:var(--color-tct-orange)] text-xl font-medium mb-3">Sales pipeline management</h4>
              <p>Streamline your sales process with our integrated pipeline management tools.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md border-t-4 border-[color:var(--color-tct-yellow)]">
              <h4 className="text-[color:var(--color-tct-yellow)] text-xl font-medium mb-3">Deal structuring & pricing</h4>
              <p>Optimize your pricing strategy and structure deals for maximum profitability.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md border-t-4 border-[color:var(--color-tct-green)]">
              <h4 className="text-[color:var(--color-tct-green)] text-xl font-medium mb-3">Programme and dependency planning</h4>
              <p>Manage complex projects with powerful dependency mapping and planning tools.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md border-t-4 border-[color:var(--color-tct-blue)]">
              <h4 className="text-[color:var(--color-tct-blue)] text-xl font-medium mb-3">Automated replanning</h4>
              <p>Adapt to changes quickly with intelligent automated replanning capabilities.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md border-t-4 border-[color:var(--color-tct-teal)]">
              <h4 className="text-[color:var(--color-tct-teal)] text-xl font-medium mb-3">Financial modelling</h4>
              <p>Make data-driven decisions with comprehensive financial modelling.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md border-t-4 border-[color:var(--color-tct-green-alt)]">
              <h4 className="text-[color:var(--color-tct-green-alt)] text-xl font-medium mb-3">Resource planning</h4>
              <p>Optimize your resource allocation for maximum efficiency and output.</p>
            </div>
          </div>
          
          <div className="bg-[color:var(--color-tct-blue)]/10 p-8 rounded-lg">
            <h3 className="text-xl font-medium mb-4 text-[color:var(--color-tct-blue)]">Product Roadmap:</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-[color:var(--color-tct-blue)] rounded-full p-2 mr-4">
                  <span className="text-white font-bold">1</span>
                </div>
                <div>
                  <h4 className="font-medium text-[color:var(--color-tct-blue)]">Phase 1</h4>
                  <p>Omadeas TimeKeeper – Time & project tracking solution</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-[color:var(--color-tct-green)] rounded-full p-2 mr-4">
                  <span className="text-white font-bold">2</span>
                </div>
                <div>
                  <h4 className="font-medium text-[color:var(--color-tct-green)]">Phase 2</h4>
                  <p>Omadeas SalesOps – Simplified sales pipeline management</p>
                </div>
              </div>
              <p className="font-medium mt-6">MVP for Phase 1 of Omadeas will be available in Q4 2025</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-[var(--font-arial-rounded)] text-[color:var(--color-tct-blue)] mb-8 text-center">Our Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-[color:var(--color-tct-orange)]/20 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[color:var(--color-tct-orange)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-[color:var(--color-tct-blue)]">Digital Transformation Consultancy</h3>
              <p className="text-gray-600">From strategic planning to implementation and change management.</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-[color:var(--color-tct-green)]/20 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[color:var(--color-tct-green)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-[color:var(--color-tct-blue)]">Operations Consultancy</h3>
              <p className="text-gray-600">Designing and delivering Target Operating Models that work.</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-[color:var(--color-tct-teal)]/20 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[color:var(--color-tct-teal)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-[color:var(--color-tct-blue)]">Offshore Resourcing Services</h3>
              <p className="text-gray-600">High-quality, cost-effective software developers and business analysts from our Sri Lanka based development centre.</p>
            </div>
          </div>
          
          <div className="text-center">
            <Link href="/#contact"
              className="bg-[color:var(--color-tct-blue)] hover:bg-[color:var(--color-tct-orange)] text-white font-bold py-3 px-8 rounded-full transition-colors inline-block">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-[color:var(--color-tct-blue)]/10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-[var(--font-arial-rounded)] text-[color:var(--color-tct-blue)] mb-8 text-center">Contact Us</h2>
          
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="md:w-1/2">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-medium mb-6">Get in Touch</h3>
                <p className="mb-4">If you want to work with us, please contact us:</p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[color:var(--color-tct-blue)] mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <address className="not-italic">
                      TwinCoreTech Ltd<br />
                      Bromley Old Town Hall<br />
                      30 Tweedy Road<br />
                      Bromley<br />
                      BR1 3FE<br />
                      United Kingdom
                    </address>
                  </div>
                  
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[color:var(--color-tct-blue)] mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>+44 75 3973 0098</span>
                  </div>
                  
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[color:var(--color-tct-blue)] mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <a href="mailto:sajithmudalige@twincoretech.com" className="text-[color:var(--color-tct-blue)] hover:text-[color:var(--color-tct-orange)]">
                      sajithmudalige@twincoretech.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2">
              <form className="bg-white p-8 rounded-lg shadow-md">
                <div className="mb-6">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input type="text" id="name" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[color:var(--color-tct-blue)] focus:border-[color:var(--color-tct-blue)]" />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[color:var(--color-tct-blue)] focus:border-[color:var(--color-tct-blue)]" />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
                  <textarea id="message" rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[color:var(--color-tct-blue)] focus:border-[color:var(--color-tct-blue)]"></textarea>
                </div>
                
                <button type="submit" className="w-full bg-[color:var(--color-tct-blue)] hover:bg-[color:var(--color-tct-orange)] text-white font-bold py-3 px-6 rounded-md transition-colors">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[color:var(--color-tct-blue)] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <Image
                src="/TwinCoreTechLogo.svg"
                alt="TwinCoreTech Logo"
                width={150}
                height={50}
                className="h-10 w-auto mb-4 invert"
              />
              <p className="text-sm mt-4">
                Specialist support for digital transformation, operational design, and programme delivery.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/#products" className="text-gray-300 hover:text-white">
                    Products
                  </Link>
                </li>
                <li>
                  <Link href="/#services" className="text-gray-300 hover:text-white">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/#team" className="text-gray-300 hover:text-white">
                    Team
                  </Link>
                </li>
                <li>
                  <Link href="/#investors" className="text-gray-300 hover:text-white">
                    Investors
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4">Contact</h4>
              <p className="text-sm">
                Bromley Old Town Hall<br />
                30 Tweedy Road<br />
                Bromley, BR1 3FE<br />
                United Kingdom
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-300 hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-300 hover:text-white">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-600 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-300">
              &copy; {new Date().getFullYear()} TwinCoreTech Ltd. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
