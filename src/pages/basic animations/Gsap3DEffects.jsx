import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Link } from "react-router-dom";
import { useRef } from "react";

const Gsap3DEffects = () => {
  const cubeRef = useRef(null);
  const sceneRef = useRef(null);

  useGSAP(() => {
    // Create a timeline for rotation animation
    const tl = gsap.timeline({
      repeat: -1,
      yoyo: true,
    });

    // Animate the cube rotation
    tl.to(cubeRef.current, {
      rotateY: 360,
      rotateX: 45,
      duration: 8,
      ease: "power1.inOut",
    });

    // Create hover effects for each face
    document.querySelectorAll(".cube__face").forEach((face) => {
      face.addEventListener("mouseenter", () => {
        gsap.to(face, {
          scale: 1.1,
          boxShadow: "0 0 20px rgba(74, 222, 128, 0.6)",
          duration: 0.3,
        });
      });

      face.addEventListener("mouseleave", () => {
        gsap.to(face, {
          scale: 1,
          boxShadow: "0 0 0px rgba(74, 222, 128, 0)",
          duration: 0.3,
        });
      });
    });

    // Create tilt effect based on mouse position
    sceneRef.current.addEventListener("mousemove", (e) => {
      const { left, top, width, height } =
        sceneRef.current.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;

      gsap.to(cubeRef.current, {
        rotateY: gsap.getProperty(cubeRef.current, "rotateY") + x * 10,
        rotateX: gsap.getProperty(cubeRef.current, "rotateX") - y * 10,
        duration: 1,
        ease: "power2.out",
      });
    });

    // Initialize the animation with a short delay
    gsap.from(".cube", {
      scale: 0,
      opacity: 0,
      rotateX: -90,
      duration: 1,
      delay: 0.5,
      ease: "back.out(1.7)",
    });

    // Animate the description text
    gsap.from(".description p", {
      y: 20,
      opacity: 0,
      stagger: 0.2,
      duration: 0.8,
      delay: 1,
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

      <h1>GSAP 3D Effects</h1>

      <p className="mt-5 text-gray-400">
        GSAP can be used to create impressive 3D animations and effects by
        leveraging CSS 3D transforms. This example showcases a 3D cube with
        various animation techniques to create a visually stunning effect.
      </p>

      <p className="mt-5 text-gray-400">
        Move your mouse over the cube to influence its rotation and hover over
        individual faces to see additional effects.
      </p>

      <div className="mt-10 flex justify-center">
        <div
          ref={sceneRef}
          className="scene h-[300px] w-[300px] relative perspective-[1000px]"
        >
          <div
            ref={cubeRef}
            className="cube relative h-full w-full transform-style-3d"
          >
            <div className="cube__face cube__face--front absolute h-full w-full flex items-center justify-center bg-green-500/20 border border-green-500/50 transform translate-z-[150px]">
              <span className="text-white text-2xl font-bold">Front</span>
            </div>
            <div className="cube__face cube__face--back absolute h-full w-full flex items-center justify-center bg-green-500/20 border border-green-500/50 transform translate-z-[-150px] rotate-y-180">
              <span className="text-white text-2xl font-bold">Back</span>
            </div>
            <div className="cube__face cube__face--right absolute h-full w-full flex items-center justify-center bg-green-500/20 border border-green-500/50 transform translate-x-[150px] rotate-y-90">
              <span className="text-white text-2xl font-bold">Right</span>
            </div>
            <div className="cube__face cube__face--left absolute h-full w-full flex items-center justify-center bg-green-500/20 border border-green-500/50 transform translate-x-[-150px] rotate-y-[-90deg]">
              <span className="text-white text-2xl font-bold">Left</span>
            </div>
            <div className="cube__face cube__face--top absolute h-full w-full flex items-center justify-center bg-green-500/20 border border-green-500/50 transform translate-y-[-150px] rotate-x-90">
              <span className="text-white text-2xl font-bold">Top</span>
            </div>
            <div className="cube__face cube__face--bottom absolute h-full w-full flex items-center justify-center bg-green-500/20 border border-green-500/50 transform translate-y-[150px] rotate-x-[-90deg]">
              <span className="text-white text-2xl font-bold">Bottom</span>
            </div>
          </div>
        </div>
      </div>

      <div className="description mt-16 max-w-3xl mx-auto space-y-4">
        <p className="text-gray-400">
          GSAP doesn't directly handle 3D rendering but works perfectly with CSS
          3D transforms to create impressive 3D effects. For the cube above,
          we're using CSS for 3D positioning and GSAP to animate the transforms.
        </p>

        <p className="text-gray-400">
          The key CSS properties used are{" "}
          <code>transform-style: preserve-3d</code>, <code>perspective</code>,
          and various transform functions like <code>rotateX</code>,{" "}
          <code>rotateY</code>, and <code>translateZ</code>.
        </p>

        <p className="text-gray-400">
          GSAP animation timeline controls the rotation, while event listeners
          add interactivity by responding to mouse movements and hovers.
        </p>
      </div>

      <div className="mt-10 bg-zinc-900/30 rounded-xl p-8 border border-green-500/20">
        <h3 className="text-xl font-bold text-green-400 mb-4">Code Example</h3>
        <pre className="bg-zinc-900/70 p-4 rounded-lg text-green-400 overflow-x-auto">
          {`// Create a timeline for rotation animation
const tl = gsap.timeline({
  repeat: -1,
  yoyo: true
});

// Animate the cube rotation
tl.to(cubeRef.current, {
  rotateY: 360,
  rotateX: 45,
  duration: 8,
  ease: "power1.inOut"
});

// Create tilt effect based on mouse position
sceneRef.current.addEventListener("mousemove", (e) => {
  const { left, top, width, height } = sceneRef.current.getBoundingClientRect();
  const x = (e.clientX - left) / width - 0.5;
  const y = (e.clientY - top) / height - 0.5;
  
  gsap.to(cubeRef.current, {
    rotateY: gsap.getProperty(cubeRef.current, "rotateY") + x * 10,
    rotateX: gsap.getProperty(cubeRef.current, "rotateX") - y * 10,
    duration: 1,
    ease: "power2.out"
  });
});`}
        </pre>
      </div>

      <style jsx="true">{`
        .perspective-[1000px] {
          perspective: 1000px;
        }

        .transform-style-3d {
          transform-style: preserve-3d;
        }

        .translate-z-[150px] {
          transform: translateZ(150px);
        }

        .translate-z-[-150px] {
          transform: translateZ(-150px);
        }

        .translate-x-[150px] {
          transform: translateX(150px);
        }

        .translate-x-[-150px] {
          transform: translateX(-150px);
        }

        .translate-y-[150px] {
          transform: translateY(150px);
        }

        .translate-y-[-150px] {
          transform: translateY(-150px);
        }

        .rotate-y-90 {
          transform: rotateY(90deg);
        }

        .rotate-y-[-90deg] {
          transform: rotateY(-90deg);
        }

        .rotate-y-180 {
          transform: rotateY(180deg);
        }

        .rotate-x-90 {
          transform: rotateX(90deg);
        }

        .rotate-x-[-90deg] {
          transform: rotateX(-90deg);
        }
      `}</style>
    </main>
  );
};

export default Gsap3DEffects;
