"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import Button from "@/components/ui/Button";

const servicesData = {
  Design: {
    items: [
      "Web App Design",
      "Mobile App Design",
      "Website Design",
      "Website Redesign",
      "Brand Identity",
      "Graphic Design"
    ],
    image: "/placeholder-design.jpg"
  },
  Development: {
    items: [
      "Web App Development",
      "Mobile App Development",
      "Website Development",
      "Blockchain Development",
      "Backend Development",
      "CMS Development"
    ],
    image: "/placeholder-development.jpg"
  },
  "Video & Motion": {
    items: [
      "Motion Graphics",
      "Promotional Ads",
      "Logo Animation",
      "Post-Production",
      "Showcase Videos",
      "Social Media"
    ],
    image: "/placeholder-video.jpg"
  },
  Marketing: {
    items: [
      "Social Management",
      "Paid Advertising",
      "SEO & Keyword",
      "Copywriting",
      "Funnel Marketing",
      "Brand Awareness"
    ],
    image: "/placeholder-marketing.jpg"
  },
  "AI & Automation": {
    items: [
      "AI Chatbot",
      "Workflow Automation",
      "AI Integrations",
      "Data Analytics"
    ],
    image: "/placeholder-ai.jpg"
  },
  Strategy: {
    items: [
      "Brand Strategy",
      "Product Strategy",
      "UI/UX Audits",
      "Tech Stack",
      "Growth Strategy",
      "Business Automation"
    ],
    image: "/placeholder-strategy.jpg"
  }
};

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("Design");

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out rounded-b-3xl overflow-hidden ${
        activeMenu ? 'bg-foreground' : 'bg-background'
      }`}
      style={{
        height: activeMenu ? '550px' : '68px'
      }}
      onMouseLeave={() => setActiveMenu(null)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link 
              href="/" 
              className={`text-3xl font-normal flex items-center gap-2 transition-colors duration-300 ${
                activeMenu ? 'text-background' : 'text-foreground'
              }`}
            >
              <Image
                src="/logo.svg"
                alt="Softune Logo"
                width={32}
                height={32}
                className="inline-block"
              />
              Softune Std.
            </Link>
          </div>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex absolute left-1/2 -translate-x-1/2">
            <div className="flex items-center space-x-8">
              <div className="relative">
                <button
                  onMouseEnter={() => setActiveMenu('services')}
                  className={`px-3 py-2 text-base font-medium uppercase tracking-wide flex items-center gap-1 transition-colors duration-300 ${
                    activeMenu ? 'text-background hover:text-primary' : 'text-foreground hover:text-primary'
                  }`}
                >
                  SERVICES
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>
              
              <Link
                href="/work"
                className={`px-3 py-2 text-base font-medium uppercase tracking-wide transition-colors duration-300 ${
                  activeMenu ? 'text-background hover:text-primary' : 'text-foreground hover:text-primary'
                }`}
              >
                WORK
              </Link>
              
              <div className="relative">
                <button
                  onMouseEnter={() => setActiveMenu('company')}
                  className={`px-3 py-2 text-base font-medium uppercase tracking-wide flex items-center gap-1 transition-colors duration-300 ${
                    activeMenu ? 'text-background hover:text-primary' : 'text-foreground hover:text-primary'
                  }`}
                >
                  COMPANY
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>
              
              <Link
                href="/contact"
                className={`px-3 py-2 text-base font-medium uppercase tracking-wide transition-colors duration-300 ${
                  activeMenu ? 'text-background hover:text-primary' : 'text-foreground hover:text-primary'
                }`}
              >
                CONTACT
              </Link>
            </div>
          </div>

          {/* CTA Button - Right side */}
          <div className="hidden md:block">
            <Button variant="default">let's talk</Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md transition-colors ${
                activeMenu ? 'text-background' : 'text-foreground'
              } hover:bg-black/[.04] dark:hover:bg-white/[.04]`}
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal Border */}
      {activeMenu && (
        <div className="border-b border-secondary/10" />
      )}

      {/* Expanded Menu Content Area */}
      <div 
        className={`hidden md:block transition-opacity duration-500 ${
          activeMenu ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-0">
          {/* Services Menu Content */}
          {activeMenu === 'services' && (
            <div className="flex h-[410px]">
              {/* Left Sidebar - Categories */}
              <div className="w-64 border-r border-secondary/10 h-full flex flex-col">
                <div className="flex-1 py-6 pr-6">
                  {Object.keys(servicesData).map((category, index) => (
                    <div key={category}>
                      <button
                        onMouseEnter={() => setActiveCategory(category)}
                        className={`w-full text-left py-3 px-4 flex items-center justify-between transition-colors duration-200 ${
                          activeCategory === category
                            ? 'text-background font-semibold'
                            : 'text-secondary/50 hover:text-background'
                        }`}
                      >
                        <span className="text-base uppercase tracking-wide">
                          {category}
                        </span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                      {index === 2 && (
                        <div className="border-b border-secondary/10 my-3 ml-4" />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Middle - Sub Services */}
              <div className="flex-1 py-6 px-8 h-full">
                <div className="flex flex-col gap-1">
                  {servicesData[activeCategory as keyof typeof servicesData].items.map((item, index) => (
                    <Link
                      key={item}
                      href={`/services/${activeCategory.toLowerCase().replace(/\s+&\s+/g, '-').replace(/\s+/g, '-')}/${item.toLowerCase().replace(/\s+/g, '-')}`}
                      className="flex items-center gap-4 py-1.5 group"
                    >
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-foreground font-bold text-sm">
                        {index + 1}
                      </span>
                      <span className="text-background text-2xl tracking-tighter font-medium group-hover:text-primary transition-colors flex items-center gap-2">
                        {item}
                        <ChevronRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Right - Image */}
              <div className="w-116 py-6 pl-6 h-full">
                <div className="w-full h-full bg-secondary/20 rounded-2xl overflow-hidden flex items-center justify-center">
                  {/* Placeholder for now */}
                  <div className="text-center">
                    <p className="text-secondary text-sm">
                      Image for {activeCategory}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* Company Menu Content */}
          {activeMenu === 'company' && (
            <div className="h-[410px] flex items-center justify-center">
              <p className="text-background text-lg">Company menu content coming soon</p>
            </div>
          )}
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-black/[.08] dark:border-white/[.145]">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-black">
            <Link
              href="/services"
              className="block text-foreground hover:bg-black/[.04] dark:hover:bg-white/[.04] px-3 py-2 rounded-md text-base font-medium transition-colors uppercase tracking-wide flex items-center gap-1"
            >
              SERVICES
              <ChevronDown className="w-4 h-4" />
            </Link>
            <Link
              href="/work"
              className="block text-foreground hover:bg-black/[.04] dark:hover:bg-white/[.04] px-3 py-2 rounded-md text-base font-medium transition-colors uppercase tracking-wide"
            >
              WORK
            </Link>
            <Link
              href="/company"
              className="block text-foreground hover:bg-black/[.04] dark:hover:bg-white/[.04] px-3 py-2 rounded-md text-base font-medium transition-colors uppercase tracking-wide flex items-center gap-1"
            >
              COMPANY
              <ChevronDown className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="block text-foreground hover:bg-black/[.04] dark:hover:bg-white/[.04] px-3 py-2 rounded-md text-base font-medium transition-colors uppercase tracking-wide"
            >
              CONTACT
            </Link>
            <div className="mt-4">
              <Button variant="default" className="w-full">Get Started</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
