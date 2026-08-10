import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import IntroAnimation from "./components/IntroAnimation";
import Home from "./pages/Home";

function App() {
  const [introFinished, setIntroFinished] = useState(() =>{
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
        </Routes>
      )}
    </>
  );
}

export default App;