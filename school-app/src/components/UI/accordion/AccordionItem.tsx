import styles from "./accordion.module.scss";

type AccordionItemProps = {
  onToggle: () => void;
  url: string;
  title: string;
  description: string;
  id: number;
  active: boolean;
  paragraf1: string;
  paragraf2: string;
  paragraf3: string;
  paragraf4: string;
  paragraf5: string;
};
export default function AccordionItem({
  onToggle,
  url,
  title,
  description,
  id,
  active,
  paragraf1,
  paragraf2,
  paragraf3,
  paragraf4,
  paragraf5,
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
          <div className={styles.p1}>{paragraf1}</div>
          <div className={styles.p2}>{paragraf2}</div>
          <div className={styles.p3}>{paragraf3}</div>
          <div className={styles.p4}>{paragraf4}</div>
          <div className={styles.p5}>{paragraf5}</div>
        </div>
      </li>
    </>
  );
}
