"use client";
import { motion } from "framer-motion";

export default function FeaturedRestaurants() {
  return (
    <section className="relative bg-linear-to-b from-[#111010] via-[#0B0B0B] to-[#383737] py-20 overflow-hidden">

      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.06),transparent_60%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-[#D4AF37]">
          Featured Restaurants
        </h2>

        <div className="mt-3 h-0.5 w-20 bg-linear-to-r from-transparent via-[#D4AF37] to-transparent mb-10"></div>

        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <motion.div
              key={item}
              whileHover={{ scale: 1.04 }}
              className="rounded-2xl overflow-hidden border border-[#D4AF37]/20 bg-[#121212]"
            >
              <img
                src={`/rest-${item}.png`}
                className="h-48 w-full object-cover"
                alt="restaurant"
              />
              <div className="p-4">
                <h3 className="text-white font-semibold">
                  Luxury Restaurant
                </h3>
                <p className="text-sm text-white/70">
                  ⭐ 4.8 • 25–30 min
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
