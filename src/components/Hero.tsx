import Button from "./ui/Button";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center px-4 sm:px-6 lg:px-8 pt-24 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-4 text-center lg:text-left lg:-mt-20">
            <p className="text-foreground/60 text-sm sm:text-base uppercase tracking-wider">
              Product Design and Development Agency
            </p>

            <h1 className="text-[clamp(1.75rem,5vw,3.75rem)] font-bold leading-[0.95] md:leading-[0.98] lg:leading-[1]">
              <span className="text-foreground whitespace-nowrap">Empowering </span>
              <span className="text-primary whitespace-nowrap">startups</span>
              <br />
              <span className="text-foreground whitespace-nowrap">to launch, </span>
              <span className="text-primary whitespace-nowrap">scale</span>
              <span className="text-foreground whitespace-nowrap">,</span>
              <br />
              <span className="text-foreground whitespace-nowrap">and succeed </span>
              <span className="text-primary whitespace-nowrap">faster</span>
            </h1>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
              <Button variant="default" className="justify-center">
                let's talk
              </Button>
              <Button variant="primary" className="justify-center">
                view case studies
              </Button>
            </div>
          </div>

          {/* Right - Infinite Scrolling Phones */}
          <div className="relative h-[300px] lg:h-[700px] w-full">
            {/* Desktop Layout - Vertical Scrolling */}
            <div className="hidden lg:flex absolute inset-0 gap-8 justify-center">
              {/* Column 1 - Scrolling Up */}
              <div className="relative w-48 h-full overflow-hidden">
                <div className="animate-scroll-up flex flex-col gap-8">
                  {[...Array(8)].map((_, i) => (
                    <div key={i} className="flex-shrink-0">
                      <Image
                        src="/images/phone.svg"
                        alt="Mobile Device"
                        width={180}
                        height={270}
                        className="w-full h-auto opacity-60 hover:opacity-100 transition-opacity"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Column 2 - Scrolling Down */}
              <div className="relative w-48 h-full overflow-hidden">
                <div className="animate-scroll-down flex flex-col gap-8">
                  {[...Array(8)].map((_, i) => (
                    <div key={i} className="flex-shrink-0">
                      <Image
                        src="/images/phone.svg"
                        alt="Mobile Device"
                        width={180}
                        height={270}
                        className="w-full h-auto opacity-60 hover:opacity-100 transition-opacity"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile Layout - Horizontal Scrolling */}
            <div className="lg:hidden relative w-full h-full overflow-hidden">
              <div className="animate-scroll-horizontal flex gap-6 items-center h-full">
                {[...Array(10)].map((_, i) => (
                  <div key={i} className="flex-shrink-0">
                    <Image
                      src="/images/phone.svg"
                      alt="Mobile Device"
                      width={120}
                      height={180}
                      className="h-[250px] w-auto opacity-60"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Gradient Overlays */}
            {/* Desktop gradients - top/bottom */}
            <div className="hidden lg:block absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background to-transparent pointer-events-none z-10"></div>
            <div className="hidden lg:block absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none z-10"></div>
            
            {/* Mobile gradients - left/right */}
            <div className="lg:hidden absolute top-0 left-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent pointer-events-none z-10"></div>
            <div className="lg:hidden absolute top-0 right-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent pointer-events-none z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
