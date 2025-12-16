"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    
    <header className="w-full relative z-50">
      <div className="backdrop-blur-sm bg-[rgba(8,7,7,0.6)] border-b border-[rgba(212,175,55,0.06)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">

            {/* left: logo */}
            <div className="flex items-center gap-4">
              <Link href="/" className="flex items-center gap-3">

                {/* logo image from public */}
                <span className="relative w-20 h-20">
                  <Image
                    src="/logo.png"
                    alt="Bite Box Logo"
                    fill
                    className="object-contain"
                    priority
                     sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </span>

                <div className="flex flex-col leading-tight">
                  <span className="text-sm font-semibold text-gray-100">
                    BiteBox
                  </span>
                   
                  <span className="text-[10px] text-[#D4AF37] tracking-wider">
                   Luxury flavors, instantly yours
                  </span>
                </div>
              </Link>
            </div>

            {/* center: search */}
            <div className="hidden md:flex md:flex-1 md:justify-center px-4">
              <div className="w-full max-w-2xl">
                <label className="relative block">
                  <input
                    type="search"
                    placeholder="Search for restaurants, dishes or cuisines..."
                    className="w-full rounded-full py-3 px-4 pl-10 text-sm placeholder:text-gray-400 bg-[rgba(255,255,255,0.03)] focus:ring-2 focus:ring-[#D4AF37]/40 transition outline-none text-gray-100"
                  />
                  <svg
                    className="w-5 h-5 text-gray-400 absolute left-3 top-3"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path d="M21 21l-4.35-4.35" stroke="#bfbfbf" strokeWidth="1.5" />
                    <circle cx="11" cy="11" r="5" stroke="#bfbfbf" strokeWidth="1.5" />
                  </svg>
                </label>
              </div>
            </div>

            {/* right */}
            <div className="flex items-center gap-3">
              <nav className="hidden md:flex items-center gap-4">
                {["Home","Restaurants","Menu","Orders","About","Contact"].map((item) => (
                  <Link
                    key={item}
                    href={`/${item === "Home" ? "" : item.toLowerCase()}`}
                    className="text-sm text-gray-200 hover:text-[#D4AF37] transition"
                  >
                    {item}
                  </Link>
                ))}
              </nav>

              {/* cart */}
              <Link
                href="/cart"
                className="relative inline-flex items-center gap-2 px-3 py-2 rounded-full border border-[rgba(212,175,55,0.12)] hover:scale-105 transition-transform"
              >
                <svg className="w-5 h-5 text-gray-100" viewBox="0 0 24 24" fill="none">
                  <path d="M3 3h2l.9 2M7 13h10l3-7H6.2" stroke="#EDE7D0" strokeWidth="1.4" />
                  <circle cx="10" cy="20" r="1.4" fill="#D4AF37" />
                  <circle cx="18" cy="20" r="1.4" fill="#D4AF37" />
                </svg>
                <span className="text-xs text-gray-100 hidden sm:inline">Cart</span>
                <span className="absolute -top-2 -right-2 text-[10px] bg-[#D4AF37] text-black font-semibold rounded-full px-1.5">
                  3
                </span>
              </Link>

              {/* ✨ Sign In animation */}
              <Link
                href="/auth"
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full 
                bg-linear-to-r from-[#2b241f] to-[#1a1512] border border-[rgba(212,175,55,0.15)]
                transition-all duration-300
                hover:scale-105 hover:shadow-[0_0_18px_rgba(212,175,55,0.25)]
                hover:from-[#3a2f27] hover:to-[#201a15]"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                  <path d="M12 12a4 4 0 100-8 4 4 0 000 8z" stroke="#D4AF37" strokeWidth="1.2" />
                  <path d="M3 21v-1a6 6 0 0112 0v1" stroke="#EDE7D0" strokeWidth="1.2" />
                </svg>
                <span className="text-sm text-gray-100">Sign In</span>
              </Link>

              {/* mobile menu btn */}
              <button
                className="md:hidden p-2 rounded-md hover:bg-white/5"
                onClick={() => setOpen(!open)}
              >
                <svg className="w-6 h-6 text-gray-100" viewBox="0 0 24 24" fill="none">
                  <path
                    d={open ? "M6 6l12 12M18 6L6 18" : "M3 7h18M3 12h18M3 17h18"}
                    stroke="#D4AF37"
                    strokeWidth="1.6"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* mobile menu */}
        {open && (
          <div className="md:hidden px-4 py-4 space-y-3">
            {["Home","Restaurants","Menu","Cart","Orders"].map((item) => (
              <Link
                key={item}
                href={`/${item === "Home" ? "" : item.toLowerCase()}`}
                className="block text-gray-100 py-2 px-3 rounded-md hover:bg-white/5"
              >
                {item}
              </Link>
            ))}
            <Link
              href="/auth"
              className="block bg-[#D4AF37] text-black text-center rounded-full py-2 font-medium"
            >
              Sign In / Sign Up
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
