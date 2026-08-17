import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import IntroAnimation from "./components/IntroAnimation";
import Home from "./pages/Home";
import FanVerse from "./pages/FanVerse"
import Artwork from "./pages/ArtWork";
import Dance from "./pages/Dance";
import Music from "./pages/Music";
import Videos from "./pages/Videos";
import Stories from "./pages/Stories";
import Photography from "./pages/Photography";

function App() {
  const [introFinished, setIntroFinished] = useState(() => {
    return sessionStorage.getItem("davidoverse-intro") === "true";
  });

  return (
    <>
      {!introFinished && (
        <IntroAnimation
          onComplete={() => setIntroFinished(true)}
        />
      )}

      {introFinished && (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fanverse" element={<FanVerse />} />
          <Route path="/artwork" element={<Artwork />} />
          <Route path="/dance" element={<Dance />} />
          <Route path="/music" element={<Music />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/stories" element={<Stories />} />
          <Route path="/photography" element={<Photography />} />
        </Routes>
      )}
    </>
  );
}

export default App;