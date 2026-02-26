import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Briefcase, 
  FileText, 
  GraduationCap, 
  BookOpen,
  ArrowRight, 
  CheckCircle,
  Mail,
  Phone,
  Instagram,
  Award,
  Calendar,
  Sparkles,
  Wand2,
  Loader2,
  FileSearch
} from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const navigateTo = (page) => {
    setCurrentPage(page);
    setIsMobileMenuOpen(false);
  };

  const NavLink = ({ page, label }) => (
    <button
      onClick={() => navigateTo(page)}
      className={`text-sm font-medium transition-colors duration-200 ${
        currentPage === page ? 'text-orange-500 border-b-2 border-orange-500 pb-1' : 'text-zinc-300 hover:text-orange-400'
      }`}
    >
      {label}
    </button>
  );

  const MobileNavLink = ({ page, label }) => (
    <button
      onClick={() => navigateTo(page)}
      className={`block w-full text-left px-3 py-3 rounded-md text-base font-medium transition-colors ${
        currentPage === page ? 'text-orange-500 bg-zinc-800' : 'text-zinc-300 hover:text-orange-400 hover:bg-zinc-800'
      }`}
    >
      {label}
    </button>
  );

  return (
    <div className="min-h-screen bg-black font-sans text-zinc-100 selection:bg-orange-500 selection:text-white flex flex-col">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            {/* Logo */}
            <div 
              className="flex-shrink-0 flex items-center gap-3 cursor-pointer group"
              onClick={() => navigateTo('home')}
            >
              <div className="w-12 h-12 bg-zinc-900 border-2 border-zinc-700 rounded-full flex items-center justify-center font-bold text-xl relative overflow-hidden group-hover:border-orange-500 transition-colors">
                <span className="text-zinc-300 relative z-10 -mr-1">S</span>
                <span className="text-orange-600 relative z-10">S</span>
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-xl tracking-wider text-white leading-tight">
                  STANZIALE
                </span>
                <span className="font-medium text-sm tracking-widest text-zinc-400 leading-tight">
                  SOLUTIONS
                </span>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 items-center">
              <NavLink page="home" label="Home" />
              <NavLink page="services" label="Services & Prices" />
              <NavLink page="about" label="About Us" />
              <NavLink page="contact" label="Contact" />
              <NavLink page="aitools" label="✨ AI Tools" />
              <button 
                onClick={() => navigateTo('contact')}
                className="bg-orange-600 hover:bg-orange-500 text-black px-6 py-2.5 rounded font-bold transition-all duration-200 text-sm shadow-[0_0_15px_rgba(234,88,12,0.3)] hover:shadow-[0_0_25px_rgba(234,88,12,0.5)]"
              >
                Book Consultation
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-zinc-300 hover:text-white hover:bg-zinc-800 p-2 rounded-md focus:outline-none"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-zinc-950 border-t border-zinc-800 absolute w-full">
            <div className="px-4 pt-2 pb-4 space-y-1 shadow-2xl">
              <MobileNavLink page="home" label="Home" />
              <MobileNavLink page="services" label="Services & Prices" />
              <MobileNavLink page="about" label="About Us" />
              <MobileNavLink page="contact" label="Contact" />
              <MobileNavLink page="aitools" label="✨ AI Tools" />
              <button 
                onClick={() => navigateTo('contact')}
                className="block w-full text-center mt-4 bg-orange-600 hover:bg-orange-500 text-black px-5 py-3 rounded font-bold transition-colors duration-200 text-base"
              >
                Book Consultation
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content Area - Conditional Rendering for Pages */}
      <main className="flex-grow">
        {currentPage === 'home' && <Home navigateTo={navigateTo} />}
        {currentPage === 'services' && <Services navigateTo={navigateTo} />}
        {currentPage === 'about' && <About />}
        {currentPage === 'contact' && <Contact />}
        {currentPage === 'aitools' && <AITools navigateTo={navigateTo} />}
      </main>

      {/* Footer */}
      <footer className="bg-zinc-950 text-zinc-400 py-12 border-t border-zinc-900 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
            <div className="col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <span className="font-bold text-lg tracking-wider text-white">
                  STANZIALE <span className="text-orange-600">SOLUTIONS</span>
                </span>
              </div>
              <p className="text-sm font-bold tracking-widest text-orange-500 mb-4">
                TRAIN. WORK. TRANSFORM.
              </p>
              <p className="text-sm text-zinc-500">
                Empowering individuals and organizations through targeted training and strategic placement.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><button onClick={() => navigateTo('home')} className="hover:text-orange-500 transition-colors">Home</button></li>
                <li><button onClick={() => navigateTo('services')} className="hover:text-orange-500 transition-colors">Services & Pricing</button></li>
                <li><button onClick={() => navigateTo('about')} className="hover:text-orange-500 transition-colors">About Us</button></li>
                <li><button onClick={() => navigateTo('aitools')} className="hover:text-orange-500 transition-colors">✨ Free AI Tools</button></li>
                <li><button onClick={() => navigateTo('contact')} className="hover:text-orange-500 transition-colors">Contact</button></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Contact Info</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-orange-600" />
                  302 - 501 - 6628
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-orange-600" />
                  stanzialesolutions@gmail.com
                </li>
                <li className="flex items-center gap-2">
                  <Instagram className="w-4 h-4 text-orange-600" />
                  @stanzialesolutions
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-zinc-600">
            <p>&copy; {new Date().getFullYear()} Stanziale Solutions LLC. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

