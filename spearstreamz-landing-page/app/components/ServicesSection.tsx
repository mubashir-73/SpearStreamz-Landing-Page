import Image from 'next/image';

export default function ServicesSection() {
  return (
    <section 
      id="services"
      className="pt-16 pb-32 md:pt-24 md:pb-32 bg-white/30 overflow-x-clip"
    >
      <div className="container mx-auto px-7 grid md:grid-cols-3 gap-16 items-center">
        <div className="md:col-span-2 relative md:w-full lg:w-[800px] overflow-x-clip animate-slide-up">
          <h2 className="text-5xl lg:text-7xl text-center font-black bg-gradient-to-b from-black to-[#001E80] bg-clip-text text-transparent mb-8">
            Enterprise Architecture Consulting
          </h2>
          <p className="text-xl lg:text-3xl text-center text-[#010D3E] text-justify">
            In today's fast-evolving tech landscape, organizations must continuously refine their IT application development, maintenance processes, and governance frameworks. The maturity of these systems often hinges on how closely they align with modern architecture principles—and staying competitive means staying current.
          </p>
        </div>
        <div className="flex ml-18 justify-center items-start animate-fade-in md:mt-0 mt-8">
          <Image 
            src="/services1.svg" 
            className="w-24 ml-2 md:w-200 lg:w-400 md:ml-8" 
            style={{maxWidth: '100%', height: 'auto'}}
            alt="Star"
            width={224}
            height={224}
          />
        </div>
      </div>
      <div className="container mx-auto px-7 md:px-16 py-10 flex flex-col lg:flex-row gap-16 items-center">
        <div className="flex justify-center animate-fade-in">
          <Image 
            src="/services2.svg"
            className="hidden md:block w-40 md:w-200 drop-shadow-lg"
            alt="Cylinder"
            width={224}
            height={224}
          />
        </div>
        <div className="relative md:w-[490px] lg:w-[800px] overflow-x-clip animate-slide-up">
          <p className="text-xl lg:text-3xl text-center text-[#010D3E] text-justify">
            At SpearStreamZ, our Enterprise Architects bring over 20 years of industry expertise to help you reassess and revamp your enterprise architecture. We collaborate closely with your teams to establish clear architectural principles, streamline your application landscape, and strengthen governance models.
          </p>
          <br/><br/>
          <p className="text-xl lg:text-3xl text-center text-[#010D3E] text-justify">
            By aligning with the latest trends through modern web app development using latest JS framework, Microservices, Visualizaton along with practical use cases for Artificial Intelligence in workflow steps, Data Lakehouse and Intelligent Automations —we empower your organization to stay agile, scalable, and future-ready.
          </p>
        </div>
      </div>
    </section>
  );
}


