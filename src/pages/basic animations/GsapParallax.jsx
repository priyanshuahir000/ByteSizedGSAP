import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import { useRef } from "react";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const GsapParallax = () => {
  const containerRef = useRef(null);
  const parallaxRef = useRef(null);

  useGSAP(() => {
    // Create the parallax effect
    const parallaxLayers = gsap.utils.toArray(".parallax-layer");

    parallaxLayers.forEach((layer, i) => {
      const depth = layer.dataset.depth;
      const movement = -(layer.offsetHeight * depth);

      gsap.to(layer, {
        y: movement,
        ease: "none",
        scrollTrigger: {
          trigger: parallaxRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    });

    // Create entry animations
    gsap.from(".parallax-title", {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });

    // Create content section animations
    gsap.from(".content-section", {
      opacity: 0,
      y: 50,
      stagger: 0.2,
      duration: 0.8,
      scrollTrigger: {
        trigger: ".content-container",
        start: "top 80%",
      },
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

        <h1>GSAP Parallax Effects</h1>

        <p className="mt-5 text-gray-400">
          Parallax scrolling is a web design technique where background images
          move slower than foreground images, creating an illusion of depth.
          GSAP's ScrollTrigger makes implementing parallax effects simple and
          performant.
        </p>

        <p className="mt-5 text-gray-400">
          Scroll down to experience the parallax effect.
        </p>
      </div>

      {/* Parallax Hero Section */}
      <div
        ref={parallaxRef}
        className="parallax-container relative h-[70vh] overflow-hidden"
      >
        <div
          className="parallax-layer absolute inset-0 w-full h-[130%] bg-green-900/30"
          data-depth="0.1"
        ></div>
        <div
          className="parallax-layer absolute inset-0 w-full h-[150%]"
          data-depth="0.2"
        >
          <div className="absolute top-[20%] left-[10%] w-20 h-20 bg-green-500/10 rounded-full blur-xl"></div>
          <div className="absolute top-[60%] right-[20%] w-32 h-32 bg-green-500/20 rounded-full blur-xl"></div>
          <div className="absolute bottom-[10%] left-[30%] w-28 h-28 bg-emerald-500/20 rounded-full blur-xl"></div>
        </div>
        <div
          className="parallax-layer absolute inset-0 w-full h-[200%] flex items-center justify-center"
          data-depth="0.3"
        >
          <div className="grid grid-cols-6 gap-6 opacity-20">
            {Array(24)
              .fill()
              .map((_, i) => (
                <div
                  key={i}
                  className="w-10 h-10 border border-green-500/30 rounded-full"
                ></div>
              ))}
          </div>
        </div>
        <div
          className="parallax-layer absolute inset-0 w-full h-[120%] flex items-center justify-center"
          data-depth="0"
        >
          <div className="parallax-content text-center px-4">
            <h2 className="parallax-title text-4xl md:text-6xl font-bold text-white mb-6">
              Parallax <span className="text-green-400">Scrolling</span> Effect
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Scroll down to see how different layers move at different speeds
            </p>
          </div>
        </div>
        <div
          className="parallax-layer absolute inset-0 w-full h-[250%]"
          data-depth="0.5"
        >
          <div className="absolute top-[30%] left-[50%] w-8 h-8 border-2 border-green-500/40 rounded-full"></div>
          <div className="absolute top-[70%] left-[20%] w-6 h-6 border-2 border-green-500/40 rounded-full"></div>
          <div className="absolute top-[40%] left-[80%] w-4 h-4 border-2 border-green-500/40 rounded-full"></div>
          <div className="absolute top-[20%] left-[30%] w-10 h-10 border-2 border-green-500/40 rounded-full"></div>
        </div>
      </div>

      {/* Content Section */}
      <div className="content-container bg-black p-10 md:p-20">
        <div className="content-section max-w-3xl mx-auto mb-20">
          <h3 className="text-2xl font-bold text-green-400 mb-4">
            How Parallax Works
          </h3>
          <p className="text-white/70 mb-4">
            Parallax scrolling creates an illusion of depth by moving background
            elements slower than foreground elements. This mimics how objects at
            different distances appear to move at different speeds when you're
            in motion.
          </p>
          <p className="text-white/70">
            With GSAP's ScrollTrigger, we can precisely control how each layer
            responds to scrolling, creating a smooth and visually engaging
            experience.
          </p>
        </div>

        <div className="content-section max-w-3xl mx-auto mb-20">
          <h3 className="text-2xl font-bold text-green-400 mb-4">
            Implementation
          </h3>
          <pre className="bg-zinc-900/70 p-4 rounded-lg text-green-400 overflow-x-auto">
            {`// Create the parallax effect
const parallaxLayers = gsap.utils.toArray('.parallax-layer');

parallaxLayers.forEach((layer) => {
  const depth = layer.dataset.depth;
  const movement = -(layer.offsetHeight * depth);
  
  gsap.to(layer, {
    y: movement,
    ease: "none",
    scrollTrigger: {
      trigger: parallaxContainer,
      start: "top top",
      end: "bottom top",
      scrub: true
    }
  });
});`}
          </pre>
        </div>

        <div className="content-section max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-green-400 mb-4">
            Benefits of Parallax
          </h3>
          <ul className="list-disc pl-5 text-white/70 space-y-3">
            <li>Creates visual interest and depth</li>
            <li>Enhances storytelling and user engagement</li>
            <li>Provides subtle visual cues about page structure</li>
            <li>Makes scrolling more interactive and enjoyable</li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default GsapParallax;
