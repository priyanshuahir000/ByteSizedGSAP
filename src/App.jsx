import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import {
  GsapFrom,
  GsapFromTo,
  GsapScrollTrigger,
  GsapStagger,
  GsapText,
  GsapTimeline,
  GsapTo,
  Home,
  LandingPage,
  GsapFlip,
  GsapMorphSVG,
  GsapDrawSVG,
  GsapSplitText,
  GsapScroller,
  GsapParallax,
  GsapMotionPath,
  Gsap3DEffects,
  GsapReveal,
  GsapInteractivity,
} from "./pages";

const App = () => {
  return (
    <div className="bg-black min-h-screen w-full">
      <Router>
        <Routes>
          <Route path="/gsapto" element={<GsapTo />} />
          <Route path="/gsapfrom" element={<GsapFrom />} />
          <Route path="/gsapfromto" element={<GsapFromTo />} />
          <Route path="/gsaptimeline" element={<GsapTimeline />} />
          <Route path="/gsapstagger" element={<GsapStagger />} />
          <Route path="/gsapscrolltrigger" element={<GsapScrollTrigger />} />
          <Route path="/gsaptext" element={<GsapText />} />
          <Route path="/gsapflip" element={<GsapFlip />} />
          <Route path="/gsapmorphsvg" element={<GsapMorphSVG />} />
          <Route path="/gsapdrawsvg" element={<GsapDrawSVG />} />
          <Route path="/gsapsplittext" element={<GsapSplitText />} />
          <Route path="/gsapscroller" element={<GsapScroller />} />
          <Route path="/gsapparallax" element={<GsapParallax />} />
          <Route path="/gsapmotionpath" element={<GsapMotionPath />} />
          <Route path="/gsap3deffects" element={<Gsap3DEffects />} />
          <Route path="/gsapreveal" element={<GsapReveal />} />
          <Route path="/gsapinteractivity" element={<GsapInteractivity />} />
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
