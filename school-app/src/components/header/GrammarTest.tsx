import styles from "./header.module.scss";
import Test from "../../assets/test.svg";
import { Link } from "react-router-dom";
import { MouseEventHandler } from "react";

type Props = {
  onClick: MouseEventHandler;
};
export const GrammarTest: React.FC<Props> = ({ onClick }) => {
  return (
    <Link
      to="/test"
      className={`${styles.icon} ${styles.header__item}`}
      onClick={onClick}
    >
      <div className={`${styles.icon__text} ${styles.stretch_line}`}>
        Grammar tests
      </div>
      <div className={styles.icon__img}>
        <img src={Test} alt="test" />
      </div>
    </Link>
  );
};
