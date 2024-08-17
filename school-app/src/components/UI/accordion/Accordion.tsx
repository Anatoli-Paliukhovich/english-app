import styles from "./accordion.module.scss";
import AccordionItem from "./AccordionItem";
import { useAppSelector, useAppDispatch } from "../../../hooks";
import { setChosen } from "../../../features/accordion/accordionSlice";
export default function Accordion() {
  const { data, isChosen } = useAppSelector((state) => state.accordion);
  const dispatch = useAppDispatch();

  const handleToggle = (index: string): void => {
    dispatch(setChosen(index));
  };
  return (
    <>
      <h2 className="_title">Here your can find rules to learn</h2>
      <div className={styles.accordion__body}>
        {data.map((item, index) => {
          return (
            <AccordionItem
              onToggle={() => handleToggle(index.toString())}
              key={item.id}
              active={isChosen === index.toString()}
              {...item}
            ></AccordionItem>
          );
        })}
      </div>
    </>
  );
}
