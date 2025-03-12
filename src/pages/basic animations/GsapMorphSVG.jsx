import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Link } from "react-router-dom";
import { useRef } from "react";

// Note: MorphSVGPlugin is a premium plugin
// This is a simulation - in real implementation you would need to register the plugin
// gsap.registerPlugin(MorphSVGPlugin);

const GsapMorphSVG = () => {
  const svgRef = useRef(null);
  const circleRef = useRef(null);
  const squareRef = useRef(null);
  const triangleRef = useRef(null);
  const starRef = useRef(null);

  useGSAP(() => {
    // Since we don't have the actual MorphSVGPlugin (premium),
    // we'll simulate the effect with regular GSAP animations

    const shapes = [
      { id: "circle", d: "M50 20 A 30 30 0 1 1 50 80 A 30 30 0 1 1 50 20" },
      { id: "square", d: "M20 20 H80 V80 H20 Z" },
      { id: "triangle", d: "M50 20 L80 80 L20 80 Z" },
      {
        id: "star",
        d: "M50 10 L61 39 L94 40 L68 60 L76 90 L50 75 L24 90 L32 60 L6 40 L39 39 Z",
      },
    ];

    let currentIndex = 0;

    // Simple morph function (simulated without the actual MorphSVG plugin)
    const morphShape = () => {
      currentIndex = (currentIndex + 1) % shapes.length;
      const nextShape = shapes[currentIndex];

      gsap.to("#morphable", {
        attr: { d: nextShape.d },
        duration: 1.5,
        ease: "power2.inOut",
      });
    };

    // Automatic morphing
    const interval = setInterval(morphShape, 3000);

    // Cleanup function
    return () => clearInterval(interval);
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

      <h1>GSAP MorphSVG</h1>

      <p className="mt-5 text-gray-400">
        MorphSVG is a premium GSAP plugin that allows you to smoothly morph SVG
        shapes from one to another, regardless of the number of points in each.
      </p>

      <p className="mt-5 text-gray-400">
        <strong className="text-green-500">Note:</strong> MorphSVGPlugin is a
        premium plugin that requires a GSAP Club membership. The demo below
        simulates the effect with standard GSAP for illustration purposes.
      </p>

      <p className="mt-5 text-gray-400">
        Read more about the{" "}
        <a
          href="https://greensock.com/docs/v3/Plugins/MorphSVGPlugin"
          target="_blank"
          rel="noreferrer noopener nofollow"
        >
          MorphSVG Plugin
        </a>
        .
      </p>

      <div className="mt-20 flex justify-center">
        <div className="svg-container bg-zinc-900/50 p-10 rounded-xl border border-green-500/20">
          <svg ref={svgRef} width="200" height="200" viewBox="0 0 100 100">
            <path
              id="morphable"
              d="M50 20 A 30 30 0 1 1 50 80 A 30 30 0 1 1 50 20"
              fill="none"
              stroke="#4ade80"
              strokeWidth="2"
            />
          </svg>

          <div className="mt-5 text-center text-gray-400">
            <p>The shape automatically morphs between different forms</p>
          </div>
        </div>
      </div>

      <div className="mt-10 p-6 rounded-lg bg-red-900/20 border border-red-500/30">
        <h3 className="text-lg font-semibold text-red-400">Important Note</h3>
        <p className="text-gray-300">
          MorphSVGPlugin is a premium plugin that requires a GSAP Club GreenSock
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

export default GsapMorphSVG;
