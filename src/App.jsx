import React from "react";
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
} from "./pages";
import LandingPage from "./pages/LandingPage";

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
      </Routes>
    </Router>
  );
}

// Examples page that lists all available animations
const ExamplesPage = () => {
  const animations = [
    { path: "/gsap-to", name: "GSAP To" },
    { path: "/gsap-from", name: "GSAP From" },
    { path: "/gsap-fromto", name: "GSAP FromTo" },
    { path: "/gsap-timeline", name: "GSAP Timeline" },
    { path: "/gsap-scroll-trigger", name: "GSAP ScrollTrigger" },
    { path: "/gsap-stagger", name: "GSAP Stagger" },
    { path: "/gsap-text", name: "GSAP Text" },
    { path: "/gsap-flip", name: "GSAP Flip" },
    { path: "/gsap-morph-svg", name: "GSAP MorphSVG" },
    { path: "/gsap-draw-svg", name: "GSAP DrawSVG" },
    { path: "/gsap-split-text", name: "GSAP SplitText" },
    { path: "/gsap-scroller", name: "GSAP Scroller" },
    { path: "/gsap-parallax", name: "GSAP Parallax" },
    { path: "/gsap-motion-path", name: "GSAP MotionPath" },
    { path: "/gsap-3d-effects", name: "GSAP 3D Effects" },
    { path: "/gsap-reveal", name: "GSAP Reveal" },
  ];

  return (
    <main className="p-10">
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

      <h1 className="text-center mb-10">GSAP Animation Examples</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {animations.map((animation) => (
          <Link
            key={animation.path}
            to={animation.path}
            className="p-4 bg-zinc-900/50 rounded-lg border border-green-500/20 hover:border-green-500/40 hover:bg-zinc-900/70 transition-all"
          >
            <h2 className="text-xl font-bold text-green-400">
              {animation.name}
            </h2>
            <p className="text-gray-400 mt-2">Click to view example</p>
          </Link>
        ))}
      </div>
    </main>
  );
};

export default App;
