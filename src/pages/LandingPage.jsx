import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SplitType from "split-type"; // We'll need to install this package
import CodeBlock from "../components/CodeBlock";

const LandingPage = () => {
  const headerRef = useRef(null);
  const heroRef = useRef(null);
  const featuresRef = useRef(null);
  const hero3DRef = useRef(null);
  const categoriesRef = useRef(null);
  const gettingStartedRef = useRef(null);
  const ctaRef = useRef(null);

  const categories = [
    {
      title: "Core Animations",
      description: "Learn the fundamental GSAP animation methods",
      examples: ["GSAP To", "GSAP From", "GSAP FromTo", "GSAP Timeline"],
      color: "bg-green-500",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-8 h-8"
        >
          <path
            fillRule="evenodd"
            d="M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      title: "Scroll Interactions",
      description: "Create engaging scroll-based animations",
      examples: [
        "GSAP ScrollTrigger",
        "GSAP Scroller",
        "GSAP Parallax",
        "GSAP Reveal",
      ],
      color: "bg-cyan-500",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-8 h-8"
        >
          <path
            fillRule="evenodd"
            d="M12 2.25a.75.75 0 0 1 .75.75v16.19l6.22-6.22a.75.75 0 1 1 1.06 1.06l-7.5 7.5a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 1 1 1.06-1.06l6.22 6.22V3a.75.75 0 0 1 .75-.75Z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      title: "Text Effects",
      description: "Bring your typography to life with animations",
      examples: ["GSAP Text", "GSAP SplitText"],
      color: "bg-purple-500",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-8 h-8"
        >
          <path
            fillRule="evenodd"
            d="M9 1.5H5.625c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0 0 16.5 9h-1.875a1.875 1.875 0 0 1-1.875-1.875V5.25A3.75 3.75 0 0 0 9 1.5Zm6.61 10.936a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 14.47a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      title: "SVG Animations",
      description: "Create dynamic SVG animations and transformations",
      examples: ["GSAP MorphSVG", "GSAP DrawSVG", "GSAP MotionPath"],
      color: "bg-amber-500",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-8 h-8"
        >
          <path
            fillRule="evenodd"
            d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 0 1 .75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 0 1 9.75 22.5a.75.75 0 0 1-.75-.75v-4.131A15.838 15.838 0 0 1 6.382 15H2.25a.75.75 0 0 1-.75-.75 6.75 6.75 0 0 1 7.815-6.666ZM15 6.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      title: "Advanced Techniques",
      description: "Explore complex animation techniques and effects",
      examples: ["GSAP Stagger", "GSAP Flip", "GSAP 3D Effects"],
      color: "bg-rose-500",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-8 h-8"
        >
          <path d="M11.47 1.72a.75.75 0 0 1 1.06 0l3 3a.75.75 0 0 1-1.06 1.06l-1.72-1.72V7.5h-1.5V4.06L9.53 5.78a.75.75 0 0 1-1.06-1.06l3-3ZM11.25 7.5V15a.75.75 0 0 0 1.5 0V7.5h3.75a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-9a3 3 0 0 1-3-3v-9a3 3 0 0 1 3-3h3.75Z" />
        </svg>
      ),
    },
    {
      title: "UI Components",
      description: "Animated UI components ready to use in your projects",
      examples: ["GSAP Form"],
      color: "bg-emerald-500",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-8 h-8"
        >
          <path d="M11.25 5.337c0-.355-.186-.676-.401-.959a1.647 1.647 0 0 1-.349-1.003c0-1.036 1.007-1.875 2.25-1.875S15 2.34 15 3.375c0 .369-.128.713-.349 1.003-.215.283-.401.604-.401.959 0 .332.278.598.61.578 1.91-.114 3.79-.342 5.632-.676a.75.75 0 0 1 .878.645 49.17 49.17 0 0 1 .376 5.452.657.657 0 0 1-.66.664c-.354 0-.675-.186-.958-.401a1.647 1.647 0 0 0-1.003-.349c-1.035 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401.31 0 .557.262.534.571a48.774 48.774 0 0 1-.595 4.845.75.75 0 0 1-.61.61c-1.82.317-3.673.533-5.555.642a.58.58 0 0 1-.611-.581c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.035-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959a.641.641 0 0 1-.658.643 49.118 49.118 0 0 1-4.708-.36.75.75 0 0 1-.645-.878c.293-1.614.504-3.257.629-4.924A.53.53 0 0 0 5.337 15c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.036 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.369 0 .713.128 1.003.349.283.215.604.401.959.401a.656.656 0 0 0 .659-.663 47.703 47.703 0 0 0-.31-4.82.75.75 0 0 1 .83-.832c1.343.155 2.703.254 4.077.294a.64.64 0 0 0 .657-.642Z" />
        </svg>
      ),
    },
  ];

  useGSAP(() => {
    gsap.from(headerRef.current, {
      y: -100,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });

    const heroTitleText = new SplitType(".hero-title", {
      types: "chars, words",
    });
    const heroSubtitleText = new SplitType(".hero-subtitle", {
      types: "lines",
    });

    const heroTl = gsap.timeline();
    heroTl
      .from(heroTitleText.chars, {
        opacity: 0,
        y: 100,
        rotationX: 90,
        stagger: 0.02,
        duration: 0.8,
        ease: "back.out(1.7)",
      })
      .to(
        ".hero-title",
        {
          textShadow: "0 0 20px rgba(74, 222, 128, 0.5)",
          duration: 1.2,
        },
        "-=0.5"
      )
      .from(
        heroSubtitleText.lines,
        {
          opacity: 0,
          y: 20,
          rotationX: 30,
          transformOrigin: "0% 50%",
          stagger: 0.1,
          duration: 0.8,
        },
        "-=0.8"
      )
      .from(
        ".hero-cta",
        {
          scale: 0,
          opacity: 0,
          rotation: -5,
          transformOrigin: "center",
          stagger: 0.1,
          duration: 0.6,
          ease: "elastic.out(1.2, 0.5)",
        },
        "-=0.4"
      )
      .from(
        ".hero-shape",
        {
          opacity: 0,
          scale: 0,
          rotation: -45,
          stagger: 0.1,
          duration: 0.8,
          ease: "elastic.out(1, 0.3)",
        },
        "-=0.6"
      );

    const cubes = gsap.utils.toArray(".hero-3d-cube");

    gsap.set(cubes, {
      rotationX: () => gsap.utils.random(-360, 360),
      rotationY: () => gsap.utils.random(-360, 360),
      rotationZ: () => gsap.utils.random(-360, 360),
    });

    cubes.forEach((cube) => {
      gsap.to(cube, {
        rotationX: "+=360",
        rotationY: "+=360",
        repeat: -1,
        duration: gsap.utils.random(10, 20),
        ease: "none",
      });

      gsap.to(cube, {
        y: "+=30",
        repeat: -1,
        yoyo: true,
        duration: gsap.utils.random(3, 6),
        ease: "sine.inOut",
      });
    });

    gsap.from(".feature-card", {
      y: 60,
      opacity: 0,
      rotationX: 15,
      transformOrigin: "bottom",
      stagger: 0.1,
      duration: 0.8,
      scrollTrigger: {
        trigger: featuresRef.current,
        start: "top 80%",
      },
    });

    document.querySelectorAll(".feature-card").forEach((card) => {
      card.addEventListener("mouseenter", () => {
        gsap.to(card, {
          scale: 1.03,
          rotationX: 5,
          rotationY: 5,
          boxShadow: "0 15px 30px rgba(74, 222, 128, 0.1)",
          duration: 0.3,
        });
      });

      card.addEventListener("mouseleave", () => {
        gsap.to(card, {
          scale: 1,
          rotationX: 0,
          rotationY: 0,
          boxShadow: "none",
          duration: 0.3,
        });
      });
    });

    const addFloatingCubes = (section, count = 3) => {
      for (let i = 0; i < count; i++) {
        const cube = document.createElement("div");
        const size = gsap.utils.random(20, 40);
        const colors = ["green", "blue", "purple", "amber", "cyan"];
        const color = colors[Math.floor(Math.random() * colors.length)];

        cube.className = `section-3d-cube absolute`;
        cube.style.cssText = `
          width: ${size}px;
          height: ${size}px;
          left: ${gsap.utils.random(10, 90)}%;
          top: ${gsap.utils.random(10, 90)}%;
          transform-style: preserve-3d;
          z-index: -1;
          border-radius: 8px;
          border: 2px solid rgba(var(--${color}-500-rgb), 0.3);
          background-color: rgba(var(--${color}-500-rgb), 0.05);
          backdrop-filter: blur(3px);
        `;

        section.appendChild(cube);

        gsap.set(cube, {
          rotationX: gsap.utils.random(-360, 360),
          rotationY: gsap.utils.random(-360, 360),
        });

        gsap.to(cube, {
          rotationX: "+=360",
          rotationY: "+=360",
          repeat: -1,
          duration: gsap.utils.random(15, 30),
          ease: "none",
        });

        gsap.to(cube, {
          y: "+=20",
          repeat: -1,
          yoyo: true,
          duration: gsap.utils.random(2, 4),
          ease: "sine.inOut",
          delay: gsap.utils.random(0, 2),
        });
      }
    };

    addFloatingCubes(featuresRef.current, 4);
    addFloatingCubes(categoriesRef.current, 4);
    addFloatingCubes(gettingStartedRef.current, 3);
    addFloatingCubes(ctaRef.current, 2);

    gsap.from(".category-section", {
      opacity: 0,
      y: 50,
      rotationX: 10,
      transformOrigin: "bottom",
      stagger: 0.2,
      duration: 0.8,
      scrollTrigger: {
        trigger: ".categories-container",
        start: "top 75%",
      },
    });

    document.querySelectorAll(".category-example-card").forEach((card) => {
      card.addEventListener("mouseenter", () => {
        gsap.to(card, {
          scale: 1.05,
          rotationY: 5,
          duration: 0.3,
        });
      });

      card.addEventListener("mouseleave", () => {
        gsap.to(card, {
          scale: 1,
          rotationY: 0,
          duration: 0.3,
        });
      });
    });

    gsap.from(".getting-started-card", {
      y: 40,
      opacity: 0,
      rotationX: 15,
      stagger: 0.15,
      duration: 0.8,
      transformOrigin: "center",
      scrollTrigger: {
        trigger: gettingStartedRef.current,
        start: "top 80%",
      },
    });

    gsap.from(ctaRef.current.querySelector("h2"), {
      y: 30,
      opacity: 0,
      duration: 0.8,
      scrollTrigger: {
        trigger: ctaRef.current,
        start: "top 80%",
      },
    });

    gsap.from(ctaRef.current.querySelector("p"), {
      y: 20,
      opacity: 0,
      duration: 0.8,
      delay: 0.1,
      scrollTrigger: {
        trigger: ctaRef.current,
        start: "top 80%",
      },
    });

    gsap.from(ctaRef.current.querySelector("a"), {
      scale: 0.8,
      opacity: 0,
      duration: 0.5,
      delay: 0.2,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: ctaRef.current,
        start: "top 80%",
      },
    });
  }, []);

  return (
    <div className="min-h-screen bg-zinc-950 flex flex-col">
      <header
        ref={headerRef}
        className="sticky top-0 z-50 bg-zinc-900/90 backdrop-blur-md border-b border-green-500/20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-md bg-green-500 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 text-black"
                >
                  <path
                    fillRule="evenodd"
                    d="M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <span className="text-white font-bold text-xl">
                ByteSizedGSAP
              </span>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <Link
                to="/examples"
                className="text-gray-300 hover:text-green-400"
              >
                Examples
              </Link>
              <a
                href="#features"
                className="text-gray-300 hover:text-green-400"
              >
                Features
              </a>
              <a
                href="#categories"
                className="text-gray-300 hover:text-green-400"
              >
                Categories
              </a>
              <a
                href="#getting-started"
                className="text-gray-300 hover:text-green-400"
              >
                Getting Started
              </a>
            </nav>
            <div>
              <Link
                to="/examples"
                className="inline-flex items-center px-4 py-2 border border-green-500 rounded-md text-sm font-medium text-green-400 hover:bg-green-500 hover:text-black transition-all"
              >
                Browse Examples
              </Link>
            </div>
          </div>
        </div>
      </header>

      <section
        ref={heroRef}
        className="relative overflow-hidden py-20 md:py-32 px-4"
      >
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="hero-shape absolute top-[10%] left-[10%] w-32 h-32 bg-green-500/10 rounded-full blur-xl"></div>
          <div className="hero-shape absolute top-[30%] right-[15%] w-64 h-64 bg-blue-500/10 rounded-full blur-xl"></div>
          <div className="hero-shape absolute bottom-[20%] left-[20%] w-48 h-48 bg-purple-500/10 rounded-full blur-xl"></div>
          <div className="hero-shape absolute top-[70%] right-[5%] w-24 h-24 bg-amber-500/10 rounded-full blur-lg"></div>
          <div className="hero-shape absolute top-[5%] right-[30%] w-16 h-16 bg-green-500/20 rounded-full blur-md"></div>
          <div className="hero-shape absolute bottom-[10%] right-[40%] w-20 h-20 bg-cyan-500/20 rounded-full blur-md"></div>
        </div>

        <div
          ref={hero3DRef}
          className="absolute top-0 left-0 w-full h-full -z-5 overflow-hidden perspective-1000"
          style={{ perspective: "1000px" }}
        >
          <div
            className="hero-3d-cube absolute top-[15%] left-[20%] w-16 h-16 md:w-24 md:h-24"
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="absolute inset-0 border-2 border-green-500/50 bg-green-500/10 backdrop-blur-sm rounded-lg"></div>
          </div>

          <div
            className="hero-3d-cube absolute top-[45%] right-[15%] w-12 h-12 md:w-20 md:h-20"
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="absolute inset-0 border-2 border-blue-500/50 bg-blue-500/10 backdrop-blur-sm rounded-lg"></div>
          </div>

          <div
            className="hero-3d-cube absolute bottom-[25%] left-[30%] w-14 h-14 md:w-16 md:h-16"
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="absolute inset-0 border-2 border-purple-500/50 bg-purple-500/10 backdrop-blur-sm rounded-lg"></div>
          </div>

          <div
            className="hero-3d-cube absolute top-[25%] right-[25%] w-10 h-10 md:w-14 md:h-14"
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="absolute inset-0 border-2 border-amber-500/50 bg-amber-500/10 backdrop-blur-sm rounded-lg"></div>
          </div>

          <div
            className="hero-3d-cube absolute bottom-[15%] right-[30%] w-12 h-12 md:w-16 md:h-16"
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="absolute inset-0 border-2 border-cyan-500/50 bg-cyan-500/10 backdrop-blur-sm rounded-lg"></div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h1 className="hero-title text-5xl md:text-7xl font-bold text-white mb-6">
            Byte-Sized
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-cyan-400 to-blue-500 ml-3">
              GSAP
            </span>{" "}
            Animations
          </h1>

          <p className="hero-subtitle text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10">
            Explore 16 interactive examples showcasing the power of GreenSock
            Animation Platform. From simple transitions to complex 3D
            animations, learn GSAP one byte at a time.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/examples"
              className="hero-cta px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-black font-bold rounded-lg hover:shadow-lg hover:shadow-green-500/20 transition-all transform-gpu"
            >
              Explore Examples
            </Link>
            <a
              href="#getting-started"
              className="hero-cta px-8 py-4 bg-zinc-800 text-white rounded-lg border border-green-500/30 hover:border-green-500/70 transition-all transform-gpu"
            >
              Getting Started
            </a>
          </div>
        </div>
      </section>

      <section
        id="features"
        ref={featuresRef}
        className="relative py-16 px-4 bg-black/40 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
            What You'll Learn
          </h2>
          <p className="text-gray-400 text-center max-w-3xl mx-auto mb-16">
            Explore GSAP's powerful animation capabilities through interactive
            examples, complete with source code and step-by-step explanations.
          </p>

          {/* Example Code Block */}
          <div className="mb-12 max-w-3xl mx-auto">
            <h3 className="text-xl font-bold text-white mb-3">
              Example GSAP Animation
            </h3>
            <CodeBlock
              code={`// Simple GSAP animation
import { gsap } from "gsap";

gsap.to(".box", {
  x: 100,
  rotation: 360,
  duration: 1,
  ease: "power2.out",
  stagger: 0.2
});`}
              language="javascript"
            />
            <p className="text-gray-400 mt-4">
              Every example includes fully documented code that you can copy and
              use in your own projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                    <path
                      fillRule="evenodd"
                      d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 0 1 0-1.113ZM17.25 12a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                ),
                title: "Core Animation Methods",
                description:
                  "Master basic to advanced animation techniques with GSAP's core animation methods: to(), from(), fromTo() and timeline().",
              },
              {
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm0 8.625a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25ZM15.375 12a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0ZM7.5 10.875a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25Z"
                      clipRule="evenodd"
                    />
                  </svg>
                ),
                title: "Scroll-Based Animations",
                description:
                  "Create engaging scroll experiences with ScrollTrigger, parallax effects, and reveal animations triggered by page scrolling.",
              },
              {
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1.5 5.625c0-1.036.84-1.875 1.875-1.875h17.25c1.035 0 1.875.84 1.875 1.875v12.75c0 1.035-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 0 1 1.5 18.375V5.625Zm1.5 0v1.5c0 .207.168.375.375.375h1.5a.375.375 0 0 0 .375-.375v-1.5a.375.375 0 0 0-.375-.375h-1.5A.375.375 0 0 0 3 5.625Zm16.125-.375a.375.375 0 0 0-.375.375v1.5c0 .207.168.375.375.375h1.5A.375.375 0 0 0 21 7.125v-1.5a.375.375 0 0 0-.375-.375h-1.5ZM21 9.375A.375.375 0 0 0 20.625 9h-1.5a.375.375 0 0 0-.375.375v1.5c0 .207.168.375.375.375h1.5a.375.375 0 0 0 .375-.375v-1.5Zm0 3.75a.375.375 0 0 0-.375-.375h-1.5a.375.375 0 0 0-.375.375v1.5c0 .207.168.375.375.375h1.5a.375.375 0 0 0 .375-.375v-1.5Zm0 3.75a.375.375 0 0 0-.375-.375h-1.5a.375.375 0 0 0-.375.375v1.5c0 .207.168.375.375.375h1.5a.375.375 0 0 0 .375-.375v-1.5ZM4.875 18.75a.375.375 0 0 0 .375-.375v-1.5a.375.375 0 0 0-.375-.375h-1.5a.375.375 0 0 0-.375.375v1.5c0 .207.168.375.375.375h1.5ZM3.375 15h1.5a.375.375 0 0 0 .375-.375v-1.5a.375.375 0 0 0-.375-.375h-1.5a.375.375 0 0 0-.375.375v1.5c0 .207.168.375.375.375Zm0-3.75h1.5a.375.375 0 0 0 .375-.375v-1.5A.375.375 0 0 0 4.875 9h-1.5A.375.375 0 0 0 3 9.375v1.5c0 .207.168.375.375.375Zm4.125 0a.75.75 0 0 0 0 1.5h9a.75.75 0 0 0 0-1.5h-9Z"
                      clipRule="evenodd"
                    />
                  </svg>
                ),
                title: "SVG Animation",
                description:
                  "Learn to animate SVG elements with techniques like path drawing, shape morphing, and motion paths for dynamic visual effects.",
              },
              {
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32L19.513 8.2Z" />
                  </svg>
                ),
                title: "Text Animations",
                description:
                  "Create captivating text effects using GSAP's text animation capabilities, including text reveals, splitting, and dynamic typography.",
              },
              {
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path d="M11.25 5.337c0-.355-.186-.676-.401-.959a1.647 1.647 0 0 1-.349-1.003c0-1.036 1.007-1.875 2.25-1.875S15 2.34 15 3.375c0 .369-.128.713-.349 1.003-.215.283-.401.604-.401.959 0 .332.278.598.61.578 1.91-.114 3.79-.342 5.632-.676a.75.75 0 0 1 .878.645 49.17 49.17 0 0 1 .376 5.452.657.657 0 0 1-.66.664c-.354 0-.675-.186-.958-.401a1.647 1.647 0 0 0-1.003-.349c-1.035 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401.31 0 .557.262.534.571a48.774 48.774 0 0 1-.595 4.845.75.75 0 0 1-.61.61c-1.82.317-3.673.533-5.555.642a.58.58 0 0 1-.611-.581c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.035-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959a.641.641 0 0 1-.658.643 49.118 49.118 0 0 1-4.708-.36.75.75 0 0 1-.645-.878c.293-1.614.504-3.257.629-4.924A.53.53 0 0 0 5.337 15c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.036 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.369 0 .713.128 1.003.349.283.215.604.401.959.401a.656.656 0 0 0 .659-.663 47.703 47.703 0 0 0-.31-4.82.75.75 0 0 1 .83-.832c1.343.155 2.703.254 4.077.294a.64.64 0 0 0 .657-.642Z" />
                  </svg>
                ),
                title: "Layout Transitions",
                description:
                  "Implement smooth layout transitions with GSAP's Flip plugin, allowing elements to animate naturally between different states.",
              },
              {
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path d="M12.378 1.602a.75.75 0 0 0-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03ZM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 0 0 .372-.648V7.93ZM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 0 0 .372.648l8.628 5.033Z" />
                  </svg>
                ),
                title: "3D Effects",
                description:
                  "Create stunning 3D animations and effects using GSAP combined with CSS 3D transforms for immersive user experiences.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="feature-card bg-zinc-900/70 border border-green-500/20 rounded-xl p-6 hover:border-green-500/40 hover:shadow-lg hover:shadow-green-500/5 transition-all"
              >
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4 text-green-400">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="categories"
        ref={categoriesRef}
        className="relative py-16 px-4 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
            Animation Categories
          </h2>
          <p className="text-gray-400 text-center max-w-3xl mx-auto mb-16">
            Our 16 interactive examples are organized into five categories to
            help you find exactly what you need.
          </p>

          <div className="categories-container space-y-16">
            {categories.map((category, index) => (
              <div key={index} className="category-section">
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className={`w-12 h-12 ${category.color} rounded-lg flex items-center justify-center text-black transform-gpu transition-transform hover:scale-110`}
                  >
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    {category.title}
                  </h3>
                </div>
                <p className="text-gray-400 mb-8 max-w-3xl">
                  {category.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {category.examples.map((example, i) => (
                    <Link
                      key={i}
                      to={`/${example.toLowerCase().replace(/\s+/g, "-")}`}
                      className="category-example-card bg-zinc-900/50 border border-green-500/20 rounded-lg p-5 hover:border-green-500/40 hover:bg-zinc-900/70 transition-all transform-gpu"
                    >
                      <h4 className="text-green-400 font-semibold mb-2">
                        {example}
                      </h4>
                      <p className="text-sm text-gray-500">Explore example →</p>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="getting-started"
        ref={gettingStartedRef}
        className="relative py-16 px-4 bg-black/40 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
            Getting Started
          </h2>
          <p className="text-gray-400 text-center max-w-3xl mx-auto mb-16">
            New to GSAP? Start with these foundational examples to learn the
            basics.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="getting-started-card bg-zinc-900/70 border border-green-500/20 rounded-xl p-6 hover:border-green-500/40 transition-all transform-gpu">
              <h3 className="text-xl font-bold text-white mb-4">
                1. Basic Animation
              </h3>
              <p className="text-gray-400 mb-6">
                Start with the basic <code>gsap.to()</code> method to learn how
                to animate properties from their current state to a new state.
              </p>
              <Link
                to="/gsap-to"
                className="text-green-400 hover:text-green-500 inline-flex items-center gap-1"
              >
                View Example
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 10a.75.75 0 0 1 .75-.75h6.638L10.23 7.29a.75.75 0 1 1 1.04-1.08l3.5 3.25a.75.75 0 0 1 0 1.08l-3.5 3.25a.75.75 0 1 1-1.04-1.08l2.158-1.96H5.75A.75.75 0 0 1 5 10Z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>

            <div className="getting-started-card bg-zinc-900/70 border border-green-500/20 rounded-xl p-6 hover:border-green-500/40 transition-all transform-gpu">
              <h3 className="text-xl font-bold text-white mb-4">
                2. Timeline Animations
              </h3>
              <p className="text-gray-400 mb-6">
                Learn how to sequence multiple animations with precise control
                using GSAP timelines.
              </p>
              <Link
                to="/gsap-timeline"
                className="text-green-400 hover:text-green-500 inline-flex items-center gap-1"
              >
                View Example
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 10a.75.75 0 0 1 .75-.75h6.638L10.23 7.29a.75.75 0 1 1 1.04-1.08l3.5 3.25a.75.75 0 0 1 0 1.08l-3.5 3.25a.75.75 0 1 1-1.04-1.08l2.158-1.96H5.75A.75.75 0 0 1 5 10Z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>

            <div className="getting-started-card bg-zinc-900/70 border border-green-500/20 rounded-xl p-6 hover:border-green-500/40 transition-all transform-gpu">
              <h3 className="text-xl font-bold text-white mb-4">
                3. Text Animation
              </h3>
              <p className="text-gray-400 mb-6">
                Explore how to animate text elements for engaging typography
                effects and enhanced readability.
              </p>
              <Link
                to="/gsap-text"
                className="text-green-400 hover:text-green-500 inline-flex items-center gap-1"
              >
                View Example
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 10a.75.75 0 0 1 .75-.75h6.638L10.23 7.29a.75.75 0 1 1 1.04-1.08l3.5 3.25a.75.75 0 0 1 0 1.08l-3.5 3.25a.75.75 0 1 1-1.04-1.08l2.158-1.96H5.75A.75.75 0 0 1 5 10Z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section
        ref={ctaRef}
        className="relative py-20 px-4 bg-gradient-to-b from-black to-zinc-900 overflow-hidden"
      >
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 perspective-text">
            Ready to Master GSAP Animations?
          </h2>
          <p className="text-gray-300 text-xl mb-10 max-w-3xl mx-auto">
            Dive into our collection of 16 interactive examples and transform
            your web animations skills today.
          </p>
          <Link
            to="/examples"
            className="inline-flex items-center px-8 py-4 bg-green-500 text-black font-bold rounded-lg hover:bg-green-400 transition-all transform-gpu hover:scale-105"
          >
            Start Exploring
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5 ml-2"
            >
              <path
                fillRule="evenodd"
                d="M5 10a.75.75 0 0 1 .75-.75h6.638L10.23 7.29a.75.75 0 1 1 1.04-1.08l3.5 3.25a.75.75 0 0 1 0 1.08l-3.5 3.25a.75.75 0 1 1-1.04-1.08l2.158-1.96H5.75A.75.75 0 0 1 5 10Z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
      </section>

      <footer className="bg-zinc-900 border-t border-green-500/20 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-md bg-green-500 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5 text-black"
                  >
                    <path
                      fillRule="evenodd"
                      d="M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-white font-bold text-xl">
                  ByteSizedGSAP
                </span>
              </div>
              <p className="text-gray-400">
                A collection of concise, interactive GSAP animation examples to
                help you master web animations.
              </p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/examples"
                    className="text-gray-400 hover:text-green-400"
                  >
                    All Examples
                  </Link>
                </li>
                <li>
                  <a
                    href="#features"
                    className="text-gray-400 hover:text-green-400"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#categories"
                    className="text-gray-400 hover:text-green-400"
                  >
                    Categories
                  </a>
                </li>
                <li>
                  <a
                    href="#getting-started"
                    className="text-gray-400 hover:text-green-400"
                  >
                    Getting Started
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://gsap.com/docs"
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-400 hover:text-green-400"
                  >
                    GSAP Documentation
                  </a>
                </li>
                <li>
                  <a
                    href="https://gsap.com/community/forums/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-400 hover:text-green-400"
                  >
                    GSAP Forums
                  </a>
                </li>
                <li>
                  <a
                    href="https://gsap.com/resources/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-400 hover:text-green-400"
                  >
                    Learning Resources
                  </a>
                </li>
                <li>
                  <a
                    href="https://greensock.com/showcase/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-400 hover:text-green-400"
                  >
                    GSAP Showcase
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">
                Premium Features
              </h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/gsap-split-text"
                    className="text-gray-400 hover:text-green-400"
                  >
                    SplitText
                  </Link>
                </li>
                <li>
                  <Link
                    to="/gsap-morph-svg"
                    className="text-gray-400 hover:text-green-400"
                  >
                    MorphSVG
                  </Link>
                </li>
                <li>
                  <Link
                    to="/gsap-draw-svg"
                    className="text-gray-400 hover:text-green-400"
                  >
                    DrawSVG
                  </Link>
                </li>
                <li>
                  <a
                    href="https://greensock.com/club/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-400 hover:text-green-400"
                  >
                    GSAP Club
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-green-500/20 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500">
              © 2023 ByteSizedGSAP. Powered by React & GSAP.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a
                href="https://github.com"
                className="text-gray-400 hover:text-green-400"
                target="_blank"
                rel="noreferrer"
              >
                <span className="sr-only">GitHub</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
              </a>
              <a
                href="https://twitter.com"
                className="text-gray-400 hover:text-green-400"
                target="_blank"
                rel="noreferrer"
              >
                <span className="sr-only">Twitter</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 9.99 9.99 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
