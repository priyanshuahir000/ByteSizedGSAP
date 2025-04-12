import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import {
  GsapTo,
  GsapFrom,
  GsapFromTo,
  GsapTimeline,
  GsapScrollTrigger,
  GsapStagger,
  GsapText,
  GsapFlip,
  GsapMorphSVG,
  GsapDrawSVG,
  GsapSplitText,
  GsapScroller,
  GsapParallax,
  GsapMotionPath,
  Gsap3DEffects,
  GsapReveal,
  GsapForm,
} from "./pages";
import LandingPage from "./pages/LandingPage";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/examples" element={<ExamplesPage />} />
        <Route path="/gsap-to" element={<GsapTo />} />
        <Route path="/gsap-from" element={<GsapFrom />} />
        <Route path="/gsap-fromto" element={<GsapFromTo />} />
        <Route path="/gsap-timeline" element={<GsapTimeline />} />
        <Route path="/gsap-scroll-trigger" element={<GsapScrollTrigger />} />
        <Route path="/gsap-stagger" element={<GsapStagger />} />
        <Route path="/gsap-text" element={<GsapText />} />
        <Route path="/gsap-flip" element={<GsapFlip />} />
        <Route path="/gsap-morph-svg" element={<GsapMorphSVG />} />
        <Route path="/gsap-draw-svg" element={<GsapDrawSVG />} />
        <Route path="/gsap-split-text" element={<GsapSplitText />} />
        <Route path="/gsap-scroller" element={<GsapScroller />} />
        <Route path="/gsap-parallax" element={<GsapParallax />} />
        <Route path="/gsap-motion-path" element={<GsapMotionPath />} />
        <Route path="/gsap-3d-effects" element={<Gsap3DEffects />} />
        <Route path="/gsap-reveal" element={<GsapReveal />} />
        <Route path="/gsap-form" element={<GsapForm />} />
      </Routes>
    </Router>
  );
}

