"use client";
import { motion } from "framer-motion";

export default function HomeOffers() {
  return (
    <section className="relative bg-linear-to-b from-[#0F0F0F] via-[#0B0B0B] to-[#313030] py-20 overflow-hidden">

      {/* GOLD GLOW */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.06),transparent_60%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-[#D4AF37]">
          Exclusive Offers
        </h2>

        <div className="mt-3 h-0.5 w-20 bg-linear-to-r from-transparent via-[#D4AF37] to-transparent mb-10"></div>

        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <motion.div
              key={item}
              whileHover={{ scale: 1.05 }}
              className="relative overflow-hidden rounded-2xl border border-[#D4AF37]/20"
            >
              <img
                src={`/offer-${item}.png`}
                className="h-48 w-full object-cover"
                alt="offer"
              />

              <div className="absolute inset-0 bg-black/30 flex items-end p-4">
                <p className="text-white font-semibold">
                  Up to <span className="text-[#D4AF37]">40% OFF</span>
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