// --- PAGE COMPONENTS ---

function Home({ navigateTo }) {
  return (
    <div className="animate-in fade-in duration-500">
      {/* Hero Section */}
      <section className="relative bg-zinc-950 py-20 lg:py-32 overflow-hidden border-b border-zinc-900">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-orange-900/20 via-zinc-950/0 to-zinc-950/0 pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-800 border border-zinc-700 text-orange-400 text-sm font-semibold mb-6">
                <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
                Empowering the Modern Workforce
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-orange-500">
                Unlock Your Potential.<br />
                Elevate Your Career.
              </h1>
              <p className="text-lg sm:text-xl text-zinc-400 mb-8 max-w-2xl">
                Stanziale Solutions LLC is your premier partner in workforce development, strategic job placement, and professional training. We bridge the gap between top talent and industry-leading organizations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => navigateTo('services')}
                  className="inline-flex justify-center items-center gap-2 bg-orange-600 hover:bg-orange-500 text-black px-8 py-4 rounded font-bold transition-all duration-200 text-lg shadow-lg"
                >
                  View Services & Pricing
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button 
                  onClick={() => navigateTo('aitools')}
                  className="inline-flex justify-center items-center gap-2 bg-zinc-900 hover:bg-zinc-800 text-white border border-zinc-700 px-8 py-4 rounded font-bold transition-all duration-200 text-lg"
                >
                  <Sparkles className="w-5 h-5 text-orange-500" />
                  Try Free AI Tools
                </button>
              </div>
            </div>
            
            {/* Hero Graphic */}
            <div className="relative hidden lg:block">
              <div className="absolute inset-0 bg-gradient-to-tr from-orange-600/20 to-transparent rounded-2xl transform rotate-3 scale-105 blur-lg"></div>
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Professional Coaching" 
                className="relative rounded-2xl shadow-2xl border border-zinc-800 object-cover h-[600px] w-full grayscale-[50%] contrast-125 hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Info Section */}
      <section className="py-16 bg-zinc-900 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
             <div className="p-6">
                <FileText className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Resume Building</h3>
                <p className="text-zinc-400">Professional writing and LinkedIn optimization to get you noticed.</p>
             </div>
             <div className="p-6 border-y md:border-y-0 md:border-x border-zinc-800">
                <Briefcase className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Job Coaching</h3>
                <p className="text-zinc-400">Curated leads and placement services to land your dream role.</p>
             </div>
             <div className="p-6">
                <GraduationCap className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Education Services</h3>
                <p className="text-zinc-400">FAFSA and college application guidance to further your journey.</p>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function Services({ navigateTo }) {
  const PricingItem = ({ price, title }) => (
    <div className="flex items-center py-3 border-b border-zinc-800/50 last:border-0 group">
      <span className="bg-orange-600 text-black font-extrabold px-3 py-1.5 rounded-md mr-4 text-lg shadow-md min-w-[60px] text-center group-hover:bg-orange-500 transition-colors">
        ${price}
      </span>
      <span className="text-zinc-200 font-medium text-lg group-hover:text-white transition-colors">
        {title}
      </span>
    </div>
  );

  return (
    <div className="animate-in slide-in-from-bottom-4 duration-500 py-16 bg-black min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight uppercase italic mb-4">
            Services & <span className="text-orange-600">Prices</span>
          </h1>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Transparent pricing for transformative results. Choose the services that best fit your career and educational goals.
          </p>
        </div>

        {/* Promo Reminder */}
        <div className="mb-16 bg-zinc-900 border-2 border-orange-600/30 rounded-2xl p-6 text-center shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-orange-600/10 rounded-full blur-3xl"></div>
          <h3 className="text-2xl font-bold text-white mb-2 relative z-10">Don't forget your <span className="text-orange-500">FREE</span> Consultation!</h3>
          <p className="text-zinc-300 relative z-10 mb-4">All new clients are eligible for a free 20-minute introductory phone call.</p>
          <button 
            onClick={() => navigateTo('contact')}
            className="bg-orange-600 hover:bg-orange-500 text-black px-6 py-2 rounded font-bold transition-all duration-200 relative z-10"
          >
            Claim Yours Now
          </button>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          
          {/* Resume Services */}
          <div className="bg-zinc-900/50 p-8 rounded-2xl border border-zinc-800 hover:border-zinc-700 transition-colors">
            <div className="flex items-center justify-between mb-8 border-b border-zinc-800 pb-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-white uppercase tracking-wide">Resume<br/><span className="text-orange-500">Services</span></h2>
              <FileText className="w-12 h-12 text-zinc-600" />
            </div>
            <div className="space-y-2">
              <PricingItem price="40" title="Resume Review + Feedback" />
              <PricingItem price="75" title="Resume Revision / Writing" />
              <PricingItem price="60" title="LinkedIn Profile Creation" />
            </div>
          </div>

          {/* Career & Job Coaching */}
          <div className="bg-zinc-900/50 p-8 rounded-2xl border border-zinc-800 hover:border-zinc-700 transition-colors">
            <div className="flex items-center justify-between mb-8 border-b border-zinc-800 pb-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-white uppercase tracking-wide">Career & Job<br/><span className="text-orange-500">Coaching</span></h2>
              <GraduationCap className="w-12 h-12 text-zinc-600" />
            </div>
            <div className="space-y-2">
              <PricingItem price="60" title="Curated Job Lead List" />
              <PricingItem price="50" title="Education Coaching Session" />
              <PricingItem price="50" title="Vocational Coaching Session" />
              <PricingItem price="120" title="Job Placement" />
            </div>
          </div>

          {/* Education Services */}
          <div className="bg-zinc-900/50 p-8 rounded-2xl border border-zinc-800 hover:border-zinc-700 transition-colors">
            <div className="flex items-center justify-between mb-8 border-b border-zinc-800 pb-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-white uppercase tracking-wide">Education<br/><span className="text-orange-500">Services</span></h2>
              <GraduationCap className="w-12 h-12 text-zinc-600" />
            </div>
            <div className="space-y-2">
              <PricingItem price="60" title="FAFSA Application" />
              <PricingItem price="50" title="College Application Session (per hour)" />
            </div>
          </div>

          {/* Additional Services */}
          <div className="bg-zinc-900/50 p-8 rounded-2xl border border-zinc-800 hover:border-zinc-700 transition-colors">
            <div className="flex items-center justify-between mb-8 border-b border-zinc-800 pb-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-white uppercase tracking-wide">Additional<br/><span className="text-orange-500">Services</span></h2>
              <BookOpen className="w-12 h-12 text-zinc-600" />
            </div>
            <div className="space-y-2">
              <PricingItem price="50" title="Program / Business Flyer Creation" />
              <PricingItem price="50" title="Tutoring (per hour)" />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

function About() {
  return (
    <div className="animate-in slide-in-from-left-4 duration-500 py-16 lg:py-24 bg-zinc-950 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Content */}
          <div>
            <h2 className="text-orange-600 font-bold tracking-widest uppercase text-sm mb-2">Our Story</h2>
            <h3 className="text-3xl md:text-5xl font-extrabold text-white mb-6 uppercase tracking-tight">
              Building the <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Future of Work.</span>
            </h3>
            <p className="text-lg text-zinc-300 mb-8 leading-relaxed">
              At Stanziale Solutions LLC, we believe that the right opportunity paired with the right preparation changes everything. Our mantra is simple: <strong className="text-orange-500">Train. Work. Transform.</strong>
            </p>
            <p className="text-lg text-zinc-400 mb-8 leading-relaxed">
              Whether you are a professional looking to take the next step in your career, an individual seeking educational guidance, or someone needing a complete career pivot, we provide the tools, coaching, and expertise to deliver results.
            </p>
            
            <ul className="space-y-4 mb-10 bg-zinc-900/50 p-6 rounded-xl border border-zinc-800">
              {[
                "Industry-leading resume optimization & creation.",
                "Curated job leads tailored to your unique skills.",
                "Expert FAFSA and higher-education application guidance.",
                "Personalized 1-on-1 coaching methodologies."
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-orange-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-zinc-200 font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-6">
               <div className="w-16 h-16 bg-zinc-900 border-2 border-orange-600 rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0 shadow-[0_0_15px_rgba(234,88,12,0.3)]">
                <span className="text-zinc-300 -mr-1">S</span>
                <span className="text-orange-600">S</span>
              </div>
              <div>
                <p className="text-white font-bold text-xl tracking-wider">STANZIALE SOLUTIONS</p>
                <p className="text-sm text-orange-500 uppercase tracking-widest font-bold mt-1">Train. Work. Transform.</p>
              </div>
            </div>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-2 gap-4 relative">
             <div className="absolute inset-0 bg-orange-600/10 blur-3xl -z-10 rounded-full"></div>
            <img 
              src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
              alt="Mentorship" 
              className="rounded-xl shadow-2xl w-full h-72 object-cover border border-zinc-800 grayscale-[30%]"
            />
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
              alt="Corporate Training" 
              className="rounded-xl shadow-2xl w-full h-72 object-cover mt-12 border border-zinc-800 grayscale-[30%]"
            />
          </div>

        </div>
      </div>
    </div>
  );
}

function Contact() {
  return (
    <div className="animate-in fade-in duration-500 bg-black min-h-screen py-16 lg:py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-96 bg-zinc-900/50 -skew-y-3 origin-top-left -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight uppercase italic mb-4">
            Get in <span className="text-orange-600">Touch</span>
          </h1>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Ready to take the next step? Reach out to schedule your services or claim your free 20-minute introductory phone call.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 bg-zinc-950 border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl">
          
          {/* Contact Info Panel */}
          <div className="lg:col-span-5 bg-zinc-900 p-10 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-orange-600/10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-white mb-8">Contact Information</h3>
              
              <div className="space-y-8">
                <a href="tel:3025016628" className="flex items-center group">
                  <div className="w-14 h-14 bg-black border border-zinc-800 rounded-xl flex items-center justify-center text-orange-600 mr-5 group-hover:bg-orange-600 group-hover:text-black transition-all">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-zinc-500 font-medium uppercase tracking-wider mb-1">Phone</p>
                    <p className="text-white font-bold text-xl group-hover:text-orange-400 transition-colors">302 - 501 - 6628</p>
                  </div>
                </a>
                
                <a href="mailto:stanzialesolutions@gmail.com" className="flex items-center group">
                  <div className="w-14 h-14 bg-black border border-zinc-800 rounded-xl flex items-center justify-center text-orange-600 mr-5 group-hover:bg-orange-600 group-hover:text-black transition-all">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-zinc-500 font-medium uppercase tracking-wider mb-1">Email</p>
                    <p className="text-white font-bold text-lg group-hover:text-orange-400 transition-colors break-all">stanzialesolutions@gmail.com</p>
                  </div>
                </a>

                <a href="https://instagram.com/stanzialesolutions" target="_blank" rel="noopener noreferrer" className="flex items-center group">
                  <div className="w-14 h-14 bg-black border border-zinc-800 rounded-xl flex items-center justify-center text-orange-600 mr-5 group-hover:bg-orange-600 group-hover:text-black transition-all">
                    <Instagram className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-zinc-500 font-medium uppercase tracking-wider mb-1">Instagram</p>
                    <p className="text-white font-bold text-xl group-hover:text-orange-400 transition-colors">@stanzialesolutions</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="mt-16 pt-8 border-t border-zinc-800 relative z-10">
              <div className="flex items-center gap-4 bg-orange-600/10 p-4 rounded-xl border border-orange-600/20">
                <Calendar className="w-8 h-8 text-orange-500 flex-shrink-0" />
                <div>
                  <p className="text-white font-bold">Free Consultation</p>
                  <p className="text-sm text-zinc-400">Mention the 20-min intro call when you reach out!</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7 p-10">
            <h3 className="text-2xl font-bold text-white mb-6">Send us a Message</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-zinc-400 mb-2">Your Name</label>
                  <input type="text" id="name" className="w-full bg-black border border-zinc-800 rounded-lg px-4 py-3.5 text-white focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent transition-all placeholder-zinc-700" placeholder="John Doe" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-zinc-400 mb-2">Phone Number</label>
                  <input type="tel" id="phone" className="w-full bg-black border border-zinc-800 rounded-lg px-4 py-3.5 text-white focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent transition-all placeholder-zinc-700" placeholder="(555) 000-0000" />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-zinc-400 mb-2">Email Address</label>
                <input type="email" id="email" className="w-full bg-black border border-zinc-800 rounded-lg px-4 py-3.5 text-white focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent transition-all placeholder-zinc-700" placeholder="john@example.com" />
              </div>
              
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-zinc-400 mb-2">Service of Interest</label>
                <select id="service" className="w-full bg-black border border-zinc-800 rounded-lg px-4 py-3.5 text-white focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent transition-all appearance-none cursor-pointer">
                  <option value="">Select a service...</option>
                  <option value="intro">Free 20-Minute Intro Call</option>
                  <optgroup label="Resume Services">
                    <option value="review">Resume Review ($40)</option>
                    <option value="writing">Resume Writing ($75)</option>
                    <option value="linkedin">LinkedIn Profile ($60)</option>
                  </optgroup>
                  <optgroup label="Coaching">
                    <option value="leads">Curated Job Leads ($60)</option>
                    <option value="edu_coach">Education Coaching ($50)</option>
                    <option value="voc_coach">Vocational Coaching ($50)</option>
                    <option value="placement">Job Placement ($120)</option>
                  </optgroup>
                  <optgroup label="Other">
                    <option value="fafsa">FAFSA / College Apps</option>
                    <option value="flyer">Flyer Creation</option>
                    <option value="tutoring">Tutoring</option>
                  </optgroup>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-zinc-400 mb-2">Message</label>
                <textarea id="message" rows="5" className="w-full bg-black border border-zinc-800 rounded-lg px-4 py-3.5 text-white focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent transition-all placeholder-zinc-700" placeholder="How can we help you achieve your goals?"></textarea>
              </div>
              
              <button type="submit" className="w-full bg-orange-600 hover:bg-orange-500 text-black font-extrabold tracking-wide uppercase py-4 rounded-lg transition-all duration-300 text-lg shadow-[0_0_20px_rgba(234,88,12,0.2)] hover:shadow-[0_0_30px_rgba(234,88,12,0.4)]">
                Send Request
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}

function AITools({ navigateTo }) {
  const [activeTab, setActiveTab] = useState('resume');
  const [resumeText, setResumeText] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [company, setCompany] = useState('');
  const [experience, setExperience] = useState('');
  const [result, setResult] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const callGeminiAPI = async (promptText) => {
    const apiKey = ""; 
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`;

    const payload = {
      contents: [{ parts: [{ text: promptText }] }],
      systemInstruction: {
        parts: [{ text: "You are an expert career coach and senior technical recruiter at Stanziale Solutions LLC. Provide professional, encouraging, and highly actionable advice. Format your responses with clear spacing and bullet points." }]
      }
    };

    let retries = 0;
    const maxRetries = 5;
    const delays = [1000, 2000, 4000, 8000, 16000];

    while (retries <= maxRetries) {
      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });

        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        
        const data = await response.json();
        return data.candidates?.[0]?.content?.parts?.[0]?.text || "No response generated. Please try again.";
      } catch (err) {
        if (retries === maxRetries) throw err;
        await new Promise(resolve => setTimeout(resolve, delays[retries]));
        retries++;
      }
    }
  };

  const handleResumeAnalysis = async () => {
    if (!resumeText.trim()) return;
    setIsLoading(true);
    setError('');
    setResult('');
    
    try {
      const prompt = `Please review the following resume text. Provide exactly 3 highly actionable, specific tips to improve it for ATS systems and human recruiters. Keep it concise.\n\nResume Text:\n${resumeText}`;
      const response = await callGeminiAPI(prompt);
      setResult(response);
    } catch (err) {
      setError("Failed to connect to the AI analyzer. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleCoverLetter = async () => {
    if (!jobTitle.trim() || !company.trim()) return;
    setIsLoading(true);
    setError('');
    setResult('');
    
    try {
      const prompt = `Write a professional, compelling, and modern cover letter for the role of "${jobTitle}" at "${company}". Include the following key experience/skills seamlessly: "${experience}". Keep it under 300 words and ready to use with placeholder brackets for names/contact info.`;
      const response = await callGeminiAPI(prompt);
      setResult(response);
    } catch (err) {
      setError("Failed to generate the cover letter. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="animate-in fade-in duration-500 bg-black min-h-screen py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-orange-600/10 rounded-full mb-4">
            <Sparkles className="w-8 h-8 text-orange-500" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Free <span className="text-orange-600">AI Career Tools</span>
          </h1>
          <p className="text-zinc-400 text-lg">
            Experience our expertise powered by Gemini AI. Optimize your resume or draft a cover letter instantly.
          </p>
        </div>

        {/* Upsell Banner */}
        <div className="bg-gradient-to-r from-zinc-900 to-zinc-800 border border-zinc-700 rounded-xl p-6 mb-12 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <h3 className="text-white font-bold text-lg flex items-center gap-2">
              <Award className="w-5 h-5 text-orange-500" /> Want the human touch?
            </h3>
            <p className="text-zinc-400 text-sm mt-1">Our AI is smart, but our career coaches are experts. Get a full review and custom rewrites.</p>
          </div>
          <button 
            onClick={() => navigateTo('services')}
            className="whitespace-nowrap bg-orange-600 hover:bg-orange-500 text-black px-6 py-2.5 rounded-lg font-bold transition-colors text-sm"
          >
            View Pro Services
          </button>
        </div>

        {/* Tool Tabs */}
        <div className="bg-zinc-950 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl">
          <div className="flex border-b border-zinc-800">
            <button 
              onClick={() => { setActiveTab('resume'); setResult(''); }}
              className={`flex-1 py-4 text-center font-bold transition-colors flex items-center justify-center gap-2 ${activeTab === 'resume' ? 'bg-zinc-900 text-orange-500 border-b-2 border-orange-500' : 'text-zinc-400 hover:text-white hover:bg-zinc-900/50'}`}
            >
              <FileSearch className="w-5 h-5" /> Resume Analyzer
            </button>
            <button 
              onClick={() => { setActiveTab('coverletter'); setResult(''); }}
              className={`flex-1 py-4 text-center font-bold transition-colors flex items-center justify-center gap-2 ${activeTab === 'coverletter' ? 'bg-zinc-900 text-orange-500 border-b-2 border-orange-500' : 'text-zinc-400 hover:text-white hover:bg-zinc-900/50'}`}
            >
              <Wand2 className="w-5 h-5" /> Cover Letter Drafter
            </button>
          </div>

          <div className="p-8">
            {activeTab === 'resume' && (
              <div className="space-y-6 animate-in fade-in">
                <div>
                  <label className="block text-sm font-medium text-zinc-300 mb-2">Paste your resume text here</label>
                  <textarea 
                    value={resumeText}
                    onChange={(e) => setResumeText(e.target.value)}
                    rows="8" 
                    className="w-full bg-black border border-zinc-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-orange-600 focus:border-transparent transition-all placeholder-zinc-600"
                    placeholder="John Doe&#10;Software Engineer&#10;Experience:&#10;..."
                  ></textarea>
                </div>
                <button 
                  onClick={handleResumeAnalysis}
                  disabled={isLoading || !resumeText.trim()}
                  className="w-full bg-zinc-800 hover:bg-zinc-700 text-white border border-zinc-600 font-bold py-3.5 rounded-lg transition-all flex justify-center items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? <Loader2 className="w-5 h-5 animate-spin text-orange-500" /> : <Sparkles className="w-5 h-5 text-orange-500" />}
                  {isLoading ? 'Analyzing...' : '✨ Analyze My Resume'}
                </button>
              </div>
            )}

            {activeTab === 'coverletter' && (
              <div className="space-y-6 animate-in fade-in">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-zinc-300 mb-2">Target Job Title</label>
                    <input 
                      value={jobTitle}
                      onChange={(e) => setJobTitle(e.target.value)}
                      type="text" 
                      className="w-full bg-black border border-zinc-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-orange-600 focus:border-transparent transition-all"
                      placeholder="e.g. Senior Project Manager" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-zinc-300 mb-2">Target Company</label>
                    <input 
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      type="text" 
                      className="w-full bg-black border border-zinc-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-orange-600 focus:border-transparent transition-all"
                      placeholder="e.g. Google" 
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-zinc-300 mb-2">Key Experience / Skills to Highlight (Optional)</label>
                  <textarea 
                    value={experience}
                    onChange={(e) => setExperience(e.target.value)}
                    rows="3" 
                    className="w-full bg-black border border-zinc-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-orange-600 focus:border-transparent transition-all placeholder-zinc-600"
                    placeholder="e.g. 5 years leading agile teams, PMP certified, reduced costs by 20%..."
                  ></textarea>
                </div>
                <button 
                  onClick={handleCoverLetter}
                  disabled={isLoading || !jobTitle.trim() || !company.trim()}
                  className="w-full bg-zinc-800 hover:bg-zinc-700 text-white border border-zinc-600 font-bold py-3.5 rounded-lg transition-all flex justify-center items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? <Loader2 className="w-5 h-5 animate-spin text-orange-500" /> : <Wand2 className="w-5 h-5 text-orange-500" />}
                  {isLoading ? 'Drafting...' : '✨ Generate Cover Letter'}
                </button>
              </div>
            )}

            {/* Results Area */}
            {(result || error) && (
              <div className="mt-8 pt-8 border-t border-zinc-800 animate-in slide-in-from-bottom-4">
                <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-orange-500"></span> 
                  {error ? 'Error' : 'AI Response'}
                </h4>
                {error ? (
                  <div className="bg-red-900/20 border border-red-900 text-red-400 p-4 rounded-lg">
                    {error}
                  </div>
                ) : (
                  <div className="bg-zinc-900 border border-zinc-700 p-6 rounded-lg text-zinc-300 whitespace-pre-wrap leading-relaxed shadow-inner font-mono text-sm">
                    {result}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
