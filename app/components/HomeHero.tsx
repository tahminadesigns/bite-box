"use client";

import { motion } from "framer-motion";

export default function HomeHero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden pt-20">

      {/* ✅ BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-[url('/final-bg.png')] bg-cover bg-center bg-no-repeat"
      />

      {/* ✅ DARK LUXURY OVERLAY */}
      <div className="absolute inset-0 bg-linear-to-b from-black/50 via-black/60 to-black/60" />

      {/* ✅ CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold text-[#D4AF37] leading-tight drop-shadow-xl">
          Culinary perfection, <br />
          at your doorstep
        </h1>

        <p className="mt-5 max-w-xl text-base md:text-lg text-white/80">
          From the city’s finest kitchens, to your table in moments — only on BiteBox
        </p>

        {/* SEARCH BAR */}
        <div className="mt-10 flex w-full max-w-xl overflow-hidden rounded-full bg-white shadow-xl">
          <input
            type="text"
            placeholder="Search restaurants or dishes..."
            className="flex-1 px-6 py-4 text-black outline-none"
          />
          <button className="bg-[#D4AF37] px-8 font-semibold text-black hover:bg-[#B68D2C] transition">
            Search
          </button>
        </div>

        {/* CTA BUTTONS */}
        <div className="mt-10 flex gap-4">
          <button className="rounded-full border border-[#D4AF37] px-8 py-3 text-[#D4AF37] font-semibold hover:bg-[#D4AF37] hover:text-black transition">
            Order Now
          </button>
          <button className="rounded-full bg-[#B68D2C] px-8 py-3 font-semibold text-black hover:bg-[#F5D67B] transition">
            Explore Menu
          </button>
        </div>
      </motion.div>
    </section>
  );
}
