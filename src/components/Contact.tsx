"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Button from "./ui/Button";
import Footer from "./Footer";

interface ContactPerson {
  id: number;
  name: string;
  role: string;
  email: string;
  image?: string;
}

const contactPeople: ContactPerson[] = [
  {
    id: 1,
    name: "KAMRUL HASAN",
    role: "CEO & FOUNDER",
    email: "HELLO@PHENOMENON...",
  },
  {
    id: 2,
    name: "TANJILA BINTA",
    role: "Co-founder & CMO",
    email: "HELLO@PHENOMENON...",
  },
  {
    id: 3,
    name: "SHUSHI BEGUM",
    role: "Account Executive",
    email: "HELLO@PHENOMENON...",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    budget: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const budgetOptions = [
    "Up to ৳10k",
    "৳10k-৳20k",
    "৳20k-৳30k",
    "৳30k-৳50k",
    "< ৳100K",
  ];

  return (
    <section className="relative bg-background py-16 sm:py-20 lg:py-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-0">
          {/* Left - Form (70%) */}
          <div className="lg:w-[70%] lg:pr-12 space-y-8">
            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary leading-tight"
            >
              Have a project in mind?
            </motion.h1>

            {/* Form */}
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              {/* Name and Email Row */}
              <div className="grid sm:grid-cols-2 gap-6">
                {/* Your Name */}
                <div className="space-y-2">
                  <label className="text-foreground text-base font-light">
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="ENTER YOUR NAME *"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                    className="w-full bg-transparent border-b border-foreground/30 focus:border-primary outline-none py-3 text-foreground placeholder:text-foreground/40 placeholder:text-sm transition-colors"
                  />
                </div>

                {/* Your Email */}
                <div className="space-y-2">
                  <label className="text-foreground text-base font-light">
                    Your Email
                  </label>
                  <input
                    type="email"
                    placeholder="ENTER YOUR EMAIL *"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                    className="w-full bg-transparent border-b border-foreground/30 focus:border-primary outline-none py-3 text-foreground placeholder:text-foreground/40 placeholder:text-sm transition-colors"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label className="text-foreground text-base font-light">
                  Message
                </label>
                <div className="relative">
                  <textarea
                    placeholder="TELL US ABOUT YOUR PROJECT"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    rows={3}
                    className="w-full bg-transparent border-b border-foreground/30 focus:border-primary outline-none py-3 text-foreground placeholder:text-foreground/40 placeholder:text-sm transition-colors resize-none"
                  />
                  <button
                    type="button"
                    className="absolute right-0 bottom-3 text-foreground/60 hover:text-primary transition-colors flex items-center gap-2 text-sm"
                  >
                    attach
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Budget */}
              <div className="space-y-4">
                <label className="text-foreground text-base font-light">
                  Your budget for this project?
                </label>
                <div className="flex flex-wrap gap-3 mt-4">
                  {budgetOptions.map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() =>
                        setFormData({ ...formData, budget: option })
                      }
                      className={`px-5 py-3 rounded-md border text-md font-semibold transition-all ${
                        formData.budget === option
                          ? "bg-primary border-primary text-white"
                          : "bg-transparent border-foreground/30 text-foreground hover:border-primary"
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4 flex flex-col-2 items-center gap-4">
                <Button
                  type="submit"
                  variant="default"
                >
                  SUBMIT
                </Button>
                <p className="text-foreground text-sm">
                  BY CLICKING THIS BUTTON YOU ACCEPT{" "}
                  <span className="text-primary hover:underline cursor-pointer">TERMS OF SERVICE</span> AND{" "}
                  <span className="text-primary hover:underline cursor-pointer">PRIVACY POLICY</span>
                </p>
              </div>
            </motion.form>
          </div>

          {/* Vertical Divider */}
          <div className="hidden lg:block w-px bg-foreground/20 mx-8"></div>

          {/* Right - Contact Cards (30%) */}
          <div className="lg:w-[30%] space-y-6">
            {/* Section Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-primary uppercase leading-tight">
                Have a project to
                <br />
                discuss?
              </h2>
            </motion.div>

            {/* Contact Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6"
            >
              {contactPeople.map((person, index) => (
                <motion.div
                  key={person.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-lg bg-foreground/5 hover:bg-foreground/10 transition-colors"
                >
                  {/* Avatar */}
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg bg-foreground/20 flex-shrink-0"></div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-foreground font-bold text-base sm:text-lg tracking-wide">
                      {person.name}
                    </h3>
                    <p className="text-foreground/70 text-sm font-light">
                      {person.role}
                    </p>
                    <a
                      href={`mailto:${person.email}`}
                      className="text-foreground/60 text-xs flex items-center gap-1 mt-1 hover:text-primary transition-colors"
                    >
                      <svg
                        className="w-3 h-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      {person.email}
                    </a>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
