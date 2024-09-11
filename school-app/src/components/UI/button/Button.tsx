import { PropsWithChildren } from "react";
import Test from "../../../assets/test.svg";
import styles from "./button.module.scss";
type ButtonProps = PropsWithChildren<{}>;

export default function Button({ children }: ButtonProps) {
  return (
    <>
      <a href="#" className={styles.btn}>
        {children}
        <span className={styles.btn__highlight}></span>
        <img src={Test} alt="tests" />
      </a>
    </>
  );
}
