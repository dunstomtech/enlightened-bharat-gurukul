"use client";

import { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/config/firebase";
import { ArrowLeft, CheckCircle2, Loader2, Flower2 } from "lucide-react";

// Form Validation Schema (Updated for strict Zod typing)
const applicationSchema = z.object({
  studentName: z.string().min(2, "Student name is required"),
  grade: z.enum(["6", "7", "8"], { message: "Please select a grade" }),
  dob: z.string().min(1, "Date of birth is required"),
  parentName: z.string().min(2, "Parent/Guardian name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().regex(/^[0-9]{10}$/, "Phone number must be exactly 10 digits"),
  previousSchool: z.string().min(2, "Previous school is required"),
  city: z.string().min(2, "City is required"),
  message: z.string().optional(),
});

type ApplicationFormValues = z.infer<typeof applicationSchema>;

export default function ApplyPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ApplicationFormValues>({
    resolver: zodResolver(applicationSchema),
  });

  const onSubmit = async (data: ApplicationFormValues) => {
    setIsSubmitting(true);
    setErrorMsg("");
    
    try {
      // Connect to Firestore collection 'applications'
      await addDoc(collection(db, "applications"), {
        ...data,
        status: "Pending",
        submittedAt: serverTimestamp(),
      });
      setIsSuccess(true);
    } catch (error) {
      console.error("Error submitting application:", error);
      setErrorMsg("Failed to submit application. Please try again or contact support.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6 selection:bg-yellow-400 selection:text-gurukul-dark">
        <div className="max-w-md w-full bg-white rounded-3xl shadow-xl shadow-slate-200/50 p-10 text-center border border-slate-100">
          <CheckCircle2 className="w-20 h-20 text-green-500 mx-auto mb-6 animate-pulse" />
          <h2 className="text-3xl font-serif font-bold text-gurukul-dark mb-4">Application Received!</h2>
          <p className="text-slate-600 mb-8 leading-relaxed">
            Thank you for applying to EnlightenedBharat School. Our admissions team will review your application and contact you shortly for the next steps.
          </p>
          <Link 
            href="/"
            className="inline-block w-full bg-gurukul-blue text-white py-3.5 rounded-lg font-bold hover:bg-blue-900 active:scale-95 transition-all duration-200 shadow-md shadow-blue-900/20"
          >
            Return to Homepage
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8 font-sans selection:bg-yellow-400 selection:text-gurukul-dark">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-gurukul-blue font-medium mb-8 transition-colors duration-200 group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Home
        </Link>

        <div className="bg-white rounded-3xl shadow-2xl shadow-slate-200/50 border border-slate-100 overflow-hidden">
          {/* Header Section */}
          <div className="bg-gurukul-dark p-8 md:p-12 text-center relative overflow-hidden">
            {/* Updated Tailwind v4 Gradient syntax */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-linear-to-bl from-blue-800 to-transparent rounded-full -translate-y-1/2 translate-x-1/2 opacity-50 pointer-events-none" />
            <Flower2 className="w-10 h-10 text-yellow-400 mx-auto mb-4" />
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-white mb-2">Admission Application</h1>
            <p className="text-blue-200 text-sm md:text-base">Grades 6–8 | EnlightenedBharat School</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="p-8 md:p-12 space-y-8">
            {errorMsg && (
              <div className="bg-red-50 text-red-600 p-4 rounded-lg text-sm font-medium border border-red-100">
                {errorMsg}
              </div>
            )}

            <div className="space-y-6">
              <h3 className="text-lg font-bold text-gurukul-dark border-b border-slate-200 pb-2">Student Details</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Student Full Name *</label>
                  <input 
                    {...register("studentName")}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-gurukul-blue focus:border-gurukul-blue outline-none transition-all"
                    placeholder="Enter student's name"
                  />
                  {errors.studentName && <p className="text-red-500 text-xs mt-1">{errors.studentName.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Date of Birth *</label>
                  <input 
                    type="date"
                    {...register("dob")}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-gurukul-blue focus:border-gurukul-blue outline-none transition-all text-slate-700"
                  />
                  {errors.dob && <p className="text-red-500 text-xs mt-1">{errors.dob.message}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Applying For Grade *</label>
                  <select 
                    {...register("grade")}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-gurukul-blue focus:border-gurukul-blue outline-none transition-all text-slate-700 bg-white"
                  >
                    <option value="">Select a Grade</option>
                    <option value="6">Grade 6</option>
                    <option value="7">Grade 7</option>
                    <option value="8">Grade 8</option>
                  </select>
                  {errors.grade && <p className="text-red-500 text-xs mt-1">{errors.grade.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Previous School *</label>
                  <input 
                    {...register("previousSchool")}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-gurukul-blue focus:border-gurukul-blue outline-none transition-all"
                    placeholder="Current/Previous school name"
                  />
                  {errors.previousSchool && <p className="text-red-500 text-xs mt-1">{errors.previousSchool.message}</p>}
                </div>
              </div>
            </div>

            <div className="space-y-6 pt-4">
              <h3 className="text-lg font-bold text-gurukul-dark border-b border-slate-200 pb-2">Parent / Guardian Details</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Parent Name *</label>
                  <input 
                    {...register("parentName")}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-gurukul-blue focus:border-gurukul-blue outline-none transition-all"
                    placeholder="Enter parent's name"
                  />
                  {errors.parentName && <p className="text-red-500 text-xs mt-1">{errors.parentName.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Email Address *</label>
                  <input 
                    type="email"
                    {...register("email")}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-gurukul-blue focus:border-gurukul-blue outline-none transition-all"
                    placeholder="parent@example.com"
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Phone Number *</label>
                  <div className="relative">
                    <span className="absolute left-4 top-3.5 text-slate-500 font-medium">+91</span>
                    <input 
                      {...register("phone")}
                      className="w-full pl-12 pr-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-gurukul-blue focus:border-gurukul-blue outline-none transition-all"
                      placeholder="10-digit mobile number"
                      maxLength={10}
                    />
                  </div>
                  {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">City of Residence *</label>
                  <input 
                    {...register("city")}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-gurukul-blue focus:border-gurukul-blue outline-none transition-all"
                    placeholder="e.g. Prayagraj"
                  />
                  {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city.message}</p>}
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Any Message or Questions? (Optional)</label>
                <textarea 
                  {...register("message")}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-gurukul-blue focus:border-gurukul-blue outline-none transition-all resize-none"
                  placeholder="Tell us anything else we should know..."
                />
              </div>
            </div>

            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-2 bg-yellow-500 text-gurukul-dark py-4 rounded-xl font-bold text-lg hover:bg-yellow-400 active:scale-95 transition-all shadow-lg shadow-yellow-500/20 disabled:opacity-70 disabled:cursor-not-allowed mt-8"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-6 h-6 animate-spin" />
                  Submitting Application...
                </>
              ) : (
                "Submit Application"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}