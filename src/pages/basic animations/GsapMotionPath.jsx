import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Link } from "react-router-dom";
import { useRef } from "react";

// Note: MotionPathPlugin is a standard GSAP plugin but we're using basic features
// gsap.registerPlugin(MotionPathPlugin);

const GsapMotionPath = () => {
  const svgRef = useRef(null);
  const iconRef = useRef(null);
  const pathRef = useRef(null);

  useGSAP(() => {
    // Create a simple motion path animation (simulated)
    // For the premium MotionPathPlugin, you would use more advanced features

    const path = pathRef.current;
    const icon = iconRef.current;

    // Get the path's total length to use for calculations
    const pathLength = path.getTotalLength();

    // Function to get point at a specific position along the path
    const getPointAtLength = (len) => {
      const point = path.getPointAtLength(len);
      return { x: point.x, y: point.y };
    };

    // Animation that moves the icon along the path
    gsap.to(icon, {
      duration: 10,
      repeat: -1,
      ease: "linear",
      onUpdate: function () {
        // Calculate current position along the path based on progress
        const progress = this.progress();
        const curLength = progress * pathLength;
        const pos = getPointAtLength(curLength);

        // Update icon position
        gsap.set(icon, {
          x: pos.x - 15, // Center the icon on the path
          y: pos.y - 15, // Center the icon on the path
        });

        // Optional: Calculate angle for rotation based on two nearby points
        if (progress < 0.995) {
          const nextPos = getPointAtLength(curLength + 1);
          const angle =
            (Math.atan2(nextPos.y - pos.y, nextPos.x - pos.x) * 180) / Math.PI;
          gsap.set(icon, { rotation: angle });
        }
      },
    });

    // Add an additional animation for visual interest
    gsap.to("#curve-path", {
      strokeDashoffset: -pathLength * 2,
      repeat: -1,
      duration: 20,
      ease: "linear",
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

      <h1>GSAP MotionPath</h1>

      <p className="mt-5 text-gray-400">
        The MotionPath plugin allows you to animate elements along a path
        defined by an SVG path data or an array of points. This is perfect for
        creating complex movement patterns that would be difficult to achieve
        with traditional animations.
      </p>

      <p className="mt-5 text-gray-400">
        <strong className="text-green-500">Note:</strong> While the basic
        MotionPathPlugin is included with GSAP, advanced features require a Club
        GreenSock membership. This example demonstrates a basic implementation
        of motion along a path.
      </p>

      <p className="mt-5 text-gray-400">
        Read more about the{" "}
        <a
          href="https://greensock.com/docs/v3/Plugins/MotionPathPlugin"
          target="_blank"
          rel="noreferrer noopener nofollow"
        >
          MotionPath Plugin
        </a>
        .
      </p>

      <div className="mt-20 flex justify-center">
        <div className="svg-container bg-zinc-900/50 p-10 rounded-xl border border-green-500/20">
          <svg ref={svgRef} width="400" height="300" viewBox="0 0 400 300">
            {/* Path that the element will follow */}
            <path
              id="curve-path"
              ref={pathRef}
              d="M50,250 C90,100 200,0 350,150 C400,200 350,250 250,250 C150,250 100,200 50,250 Z"
              fill="none"
              stroke="#4ade80"
              strokeWidth="2"
              strokeDasharray="5,5"
            />

            {/* Element that moves along the path */}
            <g ref={iconRef} className="motion-icon">
              <circle cx="15" cy="15" r="15" fill="#4ade80" />
              <polygon points="15,5 25,20 5,20" fill="black" />
            </g>
          </svg>

          <div className="mt-5 text-center text-gray-400">
            <p>The object follows the dashed path automatically</p>
          </div>
        </div>
      </div>

      <div className="mt-20 bg-zinc-900/30 rounded-xl p-8 border border-green-500/20">
        <h3 className="text-xl font-bold text-green-400 mb-4">How It Works</h3>
        <p className="text-gray-400 mb-4">
          In this example, we're using GSAP's <code>onUpdate</code> callback to
          manually position an element along an SVG path. The professional
          MotionPathPlugin makes this much easier with a simple configuration:
        </p>

        <pre className="bg-zinc-900/70 p-4 rounded-lg text-green-400 overflow-x-auto">
          {`gsap.to(".element", {
  motionPath: {
    path: "#path",
    align: "#path",
    autoRotate: true,
    alignOrigin: [0.5, 0.5]
  },
  duration: 5,
  repeat: -1,
  ease: "power1.inOut"
});`}
        </pre>
      </div>
    </main>
  );
};

export default GsapMotionPath;
