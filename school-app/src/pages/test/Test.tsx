import Tests from "../../components/tests/Tests";
import styles from "./test.module.scss";
export default function Test() {
  return (
    <>
      <div className={styles.test__page}>
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
