import Link from "next/link";
import Image from "next/image";
import { FAQ } from "@/components/home/FAQ";
import { CampusMap } from "@/components/home/CampusMap"; // Add this import
import { 
  BookOpen, GraduationCap, PersonStanding, Flower2, 
  Eye, PenTool, Lightbulb, Share2, Target, Calendar, 
  Users, ShieldCheck, ChevronRight, Phone, Mail, MapPin
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-yellow-400 selection:text-[#0A192F]">
      {/* 0. NAVBAR */}
      <nav className="sticky top-0 z-50 bg-[#0A192F] text-white py-4 px-6 md:px-12 flex items-center justify-between shadow-lg border-b border-slate-800">
        <Link href="/" className="flex items-center gap-3 group">
          <Flower2 className="w-8 h-8 text-yellow-400 group-hover:rotate-45 transition-transform duration-500" />
          <div>
            <h1 className="font-serif font-bold text-xl leading-tight tracking-wide">ENLIGHTENEDBHARAT</h1>
            <p className="text-[10px] text-yellow-400 uppercase tracking-[0.2em]">Modern Education with Vedic Soul</p>
          </div>
        </Link>
        <div className="hidden lg:flex items-center gap-8 text-sm font-medium">
          <Link href="#" className="text-yellow-400">Home</Link>
          <Link href="#about" className="text-slate-300 hover:text-yellow-400 transition-colors duration-300">About Us</Link>
          <Link href="#approach" className="text-slate-300 hover:text-yellow-400 transition-colors duration-300">Our Approach</Link>
          <Link href="#academics" className="text-slate-300 hover:text-yellow-400 transition-colors duration-300">Academics</Link>
          <Link href="#development" className="text-slate-300 hover:text-yellow-400 transition-colors duration-300">Student Development</Link>
          <Link href="#community" className="text-slate-300 hover:text-yellow-400 transition-colors duration-300">Community</Link>
        </div>
        <Link 
          href="/apply" 
          className="bg-yellow-500 text-[#0A192F] px-6 py-2.5 rounded font-bold hover:bg-yellow-400 active:scale-95 transition-all duration-200 shadow-md shadow-yellow-500/20"
        >
          Apply Now
        </Link>
      </nav>

      <main>
        {/* 1. HERO SECTION */}
        <section className="relative bg-white py-20 lg:py-32 px-6 md:px-12 flex flex-col md:flex-row items-center overflow-hidden border-b border-slate-200">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-yellow-50 to-transparent rounded-full -translate-y-1/2 translate-x-1/3 opacity-70 pointer-events-none" />
          
          <div className="md:w-1/2 z-10 space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-50 border border-orange-100 text-orange-700 text-sm font-semibold shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
              </span>
              Admissions Open for Grades 6–8
            </div>
            
            <h2 className="text-5xl lg:text-6xl font-serif font-bold text-[#0A192F] leading-tight">
              Modern Education <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1E3A8A] to-orange-600">with a Vedic Soul</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-lg leading-relaxed">
              Building disciplined, focused, and future-ready students through a unique blend of modern academics and timeless Vedic wisdom.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link 
                href="/apply" 
                className="text-center bg-[#1E3A8A] text-white px-8 py-3.5 rounded font-bold hover:bg-blue-900 active:scale-95 transition-all duration-200 shadow-lg shadow-blue-900/20"
              >
                Apply Now
              </Link>
              <Link 
                href="#approach" 
                className="text-center bg-white text-[#1E3A8A] border-2 border-[#1E3A8A] px-8 py-3.5 rounded font-bold hover:bg-slate-50 active:scale-95 transition-all duration-200"
              >
                Explore Our Approach
              </Link>
            </div>
          </div>

          <div className="md:w-1/2 mt-16 md:mt-0 relative flex justify-center z-10">
            <div className="relative w-[320px] h-[320px] md:w-[480px] md:h-[480px] rounded-full overflow-hidden border-8 border-white shadow-2xl ring-1 ring-slate-100">
               <Image 
                 src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=1000" 
                 alt="Student engaged in learning" 
                 fill 
                 className="object-cover hover:scale-105 transition-transform duration-700"
                 priority
               />
            </div>
          </div>
        </section>

        {/* 2. QUICK HIGHLIGHTS */}
        <section className="px-6 md:px-12 max-w-7xl mx-auto -mt-12 relative z-20">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { title: "Holistic Development", desc: "Nurturing the mind, body, and character of every student.", icon: <Target className="w-7 h-7 text-green-600" /> },
              { title: "Academic Excellence", desc: "Strong conceptual learning aligned with CBSE standards.", icon: <GraduationCap className="w-7 h-7 text-blue-600" /> },
              { title: "Life Skills Focus", desc: "Discipline, focus, and hard work built into daily learning.", icon: <PersonStanding className="w-7 h-7 text-orange-600" /> },
              { title: "Modern + Vedic", desc: "Global education combined with ancient wisdom.", icon: <Flower2 className="w-7 h-7 text-purple-600" /> }
            ].map((item, i) => (
              <div key={i} className="group bg-white p-8 rounded-xl shadow-lg shadow-slate-200/50 border border-slate-100 flex flex-col items-center text-center hover:-translate-y-2 hover:shadow-xl hover:border-blue-100 transition-all duration-300">
                <div className="mb-5 bg-slate-50 p-4 rounded-full group-hover:bg-blue-50 group-hover:scale-110 transition-all duration-300">
                  {item.icon}
                </div>
                <h3 className="font-bold text-[#0A192F] mb-3">{item.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 3. ABOUT SNAPSHOT */}
        <section id="about" className="py-24 px-6 md:px-12 max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center">
          <div className="md:w-1/2 w-full">
            <div className="aspect-[4/3] relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <Image 
                src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&q=80&w=1000" 
                alt="EnlightenedBharat School Campus" 
                fill 
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
          <div className="md:w-1/2 space-y-8">
            <div className="space-y-2">
              <p className="text-orange-600 font-bold tracking-wider text-sm uppercase">Our Vision</p>
              <h2 className="text-4xl font-serif font-bold text-[#0A192F] leading-tight">Not Just Education — Transformation</h2>
            </div>
            <p className="text-slate-600 text-lg leading-relaxed">
              At EnlightenedBharat, we believe education is not just about passing exams—it is about building a strong, capable, and balanced human being prepared for the realities of the modern world.
            </p>
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
              <p className="font-bold text-[#0A192F] mb-4">Our vision is to create students who are:</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="flex items-center gap-3"><Flower2 className="text-green-600 w-6 h-6"/> <span className="font-bold text-slate-700">Prosperous</span></div>
                <div className="flex items-center gap-3"><ShieldCheck className="text-orange-600 w-6 h-6"/> <span className="font-bold text-slate-700">Strong</span></div>
                <div className="flex items-center gap-3"><Target className="text-blue-600 w-6 h-6"/> <span className="font-bold text-slate-700">Peaceful</span></div>
              </div>
            </div>
            <button className="group text-orange-600 font-bold flex items-center gap-2 hover:text-orange-700 transition-colors">
              Learn More About Us <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </section>

        {/* 4. OUR UNIQUE LEARNING SYSTEM */}
        <section className="py-24 bg-white border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center mb-16 space-y-4">
              <p className="text-orange-600 font-bold tracking-wider text-sm uppercase">Methodology</p>
              <h2 className="text-4xl font-serif font-bold text-[#0A192F]">A Proven 4-Step Learning System</h2>
            </div>
            
            <div className="flex flex-col md:flex-row justify-between items-start gap-8 relative">
              <div className="absolute top-10 left-[10%] right-[10%] h-[2px] bg-slate-100 hidden md:block"></div>
              
              {[
                { step: 1, title: "Listen, Read, Watch", desc: "Students begin by absorbing knowledge through focused listening, reading, and observation.", icon: <Eye className="w-8 h-8 text-green-600"/> },
                { step: 2, title: "Practice", desc: "Learning becomes strong through writing, recollection, repetition, and reviewing lessons.", icon: <PenTool className="w-8 h-8 text-blue-600"/> },
                { step: 3, title: "Apply", desc: "Students use their knowledge in real-life situations, problem-solving, and meaningful tasks.", icon: <Lightbulb className="w-8 h-8 text-orange-600"/> },
                { step: 4, title: "Share & Teach", desc: "True mastery comes when students internalize deeply, teach others, and contribute.", icon: <Share2 className="w-8 h-8 text-purple-600"/> }
              ].map((item, i) => (
                <div key={i} className="flex-1 flex flex-col items-center text-center relative px-4 group">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg shadow-slate-200 border-4 border-slate-50 mb-6 relative z-10 group-hover:scale-110 group-hover:border-blue-50 transition-all duration-300">
                    {item.icon}
                    <div className="absolute -top-2 -right-2 w-7 h-7 bg-[#0A192F] text-white text-xs font-bold rounded-full flex items-center justify-center shadow-sm">
                      {item.step}
                    </div>
                  </div>
                  <h3 className="font-bold text-lg text-[#0A192F] mb-3 group-hover:text-blue-600 transition-colors">{item.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. WHAT WE TEACH */}
        <section id="academics" className="py-24 px-6 md:px-12 max-w-7xl mx-auto text-center">
          <div className="mb-16 space-y-4">
             <p className="text-orange-600 font-bold tracking-wider text-sm uppercase">Curriculum</p>
             <h2 className="text-4xl font-serif font-bold text-[#0A192F]">Education That Builds Life</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Academics (CBSE)", desc: "Strong foundation in all core subjects with deep conceptual clarity.", icon: <BookOpen className="w-7 h-7 text-blue-600"/> },
              { title: "Language Mastery", desc: "Fluent English with strong Sanskrit/Hindi foundation.", icon: <Target className="w-7 h-7 text-indigo-600"/> },
              { title: "Learning Skills", desc: "Students learn: How to learn, How to focus, How to work hard.", icon: <Lightbulb className="w-7 h-7 text-yellow-600"/> },
              { title: "Life Skills", desc: "We build: Discipline, Character, Consistency.", icon: <PersonStanding className="w-7 h-7 text-green-600"/> }
            ].map((item, i) => (
              <div key={i} className="group bg-white border border-slate-200 rounded-2xl p-8 text-left hover:shadow-xl hover:border-blue-200 hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center gap-4 mb-5">
                  <div className="p-3 bg-slate-50 rounded-xl group-hover:bg-blue-50 transition-colors">{item.icon}</div>
                  <h3 className="font-bold text-lg text-[#0A192F]">{item.title}</h3>
                </div>
                <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 6. OUR APPROACH (Banner) */}
        <section id="approach" className="bg-[#1E3A8A] text-white py-20 px-6 md:px-12 relative overflow-hidden">
          {/* Subtle Background Pattern */}
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
          
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 relative z-10">
            <div className="md:w-1/2 space-y-8">
              <h2 className="text-4xl font-serif font-bold leading-tight">Modern Learning Rooted in <span className="text-yellow-400">Ancient Wisdom</span></h2>
              <p className="text-blue-100 text-lg leading-relaxed">We follow a balanced approach that combines the best of both worlds, ensuring intellectual, emotional, and spiritual growth.</p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 bg-blue-900/40 p-4 rounded-lg backdrop-blur-sm border border-blue-800/50">
                  <Target className="w-6 h-6 text-yellow-400 flex-shrink-0"/> 
                  <span className="font-medium">Aligned with international education standards (CBSE)</span>
                </li>
                <li className="flex items-center gap-3 bg-blue-900/40 p-4 rounded-lg backdrop-blur-sm border border-blue-800/50">
                  <Flower2 className="w-6 h-6 text-yellow-400 flex-shrink-0"/> 
                  <span className="font-medium">Rooted in Vedic principles of living, learning, and discipline</span>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2 flex justify-center w-full">
              <div className="w-full max-w-lg h-72 bg-[#0A192F]/60 backdrop-blur-md rounded-2xl flex items-center justify-center border border-blue-800/50 shadow-2xl relative overflow-hidden">
                 <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-transparent"></div>
                 <span className="text-yellow-400/80 font-serif text-3xl md:text-4xl text-center px-6 leading-relaxed relative z-10">
                   विद्या ददाति विनयं <br/> 
                   <span className="text-2xl md:text-3xl mt-4 block opacity-80">विनयाद् याति पात्रताम्</span>
                 </span>
              </div>
            </div>
          </div>
        </section>

        {/* 7. STUDENT DEVELOPMENT SYSTEM */}
        <section id="development" className="py-24 px-6 md:px-12 max-w-7xl mx-auto bg-slate-50">
          <div className="text-center mb-16 space-y-4">
            <p className="text-orange-600 font-bold tracking-wider text-sm uppercase">Growth System</p>
            <h2 className="text-4xl font-serif font-bold text-[#0A192F]">Structured Growth for Every Student</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-start gap-4 hover:shadow-md transition-shadow">
              <Target className="w-12 h-12 text-green-600 flex-shrink-0 p-2 bg-green-50 rounded-lg"/>
              <div>
                <h3 className="font-bold text-[#0A192F] mb-1">Goal-Based</h3>
                <p className="text-sm text-slate-500">Each student sets goals in: Knowledge, Skills, Healthy Mind, Healthy Body.</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-start gap-4 hover:shadow-md transition-shadow">
              <Calendar className="w-12 h-12 text-blue-600 flex-shrink-0 p-2 bg-blue-50 rounded-lg"/>
              <div>
                <h3 className="font-bold text-[#0A192F] mb-1">Yearly Tracking</h3>
                <p className="text-sm text-slate-500">Daily goals, Weekly planning, Monthly reviews, Yearly vision.</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-start gap-4 hover:shadow-md transition-shadow">
              <Users className="w-12 h-12 text-orange-600 flex-shrink-0 p-2 bg-orange-50 rounded-lg"/>
              <div>
                <h3 className="font-bold text-[#0A192F] mb-1">Monitoring</h3>
                <p className="text-sm text-slate-500">Small group discussions, Regular progress tracking, Accountability.</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-start gap-4 hover:shadow-md transition-shadow">
              <Flower2 className="w-12 h-12 text-purple-600 flex-shrink-0 p-2 bg-purple-50 rounded-lg"/>
              <div>
                <h3 className="font-bold text-[#0A192F] mb-1">Holistic Focus</h3>
                <p className="text-sm text-slate-500">Focus on balanced growth of mind, body, character, and spirit.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 8. ADMISSIONS SECTION */}
        <section id="admissions" className="py-24 bg-white border-t border-slate-100 px-4">
          <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl shadow-slate-200 overflow-hidden flex flex-col md:flex-row border border-slate-100">
            <div className="md:w-1/2 relative min-h-[300px] md:min-h-auto">
               <Image 
                 src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=800" 
                 alt="Students at school" 
                 fill 
                 className="object-cover"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/80 to-transparent flex items-end p-8">
                 <p className="text-white font-serif text-2xl font-bold">Join the EnlightenedBharat Family</p>
               </div>
            </div>
            <div className="md:w-1/2 p-8 md:p-12 space-y-8 bg-slate-50">
              <div>
                <h2 className="text-3xl font-serif font-bold text-[#0A192F] mb-4">Start Your Journey with Us</h2>
                <p className="text-slate-600 leading-relaxed">Admissions are now open for students in Grades 6–8. Join a learning environment designed to help students grow academically, mentally, and personally.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl border border-slate-200 flex justify-between items-center text-center shadow-sm">
                <div>
                  <span className="block text-xs font-bold text-slate-400 uppercase mb-1">Grades</span>
                  <strong className="text-[#1E3A8A] text-xl">6 - 8</strong>
                </div>
                <div className="w-px h-10 bg-slate-200"></div>
                <div>
                  <span className="block text-xs font-bold text-slate-400 uppercase mb-1">Curriculum</span>
                  <strong className="text-[#1E3A8A] text-xl">CBSE</strong>
                </div>
                <div className="w-px h-10 bg-slate-200"></div>
                <div>
                  <span className="block text-xs font-bold text-slate-400 uppercase mb-1">Age</span>
                  <strong className="text-[#1E3A8A] text-xl">11 - 13</strong>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Link href="/apply" className="flex-1 bg-yellow-500 text-[#0A192F] py-3.5 rounded font-bold hover:bg-yellow-400 active:scale-95 transition-all shadow-md text-center">Apply Now</Link>
                <button className="flex-1 bg-white text-[#0A192F] border-2 border-slate-200 py-3.5 rounded font-bold hover:bg-slate-50 hover:border-[#0A192F] active:scale-95 transition-all">Contact Us</button>
              </div>
            </div>
          </div>
        </section>

        {/* 9. FAQ SECTION */}
        <FAQ />
        <CampusMap />

        {/* 10. FINAL CTA */}
        <section className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white py-20 px-6 md:px-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1920')] bg-cover bg-center mix-blend-overlay opacity-20"></div>
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Build a Strong Mind, Body, and Future</h2>
            <p className="mb-10 max-w-2xl mx-auto text-orange-50 text-lg">Give your child an education that goes beyond books and prepares them for life.</p>
            <Link href="/apply" className="inline-block bg-[#0A192F] text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-slate-800 active:scale-95 transition-all shadow-2xl hover:shadow-black/20">
              Apply for Admission Today
            </Link>
          </div>
        </section>
      </main>

      {/* 11. FOOTER */}
      <footer className="bg-[#0A192F] text-slate-300 py-16 px-6 md:px-12 border-t-4 border-yellow-500">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-6 lg:col-span-1">
            <div className="flex items-center gap-3 text-white">
              <Flower2 className="w-8 h-8 text-yellow-400" />
              <span className="font-serif font-bold text-xl tracking-wide">ENLIGHTENEDBHARAT</span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              A place where modern education meets Vedic wisdom to create disciplined, confident, and compassionate leaders of tomorrow.
            </p>
          </div>
          
          <div className="lg:ml-auto">
            <h4 className="text-white font-bold mb-6 text-lg">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/" className="hover:text-yellow-400 transition-colors">Home</Link></li>
              <li><Link href="#about" className="hover:text-yellow-400 transition-colors">About Us</Link></li>
              <li><Link href="#approach" className="hover:text-yellow-400 transition-colors">Our Approach</Link></li>
              <li><Link href="#academics" className="hover:text-yellow-400 transition-colors">Academics</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Admissions</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="#" className="hover:text-yellow-400 transition-colors">Admissions Info</Link></li>
              <li><Link href="#" className="hover:text-yellow-400 transition-colors">Eligibility</Link></li>
              <li><Link href="/apply" className="text-yellow-400 font-bold hover:text-yellow-300 transition-colors">Apply Now</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5"/> 
                <span className="leading-relaxed">EnlightenedBharat Campus,<br/>Uttar Pradesh, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-yellow-400 flex-shrink-0"/> 
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-yellow-400 flex-shrink-0"/> 
                <span>info@enlightenedbharat.org</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p>© 2026 EnlightenedBharat School. All Rights Reserved.</p>
          <div className="flex gap-4">
             <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
             <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}