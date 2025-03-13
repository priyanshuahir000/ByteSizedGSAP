import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Link } from "react-router-dom";
import { useRef } from "react";

// Note: SplitText is a premium plugin
// This is a simulation - in real implementation you would register the plugin
// gsap.registerPlugin(SplitText);

const GsapSplitText = () => {
  const textRef = useRef(null);
  const paragraphRef = useRef(null);

  useGSAP(() => {
    // Since SplitText is premium, we'll manually split the text

    // Split the heading text
    const headingText = textRef.current.innerText;
    textRef.current.innerHTML = "";

    // Split by characters
    const chars = headingText.split("");
    chars.forEach((char) => {
      const span = document.createElement("span");
      span.textContent = char === " " ? "\u00A0" : char;
      span.className = "char";
      textRef.current.appendChild(span);
    });

    // Animate the heading characters
    gsap.from(".char", {
      opacity: 0,
      y: 20,
      rotateX: -90,
      stagger: 0.05,
      duration: 0.8,
      ease: "back.out",
      delay: 0.2,
    });

    // Split paragraph text into words
    const paragraphText = paragraphRef.current.innerText;
    paragraphRef.current.innerHTML = "";

    // Split by words
    const words = paragraphText.split(" ");
    words.forEach((word) => {
      const span = document.createElement("span");
      span.textContent = word;
      span.className = "word";
      paragraphRef.current.appendChild(span);

      // Add space after each word except the last one
      if (word !== words[words.length - 1]) {
        paragraphRef.current.appendChild(document.createTextNode(" "));
      }
    });

    // Animate the paragraph words
    gsap.from(".word", {
      opacity: 0,
      y: 10,
      stagger: 0.02,
      duration: 0.5,
      ease: "power2.out",
      delay: 1,
    });

    // Create reveal button animation
    gsap.from(".reveal-btn", {
      scale: 0,
      duration: 0.5,
      ease: "back.out(1.7)",
      delay: 1.5,
    });
  }, []);

  const animateAgain = () => {
    // Reset and replay the animations
    gsap.to(".char", {
      opacity: 0,
      y: 20,
      rotateX: -90,
      duration: 0.4,
      stagger: 0.02,
      onComplete: () => {
        gsap.from(".char", {
          opacity: 0,
          y: 20,
          rotateX: -90,
          stagger: 0.05,
          duration: 0.8,
          ease: "back.out",
        });
      },
    });

    gsap.to(".word", {
      opacity: 0,
      y: 10,
      duration: 0.3,
      stagger: 0.01,
      onComplete: () => {
        gsap.from(".word", {
          opacity: 0,
          y: 10,
          stagger: 0.02,
          duration: 0.5,
          ease: "power2.out",
          delay: 0.8,
        });
      },
    });
  };

  return (
    <main>
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

      <h1 ref={textRef}>GSAP SplitText</h1>

      <p className="mt-5 text-gray-400" ref={paragraphRef}>
        SplitText is a premium GSAP plugin that breaks text apart by words,
        characters, and lines for easier animation. It's great for creating
        eye-catching text reveal animations, creative typography effects, and
        more engaging content. The plugin handles all the complexity of
        splitting text while maintaining proper positioning and layout.
      </p>

      <p className="mt-5 text-gray-400">
        <strong className="text-green-500">Note:</strong> SplitText is a premium
        plugin that requires a GSAP Club membership. The demo above simulates
        the effect with custom JavaScript DOM manipulation.
      </p>

      <p className="mt-5 text-gray-400">
        Read more about the{" "}
        <a
          href="https://greensock.com/docs/v3/Plugins/SplitText"
          target="_blank"
          rel="noreferrer noopener nofollow"
        >
          SplitText Plugin
        </a>
        .
      </p>

      <div className="mt-10 flex justify-center">
        <button onClick={animateAgain} className="reveal-btn">
          Replay Animation
        </button>
      </div>

      <div className="mt-10 p-6 rounded-lg bg-red-900/20 border border-red-500/30">
        <h3 className="text-lg font-semibold text-red-400">Important Note</h3>
        <p className="text-gray-300">
          SplitText is a premium plugin that requires a GSAP Club GreenSock
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

      <style jsx="true">{`
        .char {
          display: inline-block;
          transform-origin: center bottom;
        }

        .word {
          display: inline-block;
        }
      `}</style>
    </main>
  );
};

export default GsapSplitText;
