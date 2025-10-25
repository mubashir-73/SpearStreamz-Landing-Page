 <?php
echo '
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Outfit:wght@100..900&display=swap"
      rel="stylesheet"
    />
    <link href="./dist/outglobals.css" rel="stylesheet" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>SpearStreamZ</title>
  </head>
  <body class="font-[DM_Sans] antialiased bg-[#EAEEFE] relative">
      <header class="sticky top-0 backdrop-blur-sm z-20 shadow-lg">
  <div class="py-5">
    <div class="px-5">
      <div class="flex items-center justify-between">
        <div class="inline-flex gap-2 items-center">
          <span class="logo-circle flex items-center justify-center rounded-full bg-[#286E96] w-12 h-12">
            <img src="assets/SpearStreamZ_logo.png" height="32" width="32" class="rounded-full" />
          </span>
          <p class="font-extrabold tracking-tight text-2xl md:text-3xl text-[#286E96]">SpearStreamZ</p>
        </div>
        <img src="assets/menu.svg" class="hidden h-5 w-5 md:hidden" />
        <nav class="hidden md:flex gap-8 text-black/60 items-center text-lg">
          <a href="#home" class="hover:text-[#286E96] transition">Home</a>
          <a href="#about" class="hover:text-[#286E96] transition">About Us</a>
          <a href="#services" class="hover:text-[#286E96] transition">Services</a>
          <button
            class="bg-[#286E96] text-white px-6 py-2 rounded-lg font-semibold inline-flex align-items justify-center tracking-tighter shadow hover:bg-[#183EC2] transition"
            onclick="document.getElementById(\'contact\').scrollIntoView({ behavior: \'smooth\' });"
          >
            Contact us
          </button>
        </nav>
      </div>
    </div>
  </div>
</header>
<!-- Stepper PNG Decorative Bar -->
<!-- HERO SECTION CONTENT FROM HERE--->
<section
  class="pt-16 pb-32 md:pt-24 md:pb-32 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#B1E3DE,#EAEEFE_100%)] overflow-x-clip"
  id="home"
>
   <div class="w-full flex justify-center items-center pointer-events-none select-none" style="position:relative; z-index:15;">
 
</div>
  <div class="container mx-auto md:mt-10 px-5">
    <div class="md:flex items-center justify-between md:h-[648px] gap-10">
      <div class="flex flex-col justify-center md:w-1/2 lg:w-[700px]">
        <h1
          class="hero text-5xl md:text-7xl font-bold tracking-tighter leading-14 md:leading-[4.5rem] bg-gradient-to-b from-[#011c2b] to-[#286E96] bg-clip-text text-transparent mt-6 animate-slide-up"
        >
          Business Operations Workflow Automation and Tracking
        </h1>
        <p class="hero text-xl md:text-2xl text-[#010D3E] tracking-tight mt-8 animate-fade-in text-justify">
         To create software product that facilitates smooth tracking of workflows in various departments within an organization and to seamlessly integrate it with existing systems in use.
        </p>
        <p class="hero text-xl md:text-2xl text-[#010D3E] tracking-tight mt-8 animate-fade-in text-justify">
        SpearStreamZ is committed to streamline departmental operational maintenance by implementing a configurable, rules-driven workflow. This approach empowers management with visual tools to monitor each step of internal business processes across various departments.
        </p>
        <!--
        <div class="flex gap-4 items-center mt-10 animate-fade-in">
          <button class="btn btn-primary px-6 py-3 text-lg">Contact us</button>
          <button class="btn btn-text gap-2 text-lg flex items-center group">
            <span>Learn more</span>
            <img src="assets/arrow-right.svg" class="h-5 w-5 learn-more-arrow transition-transform duration-200" />
          </button>
        </div>
        -->
      </div>
      <div class="hidden md:flex md:w-1/2 justify-center items-center animate-slide-in-right">
        <img src="assets/cog.png" alt="Workflow Illustration" class="w-[400px] lg:w-[500px] drop-shadow-xl rounded-xl "/>
      </div>
    </div>
  </div>
