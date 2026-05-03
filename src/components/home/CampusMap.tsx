"use client";

import { motion } from "framer-motion";
import { MapPin, Navigation, Clock, Phone, ExternalLink } from "lucide-react";
import Link from "next/link";

export function CampusMap() {
  // Your provided Google Maps Link
  const mapLink = "https://goo.gl/maps/W35NT9a76FS5W4vU8";
  
  // Generic embed for the visual map (Using Prayagraj as the default visual center based on your profile)
  const mapEmbedUrl = "https://maps.google.com/maps?q=Prayagraj,+Uttar+Pradesh&t=&z=13&ie=UTF8&iwloc=&output=embed";

  return (
    <section id="location" className="py-24 bg-white px-4 sm:px-6 md:px-12 border-t border-slate-100">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-12 space-y-4">
          <p className="text-orange-600 font-bold tracking-wider text-sm uppercase">Visit Us</p>
          <h2 className="text-4xl font-serif font-bold text-[#0A192F]">Find Our Campus</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Experience our Gurukul environment firsthand. We welcome parents and students to visit our campus and feel the blend of modern education and Vedic wisdom.
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative w-full h-[600px] rounded-3xl overflow-hidden shadow-2xl shadow-slate-200/50 border-4 border-white ring-1 ring-slate-100 bg-slate-100"
        >
          {/* Embedded Google Map */}
          <iframe 
            src={mapEmbedUrl}
            className="absolute inset-0 w-full h-full border-0 grayscale-[20%] contrast-[110%] opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="EnlightenedBharat Campus Location"
          ></iframe>

          {/* Glassmorphism Floating Info Card */}
          <div className="absolute bottom-6 left-6 right-6 md:bottom-10 md:left-10 md:right-auto md:w-[400px] bg-white/90 backdrop-blur-xl p-8 rounded-2xl shadow-2xl border border-white/50 transition-transform hover:-translate-y-2 duration-300">
            <h3 className="font-serif font-bold text-2xl text-[#0A192F] mb-6 border-b border-slate-200/60 pb-4">
              EnlightenedBharat Campus
            </h3>
            
            <div className="space-y-5 mb-8">
              <div className="flex items-start gap-4 group">
                <div className="bg-blue-50 p-2 rounded-lg group-hover:bg-[#1E3A8A] transition-colors duration-300">
                  <MapPin className="w-5 h-5 text-[#1E3A8A] group-hover:text-white transition-colors duration-300 flex-shrink-0" />
                </div>
                <div>
                  <p className="font-bold text-slate-800 text-sm mb-1">Campus Address</p>
                  <p className="text-sm text-slate-600 leading-relaxed">Uttar Pradesh, India<br/>(Scan or click navigate for exact coordinates)</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="bg-orange-50 p-2 rounded-lg group-hover:bg-orange-500 transition-colors duration-300">
                  <Clock className="w-5 h-5 text-orange-600 group-hover:text-white transition-colors duration-300 flex-shrink-0" />
                </div>
                <div>
                  <p className="font-bold text-slate-800 text-sm mb-1">Visiting Hours</p>
                  <p className="text-sm text-slate-600">Monday - Saturday<br/>09:00 AM - 04:00 PM</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="bg-green-50 p-2 rounded-lg group-hover:bg-green-600 transition-colors duration-300">
                  <Phone className="w-5 h-5 text-green-600 group-hover:text-white transition-colors duration-300 flex-shrink-0" />
                </div>
                <div>
                  <p className="font-bold text-slate-800 text-sm mb-1">Admissions Desk</p>
                  <p className="text-sm text-slate-600">+91 98765 43210</p>
                </div>
              </div>
            </div>

            <Link 
              href={mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center w-full gap-2 bg-[#1E3A8A] text-white py-3.5 rounded-xl font-bold shadow-lg shadow-blue-900/20 hover:bg-blue-900 active:scale-95 transition-all duration-200"
            >
              <Navigation className="w-5 h-5 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
              Navigate to Campus
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}