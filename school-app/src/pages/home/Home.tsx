import "../../scss/App.scss";
import styles from "./home.module.scss";
import Hero from "../../components/hero/Hero";
import About from "./about/About";
import RuleSection from "../../components/sections/RuleSection";
import MaterialSection from "../../components/sections/MaterialSection";
import Olimpiads from "../../components/sections/Olimpiads";

export default function Home() {
  return (
    <section className={styles.main}>
      <div className={styles.main__container}>
        <Hero></Hero>
        <About></About>
        <RuleSection></RuleSection>
        <MaterialSection></MaterialSection>
        <Olimpiads></Olimpiads>
      </div>
    </section>
  );
}
