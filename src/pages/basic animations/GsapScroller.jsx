import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import { useRef } from "react";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const GsapScroller = () => {
  const horizontalRef = useRef(null);
  const sectionsRef = useRef(null);

  useGSAP(() => {
    // Create the horizontal scroll effect
    const sections = gsap.utils.toArray(".horizontal-section");

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: horizontalRef.current,
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        end: () => "+=" + horizontalRef.current.offsetWidth,
      },
    });

    // Add animations for each section
    sections.forEach((section, i) => {
      // Target the elements inside each section
      const title = section.querySelector("h2");
      const content = section.querySelector(".section-content");

      // Create a timeline for each section
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          containerAnimation: ScrollTrigger.getById("horizontalScroll"),
          start: "left center",
          end: "right center",
          toggleActions: "play reverse play reverse",
        },
      });

      tl.from(title, {
        opacity: 0,
        y: 30,
        duration: 0.5,
      }).from(
        content,
        {
          opacity: 0,
          y: 30,
          duration: 0.5,
        },
        "-=0.2"
      );
    });
  }, []);

  return (
    <main className="p-0 overflow-hidden">
      <div className="p-10">
        <div className="flex items-center gap-3 mb-6">
          <Link to="/" className="header-link">
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

        <h1>GSAP Horizontal Scroller</h1>

        <p className="mt-5 text-gray-400">
          GSAP's ScrollTrigger plugin can be used to create smooth horizontal
          scrolling experiences. This is particularly useful for storytelling,
          product showcases, and creative portfolios.
        </p>

        <p className="mt-5 text-gray-400">
          The implementation below demonstrates a horizontal scroll experience
          where the content moves horizontally as the user scrolls vertically.
          This creates an engaging and unique browsing experience.
        </p>

        <p className="mt-5 text-gray-400">
          Scroll down to see the horizontal scrolling in action.
        </p>
      </div>

      <div className="w-full mt-10">
        <div
          ref={horizontalRef}
          className="horizontal-container w-full h-screen overflow-hidden"
        >
          <div
            ref={sectionsRef}
            className="horizontal-sections flex flex-nowrap"
          >
            {[
              {
                bg: "bg-green-900/30",
                title: "First Section",
                content:
                  "Start your horizontal journey here. Scroll down to move horizontally through the sections.",
              },
              {
                bg: "bg-emerald-900/30",
                title: "Animation Control",
                content:
                  "GSAP gives precise control over timing, easing, and animation flow for smooth transitions.",
              },
              {
                bg: "bg-teal-900/30",
                title: "Responsive Design",
                content:
                  "Create responsive animations that work across all devices and screen sizes.",
              },
              {
                bg: "bg-cyan-900/30",
                title: "Creative Possibilities",
                content:
                  "Horizontal scrolling opens up new creative possibilities for storytelling and presentation.",
              },
              {
                bg: "bg-green-900/30",
                title: "Final Section",
                content:
                  "The horizontal journey ends here. Scroll back up to return to the main content.",
              },
            ].map((section, index) => (
              <div
                key={index}
                className={`horizontal-section ${section.bg} min-w-full h-screen flex items-center justify-center border-l border-green-500/20 p-10`}
              >
                <div className="section-content bg-black/50 p-10 rounded-xl border border-green-500/20 max-w-lg">
                  <h2 className="text-3xl font-bold text-green-400 mb-4">
                    {section.title}
                  </h2>
                  <p className="text-white/80">{section.content}</p>
                  <div className="mt-5">
                    <span className="text-white/50">
                      Section {index + 1} of 5
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="p-10">
        <h2 className="text-2xl font-bold text-white mt-8">How It Works</h2>

        <p className="mt-5 text-gray-400">
          The horizontal scroll effect is created using GSAP's ScrollTrigger
          plugin. It works by:
        </p>

        <ul className="mt-4 list-disc pl-5 text-gray-400 space-y-2">
          <li>Pinning a container element at a specific scroll position</li>
          <li>
            Animating its contents horizontally based on vertical scroll
            progress
          </li>
          <li>
            Using the <code>scrub</code> property to create a direct
            relationship between scroll position and animation progress
          </li>
          <li>
            Using the <code>snap</code> property for a nice sectioned experience
          </li>
        </ul>
      </div>
    </main>
  );
};

export default GsapScroller;