</section>
<section id="about" class="pt-16 pb-32 md:pt-24 md:pb-32 bg-[radial-gradient(ellipse_200%_100%_at_top_left,#B1E3DE,#EAEEFE_100%)] overflow-x-clip">
  <div class="container mx-auto px-7">
    <div class="flex flex-col lg:flex-row items-center gap-16">
      <!-- Left: Text & Features -->
      <div class="flex-1 flex flex-col gap-8 items-start md:items-start bg-white/30 backdrop-blur-lg rounded-xl p-10 shadow-lg animate-slide-up">
        <div class="tag gap-2 border-2 border-[#286E96] text-[#286E96] uppercase font-bold mb-4 animate-fade-in">
          <span>&#10038;</span>
          <span>Introducing SpearStreamZ</span>
        </div>
        <h2 class="text-4xl md:text-5xl font-extrabold text-[#011c2b] mb-4">About Our Approach</h2>
        <p class="text-lg md:text-2xl text-[#183E96] leading-relaxed max-w-xl mb-6 text-justify">
          At <span class="font-bold">SpearStreamZ</span>, we blend creativity and technology to deliver streamlined, intuitive, and robust workflow solutions.<br>
          Our process is inspired by the dynamic, interconnected, and flexible nature of modern organizations.
        </p>
        <div class="flex flex-col gap-6 w-full">
          <div class="flex items-center gap-4 group hover:bg-[#EAEEFE]/60 rounded-lg p-3 transition">
            <img src="assets/noodle.png" alt="Noodle" class="w-12 h-12 object-contain animate-float-y drop-shadow-lg" />
            <span class="text-[#011c2b] text-lg font-medium">Flexible process mapping for unique business needs</span>
          </div>
          <div class="flex items-center gap-4 group hover:bg-[#EAEEFE]/60 rounded-lg p-3 transition">
            <img src="assets/pyramid.png" alt="Pyramid" class="w-12 h-12 object-contain animate-float-x drop-shadow-lg" />
            <span class="text-[#011c2b] text-lg font-medium">Structured architecture for scalable growth</span>
          </div>
          <div class="flex items-center gap-4 group hover:bg-[#EAEEFE]/60 rounded-lg p-3 transition">
            <img src="assets/spring.png" alt="Spring" class="w-12 h-12 object-contain animate-bounce-slow drop-shadow-lg" />
            <span class="text-[#011c2b] text-lg font-medium">Agile and resilient to adapt to change</span>
          </div>
          <div class="flex items-center gap-4 group hover:bg-[#EAEEFE]/60 rounded-lg p-3 transition">
            <img src="assets/tube.png" alt="Tube" class="w-12 h-12 object-contain animate-float-y-reverse drop-shadow-lg" />
            <span class="text-[#011c2b] text-lg font-medium">Seamless integration with your existing systems</span>
          </div>
        </div>
      </div>
      <!-- Right: Animated 3D PNGs Composition -->
      <div class="flex-1 flex items-center justify-center relative min-h-[420px]">
        <!-- Floating PNGs around the cog -->
        <img src="assets/noodle.png" alt="Noodle" class="hidden md:block absolute left-0 top-10 w-20 md:w-28 opacity-90 animate-float-y drop-shadow-xl" style="animation-delay:0.2s" />
        <img src="assets/pyramid.png" alt="Pyramid" class="hidden md:block absolute right-0 top-0 w-16 md:w-24 opacity-90 animate-float-x drop-shadow-xl" style="animation-delay:0.4s" />
        <img src="assets/spring.png" alt="Spring" class="hidden md:block absolute left-10 bottom-0 w-16 md:w-24 opacity-90 animate-bounce-slow drop-shadow-xl" style="animation-delay:0.6s" />
        <img src="assets/tube.png" alt="Tube" class="hidden md:block absolute right-10 bottom-4 w-20 md:w-28 opacity-90 animate-float-y-reverse drop-shadow-xl" style="animation-delay:0.8s" />
        <!-- Main Cog -->
        <div class="relative z-10 flex items-center justify-center">
          <img src="assets/cog.png" alt="Cog" class="w-48 md:w-64 drop-shadow-2xl rounded-xl  animate-spin-slow" />
        </div>
      </div>
    </div>
  </div>
