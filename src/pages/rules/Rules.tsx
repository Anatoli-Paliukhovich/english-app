import Accordion from "../../components/UI/accordion/Accordion";
import styles from "./rules.module.scss";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
export default function Rules() {
  const pathname = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div className={styles.rules}>
      <div className={styles.rules__container}>
        <h2 className="_title">
          Essential <span className="_title-decor"> English</span> Grammar{" "}
          <span className="_title-decor">Rules</span> : Your Comprehensive{" "}
          <span className="_title-decor">Guide</span>{" "}
        </h2>
        <Accordion></Accordion>
      </div>
    </div>
  );
}
