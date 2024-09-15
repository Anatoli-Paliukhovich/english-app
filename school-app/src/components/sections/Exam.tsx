import { Link } from "react-router-dom";
import styles from "./sections.module.scss";
import Exam from "../../assets/exam/exam.png";
import { useRepeatAnimation } from "../../hooks";
export default function Examination() {
  const [animItemRepeatRef, activeRepeat] = useRepeatAnimation();
  return (
    <section id="examination" className={styles.section}>
      <div className={styles.section__container}>
        <div className={styles.section__body}>
          <div className={styles.section__content}>
            <h2 className={`{styles.section__title} _title`}>
              English <span className="_title-decor"> Exam</span> Prep{" "}
              <span className="_title-decor"> Zone</span>
            </h2>
            <div
              ref={animItemRepeatRef}
              className={`${styles.section__text} ${
                activeRepeat ? styles.active : ""
              }`}
            >
              Prepare for your English exam with our comprehensive selection of
              practice tests and study materials.
            </div>
            <Link to={"/exam"} className="btn">
              Go to the page
            </Link>
          </div>
          <div
            ref={animItemRepeatRef}
            className={`${styles.section__image} ${
              styles.section__image_right
            } ${activeRepeat ? styles.active : ""}`}
          >
            <img
              src={Exam}
              className={styles.section__image_hover}
              alt="exam"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
