import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-zinc-950 flex flex-col items-center justify-center px-4">
      <h1 className="text-5xl font-bold text-white mb-4">
        Welcome to ByteSizedGSAP
      </h1>
      <p className="text-gray-300 text-xl mb-8 text-center max-w-md">
        Discover a collection of GSAP animation examples to elevate your web
        projects.
      </p>
      <Link
        to="/examples"
        className="bg-green-500 hover:bg-green-600 text-black px-8 py-3 rounded-lg font-medium transition-all"
      >
        Explore Examples
      </Link>
    </div>
  );
};

export default LandingPage;