</section>
<section id="services"
  class="pt-16 pb-32 md:pt-24 md:pb-32 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#5D77D4,#EAEEFE_100%)] overflow-x-clip">
  <div class="container mx-auto px-7 grid md:grid-cols-3 gap-16 items-center">
    <div class="md:col-span-2 relative md:w-full lg:w-[800px] overflow-x-clip animate-slide-up">
      <h2 class="text-5xl lg:text-7xl text-center font-black bg-gradient-to-b from-black to-[#001E80] bg-clip-text text-transparent mb-8">Enterprise Architecture Consulting</h2>
      <p class="text-xl lg:text-3xl text-center text-[#010D3E] text-justify">In today’s fast-evolving tech landscape, organizations must continuously refine their IT application development, maintenance processes, and governance frameworks. The maturity of these systems often hinges on how closely they align with modern architecture principles—and staying competitive means staying current.</p>
    </div>
    <div class="flex ml-18 justify-center items-start animate-fade-in md:mt-0 mt-8">
      <img src="./assets/star.png" class="w-24 ml-2 md:w-40 lg:w-56 drop-shadow-lg md:ml-8" style="max-width: 100%; height: auto;" />
    </div>
  </div>
  <div class="container mx-auto px-7 md:px-16 py-10 flex flex-col lg:flex-row gap-16 items-center">
    <div class="flex justify-center animate-fade-in">
      <img src="./assets/cylinder.png" class="hidden md:block w-40 md:w-56 drop-shadow-lg" >
    </div>
    <div class="relative md:w-[490px] lg:w-[800px] overflow-x-clip animate-slide-up">
      <p class="text-xl lg:text-3xl text-center text-[#010D3E] text-justify">At SpearStreamZ, our Enterprise Architects bring over 20 years of industry expertise to help you reassess and revamp your enterprise architecture. We collaborate closely with your teams to establish clear architectural principles, streamline your application landscape, and strengthen governance models.</p><br><br>
      <p class="text-xl lg:text-3xl text-center text-[#010D3E] text-justify">By aligning with the latest trends through modern web app development using latest JS framework, Microservices, Visualizaton along with practical use cases for Artificial Intelligence in workflow steps, Data Lakehouse and Intelligent Automations —we empower your organization to stay agile, scalable, and future-ready.</p>
    </div>
  </div>
</section>
<section id="contact">
        <div class="container mx-auto  px-7 py-15"><br><br>
          <h2 class="text-4xl md:text-5xl font-extrabold text-center text-[#011c2b] mb-4">Vision</h2>
          <p class="text-lg md:text-xl text-center text-[#183E96]">
   Empowering businesses with access to enterprise-grade applications—bridging the gap between ambition and capability.
</p>
            </section>
            <!-- Footer Section -->
<footer class="bg-[#286E96] py-10 mt-16">
  <div class="container mx-auto px-6 text-center">
    <h3 class="text-2xl font-bold text-white mb-2">Connect With Us</h3>
    <p class="text-base text-white  mb-6">
      If you have any questions or feedback, please feel free to reach us at
      <!--
      <a href="mailto:admin@spearstreamz.com" class="text-[#ffff] hover:text-[#ffff]">admin@spearstreamz.com</a>.
      -->
    </p>
    <!--
    <h4 class="text-xl font-semibold text-white mb-2">Services</h4>
    <ul class="mb-6 text-white ">
      <li>Flexible Process Mapping</li>
      <li>Scalable Architecture</li>
      <li>Agile Adaptation</li>
      <li>System Integration</li>
    </ul>
    -->
    <!--
    <h4 class="text-xl font-semibold text-white mb-2">Connect With Us</h4>
    -->
    <div class="flex flex-col items-center gap-2 mb-6">
      <div class="flex items-center justify-center gap-2">
        <span>
                           <svg class="text-white " xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
</svg>        </span>
        <span class="text-white"><a href="mailto:admin@spearstreamz.com" class="text-[#ffff] hover:text-[#ffff]">admin@spearstreamz.com</a></span>
      </div>
      <div class="flex items-center justify-center gap-2">
        <span>
          <svg class="text-white" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
</svg>  
</span>
        <a href="https://www.linkedin.com/company/108076616" class="text-white hover:text-[#ffff]">LinkedIn</a>
      </div>
    </div>
    <hr class="border-[#011c2b] mb-4" />
    <p class="text-sm text-[#ffff]">&copy; 2025 SpearStreamZ. All rights reserved.</p>
  </div>
</footer>
</body>
</html>

';
?>