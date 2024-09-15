import styles from "./exam.module.scss";

export default function Exam() {
  return (
    <>
      <div className={styles.exam}>
        <div className={styles.exam__container}>
          <h2 className={`{styles.section__title} _title`}>
            English <span className="_title-decor"> Exam</span> Prep{" "}
            <span className="_title-decor"> Zone</span>
          </h2>
        </div>
      </div>
    </>
  );
}
