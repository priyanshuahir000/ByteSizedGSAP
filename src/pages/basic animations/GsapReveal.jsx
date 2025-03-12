import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import { useRef } from "react";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const GsapReveal = () => {
  const sectionsRef = useRef(null);

  useGSAP(() => {
    // Select all sections to animate
    const sections = gsap.utils.toArray(".reveal-section");

    // Create animation for each section
    sections.forEach((section, i) => {
      // Create effects based on data attributes
      const effect = section.getAttribute("data-effect") || "fade";
      const direction = section.getAttribute("data-direction") || "bottom";
      const images = section.querySelectorAll(".reveal-image");
      const texts = section.querySelectorAll(".reveal-text");
      const title = section.querySelector(".section-title");

      // Create a timeline for this section
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none",
        },
      });

      // Add title animation
      if (title) {
        tl.from(title, {
          opacity: 0,
          y: 50,
          duration: 0.7,
          ease: "power2.out",
        });
      }

      // Add animations based on effect type
      switch (effect) {
        case "fade":
          tl.from(
            texts,
            {
              opacity: 0,
              y: 30,
              stagger: 0.2,
              duration: 0.8,
            },
            "-=0.3"
          );

          tl.from(
            images,
            {
              opacity: 0,
              y: 50,
              stagger: 0.2,
              duration: 0.8,
            },
            "-=0.5"
          );
          break;

        case "slide":
          const xValue =
            direction === "left" ? -100 : direction === "right" ? 100 : 0;
          const yValue =
            direction === "top" ? -100 : direction === "bottom" ? 100 : 0;

          tl.from(
            texts,
            {
              opacity: 0,
              x: xValue / 2,
              y: yValue / 2,
              stagger: 0.2,
              duration: 0.8,
            },
            "-=0.3"
          );

          tl.from(
            images,
            {
              opacity: 0,
              x: xValue,
              y: yValue,
              stagger: 0.2,
              duration: 1,
              ease: "power2.out",
            },
            "-=0.5"
          );
          break;

        case "scale":
          tl.from(
            texts,
            {
              opacity: 0,
              scale: 0.8,
              stagger: 0.2,
              duration: 0.8,
            },
            "-=0.3"
          );

          tl.from(
            images,
            {
              opacity: 0,
              scale: 0.5,
              stagger: 0.2,
              duration: 1,
              ease: "power3.out",
            },
            "-=0.5"
          );
          break;
      }

      // Add a special effect for overlays
      if (section.querySelector(".reveal-overlay")) {
        tl.from(
          section.querySelector(".reveal-overlay"),
          {
            scaleX: 1,
            transformOrigin: direction === "left" ? "left" : "right",
            duration: 0.8,
          },
          0
        ).to(
          section.querySelector(".reveal-overlay"),
          {
            scaleX: 0,
            transformOrigin: direction === "left" ? "right" : "left",
            duration: 0.8,
          },
          0.2
        );
      }
    });

    // Add animation for the intro section
    gsap.from(".intro-title", {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    });

    gsap.from(".intro-text", {
      y: 30,
      opacity: 0,
      duration: 0.8,
      delay: 0.3,
      ease: "power2.out",
    });
  }, []);

  return (
    <main className="p-0 overflow-hidden">
      <div className="p-10">
        <div className="flex items-center gap-3 mb-6">
          <Link to="/home" className="header-link">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back
          </Link>
        </div>

        <h1 className="intro-title">GSAP Reveal Animations</h1>

        <p className="mt-5 text-gray-400 intro-text">
          Reveal animations are a popular technique for bringing content to life
          as users scroll down a page. GSAP combined with ScrollTrigger makes
          implementing these effects simple and performant.
        </p>

        <p className="mt-5 text-gray-400 intro-text">
          Scroll down to experience different types of reveal animations.
        </p>
      </div>

      <div ref={sectionsRef} className="mt-10">
        {/* Fade-in Section */}
        <section
          className="reveal-section min-h-[500px] p-10 md:p-20 bg-zinc-900/30 border-y border-green-500/20"
          data-effect="fade"
        >
          <h2 className="section-title text-3xl font-bold text-green-400 mb-8">
            Fade In Animation
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="reveal-image aspect-video bg-green-900/30 rounded-lg overflow-hidden flex items-center justify-center border border-green-500/20">
              <div className="w-16 h-16 border-2 border-green-500 rounded-full flex items-center justify-center">
                <div className="w-8 h-8 bg-green-500 rounded-full"></div>
              </div>
            </div>

            <div>
              <p className="reveal-text text-white/80 mb-4">
                The fade-in effect is one of the most common and subtle reveal
                animations. Elements gradually increase in opacity as they enter
                the viewport.
              </p>

              <p className="reveal-text text-white/80 mb-4">
                This animation works well for most types of content and provides
                a clean, professional look without being distracting.
              </p>

              <pre className="reveal-text bg-zinc-900/70 p-4 rounded-lg text-green-400 overflow-x-auto mt-6">
                {`gsap.from(element, {
  opacity: 0,
  y: 30,
  duration: 0.8,
  scrollTrigger: {
    trigger: element,
    start: "top 80%"
  }
});`}
              </pre>
            </div>
          </div>
        </section>

        {/* Slide-in Section */}
        <section
          className="reveal-section min-h-[500px] p-10 md:p-20 bg-black border-b border-green-500/20"
          data-effect="slide"
          data-direction="right"
        >
          <h2 className="section-title text-3xl font-bold text-green-400 mb-8">
            Slide In Animation
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <p className="reveal-text text-white/80 mb-4">
                Slide animations add movement to your reveals, with elements
                sliding in from different directions as they enter the viewport.
              </p>

              <p className="reveal-text text-white/80 mb-4">
                This effect works well for creating a sense of flow and guiding
                the user's attention across the page. You can vary the direction
                based on the content's layout.
              </p>

              <pre className="reveal-text bg-zinc-900/70 p-4 rounded-lg text-green-400 overflow-x-auto mt-6">
                {`gsap.from(element, {
  opacity: 0,
  x: 100, // or -100 for right to left
  duration: 0.8,
  scrollTrigger: {
    trigger: element,
    start: "top 80%"
  }
});`}
              </pre>
            </div>

            <div className="relative">
              <div className="reveal-image aspect-video bg-green-900/30 rounded-lg overflow-hidden flex items-center justify-center border border-green-500/20">
                <div className="grid grid-cols-3 gap-4">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
                    <div
                      key={i}
                      className="w-12 h-12 border border-green-500/50 rounded-md"
                    ></div>
                  ))}
                </div>
              </div>
              <div className="reveal-overlay absolute inset-0 bg-black rounded-lg"></div>
            </div>
          </div>
        </section>

        {/* Scale Section */}
        <section
          className="reveal-section min-h-[500px] p-10 md:p-20 bg-zinc-900/30 border-b border-green-500/20"
          data-effect="scale"
        >
          <h2 className="section-title text-3xl font-bold text-green-400 mb-8">
            Scale Animation
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="order-2 md:order-1">
              <div className="reveal-image aspect-video bg-green-900/30 rounded-lg overflow-hidden flex items-center justify-center border border-green-500/20">
                <div className="scale-animation w-32 h-32 bg-green-500/20 rounded-full flex items-center justify-center">
                  <div className="w-16 h-16 bg-green-500/30 rounded-full flex items-center justify-center">
                    <div className="w-8 h-8 bg-green-500 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <p className="reveal-text text-white/80 mb-4">
                Scale animations create a growing or shrinking effect as
                elements enter the viewport. This adds depth to your page and
                can help emphasize important elements.
              </p>

              <p className="reveal-text text-white/80 mb-4">
                This effect works particularly well for icons, images, and
                call-to-action elements that you want to highlight.
              </p>

              <pre className="reveal-text bg-zinc-900/70 p-4 rounded-lg text-green-400 overflow-x-auto mt-6">
                {`gsap.from(element, {
  opacity: 0,
  scale: 0.5,
  duration: 0.8,
  ease: "power3.out",
  scrollTrigger: {
    trigger: element,
    start: "top 80%"
  }
});`}
              </pre>
            </div>
          </div>
        </section>
      </div>

      <div className="p-10 md:p-20 bg-black">
        <h2 className="text-2xl font-bold text-green-400 mb-6">
          Implementation Tips
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-zinc-900/50 p-6 rounded-lg border border-green-500/20">
            <h3 className="text-xl font-bold text-white mb-3">
              Performance Considerations
            </h3>
            <ul className="list-disc pl-5 text-white/70 space-y-2">
              <li>
                Use <code>will-change</code> for better performance
              </li>
              <li>Batch animations with timelines to reduce reflows</li>
              <li>
                Consider using <code>batch: true</code> in ScrollTrigger
              </li>
              <li>
                Set <code>invalidateOnRefresh: true</code> for responsive
                layouts
              </li>
            </ul>
          </div>

          <div className="bg-zinc-900/50 p-6 rounded-lg border border-green-500/20">
            <h3 className="text-xl font-bold text-white mb-3">Design Tips</h3>
            <ul className="list-disc pl-5 text-white/70 space-y-2">
              <li>Keep animations subtle and purposeful</li>
              <li>Maintain consistent direction and style</li>
              <li>
                Consider using different effects for different content types
              </li>
              <li>Add delays between elements for a cascading effect</li>
            </ul>
          </div>
        </div>
      </div>

      <style jsx="true">{`
        .scale-animation {
          animation: pulse 4s infinite ease-in-out;
        }

        @keyframes pulse {
          0% {
            transform: scale(0.95);
          }
          50% {
            transform: scale(1.05);
          }
          100% {
            transform: scale(0.95);
          }
        }
      `}</style>
    </main>
  );
};

export default GsapReveal;
