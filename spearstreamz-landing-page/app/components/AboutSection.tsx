import Image from 'next/image';

export default function AboutSection() {
  return (
    <section id="about" className="pt-16 pb-32 md:pt-24 md:pb-32  overflow-x-clip">
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
                  src="/bullet_points.svg" 
                  alt="Noodle" 
                  className="w-12 h-12 object-contain drop-shadow-lg"
                  width={48}
                  height={48}
                />
                <span className="text-[#011c2b] text-lg font-medium">Flexible process mapping for unique business needs</span>
              </div>
              <div className="flex items-center gap-4 group hover:bg-[#EAEEFE]/60 rounded-lg p-3 transition">
                <Image 
                  src="/bullet_points.svg" 
                  alt="Pyramid" 
                  className="w-12 h-12 object-contain drop-shadow-lg"
                  width={48}
                  height={48}
                />
                <span className="text-[#011c2b] text-lg font-medium">Structured architecture for scalable growth</span>
              </div>
              <div className="flex items-center gap-4 group hover:bg-[#EAEEFE]/60 rounded-lg p-3 transition">
                <Image 
                  src="bullet_points.svg" 
                  alt="Spring" 
                  className="w-12 h-12 object-contain drop-shadow-lg"
                  width={48}
                  height={48}
                />
                <span className="text-[#011c2b] text-lg font-medium">Agile and resilient to adapt to change</span>
              </div>
              <div className="flex items-center gap-4 group hover:bg-[#EAEEFE]/60 rounded-lg p-3 transition">
                <Image 
                  src="/bullet_points.svg" 
                  alt="Tube" 
                  className="w-12 h-12 object-contain drop-shadow-lg"
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
         
            {/* Main Cog */}
            <div className="relative z-10 flex items-center justify-center">
              <Image 
                src="/aboutimg_1.svg" 
                alt="Cog" 
                className="w-48 md:w-1700 drop-shadow-2xl "
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


