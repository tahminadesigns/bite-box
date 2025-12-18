"use client";
import { motion } from "framer-motion";

export default function FeaturedFoods() {
  return (
    <section className="relative bg-linear-to-b from-[#0F0F0F] via-[#0C0C0C] to-[#323131] py-20 overflow-hidden">

      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.06),transparent_60%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-[#D4AF37]">
          Featured Foods
        </h2>

        <div className="mt-3 h-0.5 w-20 bg-linear-to-r from-transparent via-[#D4AF37] to-transparent mb-10"></div>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((item) => (
            <motion.div
              key={item}
              whileHover={{ y: -8 }}
              className="rounded-2xl bg-[#121212] border border-[#D4AF37]/20 p-4"
            >
              <img
                src={`/food-${item}.png`}
                className="h-40 w-full object-cover rounded-xl"
                alt="food"
              />
              <h3 className="mt-4 text-white font-semibold">
                Premium Dish
              </h3>
              <p className="text-[#D4AF37] font-bold mt-1">
                $12.99
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
