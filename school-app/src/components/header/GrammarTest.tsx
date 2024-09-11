import styles from "./header.module.scss";
import Test from "../../assets/test.svg";
import { Link } from "react-router-dom";

export default function GrammarTest() {

  return (
    <Link to="/test" className={`${styles.icon} ${styles.header__item}`}>
      <div className={`${styles.icon__text} ${styles.stretch_line}`}>
        Grammar tests
      </div>
      <div className={styles.icon__img}>
        <img src={Test} alt="test" />
      </div>
    </Link>
  );
}
