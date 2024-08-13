import "../../scss/App.scss";
import Hero from "../../components/hero/Hero";
import About from "./about/About";
export default function Home() {
  return (
    <section className="main">
      <Hero></Hero>
      <About></About>
    </section>
  );
}
