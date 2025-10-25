'use client';

import Image from 'next/image';

export default function Header() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 backdrop-blur-sm z-20 shadow-lg">
      <div className="py-5">
        <div className="px-5">
          <div className="flex items-center justify-between">
            <div className="inline-flex gap-2 items-center">
              <span className="logo-circle flex items-center justify-center rounded-full w-12 h-12 bg-[#286E96] overflow-hidden">
                <Image 
                  src="/SpearStreamZ_logo.png" 
                  height={32} 
                  width={32} 
                  className="rounded-full object-cover" 
                  alt="SpearStreamZ Logo"
                />
              </span>
              <p className="font-extrabold tracking-tight text-2xl md:text-3xl text-[#286E96]">
                SpearStreamZ
              </p>
            </div>
            <Image 
              src="/menu.svg" 
              className="hidden h-5 w-5 md:hidden" 
              alt="Menu"
              width={20}
              height={20}
            />
            <nav className="hidden md:flex gap-8 text-black/60 items-center text-lg">
              <button 
                onClick={() => scrollToSection('home')}
                className="hover:text-[#286E96] transition"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="hover:text-[#286E96] transition"
              >
                About Us
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="hover:text-[#286E96] transition"
              >
                Services
              </button>
              <button
                className="bg-[#286E96] text-white px-6 py-2 rounded-lg font-semibold inline-flex align-items justify-center tracking-tighter shadow hover:bg-[#183EC2] transition"
                onClick={() => scrollToSection('contact')}
              >
                Contact us
              </button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

