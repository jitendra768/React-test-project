// Code Splitting is a technique used in modern web development to
// optimize the loading performance of applications. By splitting the code into
// smaller bundles, you can reduce the initial load time of your application.

// Using React.lazy: This allows you to load a component lazily.
// Using Suspense: This wraps your lazy-loaded components and provides
// a fallback UI (like a loading spinner) while the component is being loaded.

import React, { lazy, Suspense } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

// lazily load the components
const Home = lazy(() => import("./Home"));
const About = lazy(() => import("./About"));

const Spliting = () => {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <Link to={"/"}>Home</Link>
          <Link to={"/about"}>About</Link>
        </nav>
        <Suspense fallback={<div>Loading....</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Suspense>
      </div>
    </BrowserRouter>
  );
};

export default Spliting;
