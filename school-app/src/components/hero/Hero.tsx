import styles from "./hero.module.scss";
import Video from "../../assets/video.mp4";
import Button from "../UI/button/Button";
import { Link } from "react-router-dom";
export default function Hero() {
  return (
    <>
      <section className={`${styles.main__hero}`}>
        <div className={styles.hero__box}>
          <div className={styles.hero__body}>
            <div className={styles.hero__content}>
              <h1 className={styles.hero__title}>
                <span className={styles.title_dec}>Learn</span> English with
                ease and confidence!
              </h1>
              <blockquote className={styles.hero__text}>
                "Those who know nothing of foreign languages know nothing of
                their own."
                <cite>— Johann Wolfgang von Goethe</cite>
              </blockquote>
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
}
