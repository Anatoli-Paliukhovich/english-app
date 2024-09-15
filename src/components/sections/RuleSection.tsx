import styles from "./sections.module.scss";
import Grammar from "../../assets/sections/grammar.jpg";
import { Link } from "react-router-dom";
import { useRepeatAnimation } from "../../hooks";

export default function RuleSection() {
  const [animItemRepeatRef, activeRepeat] = useRepeatAnimation();
  return (
    <>
      <section id="rules" className={styles.section}>
        <div className={styles.section__container}>
          <h2 className={`{styles.section__title} _title`}>
            Essential <span className="_title-decor">English</span> Grammar{" "}
            <span className="_title-decor">Rules</span>
          </h2>
          <div className={styles.section__body}>
            <div
              ref={animItemRepeatRef}
              className={`${styles.section__image} ${
                activeRepeat ? styles.active : ""
              }`}
            >
              <img
                src={Grammar}
                className={styles.section__image_hover}
                alt="books"
              />
            </div>
            <div className={styles.section__content}>
              <div
                ref={animItemRepeatRef}
                className={`${styles.section__text} ${
                  activeRepeat ? styles.active : ""
                }`}
              >
                Our page provides clear and understandable grammar rules,
                helping you improve your language proficiency. Learn and apply
                the rules with ease thanks to our user-friendly guide.
              </div>
              <Link to={"/rules"} className="btn">
                Go to the page
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
