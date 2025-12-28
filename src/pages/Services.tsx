import { Card, CardContent } from "@/components/ui/card";

/* =======================
   SERVICES DATA (EMOJIS)
======================= */
const services = [
  {
    icon: "🌐",
    title: "Website Development",
    desc: "Modern, responsive and SEO-friendly websites built with React, Next.js and Tailwind CSS.",
  },
  {
    icon: "👨‍💻",
    title: "Custom Software Development",
    desc: "Scalable and secure software solutions tailored to business workflows.",
  },
  {
    icon: "📱",
    title: "Mobile App Development",
    desc: "High-performance Android & iOS apps with intuitive UI/UX.",
  },
  {
    icon: "☁️",
    title: "Cloud & Deployment",
    desc: "Cloud hosting, CI/CD pipelines and production-grade deployments.",
  },
  {
    icon: "📊",
    title: "Backend & Database",
    desc: "Robust APIs, authentication systems and database architecture.",
  },
  {
    icon: "🛡️",
    title: "Cybersecurity & IT Consulting",
    desc: "Security audits, system hardening and IT strategy consulting.",
  },
  {
    icon: "🪪",
    title: "E-Commerce Account Handling",
    desc: "Targeted sales growth with better conversion and performance.",
  },
];

/* =======================
   CLIENTS DATA
======================= */
const clients = [
  "Amit Jaggi Memorial Hospital",
  "G.R. Nursing College",
  "Divyang Sewa Charitable Trust",
  "Naresh Rajawat - Indian Politician and Businessman",
  "Himani Bundela - KBC-13 Winner and President Awardee",
  "The Theee House",
  "TNF Media House",
  "Dheeraj Sharma - Editor Dainik Bhaskar Agra",
];

const Services = () => {
  return (
    <section className="min-h-screen bg-black text-white py-20">
      <div className="container mx-auto px-4">

        {/* =======================
            HEADING
        ======================= */}
        <div className="text-center mb-16">
          <h1 className="inline-block px-8 py-4 text-4xl md:text-5xl font-bold
                         text-[#d4af37] border border-[#d4af37] rounded-lg">
            Our IT Services
          </h1>
          <p className="mt-5 text-gray-400 max-w-3xl mx-auto">
            We deliver reliable, scalable and future-ready IT solutions for businesses and startups.
          </p>
        </div>

        {/* =======================
            SERVICES GRID
        ======================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group bg-black border border-[#d4af37]/40
                         hover:border-[#d4af37]
                         hover:shadow-[0_0_30px_rgba(212,175,55,0.35)]
                         transition-all duration-300"
            >
              <CardContent className="p-6">

                {/* EMOJI ICON (FORCED VISIBILITY) */}
                <div
                  className="w-16 h-16 mb-4 flex items-center justify-center rounded-xl
                             bg-white text-black text-4xl
                             shadow-[0_0_20px_rgba(212,175,55,0.45)]
                             group-hover:scale-110 transition-all duration-300 select-none"
                  style={{
                    fontFamily:
                      "Segoe UI Emoji, Apple Color Emoji, Noto Color Emoji, system-ui",
                  }}
                >
                  {service.icon}
                </div>

                <h3 className="text-xl font-semibold text-[#d4af37] mb-2">
                  {service.title}
                </h3>

                <p className="text-sm text-gray-400 leading-relaxed">
                  {service.desc}
                </p>

              </CardContent>
            </Card>
          ))}
        </div>

        {/* =======================
            OUR CLIENTS
        ======================= */}
        <div className="mt-28">

          <div className="text-center mb-12">
            <h2 className="inline-block px-6 py-3 text-3xl font-bold
                           text-[#d4af37] border border-[#d4af37] rounded-lg">
              Our Clients
            </h2>
            <p className="mt-4 text-gray-400">
              Trusted by organizations, startups and institutions
            </p>
          </div>

          <div className="overflow-hidden space-y-8">

            <div className="flex w-max animate-marquee-left gap-6">
              {[...clients, ...clients].map((client, index) => (
                <div
                  key={`left-${index}`}
                  className="min-w-[260px] px-6 py-4 rounded-xl
                             bg-gradient-to-r from-[#d4af37] via-[#8a6a2f] to-[#2b1f14]
                             text-black font-semibold text-center shadow-lg"
                >
                  {client}
                </div>
              ))}
            </div>

            <div className="flex w-max animate-marquee-right gap-6">
              {[...clients, ...clients].map((client, index) => (
                <div
                  key={`right-${index}`}
                  className="min-w-[260px] px-6 py-4 rounded-xl
                             bg-gradient-to-r from-[#00c6ff] via-[#0072ff] to-[#001f3f]
                             text-white font-semibold text-center shadow-lg"
                >
                  {client}
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Services;
