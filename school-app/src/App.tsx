import "./scss/App.scss";

import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Rules from "./pages/rules/Rules";
import Olimpiad from "./pages/olimpiad/Olimpiad";
import Exam from "./pages/exam/Exam";
import Footer from "./components/footer/Footer";

const Materials = lazy(() => import("./pages/materials/Materials"));
const Test = lazy(() => import("./pages/test/Test"));

const App: React.FC = () => {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/test"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Test />
            </Suspense>
          }
        />
        <Route
          path="/materials"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Materials />
            </Suspense>
          }
        />
        <Route path="/olympiads" element={<Olimpiad />} />
        <Route path="/exam" element={<Exam />} />
        <Route path="/rules/*" element={<Rules />} />
      </Routes>
      <Footer></Footer>
    </>
  );
};

export default App;
