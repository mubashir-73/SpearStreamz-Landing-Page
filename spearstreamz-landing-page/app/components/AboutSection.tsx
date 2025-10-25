import Image from 'next/image';

export default function AboutSection() {
  return (
    <section id="about" className="pt-16 pb-32 md:pt-24 md:pb-32 bg-[radial-gradient(ellipse_200%_100%_at_top_left,#B1E3DE,#EAEEFE_100%)] overflow-x-clip">
      <div className="container mx-auto px-7">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left: Text & Features */}
          <div className="flex-1 flex flex-col gap-8 items-start md:items-start bg-white/30 backdrop-blur-lg rounded-xl p-10 shadow-lg animate-slide-up">
            <div className="tag gap-2 border-2 border-[#286E96] text-[#286E96] uppercase font-bold mb-4 animate-fade-in">
              <span>&#10038;</span>
              <span>Introducing SpearStreamZ</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#011c2b] mb-4">About Our Approach</h2>
            <p className="text-lg md:text-2xl text-[#183E96] leading-relaxed max-w-xl mb-6 text-justify">
              At <span className="font-bold">SpearStreamZ</span>, we blend creativity and technology to deliver streamlined, intuitive, and robust workflow solutions.<br/>
              Our process is inspired by the dynamic, interconnected, and flexible nature of modern organizations.
            </p>
            <div className="flex flex-col gap-6 w-full">
              <div className="flex items-center gap-4 group hover:bg-[#EAEEFE]/60 rounded-lg p-3 transition">
                <Image 
                  src="/noodle.png" 
                  alt="Noodle" 
                  className="w-12 h-12 object-contain animate-float-y drop-shadow-lg"
                  width={48}
                  height={48}
                />
                <span className="text-[#011c2b] text-lg font-medium">Flexible process mapping for unique business needs</span>
              </div>
              <div className="flex items-center gap-4 group hover:bg-[#EAEEFE]/60 rounded-lg p-3 transition">
                <Image 
                  src="/pyramid.png" 
                  alt="Pyramid" 
                  className="w-12 h-12 object-contain animate-float-x drop-shadow-lg"
                  width={48}
                  height={48}
                />
                <span className="text-[#011c2b] text-lg font-medium">Structured architecture for scalable growth</span>
              </div>
              <div className="flex items-center gap-4 group hover:bg-[#EAEEFE]/60 rounded-lg p-3 transition">
                <Image 
                  src="/spring.png" 
                  alt="Spring" 
                  className="w-12 h-12 object-contain animate-bounce-slow drop-shadow-lg"
                  width={48}
                  height={48}
                />
                <span className="text-[#011c2b] text-lg font-medium">Agile and resilient to adapt to change</span>
              </div>
              <div className="flex items-center gap-4 group hover:bg-[#EAEEFE]/60 rounded-lg p-3 transition">
                <Image 
                  src="/tube.png" 
                  alt="Tube" 
                  className="w-12 h-12 object-contain animate-float-y-reverse drop-shadow-lg"
                  width={48}
                  height={48}
                />
                <span className="text-[#011c2b] text-lg font-medium">Seamless integration with your existing systems</span>
              </div>
            </div>
          </div>
          {/* Right: Animated 3D PNGs Composition */}
          <div className="flex-1 flex items-center justify-center relative min-h-[420px]">
            {/* Floating PNGs around the cog */}
            <Image 
              src="/noodle.png" 
              alt="Noodle" 
              className="hidden md:block absolute left-0 top-10 w-20 md:w-28 opacity-90 animate-float-y drop-shadow-xl" 
              style={{animationDelay:'0.2s'}}
              width={112}
              height={112}
            />
            <Image 
              src="/pyramid.png" 
              alt="Pyramid" 
              className="hidden md:block absolute right-0 top-0 w-16 md:w-24 opacity-90 animate-float-x drop-shadow-xl" 
              style={{animationDelay:'0.4s'}}
              width={96}
              height={96}
            />
            <Image 
              src="/spring.png" 
              alt="Spring" 
              className="hidden md:block absolute left-10 bottom-0 w-16 md:w-24 opacity-90 animate-bounce-slow drop-shadow-xl" 
              style={{animationDelay:'0.6s'}}
              width={96}
              height={96}
            />
            <Image 
              src="/tube.png" 
              alt="Tube" 
              className="hidden md:block absolute right-10 bottom-4 w-20 md:w-28 opacity-90 animate-float-y-reverse drop-shadow-xl" 
              style={{animationDelay:'0.8s'}}
              width={112}
              height={112}
            />
            {/* Main Cog */}
            <div className="relative z-10 flex items-center justify-center">
              <Image 
                src="/cog.png" 
                alt="Cog" 
                className="w-48 md:w-64 drop-shadow-2xl rounded-xl animate-spin-slow"
                width={256}
                height={256}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

