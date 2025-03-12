import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { Flip } from "gsap/Flip";
import { Link } from "react-router-dom";

// Register the Flip plugin
gsap.registerPlugin(Flip);

const GsapFlip = () => {
  const containerRef = useRef(null);
  const cardsRef = useRef(null);
  const listRef = useRef(null);
  const gridRef = useRef(null);

  useGSAP(() => {
    // Initial fade-in animation for the demo
    gsap.from(".demo-title", {
      opacity: 0,
      y: -20,
      duration: 0.6,
    });

    gsap.from(".card", {
      opacity: 0,
      y: 30,
      stagger: 0.1,
      duration: 0.8,
      ease: "power2.out",
    });
  }, []);

  const toggleLayout = () => {
    // Get the current state
    const state = Flip.getState(".card", {
      props: "color,backgroundColor",
      simple: true,
    });

    // Toggle the layout class
    containerRef.current.classList.toggle("grid-layout");

    // Animate from the previous state to the current state
    Flip.from(state, {
      duration: 0.8,
      stagger: 0.05,
      ease: "power1.inOut",
      absolute: true,
      onEnter: (elements) => {
        gsap.fromTo(
          elements,
          { opacity: 0, scale: 0 },
          { opacity: 1, scale: 1, duration: 0.4 }
        );
      },
      onLeave: (elements) => {
        gsap.to(elements, { opacity: 0, scale: 0, duration: 0.4 });
      },
    });
  };

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

      <h1 className="demo-title">GSAP Flip</h1>

      <p className="mt-5 text-gray-400">
        The GSAP Flip plugin enables smooth transitions between different states
        of elements. It's perfect for creating layout changes that animate
        smoothly without complex code.
      </p>

      <p className="mt-5 text-gray-400">
        GSAP's Flip plugin works by taking a "snapshot" of the current state,
        and then animating from that snapshot to the new state after you make
        your changes to the DOM.
      </p>

      <p className="mt-5 text-gray-400">
        Read more about the{" "}
        <a
          href="https://greensock.com/docs/v3/Plugins/Flip/"
          target="_blank"
          rel="noreferrer noopener nofollow"
        >
          GSAP Flip plugin
        </a>
        .
      </p>

      <div className="mt-10">
        <button onClick={toggleLayout} className="mb-8">
          Toggle Layout
        </button>

        <div ref={containerRef} className="w-full transition-all duration-300">
          <div ref={cardsRef} className="flex flex-wrap gap-4">
            {[
              { color: "bg-green-500", text: "Card 1" },
              { color: "bg-emerald-500", text: "Card 2" },
              { color: "bg-lime-500", text: "Card 3" },
              { color: "bg-teal-500", text: "Card 4" },
              { color: "bg-cyan-500", text: "Card 5" },
              { color: "bg-green-600", text: "Card 6" },
            ].map((card, index) => (
              <div
                key={index}
                className={`card ${
                  card.color
                } text-black p-8 rounded-lg shadow-lg ${
                  containerRef.current?.classList.contains("grid-layout")
                    ? "w-full"
                    : "w-[calc(33%-1rem)]"
                }`}
              >
                <h3 className="font-bold text-xl">{card.text}</h3>
                <p className="text-black/80">This is a flippable card</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx="true">{`
        .grid-layout .card {
          width: 100%;
          margin-bottom: 1rem;
        }
      `}</style>
    </main>
  );
};

export default GsapFlip;
