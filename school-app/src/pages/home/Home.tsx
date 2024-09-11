import "../../scss/App.scss";
import Hero from "../../components/hero/Hero";
import About from "./about/About";
import RuleSection from "../../components/sections/RuleSection";
import MaterialSection from "../../components/sections/MaterialSection";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="main">
      <Hero></Hero>
      <About></About>
      <RuleSection></RuleSection>
      <MaterialSection></MaterialSection>
    </section>
  );
}
