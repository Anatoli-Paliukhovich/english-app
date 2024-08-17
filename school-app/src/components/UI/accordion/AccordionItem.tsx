import styles from "./accordion.module.scss";
type AccordionItemProps = {
  onToggle: () => void;
  title: string;
  description: string;
  id: number;
  active: boolean;
};
export default function AccordionItem({
  onToggle,
  title,
  description,
  id,
  active,
}: AccordionItemProps) {
  return (
    <>
      <li
        className={`${styles.accordion__item} ${active ? styles.active : ""}`}
      >
        <div className={styles.accordion__qst} onClick={onToggle}>
          {title}
          <span className={styles.accordion__control}></span>
        </div>
        <div
          className={`${styles.accordion__ans} ${active ? styles.open : ""}`}
        >
          <div className={styles.accordion__ans_text}>{description}</div>
        </div>
      </li>
    </>
  );
}
