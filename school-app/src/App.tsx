import "./scss/App.scss";
import { Routes, Route, Link } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Hero from "./components/hero/Hero";
import About from "./pages/home/about/About";
import Test from "./pages/test/Test";
import Rules from "./pages/rules/Rules";
import Materials from "./pages/materials/Materials";
import Olimpiad from "./pages/olimpiad/Olimpiad";
function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Test />} />
        <Route path="/materials" element={<Materials />} />
        <Route path="/olympiads" element={<Olimpiad />} />
        <Route path="/rules/*" element={<Rules />} />
      </Routes>
    </>
  );
}

export default App;
