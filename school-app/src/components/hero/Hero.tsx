import styles from "./hero.module.scss";
import Video from "../../assets/video.mp4";
import Button from "../UI/button/Button";
import { Link } from "react-router-dom";
import { useAnimation, useRepeatAnimation } from "../../hooks";

const Hero = () => {
  const [animItemRef, active] = useAnimation();
  const [animItemRepeatRef, activeRepeat] = useRepeatAnimation();
  return (
    <>
      <section className={`${styles.main__hero}`}>
        <div className={styles.hero__box}>
          <div className={styles.hero__body}>
            <div className={styles.hero__content}>
              <h1
                ref={animItemRef}
                className={`${styles.hero__title} ${
                  active ? styles.active : ""
                }`}
              >
                <span className={styles.title_dec}>Learn</span> English with
                ease and confidence!
              </h1>
              <div
                ref={animItemRepeatRef}
                className={`${styles.hero__text} ${
                  activeRepeat ? styles.active : ""
                }`}
              >
                "Those who know nothing of foreign languages know nothing of
                their own."
                <cite>— Johann Wolfgang von Goethe</cite>
              </div>
              <Link to="/test">
                <Button>Tests</Button>
              </Link>
            </div>
          </div>
          <video
            autoPlay
            muted
            loop
            preload="auto"
            className={styles.hero__video}
          >
            <source type="video/mp4" src={Video} />
          </video>
        </div>
      </section>
    </>
  );
};

export default Hero;
