import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Link } from "react-router-dom";

const GsapTo = () => {
  useGSAP(() => {
    gsap.to("#blue-box-1", {
      x: 250,
      repeat: -1,
      duration: 1,
    });
    gsap.to("#blue-box-2", {
      x: 250,
      repeat: -1,
      duration: 1,
      yoyo: true,
    });
    gsap.to("#blue-box-3", {
      x: 250,
      repeat: -1,
      duration: 1,
      yoyo: true,
      rotation: 360,
    });
    gsap.to("#blue-box-4", {
      x: 250,
      repeat: -1,
      duration: 5,
      yoyo: true,
    });
    gsap.to("#blue-box-5", {
      x: 250,
      repeat: -1,
      duration: 1,
      yoyo: true,
      ease: "elastic",
    });
    gsap.to("#blue-box-6", {
      x: 250,
      repeat: -1,
      duration: 1,
      yoyo: true,
      ease: "power4",
    });
    gsap.to("#blue-box-7", {
      x: 250,
      repeat: -1,
      duration: 1,
      yoyo: true,
      ease: "bounce",
    });
  }, []);
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

      <h1>GsapTo</h1>

      <p className="mt-5 text-gray-500">
        The <code>gsap.to()</code> method is used to animate elements from their
        current state to a new state.
      </p>
      <p className="mt-5 text-gray-500">
        The <code>gsap.to()</code> method is similar to the{" "}
        <code>gsap.from()</code> method, but the difference is that the{" "}
        <code>gsap.to()</code> method animates elements from their current state
        to a new state, while the <code>gsap.from()</code> method animates
        elements from a new state to their current state.
      </p>

      <p className="mt-5 text-gray-500">
        Read more about the{" "}
        <a
          href="https://greensock.com/docs/v3/GSAP/gsap.to()"
          target="_blank"
          rel="noreferrer noopener nofollow"
        >
          gsap.to()
        </a>{" "}
        method.
      </p>

      <div className="mt-20">
        <h2>Repeat: -1</h2>
        <div id="blue-box-1" className="w-20 h-20 bg-blue-500 rounded-lg" />
      </div>
      <div className="mt-20">
        <h2>Yoyo: true</h2>
        <div id="blue-box-2" className="w-20 h-20 bg-blue-500 rounded-lg" />
      </div>
      <div className="mt-20">
        <h2>Rotation: 360</h2>
        <div id="blue-box-3" className="w-20 h-20 bg-blue-500 rounded-lg" />
      </div>
      <div className="mt-20">
        <h2>Duration: 5</h2>
        <div id="blue-box-4" className="w-20 h-20 bg-blue-500 rounded-lg" />
      </div>
      <div className="mt-20">
        <h2>Ease: elastic</h2>
        <div id="blue-box-5" className="w-20 h-20 bg-blue-500 rounded-lg" />
      </div>
      <div className="mt-20">
        <h2>Ease: power 4</h2>
        <div id="blue-box-6" className="w-20 h-20 bg-blue-500 rounded-lg" />
      </div>
      <div className="mt-20">
        <h2>Ease: bounce</h2>
        <div id="blue-box-7" className="w-20 h-20 bg-blue-500 rounded-lg" />
      </div>
    </main>
  );
};

export default GsapTo;
