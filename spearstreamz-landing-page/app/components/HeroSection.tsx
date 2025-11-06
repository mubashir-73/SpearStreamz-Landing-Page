import Image from 'next/image';

export default function HeroSection() {
  return (
    <section
      className="pt-16 pb-32 md:pt-24 md:pb-32 overflow-x-clip"
      id="home"
    >
      <div className="w-full flex justify-center items-center pointer-events-none select-none" style={{position:'relative', zIndex:15}}>
      </div>
      <div className="container mx-auto md:mt-10 px-5">
        <div className="md:flex items-center justify-between md:h-[648px] gap-10">
          <div className="flex flex-col justify-center md:w-1/2 lg:w-[700px]">
            <h1 className="hero text-5xl md:text-7xl font-bold tracking-tighter leading-14 md:leading-[4.5rem] bg-gradient-to-b from-[#011c2b] to-[#286E96] bg-clip-text text-transparent mt-6 animate-slide-up">
              Business Operations Workflow Automation and Tracking
            </h1>
            <p className="hero text-xl md:text-2xl text-[#010D3E] tracking-tight mt-8 animate-fade-in text-justify">
              To create software product that facilitates smooth tracking of workflows in various departments within an organization and to seamlessly integrate it with existing systems in use.
            </p>
            <p className="hero text-xl md:text-2xl text-[#010D3E] tracking-tight mt-8 animate-fade-in text-justify">
              SpearStreamZ is committed to streamline departmental operational maintenance by implementing a configurable, rules-driven workflow. This approach empowers management with visual tools to monitor each step of internal business processes across various departments.
            </p>
          </div>
          <div className="hidden md:flex md:w-1/2 justify-center items-center animate-slide-in-right">
            <Image 
              src="/cog.png" 
              alt="Workflow Illustration" 
              className="w-[400px] lg:w-[500px] drop-shadow-xl rounded-xl"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </section>
  );
}


