import styles from "./tests.module.scss";
import { useAppSelector, useAppDispatch } from "../../hooks";
import Search from "../UI/search/Search";
import {
  setIsOpen,
  setCurrentTest,
  setIndex,
  setLock,
  setResult,
  setScore,
} from "../../features/tests/testsSlice";
import PopupTest from "../UI/popup/PopupTest";
import { useEffect, useRef } from "react";

export default function Tests() {
  const { isOpen, testData } = useAppSelector((state) => state.tests);
  const { searchQuery, value } = useAppSelector((state) => state.search);
  const dispatch = useAppDispatch();
  const inputRef = useRef<HTMLInputElement>(null);
  const filteredData = testData.filter((test) => {
    return (
      test.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      test.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });
  useEffect(() => {
    inputRef.current?.focus();
  }, [value, searchQuery]);
  useEffect(() => {
    const bodyElement = document.body;
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
          <Search ref={inputRef}></Search>
          <div className={styles.tests__body}>
            {filteredData.map((test) => {
              return (
                <div
                  key={test.id}
                  className={styles.tests__item}
                  onClick={() => {
                    dispatch(setCurrentTest(test));
                    dispatch(setIsOpen(true));
                    dispatch(setIndex(0));
                    dispatch(setLock(false));
                    dispatch(setScore(() => 0));
                    dispatch(setResult(false));
                  }}
                >
                  <div className={styles.item__info}>{test.description}</div>
                  <h3 className={styles.item__title}>{test.title}</h3>
                  <span className={styles.item__icon}>&#9755;</span>
                  <img
                    src={test.url}
                    alt={test.title}
                    className={styles.item__img}
                  />
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
