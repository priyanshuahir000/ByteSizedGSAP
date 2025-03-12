import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Link } from "react-router-dom";
import { useRef } from "react";

// Note: DrawSVGPlugin is a premium plugin
// This is a simulation - in real implementation you would register the plugin
// gsap.registerPlugin(DrawSVGPlugin);

const GsapDrawSVG = () => {
  const svgRef = useRef(null);

  useGSAP(() => {
    // Since DrawSVGPlugin is premium, we'll simulate the drawing effect
    // using stroke-dasharray and stroke-dashoffset

    // Get all path elements
    const paths = document.querySelectorAll(".drawing-path");

    // Setup initial state (hidden)
    paths.forEach((path) => {
      const length = path.getTotalLength();
      path.style.strokeDasharray = length;
      path.style.strokeDashoffset = length;
    });

    // Create the drawing animation
    const tl = gsap.timeline({
      repeat: -1,
      repeatDelay: 1,
      yoyo: true,
    });

    paths.forEach((path) => {
      tl.to(
        path,
        {
          strokeDashoffset: 0,
          duration: 2,
          ease: "power2.inOut",
        },
        "<0.2"
      );
    });

    // Optional: Add an extra animation after drawing completes
    tl.to(".drawing-svg", {
      scale: 1.05,
      duration: 0.5,
      ease: "back.out",
    });
  }, []);

  return (
    <main>
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

      <h1>GSAP DrawSVG</h1>

      <p className="mt-5 text-gray-400">
        DrawSVGPlugin is a premium GSAP plugin that animates the drawing of SVG
        strokes. It's perfect for creating line-drawing animations, signatures,
        and more.
      </p>

      <p className="mt-5 text-gray-400">
        <strong className="text-green-500">Note:</strong> DrawSVGPlugin is a
        premium plugin that requires a GSAP Club membership. The demo below
        simulates the effect with standard GSAP properties for illustration
        purposes.
      </p>

      <p className="mt-5 text-gray-400">
        Read more about the{" "}
        <a
          href="https://greensock.com/docs/v3/Plugins/DrawSVGPlugin"
          target="_blank"
          rel="noreferrer noopener nofollow"
        >
          DrawSVG Plugin
        </a>
        .
      </p>

      <div className="mt-20 flex justify-center">
        <div className="svg-container bg-zinc-900/50 p-10 rounded-xl border border-green-500/20">
          <svg
            ref={svgRef}
            width="300"
            height="200"
            viewBox="0 0 300 200"
            className="drawing-svg"
          >
            {/* Mountain */}
            <path
              className="drawing-path"
              d="M20 180 L80 80 L120 130 L180 30 L240 100 L280 60 L280 180 Z"
              fill="none"
              stroke="#4ade80"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Sun */}
            <circle
              className="drawing-path"
              cx="240"
              cy="50"
              r="20"
              fill="none"
              stroke="#4ade80"
              strokeWidth="2"
            />

            {/* Tree */}
            <path
              className="drawing-path"
              d="M50 180 L50 150 M30 150 L70 150 L50 120 L30 150 M30 130 L70 130 L50 100 L30 130"
              fill="none"
              stroke="#4ade80"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <div className="mt-5 text-center text-gray-400">
            <p>Drawing animation with simulated DrawSVGPlugin effect</p>
          </div>
        </div>
      </div>

      <div className="mt-10 p-6 rounded-lg bg-red-900/20 border border-red-500/30">
        <h3 className="text-lg font-semibold text-red-400">Important Note</h3>
        <p className="text-gray-300">
          DrawSVGPlugin is a premium plugin that requires a GSAP Club GreenSock
          membership. Visit{" "}
          <a
            href="https://greensock.com/club/"
            target="_blank"
            rel="noreferrer"
            className="text-green-400"
          >
            https://greensock.com/club/
          </a>{" "}
          for more information.
        </p>
      </div>
    </main>
  );
};

export default GsapDrawSVG;
