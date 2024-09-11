import styles from "./popupTest.module.scss";
import { useRef, useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../../hooks";
import {
  setIsOpen,
  setLock,
  setScore,
  setIndex,
  setResult,
} from "../../../features/tests/testsSlice";
import { createPortal } from "react-dom";
import ButtonGeneral from "../buttonGeneral/ButtonGeneral";
import Cross from "../../../assets/cross.svg";
export default function PopupTest() {
  const { isOpen, index, currentTest, lock, score, result } = useAppSelector(
    (state) => state.tests
  );
  const quizData = currentTest.quiz;
  const dispatch = useAppDispatch();

  const getElement = document.getElementById("modal") as HTMLElement;
  const answerRefs = useRef<Array<HTMLElement | null>>([]);
  useEffect(() => {
    answerRefs.current = answerRefs.current.slice(
      0,
      quizData?.[index].answers.length
    );
  }, [index, quizData]);
  const checkAnswer = (
    event: React.MouseEvent<HTMLElement>,
    correctAnswer: string
  ): void => {
    const target = event.target as HTMLElement;
    const selectedAnswer = target.textContent;
    if (!lock) {
      if (selectedAnswer === correctAnswer) {
        target.classList.add(`${styles.correct}`);
        dispatch(setScore((prev) => prev + 1));
      } else {
        target.classList.add(`${styles.incorrect}`);
        const correctAnswerIndex =
          quizData[index].answers.indexOf(correctAnswer);
        if (
          correctAnswerIndex !== -1 &&
          answerRefs.current[correctAnswerIndex]
        ) {
          answerRefs.current[correctAnswerIndex]!.classList.add(
            `${styles.correct}`
          );
        }
      }
      dispatch(setLock(true));
    }
  };

  const goToNextQuestion = () => {
    if (lock) {
      if (index < quizData.length - 1) {
        dispatch(setIndex(index + 1));
        dispatch(setLock(false));
        answerRefs.current.forEach((answer) => {
          answer?.classList.remove(`${styles.incorrect}`);
          answer?.classList.remove(`${styles.correct}`);
        });
      } else {
        //   dispatch(setIsOpen(false));
        dispatch(setLock(false));
        setTimeout(() => {
          dispatch(setIndex(0));
        }, 1000);
      }
      if (index === quizData.length - 1) {
        dispatch(setResult(true));
        return 0;
      }
    }
  };
  const handleReset = () => {
    dispatch(setIndex(0));
    dispatch(setLock(false));
    dispatch(setResult(false));
    dispatch(setScore(() => 0));
  };
  return createPortal(
    <div className={`${styles.popup} ${isOpen ? styles.open : ""}`}>
      <div className={styles.popup__body}>
        <div className={styles.popup__content}>
          <div
            className={styles.popup__close}
            onClick={() => {
              dispatch(setIsOpen(false));
              goToNextQuestion();
            }}
          >
            <img src={Cross} alt="cross" />
          </div>
          <div className={styles.popup__title}>{currentTest.title}</div>
          <>
            {result ? (
              <>
                <div className={styles.popup__result}>
                  <div className={styles.popup__score}>
                    Your Score: {score} out of {quizData.length} questions
                  </div>
                  <ButtonGeneral onClick={handleReset}>Try Again</ButtonGeneral>
                </div>
              </>
            ) : (
              <>
                <div className={styles.popup__question}>
                  {index + 1}. {quizData[index].question}
                </div>
                <ul className={styles.popup__list}>
                  {quizData[index].answers.map((item, idx) => {
                    return (
                      <li
                        ref={(el) => (answerRefs.current[idx] = el)}
                        onClick={(event) =>
                          checkAnswer(event, quizData[index].answerR)
                        }
                        key={item}
                        className={styles.popup__item}
                      >
                        {item}
                      </li>
                    );
                  })}
                </ul>
                <ButtonGeneral onClick={goToNextQuestion}>
                  {index === quizData.length - 1 && lock ? "Finish" : "Next"}
                </ButtonGeneral>
                <div className={styles.popup__bottom}>
                  {index + 1} of {quizData.length} questions
                </div>
              </>
            )}
          </>
        </div>
      </div>
    </div>,
    getElement as HTMLElement
  );
}
