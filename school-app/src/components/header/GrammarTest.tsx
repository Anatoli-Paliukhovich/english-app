import styles from "./header.module.scss";
import Test from "../../assets/test.png";

export default function GrammarTest() {
  return (
    <a
      href="./menu_page/second_page.html"
      className={`${styles.icon} ${styles.header__item}`}
    >
      <div className={`${styles.icon__text} ${styles.stretch_line}`}>
        Grammar tests
      </div>
      <div className={styles.icon__img}>
        <img src={Test} alt="test" />
      </div>
    </a>
  );
}
