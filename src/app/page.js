import Image from "next/image";
import ContactForm from "./components/ContactForm";

export default function Home() {
  return (
    <main className="bg-gradient-to-br from-slate-50 to-slate-100 text-slate-900 font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-slate-800">
            WeddingWeb Studio
          </div>
          <div className="hidden md:flex space-x-8">
            <a
              href="#services"
              className="text-slate-600 hover:text-slate-900 transition"
            >
              Services
            </a>
            <a
              href="#portfolio"
              className="text-slate-600 hover:text-slate-900 transition"
            >
              Portfolio
            </a>
            <a
              href="#process"
              className="text-slate-600 hover:text-slate-900 transition"
            >
              Process
            </a>
            <a
              href="#contact"
              className="text-slate-600 hover:text-slate-900 transition"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-20">
        <div className="max-w-4xl mx-auto">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
              Transform Your Venue
              <br />
              <span className="text-rose-600">Into Digital Magic</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto mb-8 leading-relaxed">
              We create stunning, conversion-focused websites that turn your
              wedding venue into an irresistible online destination.
              Mobile-first, SEO-optimized, and designed to drive bookings.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="bg-gradient-to-r from-rose-600 to-rose-500 text-white px-8 py-4 rounded-full font-semibold hover:from-rose-700 hover:to-rose-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Get Your Free Preview
              </a>
              <a
                href="#portfolio"
                className="border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-full font-semibold hover:border-slate-400 hover:bg-slate-50 transition-all duration-300"
              >
                View Our Work
              </a>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="mt-16 animate-fade-in">
          <div className="relative w-full max-w-5xl mx-auto">
            <Image
              src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Luxury wedding venue"
              width={1200}
              height={600}
              className="rounded-2xl shadow-2xl"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in-up">
              <div className="text-4xl font-bold text-rose-600 mb-2">150+</div>
              <div className="text-slate-600">Websites Delivered</div>
            </div>
            <div className="animate-fade-in-up">
              <div className="text-4xl font-bold text-rose-600 mb-2">98%</div>
              <div className="text-slate-600">Client Satisfaction</div>
            </div>
            <div className="animate-fade-in-up">
              <div className="text-4xl font-bold text-rose-600 mb-2">3.2x</div>
              <div className="text-slate-600">Avg. Booking Increase</div>
            </div>
            <div className="animate-fade-in-up">
              <div className="text-4xl font-bold text-rose-600 mb-2">24/7</div>
              <div className="text-slate-600">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="py-20 bg-gradient-to-br from-slate-50 to-white"
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Everything Your Venue Needs
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From stunning visuals to powerful booking systems, we build
              complete digital experiences that showcase your venue's unique
              charm.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100">
              <div className="w-16 h-16 bg-gradient-to-br from-rose-500 to-rose-600 rounded-2xl flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">
                Mobile-First Design
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Perfect on every device. 70% of your visitors browse on mobile
                first, so we ensure your venue looks stunning on every screen
                size.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100">
              <div className="w-16 h-16 bg-gradient-to-br from-rose-500 to-rose-600 rounded-2xl flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">
                SEO Optimized
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Rank higher on Google and get found by couples actively
                searching for venues in your area. Our SEO strategies drive
                organic traffic.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100">
              <div className="w-16 h-16 bg-gradient-to-br from-rose-500 to-rose-600 rounded-2xl flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">
                Booking Integration
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Seamless booking systems, contact forms, and calendar
                integrations that turn visitors into confirmed bookings with
                ease.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Recent Venue Transformations
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              See how we've helped venues like yours create stunning online
              presences that drive real results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "The Grand Pavilion",
                location: "Indore, MP",
                image:
                  "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                description:
                  "Luxury wedding venue with 300% increase in online inquiries",
              },
              {
                title: "Rosewood Heritage",
                location: "Mumbai, MH",
                image:
                  "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                description:
                  "Heritage property transformed into digital excellence",
              },
              {
                title: "Azure Waters Resort",
                location: "Goa",
                image:
                  "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                description: "Beachfront resort with integrated booking system",
              },
              {
                title: "The Royal Gardens",
                location: "Delhi, NCR",
                image:
                  "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                description: "Garden venue with virtual tour integration",
              },
              {
                title: "Crystal Palace",
                location: "Bangalore, KA",
                image:
                  "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                description: "Modern venue with AI-powered recommendations",
              },
              {
                title: "The Vintage Manor",
                location: "Pune, MH",
                image:
                  "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                description: "Historic property with contemporary web presence",
              },
            ].map((project, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="relative overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={400}
                      height={300}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-800 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-rose-600 font-medium mb-3">
                      {project.location}
                    </p>
                    <p className="text-slate-600 text-sm">
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section
        id="process"
        className="py-20 bg-gradient-to-br from-slate-50 to-white"
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Our Simple 4-Step Process
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From concept to launch, we make creating your perfect website
              effortless.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description:
                  "We learn about your venue, brand, and goals to create the perfect strategy.",
              },
              {
                step: "02",
                title: "Design",
                description:
                  "Our designers create stunning mockups that capture your venue's essence.",
              },
              {
                step: "03",
                title: "Development",
                description:
                  "We build your website with modern technology and best practices.",
              },
              {
                step: "04",
                title: "Launch",
                description:
                  "Your website goes live with full support and optimization.",
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-rose-500 to-rose-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-xl">
                    {item.step}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">
                  {item.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-2xl border border-slate-200">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-rose-500 to-rose-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">R</span>
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">Rajesh Kumar</h4>
                  <p className="text-slate-600 text-sm">
                    Owner, Rosewood Heritage
                  </p>
                </div>
              </div>
              <p className="text-slate-700 italic">
                "After launching our new website, we started getting 3x more
                direct bookings from Google. The team understood our venue
                perfectly and created something that truly represents our
                brand."
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-2xl border border-slate-200">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-rose-500 to-rose-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">P</span>
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">Priya Sharma</h4>
                  <p className="text-slate-600 text-sm">
                    Manager, The Grand Pavilion
                  </p>
                </div>
              </div>
              <p className="text-slate-700 italic">
                "The website perfectly matches the elegance of our venue — it's
                like an online extension of our brand. Our booking inquiries
                have doubled since the launch."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        id="contact"
        className="py-20 bg-gradient-to-br from-rose-600 to-rose-500 text-white"
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Venue?
          </h2>
          <p className="text-xl mb-12 opacity-90">
            Let's create a website that turns browsers into bookings. Get your
            free website preview today.
          </p>

          {/* Contact Form */}
          <ContactForm />

          <p className="mt-8 text-sm opacity-75">
            Free consultation • No commitment • 24/7 support • Response within
            24 hours
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">VenueWeb Studio</h3>
              <p className="text-slate-400">
                Creating stunning websites for wedding venues and resorts that
                drive real results.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-slate-400">
                <li>Website Design</li>
                <li>SEO Optimization</li>
                <li>Booking Integration</li>
                <li>Maintenance & Support</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-slate-400">
                <li>+91 78797 67897</li>
                <li>hello@venuewebstudio.com</li>
                <li>Available 24/7</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-slate-400 hover:text-white transition"
                >
                  Instagram
                </a>
                <a
                  href="#"
                  className="text-slate-400 hover:text-white transition"
                >
                  LinkedIn
                </a>
                <a
                  href="#"
                  className="text-slate-400 hover:text-white transition"
                >
                  Twitter
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
            <p>
              &copy; {new Date().getFullYear()} VenueWeb Studio. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
