import styles from "./buttonGeneral.module.scss";
import { ReactNode } from "react";
type ButtonProps = {
  onClick: () => void;
  children: ReactNode;
};

export default function ButtonGeneral({ children, onClick }: ButtonProps) {
  return (
    <>
      <button onClick={onClick} className={styles.btn}>
        {children}
      </button>
    </>
  );
}
