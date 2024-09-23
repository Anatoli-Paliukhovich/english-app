import Tests from "../../components/tests/Tests";
import styles from "./test.module.scss";
import { useEffect, useRef } from "react";
import { useAppSelector } from "../../hooks";
export default function Test() {
  const bodyRef = useRef<HTMLDivElement>(null);
  const { isOpen } = useAppSelector((state) => state.tests);

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.className = isOpen
        ? `${styles.test__page} ${styles._rightPadding}`
        : styles.test__page;
    }
  }, [isOpen]);

  return (
    <>
      <div ref={bodyRef}>
        <div className={styles.test__container}>
          <h2 className="_title">
            Grammar <span className="_title-decor">Quiz Zone</span>: Test Your
            <span className="_title-decor"> English Skills</span> Here!
          </h2>
          <Tests></Tests>
        </div>
      </div>
    </>
  );
}
