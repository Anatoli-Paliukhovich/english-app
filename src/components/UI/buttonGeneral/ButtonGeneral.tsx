import { useAppSelector } from "../../../hooks";
import styles from "./buttonGeneral.module.scss";
import { ReactNode } from "react";
type ButtonProps = {
  onClick: () => void;
  children: ReactNode;
};

export default function ButtonGeneral({ children, onClick }: ButtonProps) {
  const { lock, result } = useAppSelector((state) => state.tests);

  return (
    <>
      <button
        onClick={onClick}
        className={`${lock || result ? styles.btn : styles.btn_dsl}`}
      >
        {children}
      </button>
    </>
  );
}
