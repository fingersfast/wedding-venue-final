"use client";

import { useState } from "react";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const formData = new FormData(e.target);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      venue: formData.get("venue"),
      phone: formData.get("phone"),
      message: formData.get("message"),
    };

    try {
      // Option 1: Send to your email service
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus("success");
        e.target.reset(); // Clear the form
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-white/20">
      {submitStatus === "success" && (
        <div className="mb-6 p-4 bg-green-500/20 border border-green-400/30 rounded-lg text-green-100">
          ✅ Thank you! We'll get back to you within 24 hours.
        </div>
      )}

      {submitStatus === "error" && (
        <div className="mb-6 p-4 bg-red-500/20 border border-red-400/30 rounded-lg text-red-100">
          ❌ Something went wrong. Please try again or contact us via WhatsApp.
        </div>
      )}

      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="name"
              className="block text-left text-white font-medium mb-2"
            >
              Your Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              disabled={isSubmitting}
              className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-300 disabled:opacity-50"
              placeholder="Enter your full name"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-left text-white font-medium mb-2"
            >
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              disabled={isSubmitting}
              className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-300 disabled:opacity-50"
              placeholder="your@email.com"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="venue"
            className="block text-left text-white font-medium mb-2"
          >
            Venue Name
          </label>
          <input
            type="text"
            id="venue"
            name="venue"
            disabled={isSubmitting}
            className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-300 disabled:opacity-50"
            placeholder="Your venue or business name"
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block text-left text-white font-medium mb-2"
          >
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            disabled={isSubmitting}
            className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-300 disabled:opacity-50"
            placeholder="+91 98765 43210"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-left text-white font-medium mb-2"
          >
            Tell Us About Your Project *
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows="4"
            disabled={isSubmitting}
            className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-300 resize-none disabled:opacity-50"
            placeholder="Describe your venue, current website status, and what you're looking for..."
          ></textarea>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-white text-rose-600 px-8 py-4 rounded-full font-semibold hover:bg-slate-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
          <a
            href="https://wa.me/91898996921"
            className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-rose-600 transition-all duration-300 text-center"
          >
            WhatsApp Chat
          </a>
        </div>
      </form>
    </div>
  );
}
