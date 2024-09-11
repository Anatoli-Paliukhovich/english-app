import styles from "./header.module.scss";
import { Link } from "react-router-dom";
import Home from "../../assets/home.svg";

export default function GrammarTest() {
  return (
    <Link to="/" className={`${styles.icon} ${styles.header__item}`}>
      <div className={`${styles.icon__text} ${styles.stretch_line}`}>Home</div>
      <div className={styles.icon__img}>
        <img src={Home} alt="test" />
      </div>
    </Link>
  );
}
