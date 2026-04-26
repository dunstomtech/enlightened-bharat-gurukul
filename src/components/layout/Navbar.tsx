"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, useScroll } from "framer-motion";
import { Menu, X, BookOpen } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      setIsScrolled(latest > 20);
    });
  }, [scrollY]);

  return (
    <motion.header
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
        isScrolled 
          ? "bg-white/80 backdrop-blur-md border-slate-200 shadow-sm py-3" 
          : "bg-transparent border-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="bg-gurukul-blue text-white p-2 rounded-lg group-hover:bg-gurukul-saffron transition-colors duration-300">
            <BookOpen className="w-5 h-5" />
          </div>
          <span className="font-serif font-bold text-xl text-gurukul-dark tracking-tight">
            Enlightened<span className="text-gurukul-saffron">Bharat</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/about" className="text-sm font-medium text-slate-600 hover:text-gurukul-blue transition-colors">About Us</Link>
          <Link href="/programs" className="text-sm font-medium text-slate-600 hover:text-gurukul-blue transition-colors">Academics</Link>
          <Link href="/community" className="text-sm font-medium text-slate-600 hover:text-gurukul-blue transition-colors">Community</Link>
          
          <div className="h-4 w-px bg-slate-300" />
          
          <Link 
            href="/login" 
            className="text-sm font-medium text-gurukul-blue hover:text-blue-900 transition-colors"
          >
            Login
          </Link>
          <Link 
            href="/register" 
            className="text-sm font-medium bg-gurukul-dark text-white px-5 py-2 rounded-full hover:bg-black transition-all active:scale-95 shadow-md"
          >
            Apply Now
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-slate-600 active:scale-90 transition-transform"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
    </motion.header>
  );
}