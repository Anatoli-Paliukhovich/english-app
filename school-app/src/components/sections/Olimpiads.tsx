import { Link } from "react-router-dom";
import styles from "./sections.module.scss";
import Olympiad from "../../assets/olimpiads/olimpiads.png";
export default function Olimpiads() {
  return (
    <section id="olympiads" className={styles.section}>
      <div className={styles.section__container}>
        <h2 className={`{styles.section__title} _title`}>
          English <span className="_title-decor">Olympiad</span> Challenges
        </h2>
        <div className={styles.section__body}>
          <div className={styles.section__image}>
            <img
              src={Olympiad}
              className={styles.section__image_hover}
              alt="books"
            />
          </div>
          <div className={styles.section__content}>
            <div className={`{styles.section__text} _text`}>
              This page offers a selection of Olympiad-style exercises to help
              you practice and improve your English proficiency.
            </div>
            <Link to={"/olympiads"} className="btn">
              Go to the page
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
