import styles from "./header.module.scss";
import { Link } from "react-router-dom";
import Home from "../../assets/home.svg";
import { MouseEventHandler } from "react";

type Props = {
  onClick: MouseEventHandler;
};
export const BackToHome: React.FC<Props> = ({ onClick }) => {
  return (
    <Link
      to="/"
      className={`${styles.icon} ${styles.header__item}`}
      onClick={onClick}
    >
      <div className={`${styles.icon__text} ${styles.stretch_line}`}>Home</div>
      <div className={styles.icon__img}>
        <img src={Home} alt="test" />
      </div>
    </Link>
  );
};