// Examples page that lists all available animations
const ExamplesPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    {
      id: "core",
      name: "Core Animations",
      description: "Fundamental GSAP animation methods",
      color: "bg-green-500",
    },
    {
      id: "scroll",
      name: "Scroll Interactions",
      description: "Animations triggered by scrolling",
      color: "bg-cyan-500",
    },
    {
      id: "text",
      name: "Text Effects",
      description: "Typography animations",
      color: "bg-purple-500",
    },
    {
      id: "svg",
      name: "SVG Animations",
      description: "SVG drawing and morphing",
      color: "bg-amber-500",
    },
    {
      id: "advanced",
      name: "Advanced Techniques",
      description: "Complex animation features",
      color: "bg-rose-500",
    },
  ];

  const animations = [
    {
      path: "/gsap-to",
      name: "GSAP To",
      category: "core",
      description: "Animate elements from their current state to a new state",
    },
    {
      path: "/gsap-from",
      name: "GSAP From",
      category: "core",
      description: "Animate elements from a new state to their current state",
    },
    {
      path: "/gsap-fromto",
      name: "GSAP FromTo",
      category: "core",
      description: "Animate elements from one state to another state",
    },
    {
      path: "/gsap-timeline",
      name: "GSAP Timeline",
      category: "core",
      description: "Sequence multiple animations with precise control",
    },
    {
      path: "/gsap-scroll-trigger",
      name: "GSAP ScrollTrigger",
      category: "scroll",
      description: "Trigger animations based on scroll position",
    },
    {
      path: "/gsap-stagger",
      name: "GSAP Stagger",
      category: "advanced",
      description: "Create sequential animations with staggered timing",
    },
    {
      path: "/gsap-text",
      name: "GSAP Text",
      category: "text",
      description: "Basic text animations and effects",
    },
    {
      path: "/gsap-flip",
      name: "GSAP Flip",
      category: "advanced",
      description: "Smooth transitions between layout states",
    },
    {
      path: "/gsap-morph-svg",
      name: "GSAP MorphSVG",
      category: "svg",
      description: "Morph between different SVG shapes",
    },
    {
      path: "/gsap-draw-svg",
      name: "GSAP DrawSVG",
      category: "svg",
      description: "Create SVG line drawing animations",
    },
    {
      path: "/gsap-split-text",
      name: "GSAP SplitText",
      category: "text",
      description: "Split text into characters, words, or lines for animation",
    },
    {
      path: "/gsap-scroller",
      name: "GSAP Scroller",
      category: "scroll",
      description: "Create horizontal scrolling experiences",
    },
    {
      path: "/gsap-parallax",
      name: "GSAP Parallax",
      category: "scroll",
      description: "Create parallax effects as you scroll",
    },
    {
      path: "/gsap-motion-path",
      name: "GSAP MotionPath",
      category: "svg",
      description: "Animate elements along an SVG path",
    },
    {
      path: "/gsap-3d-effects",
      name: "GSAP 3D Effects",
      category: "advanced",
      description: "Create 3D animations with GSAP",
    },
    {
      path: "/gsap-reveal",
      name: "GSAP Reveal",
      category: "scroll",
      description: "Create scroll-based reveal animations",
    },
  ];

  const filteredAnimations = animations.filter((animation) => {
    const matchesSearch =
      animation.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      animation.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || animation.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  useGSAP(() => {
    // Animate the header
    gsap.from(".examples-header", {
      y: -50,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
    });

    // Animate the category filters
    gsap.from(".category-filter", {
      y: 30,
      opacity: 0,
      stagger: 0.1,
      duration: 0.6,
      ease: "back.out(1.7)",
      delay: 0.3,
    });

    // Animate the cards
    gsap.from(".example-card", {
      opacity: 0,
      y: 40,
      stagger: 0.05,
      duration: 0.6,
      ease: "power2.out",
      delay: 0.6,
    });
  }, []);

  return (
    <main className="p-10">
      {/* Header and Back Link */}
      <div className="flex items-center gap-3 mb-10">
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
          Back to Home
        </Link>
      </div>

      {/* Page Title and Description */}
      <div className="examples-header max-w-7xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          GSAP Animation Examples
        </h1>
        <p className="text-gray-400 max-w-3xl mx-auto">
          Explore our collection of 16 interactive examples showcasing the power
          and versatility of GSAP animations.
        </p>
      </div>

      {/* Search and Filter Section */}
      <div className="mb-12">
        <div className="max-w-3xl mx-auto">
          {/* Search Input */}
          <div className="mb-8 relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <input
              type="text"
              className="w-full pl-12 pr-4 py-3 bg-zinc-900/70 border border-green-500/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-green-500/50"
              placeholder="Search animations by name or description..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-3 justify-center">
            <button
              className={`category-filter px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === "all"
                  ? "bg-green-500 text-black"
                  : "bg-zinc-800 text-gray-300 hover:bg-zinc-700"
              }`}
              onClick={() => setSelectedCategory("all")}
            >
              All Categories
            </button>

            {categories.map((category) => (
              <button
                key={category.id}
                className={`category-filter px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category.id
                    ? `${category.color.replace("bg", "bg")} text-black`
                    : "bg-zinc-800 text-gray-300 hover:bg-zinc-700"
                }`}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Results Section */}
      <div>
        {filteredAnimations.length === 0 ? (
          <div className="text-center py-16">
            <h2 className="text-2xl font-bold text-gray-400 mb-2">
              No animations found
            </h2>
            <p className="text-gray-500">
              Try adjusting your search or filter criteria.
            </p>
          </div>
        ) : (
          <>
            {/* Group by category */}
            {selectedCategory === "all" ? (
              // Show grouped by category
              categories.map((category) => {
                const categoryAnimations = filteredAnimations.filter(
                  (animation) => animation.category === category.id
                );

                if (categoryAnimations.length === 0) return null;

                return (
                  <div key={category.id} className="mb-16">
                    <div className="flex items-center gap-3 mb-6">
                      <div
                        className={`w-3 h-8 ${category.color} rounded-sm`}
                      ></div>
                      <h2 className="text-2xl font-bold text-white">
                        {category.name}
                      </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {categoryAnimations.map((animation, index) => (
                        <Link
                          key={animation.path}
                          to={animation.path}
                          className="example-card bg-zinc-900/50 border border-green-500/20 rounded-lg p-6 hover:border-green-500/40 hover:bg-zinc-900/70 transition-all"
                        >
                          <h3 className="text-xl font-bold text-green-400 mb-2">
                            {animation.name}
                          </h3>
                          <p className="text-gray-400 mb-4">
                            {animation.description}
                          </p>
                          <div className="flex justify-between items-center">
                            <span className="text-xs text-gray-500">
                              {category.name}
                            </span>
                            <span className="text-green-400">
                              View Example →
                            </span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              })
            ) : (
              // Show flat list for filtered category
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredAnimations.map((animation) => (
                  <Link
                    key={animation.path}
                    to={animation.path}
                    className="example-card bg-zinc-900/50 border border-green-500/20 rounded-lg p-6 hover:border-green-500/40 hover:bg-zinc-900/70 transition-all"
                  >
                    <h3 className="text-xl font-bold text-green-400 mb-2">
                      {animation.name}
                    </h3>
                    <p className="text-gray-400 mb-4">
                      {animation.description}
                    </p>
                    <div className="flex justify-end">
                      <span className="text-green-400">View Example →</span>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </>
        )}
      </div>

      {/* Footer Section */}
      <div className="mt-20 pt-10 border-t border-green-500/20 text-center">
        <p className="text-gray-500">
          Looking for a specific animation? Try the search bar or filter by
          category.
        </p>
      </div>
    </main>
  );
};

export default App;
