import styles from "./tests.module.scss";
import { useAppSelector, useAppDispatch } from "../../hooks";
import {
  setIsOpen,
  setCurrentTest,
  setIndex,
  setLock,
  setResult,
  setScore,
} from "../../features/tests/testsSlice";
import PopupTest from "../UI/popup/PopupTest";
import { useEffect } from "react";

export default function Tests() {
  const { isOpen, testData } = useAppSelector((state) => state.tests);
  const dispatch = useAppDispatch();
  const bodyElement = document.body;
  useEffect(() => {
    if (isOpen) {
      bodyElement.classList.add("lock");
    } else if (!isOpen) {
      bodyElement.classList.remove("lock");
    }
  }, [isOpen]);
  return (
    <>
      <div className={styles.tests}>
        <div className={styles.tests__container}>
          <div className={styles.tests__body}>
            {testData.map((test) => {
              return (
                <div
                  key={test.id}
                  className={styles.tests__item}
                  onClick={() => {
                    dispatch(setCurrentTest(test));
                    dispatch(setIsOpen(true));
                    dispatch(setIndex(0));
                    dispatch(setLock(false));
                    dispatch(setResult(false));
                    dispatch(setScore(() => 0));
                  }}
                >
                  <div className={styles.item__info}>{test.description}</div>
                  <h3 className={styles.item__title}>{test.title}</h3>
                  <span className={styles.item__icon}>&#9755;</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <PopupTest></PopupTest>
    </>
  );
}
