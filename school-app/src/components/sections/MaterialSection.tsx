import styles from "./sections.module.scss";
import Material from "../../assets/sections/books.jpg";
import { Link } from "react-router-dom";
export default function RuleSection() {
  return (
    <>
      <section id="materials" className={styles.section}>
        <div className={styles.section__container}>
          <h2 className={`{styles.section__title} _title`}>
            <span className="_title-decor">Insightful</span> Resource
            <span className="_title-decor"> Collection</span>
          </h2>
          <div className={styles.section__body}>
            <div className={styles.section__content}>
              <div className={`{styles.section__text} _text`}>
                Access a wide range of educational materials and resources
                designed to enhance your understanding and expertise. Explore
                topics that matter to you.
              </div>
              <Link to={"/materials"} className="btn">
                Go to the page
              </Link>
            </div>
            <div className={styles.section__image}>
              <img
                src={Material}
                className={styles.section__image_hover}
                alt="collage"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
