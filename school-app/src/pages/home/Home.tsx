import "../../scss/App.scss";
import Hero from "../../components/hero/Hero";
import About from "./about/About";
import Rules from "../rules/Rules";
import Tests from "../../components/tests/Tests";

export default function Home() {
  return (
    <section className="main">
      <Hero></Hero>
      <About></About>
      <Rules></Rules>
      <Tests></Tests>
    </section>
  );
}
